import Page from "./page";


class BeneficiariosInternacionalesPage extends Page {

    get instruction1BI() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/instruction_txt"]') }
    get instruction2BI() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/instruction_txt2"]') }
    get btnSalirBI() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnVolver"]') }
    get menuicon() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgMenu"]') }
    get Iriniciomenu() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblListHeader" and @text="Ir al inicio"]') }

    get reuirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get requirementecontinuarbtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }



    async validate(): Promise<void> {

    }

    async verifyrequirementerror() {
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 50000 });
        const msg = await (await this.reuirementerrormsg).getText();
        console.log('Verifying Requirement Error : ' + msg)
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 60000 });
        // (await this.requirementecontinuarbtn).click();

    }

    async gotodashboard() {
        (await this.menuicon).waitForDisplayed({ timeout: 60000 });
        (await this.menuicon).click();
        await expect(this.Iriniciomenu).toBeDisplayed();
        (await this.Iriniciomenu).click();
    }

    async validateBeneficiarioInternacionalesScreen() {
        (await this.instruction1BI).waitForDisplayed({ timeout: 40000 });
        await expect(this.instruction1BI).toBeDisplayed();
        await expect(this.instruction2BI).toBeDisplayed();
        await expect(this.btnSalirBI).toBeDisplayed();
    }
}
export default new BeneficiariosInternacionalesPage();