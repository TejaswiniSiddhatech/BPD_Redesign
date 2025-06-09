import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';


class SquadVentasDigitalesGoldTarjetasPage extends Page {



    get solicitartarjetasbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Solicitar tarjeta' or . = 'Solicitar tarjeta') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get solicitartarjetasbtn2() { return $("//*[@class = 'android.widget.Button' and @index = '0' and (@text = 'Ver Más Detalles' or . = 'Ver Más Detalles') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }

    get GoldarjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tarjeta Gold' or . = 'Tarjeta Gold') and @resource-id = 'com.popular.app.android:id/topText']") }
    get Botondepruebogoldbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Botón de prueba content' or . = 'Botón de prueba content') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get descriptiongold1stpage() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Descripción de prueba para la tarjeta Gold.' or . = 'Descripción de prueba para la tarjeta Gold.') and @resource-id = 'com.popular.app.android:id/tvDescriptionGold']") }
    get selectgoldcardtitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona la marca de tu preferencia:' or . = 'Selecciona la marca de tu preferencia:') and @resource-id = 'com.popular.app.android:id/topText']") }
    get selectgoldcardbutton() { return $("//*[@class = 'android.widget.Button' and (@text = 'Texto prueba seleccionar marca' or . = 'Texto prueba seleccionar marca') and @resource-id = 'com.popular.app.android:id/siguienteButton']") }
    get goldmastercard() { return $("//*[@class = 'android.widget.RadioButton' and (@text = 'Tarjeta Mastercard Gold' or . = 'Tarjeta Mastercard Gold') and @resource-id = 'com.popular.app.android:id/radioBtn1']") }
    get goldvisacard() { return $("//*[@class = 'android.widget.RadioButton' and (@text = 'Tarjeta Visa Gold' or . = 'Tarjeta Visa Gold') and @resource-id = 'com.popular.app.android:id/radioBtn2']") }
    get siguentebtn2() { return $("//*[@class = 'android.widget.Button' and (@text = 'Siguiente' or . = 'Siguiente') and @resource-id = 'com.popular.app.android:id/siguienteButton']") }

    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }


    async validate(): Promise<void> {
        await (await this.GoldarjetasTitle).waitForDisplayed({ timeout: 60000 });
        // await (await this.descriptiongold1stpage).waitForDisplayed({ timeout: 6000 });
    }


    async ClickonGoldTarjetasbtn(): Promise<void> {
        await (await this.Botondepruebogoldbtn).waitForDisplayed({ timeout: 6000 });
        await this.Botondepruebogoldbtn.click();
    }

    async selectgoldcard(): Promise<void> {
        await (await this.selectgoldcardtitle).waitForDisplayed({ timeout: 30000 });
        await (await this.goldmastercard).waitForDisplayed({ timeout: 6000 });
        await this.goldmastercard.click();
    }

    async ClickonGoldsiguentebtn(): Promise<void> {
        browser.pause(1000);
        await commonsPage.scrollView();
        // await commonsPage.scrollView1();
        await (await this.selectgoldcardbutton).waitForDisplayed({ timeout: 6000 });
        await this.selectgoldcardbutton.click();
    }


    async ClickonGoldsiguentebtn2(): Promise<void> {
         await commonsPage.scrollView();
        // await commonsPage.scrollView1();
        await (await this.siguentebtn2).waitForDisplayed({ timeout: 6000 });
        await this.siguentebtn2.click();
    }

    async ClickonGoldcardntn(): Promise<void> {
         await commonsPage.scrollView();
        // await commonsPage.scrollView1()
        await (await this.selectgoldcardbutton).waitForDisplayed({ timeout: 6000 });
        await this.selectgoldcardbutton.click();
    }


}
export default new SquadVentasDigitalesGoldTarjetasPage();