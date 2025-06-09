import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';


class SquadVentasDigitalesInfiniaTarjetasPage extends Page {




    get InfiniaTarjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'INFINIA' or . = 'INFINIA') and @resource-id = 'com.popular.app.android:id/topText']") }
    get solicitartarjetasbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Solicitar tarjeta' or . = 'Solicitar tarjeta') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get Beneficiotxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Beneficios:' or . = 'Beneficios:')]") }

    get Botoncontinuartxt() { return $("//*[@class = 'android.widget.Button' and (@text = 'botón contenido.' or . = 'botón contenido.') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get Infiniadescription() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Popular' or . = 'Popular') and @resource-id = 'com.popular.app.android:id/tvDescriptionInfina']") }


    get chrome() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Chrome' or . = 'Chrome')]") }
    get nothanks1() { return $("//*[@class = 'android.widget.Button' and (@text = 'No thanks' or . = 'No thanks') and @resource-id = 'com.android.chrome:id/negative_button']") }
    get nothanks2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsCondition"]') }
    get edittxtsearch() { return $("//*[@class = 'android.widget.EditText' and (@text = 'Search or type web address' or . = 'Search or type web address') and @resource-id = 'com.android.chrome:id/search_box_text']") }
    get searchcontinuarbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }




    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }


    async validate(): Promise<void> {
        await (await this.InfiniaTarjetasTitle).waitForDisplayed({ timeout: 60000 });
        await (await this.Beneficiotxt).waitForDisplayed({ timeout: 6000 });
        // await (await this.Infiniadescription).waitForDisplayed({ timeout: 6000 });
    }

    async Selectsolicitartarjetabtn() {
        await (await this.solicitartarjetasbtn).waitForDisplayed({ timeout: 6000 });
        await (await this.solicitartarjetasbtn).click();
    }

    async ClickonBoyonContinuarbtn() {
        await (await this.Botoncontinuartxt).waitForDisplayed({ timeout: 6000 });
        await (await this.Botoncontinuartxt).click();
    }



}
export default new SquadVentasDigitalesInfiniaTarjetasPage();