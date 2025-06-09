 import Page from "./page";


 
class SquadventasDigitalTitanium extends Page{
    validate(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    get titleTitanium() {
        return $('//android.widget.TextView[@text="Tarjeta TITANIUM"]'); 
        //android.widget.TextView[@text="Tarjeta TITANIUM"]
    }



async validateTitle(option:string): Promise<void> {
    // await this.titleTitanium
    // await this.waitForElementVisible(await this.titleTitanium,50000);
    const TitleOption = await $(`android=new UiSelector().textContains("${option}")`);
    console.log("Link Open Sucessfully and Title is Displayed",TitleOption);
    // expect (await this.titleTitanium).toBeDisplayed();
  await TitleOption.waitForDisplayed({timeout:50000});
   expect(TitleOption).toBeDisplayed();
}


// async validate(): Promise<void> {
    
// }


}
export default new SquadventasDigitalTitanium()