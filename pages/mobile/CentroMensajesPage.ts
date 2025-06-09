import commonsPage from "./commonsPage";
import Page from "./page";

class CentroMensajePage extends Page{

    get centroMensajesTitle(){ return $('//android.widget.TextView[@text="Centro de Mensajes"]')}
    get toggleMenu(){ return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/rel_spinner"]')}
    get toggleOptions(){ return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/title"]')}
    get messageText(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_no_records"]')}


    async validate(): Promise<void> {
        await expect(this.centroMensajesTitle).toBeDisplayed();
        await expect(this.toggleMenu).toBeDisplayed();
    }

    async selectToggleMenu(){
        await (await this.toggleMenu).click();
    }

    async selectOptionFromToggleMenu(selectedOption:string){
        const elementSelect = await commonsPage.createXpath(selectedOption)
        await elementSelect.click()
        
    }

    async validateCentroMensajesScreen(){
        await expect(this.centroMensajesTitle).toBeDisplayed();
        await expect(this.toggleMenu).toBeDisplayed();
    }

    async validateCentroMensajeMessage(message:string){
        const actualMessage = await (await (await this.messageText).getText()).replace(/[\n\r]/g, '');
        await expect(actualMessage).toEqual(message);
    }
}

export default new CentroMensajePage();