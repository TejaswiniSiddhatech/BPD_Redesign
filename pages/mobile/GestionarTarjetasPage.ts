import Page from "./page";


class GestionarTarjetasPage extends Page {


    get reuirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get requirementecontinuarbtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get menuicon() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgMenu"]') }

    get restriccionestitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTitle"]') }
    get restriccionescancelarbtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancelar"]') }
    get restriccionessiguentebtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSiguiente_inactive"]') }
    get restriccionesbackarrow() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgBackArrow"]') }

    get titleCambiarFechaPagoCorte() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/titleLayout"]') }
    get selectcreditcardCambiar() { return $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/linearSelectCredit"]') }
    get creditcardlisttitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtSliderTitle"]') }
    get firstcreditcard1() { return $('(//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/layoutDetails"])[1]/android.widget.LinearLayout[1]') }
    get creditcardalertmsg() { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]') }
    get creditcardalertmsgdescription() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get entindobtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get clickonandroidview() { return $('//android.view.View[@resource-id="com.popular.app.android:id/touch_outside"]') }
    get continuarbtncambiar(){ return $('//android.widget.TextView[@text="Continuar"]')}
    // get btnOkModal(){ return $('//android.widget.TextView[@resource-id="com.popular.Redesign:id/okTxt"]')}

    // get titleCambioFechaPago(){ return $('//android.widget.TextView[@resource-id="com.popular.Redesign:id/txtAccDetails"]')}
    // get subtitleCambioFechaPago(){ return $('//android.widget.TextView[@resource-id="com.popular.Redesign:id/txtCardName"]')}  
    // get txtSeleccionaTC(){ return $('//android.widget.TextView[@resource-id="com.popular.Redesign:id/textViewSelectLbl"]')}
    // get txtSeleccionar(){ return $('//android.widget.TextView[@resource-id="com.popular.Redesign:id/textSelectLoan"]')}

    get title() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtaccDetails"]') }
    get txtSeleccionaTarjeta() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtAccCurrency"]') }
    get firstCreditCard() { return $('//hierarchy/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]') }
    get txtCurrencyTC() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/credit_card_number_text"]') }

    get imgTarjeta() { return $('//android.widget.ImageView[@resource-id = "com.popular.app.android:id/imageView"]') }
    get txtBloquearTarjeta() { return $('//android.widget.TextView[@text="Bloquear tarjeta"]') }
    get txtRestriccionesUso() { return $('//android.widget.TextView[@text = "Configurar restricciones de usos"]') }
    get txtCancelarTC() { return $('//android.widget.TextView[@text = "Cancelar tarjeta"]') }
    get txtCambiarFechaPagoCorte() { return $('//android.widget.TextView[@text = "Cambiar fecha de pago y corte"]') }

    get txtMsgNoPoseeTC() { return $('//android.widget.TextView[@text="Actualmente esta tarjeta no posee\nplásticos adicionales. Puedes\nsolicitarlo(s) a través de tu oficial\nde cuentas o en cualquiera de\nnuestras sucursales."]') }
    get btnOkModal() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/okTxt"]') }

    get titleCambioFechaPago() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccDetails"]') }
    get subtitleCambioFechaPago() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtCardName"]') }
    get txtSeleccionaTC() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewSelectLbl"]') }
    get txtSeleccionar() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textSelectLoan"]') }





    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}

    async validate(): Promise<void> {
        await expect(this.title).toBeDisplayed();
        await expect(this.txtSeleccionaTarjeta).toBeDisplayed();
        await expect(this.txtCurrencyTC).toBeDisplayed();
        await expect(this.title).toBeDisplayed();
    }

    async selectFirstTC() {
        (await this.firstCreditCard).click();
    }

    async validateOpcionesConfigurarScreen() {
        await expect(this.imgTarjeta).toBeDisplayed();
        // await expect(this.txtBloquearTarjeta).toBeDisplayed();
        await expect(this.txtRestriccionesUso).toBeDisplayed();
        await expect(this.txtCancelarTC).toBeDisplayed();
        await expect(this.txtCambiarFechaPagoCorte).toBeDisplayed();
    }

    async selectOptionToManage(managementOption: string) {
        let manageElement = $('//android.widget.TextView[@text="' + managementOption + '"]');

        await expect(manageElement).toBeDisplayed();
        await (await manageElement).click();
    }

    async validateModal() {
        await expect(this.txtMsgNoPoseeTC).toBeDisplayed();
        await expect(this.btnOkModal).toBeDisplayed();
    }

    async selectOkBtnModal() {
        await expect(this.btnOkModal).toBeDisplayed();
        (await this.btnOkModal).click();
    }

    async validateMsg() {
        await expect(this.txtMsgNoPoseeTC).toBeDisplayed();
    }

    async validateCambiarFechaPagoCorte() {
        await this.titleCambioFechaPago.waitForDisplayed({ timeout: 60000 });
        await expect(this.txtSeleccionaTC).toBeDisplayed();
        await expect(this.txtSeleccionar).toBeDisplayed();
        await expect(this.subtitleCambioFechaPago).toBeDisplayed();
    }

    async selectcreditcardCambiarFechaPagoCorte() {
        await this.selectcreditcardCambiar.waitForDisplayed({ timeout: 60000 });
        (await this.selectcreditcardCambiar).click();
        await this.firstcreditcard1.waitForDisplayed({ timeout: 30000 });
        (await this.firstcreditcard1).click();
     }

    async verifypopupmsgCambiarFechaPagoCorte() {
        await this.creditcardalertmsg.waitForDisplayed({ timeout: 60000 });
        await this.creditcardalertmsgdescription.waitForDisplayed({ timeout: 9000 });
        await this.entindobtn.waitForDisplayed({ timeout: 3000 });
        (await this.entindobtn).click();
        (await this.clickonandroidview).click();
        await this.continuarbtncambiar.waitForDisplayed({ timeout: 10000 });
    }


    async verifyrequirementerror() {
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 50000 });
        const msg = await (await this.reuirementerrormsg).getText();
        console.log('Verifying Requirement Error : ' + msg)
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 60000 });
        // (await this.requirementecontinuarbtn).click();

    }

    async verifyrestriccionspage() {
        await this.restriccionestitle.waitForDisplayed({ timeout: 60000 });
        await this.restriccionescancelarbtn.waitForDisplayed({ timeout: 30000 });
    }





}
export default new GestionarTarjetasPage();