import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';


class SquadVentasDigitalesJetBluePage extends Page {



    get clasicaTarjets()  { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/topText"]')}
    get JetblueTarjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'JetBlue' or . = 'JetBlue') and @resource-id = 'com.popular.app.android:id/topText']") }
    get solicitartarjetasbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Solicitar tarjeta' or . = 'Solicitar tarjeta') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get Beneficiotxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Beneficios:' or . = 'Beneficios:')]") }
    get radioBtnSi(){ return $('//android.widget.RadioButton[@resource-id="com.popular.app.android:id/radioBtnSi"]')}
    // get radioBtnSi() { return $("//*[@class = 'android.widget.RadioButton' and (@text = 'Si' or . = 'Si') and @resource-id = 'com.popular.app.android:id/radioBtnSi']") }
    get radioBtnNo() { return $("//*[@class = 'android.widget.RadioButton' and (@text = 'No' or . = 'No') and @resource-id = 'com.popular.app.android:id/radioBtnNo']") }
    get radioButtonsTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = '¿Posee cuenta TrueBlue de JetBlue?' or . = '¿Posee cuenta TrueBlue de JetBlue?') and @resource-id = 'com.popular.app.android:id/radioButtonsTitle']") }
    get editEmail() { return $("//*[@class = 'android.widget.EditText' and (@text = 'Ej juanalmonte@correro.com' or . = 'Ej juanalmonte@correro.com') and @resource-id = 'com.popular.app.android:id/editEmail']") }
    get editCodigoTrueBlue() { return $("//*[@class = 'android.widget.EditText' and (@text = '0000000000' or . = '0000000000') and @resource-id = 'com.popular.app.android:id/editCodigoTrueBlue']") }
    get siguentebtnjetblue() { return $("//*[@class = 'android.widget.Button' and (@text = 'Siguiente' or . = 'Siguiente') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }


    get chrome() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Chrome' or . = 'Chrome')]") }
    get nothanks1() { return $("//*[@class = 'android.widget.Button' and (@text = 'No thanks' or . = 'No thanks') and @resource-id = 'com.android.chrome:id/negative_button']") }
    get nothanks2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsCondition"]') }
    get edittxtsearch() { return $("//*[@class = 'android.widget.EditText' and (@text = 'Search or type web address' or . = 'Search or type web address') and @resource-id = 'com.android.chrome:id/search_box_text']") }
    get searchcontinuarbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }

    get Botoncontenidabtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'botón contenido' or . = 'botón contenido') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get Botoncontenidabtnrel() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/bottomLayout' and (@text = '' or . = '')]") }



    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }


    async validate(): Promise<void> {
        await (await this.JetblueTarjetasTitle).waitForDisplayed({ timeout: 120000 });
        await (await this.Beneficiotxt).waitForDisplayed({ timeout: 6000 });
    }

    async validateClasicaTrajetas(): Promise<void> {
        await (await this.clasicaTarjets).waitForDisplayed({ timeout: 120000 });
        await (await $('//android.widget.TextView[@text="Beneficios tarjeta Visa:"]')).waitForDisplayed({ timeout: 6000 });
    }

    async Selectsolicitartarjetabtn() {
        await (await this.solicitartarjetasbtn).waitForDisplayed({ timeout: 6000 });
        await (await this.solicitartarjetasbtn).click();
    }

    async validatejetbluetrueblueaccpage() {
        await (await this.radioButtonsTitle).waitForDisplayed({ timeout: 30000 });
        await (await this.editEmail).waitForDisplayed({ timeout: 60000 });
        await (await this.editCodigoTrueBlue).waitForDisplayed({ timeout: 60000 });
    }

    async selectradiobtnSi() {
        await (await this.radioBtnSi).waitForDisplayed({ timeout: 50000 });
        await browser.pause(1000);
        await (await this.radioBtnSi).click();
    }

    async SelectRadiobtnNo() {
        await (await this.radioBtnNo).waitForDisplayed({ timeout: 30000 });
        await (await this.radioBtnNo).click();
    }

    async Enteremailid(Email:string) {
        await (await this.editEmail).waitForDisplayed({ timeout: 30000 });

        //  await (await this.editEmail).setValue('juanalmonte@gmail.com');
        await (await this.editEmail).setValue(Email);
    }

    async Entertruebluecode(code:number) {
        await (await this.editCodigoTrueBlue).waitForDisplayed({ timeout: 30000 });
        await (await this.editCodigoTrueBlue).setValue(code);
        // await (await this.editCodigoTrueBlue).setValue('1234567891');

    }


    async clickonjetbluesiguentebtn() {
        await (await this.siguentebtnjetblue).waitForDisplayed({ timeout: 30000 });
        await (await this.siguentebtnjetblue).click();
    }



    async Clickonsiguentebtn() {
        // await commonsPage.scrollView();
        await commonsPage.scrollView1();
        //browser.execute('mobile: performEditorAction', { action: 'done' });
        //await (await this.selectcardbottomdescription).waitForDisplayed({ timeout: 60000 });
        await (await this.Botoncontenidabtn).waitForDisplayed({ timeout: 6000 });
        (await this.Botoncontenidabtn).click();


    }



}
export default new SquadVentasDigitalesJetBluePage();