const { execSync, exec } = require("child_process");

let readyExecute = {
  binary: false,
  testPackage: false
};
const projectARN =
  "arn:aws:devicefarm:us-west-2:807608485714:project:8741a959-fca8-4848-9fd7-58686ab98cf5";

const uploadResource = (name, type, resourceType) => {
  const result = execSync(
    `aws devicefarm create-upload --project-arn ${projectARN} --name ${name} --type ${type}`
  );
  const parsedResults = JSON.parse(result.toString());
  exec(`curl -T ${name} "${parsedResults.upload.url}"`, (error, stdout, stderr) => {
    if (error) {
      console.log(new Date(), "- RESOURCE UPLOAD FAILED ", error);
      return;
    }
    verifyResource(parsedResults.upload.arn, resourceType)

  });

  return parsedResults;
};
const getResource = (arn, resourceType) => {
  const getUpload = execSync(`aws devicefarm get-upload --arn ${arn}`)
  let results = JSON.parse(getUpload.toString())
  return results.upload;
}
const verifyResource = (arn, type) => {
  let resourcesStatus = getResource(arn).status;
  console.log(new Date(), "- INITIALIZING RESOURCES VERIFICATION...");
  let statusChecker = setInterval(() => {
    if (resourcesStatus === "SUCCEEDED") {
      console.log(new Date(), "- Status: READY");
      readyExecute[type] = true;
      clearInterval(statusChecker);
    }
    else if (resourcesStatus === "FAILED") {
      console.log(new Date(), `- RESOURCE UPLOAD FAILED [${resourcesStatus}]`);
      clearInterval(statusChecker);
      process.exit(1);
    }
    else {
      console.log(new Date(), "- Checking Status...");
      console.log(new Date(), `- Current: NOT READY [${resourcesStatus}]`);
      resourcesStatus = getResource(arn).status
    }
  }, 5000);

}
const uploadAndValidation = () => {
  const arguments = process.argv.slice(2);
  let apkUpload = uploadResource("app_popular_rediseno.apk", "ANDROID_APP", "binary");
  let testPackageUpload = uploadResource(
    "webdriverio.zip",
    "APPIUM_NODE_TEST_PACKAGE",
    "testPackage"
  );
  let scheduler = setInterval(() => {
    if (readyExecute.binary && readyExecute.testPackage) {
      const scheduleRun = execSync(
        `aws devicefarm schedule-run --project-arn ${projectARN} --name "${arguments[0]}" --app-arn ${apkUpload.upload.arn} --device-pool arn:aws:devicefarm:us-west-2:807608485714:devicepool:8741a959-fca8-4848-9fd7-58686ab98cf5/69527d33-f060-4f2b-825a-4621366706dc --test type=APPIUM_NODE,testPackageArn=${testPackageUpload.upload.arn},testSpecArn=arn:aws:devicefarm:us-west-2:807608485714:upload:8741a959-fca8-4848-9fd7-58686ab98cf5/a1faf1f1-f876-48dc-b7ac-afeb9a9b4f33`
      );
      console.log(new Date(), `- EXECUTING RUN...`);
      console.log("")
      console.log(scheduleRun.toString());
      clearInterval(scheduler)
    }
  }, 5000)
};

uploadAndValidation();


