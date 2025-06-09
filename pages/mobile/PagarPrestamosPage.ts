import Page from "./page";
import Gestures from '../../commons/gestures';



class PagarPrestamosPage extends Page {

    //get title() { return $('//android.widget.TextView[@text="PAGO A \nPRÉSTAMOS"]') }
    get title() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtPagosTitle"]') }
    get backBtn() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgcuenta"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get lblDesdeCuenta() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.RelativeLayout/android.widget.RelativeLayout') }
    get txtPrestamo() { return $('//android.widget.TextView[@text="Préstamo:"]') }
    get lblPrestamo() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.RelativeLayout/android.widget.RelativeLayout') }
    get btnCancelar() { return $('//android.widget.Button[@text="Cancelar"]') }
    get btnContinuar() { return $('//android.widget.Button[@text="Continuar"]') }

    get descripAccountListScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountTypesTitle"]') }
    get firstAccount() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout') }

    get accountItems() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtaccType"]') }

    get descripPrestamoListScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountTypesTitle"]') }
    get firstPrestamo() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout') }
    get prestamoItems() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtaccType"]') }

    get txtMontoPagar() { return $('//android.widget.TextView[@text="Monto a pagar:"]') }
    get checkboxCuotaPendiente() { return $('(//android.widget.ImageView[@content-desc="image resource"])[5]') }
    get txtCuotaPendiente() { return $('//android.widget.TextView[@text="Cuota (s) pendiente (s):"]') }
    get txtMonedaCuotaPendiente() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.TextView[2]') }
    get montoPagarCuotaPendiente() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.EditText') }

    get cbkAbonoCapital() { return $('(//android.widget.ImageView[@content-desc="image resource"])[6]') }
    get txtAbonoCapital() { return $('//android.widget.TextView[@text="Abono a capital:"]') }
    get txtMonedaAbonoCapital() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.ListView/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.TextView[2]') }
    get montoPagarAbono() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.ListView/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.EditText') }

    get cbkSaldoTotal() { return $('(//android.widget.ImageView[@content-desc="image resource"])[7]') }
    get txtSaldoTotal() { return $('//android.widget.TextView[@text="Saldo total:"]') }
    get txtMonedaSaldoTotal() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.ListView/android.widget.LinearLayout[3]/android.widget.RelativeLayout/android.widget.TextView[2]') }
    get montoPagarSaldoTotal() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.ListView/android.widget.LinearLayout[3]/android.widget.RelativeLayout/android.widget.EditText') }

    get cbkOtroMonto() { return $('(//android.widget.ImageView[@content-desc="image resource"])[8]') }
    get txtOtroMonto() { return $('//android.widget.TextView[@text="Otro monto:"]') }
    get txtMonedaOtroMonto() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.widget.TextView[2]') }
    get montoPagarOtroMonto() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.widget.EditText') }

    get verificacionTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]') }
    get txtAmount() { return $('//android.widget.TextView[contains(@text,"RD$")]') }
    get txtDesdeCuentaVerificacion() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get desdeCuentaDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDesdeCuenta"]') }
    //get desdeCuentaDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView3"]') }

    get txtPrestamoVerificacion() { return $('//android.widget.TextView[@text="Préstamo:"]') }
    get prestamoDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtPrestamo"]') }
    // get prestamoDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView7"]') }

    get btnCancelarVerificacion() { return $('//android.widget.Button[@text="Cancelar"]') }
    get btnContinuarnVerificacion() { return $('//android.widget.Button[@text="Continuar"]') }

    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $("//*[@class = 'android.widget.Button' and (@text = 'Continuar' or . = 'Continuar') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }
    //get continuarBtnTokenPopular() { return $("//*[@class = 'android.widget.TextView' and (@text = 'CONTINUAR' or . = 'CONTINUAR') and @resource-id = 'com.popular.app.android:id/continueTxt']") }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }


    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get checkImgComprobante() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgSuccess"]') }
    get montoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDestinoAmount"]') }
    //get montoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView2"]') }
    get descripcionComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtSuccess"]') }
    get lblDesdeCuentaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblDesde"]') }
    get descripDesdeCuentaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtdesde"]') }
    get lblPrestamoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblHasta"]') }
    get descripPrestamoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtHasta"]') }
    get lblFechaComprobante() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get descripFechaComprobanteBene() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtfecha"]') }
    get lblImpuestoComprobante() { return $('//android.widget.TextView[@text="Impuesto DGII 0.15%:"]') }
    get descripImpuestoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTax"]') }
    get btnContinuarComprobante() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }
    get errorMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get montopagartxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView4"]') }
    get popupmsg1() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get popupmsg1continuar() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }

    get prestamoacc2() { return $('(//android.widget.TextView[@resource-id="com.popular.app.android:id/textView2"])[2]') }
    get desembolsar() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Desembolsar' or . = 'Desembolsar')]") }
    get digitaElMonto() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Digita el monto que deseas desembolsar:' or . = 'Digita el monto que deseas desembolsar:') and @resource-id = 'com.popular.app.android:id/lblMontoDisburse']") }
    get enterAmount() { return $("//*[@class = 'android.widget.EditText' and @resource-id = 'com.popular.app.android:id/txtMontoDisburse' and (@text = '' or . = '')]") }
    get siguenteButton() { return $("//*[@class = 'android.widget.Button' and (@text = 'Siguiente' or . = 'Siguiente') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }
    get confirmationPage() { return $("//*[@class = 'android.widget.TextView' and (@text = 'CONFIRMACIÓN' or . = 'CONFIRMACIÓN') and @resource-id = 'com.popular.app.android:id/textView2']") }
    get confirmationContinuarButton() { return $("//*[@class = 'android.widget.Button' and (@text = 'Continuar' or . = 'Continuar') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }
    get tokenSet() { return $("//*[@class = 'android.widget.EditText' and (@text = 'Digita el código' or . = 'Digita el código') and @resource-id = 'com.popular.app.android:id/editAuthentication']") }
    get tokenContinuarButton() { return $("//*[@class = 'android.widget.Button' and (@text = 'Continuar' or . = 'Continuar') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }


    get Errortxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Error' or . = 'Error') and @resource-id = 'android:id/alertTitle']") }
    get balancedisponibleErrortxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'La cuenta origen no posee balance disponible para realizar esta transacción.' or . = 'La cuenta origen no posee balance disponible para realizar esta transacción.') and @resource-id = 'android:id/message']") }

    /*
    acc2
    xpath
    //android.widget.ListView[@resource-id="com.popular.app.android:id/listAccounts"]/android.widget.LinearLayout[2]
    
    xpath
    (//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/rel_cuenta"])[2]
    xpath
    (//android.widget.TextView[@resource-id="com.popular.app.android:id/textView2"])[2]
    
    acc3
    xpath
    (//android.widget.TextView[@resource-id="com.popular.app.android:id/textView2"])[3]
    
    
    
    */

    async validate(): Promise<void> {
        await expect(this.title).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        await expect(this.lblDesdeCuenta).toBeDisplayed();
        await expect(this.txtPrestamo).toBeDisplayed();
        await expect(this.lblPrestamo).toBeDisplayed();
        await expect(this.btnCancelar).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisplayed();
    }

    async selectSeleccioneDesdeCuentaOpt() {
        await (await this.lblDesdeCuenta).waitForDisplayed({ timeout: 40000 });
        (await this.lblDesdeCuenta).click();
    }

    async validateListAccount() {
        await expect(this.descripAccountListScreen).toBeDisplayed();
        await expect(this.accountItems).toBeDisplayed(); //
    }

    async selectFirstAccount() {
        await expect(this.firstAccount).toBeDisplayed();
        (await this.firstAccount).click();
    }


    async selectAnAccount(accountNro: string) {
        await expect(this.accountItems).toBeDisplayed();
        (await this.accountItems).forEach(async (element) => {
            if ((await element.getAttribute('text')).includes(accountNro)) {
                await element.click();
            }
        });
    }

    async selectSeleccionePrestamoOpt() {
        await expect(this.lblPrestamo).toBeDisplayed();
        await (await this.lblPrestamo).waitForEnabled();
        (await this.lblPrestamo).click();
    }

    async validateListPrestamos() {
        await expect(this.descripPrestamoListScreen).toBeDisplayed();
        await expect(this.prestamoItems).toBeDisplayed(); //
    }



    async selectFirstPrestamo() {

        const accountNumberByAccountName = await $('//android.widget.TextView[contains(@text, "Préstamo / ")]');

        let elementIsDisplayed = false;
        let intentosMax = 0

        while (elementIsDisplayed == false && intentosMax < 6) {
            if (await accountNumberByAccountName.isDisplayed()) {
                elementIsDisplayed = true;
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++
            }
        }
        await accountNumberByAccountName.click();
    }


    async selectFirstPrestamo1() {

        const accountNumberByAccountName = await $('//android.widget.TextView[contains(@text, "Préstamo")]');

        let elementIsDisplayed = false;
        let intentosMax = 0

        while (elementIsDisplayed == false && intentosMax < 6) {
            if (await accountNumberByAccountName.isDisplayed()) {
                elementIsDisplayed = true;
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++
            }
        }
        await accountNumberByAccountName.click();
    }



    async tapOndesembolsar() {
        await expect(this.desembolsar).toBeDisplayed();
        await (await this.desembolsar).waitForEnabled();
        (await this.desembolsar).click();
    }

    async setAmount(amount: string) {
        await (await (this.digitaElMonto)).waitForDisplayed({ timeout: 120000 });
        await expect(this.digitaElMonto).toBeDisplayed();
        await this.enterAmount.setValue(amount);
        //await browser.execute('mobile: performEditorAction', { action: 'done' });
        (await this.siguenteButton).click();
        await browser.pause(6000);
        (await this.siguenteButton).click();
    }

    async confirmationPageValidation() {
        await expect(this.confirmationPage).toBeDisplayed();
        (await this.confirmationContinuarButton).click();
    }


    async selectMontoPagar(montoPagar: string) {
        const element = await $('//android.widget.TextView[contains(@text,"' + montoPagar + '")]/..');
        expect(element).toBeDisplayed();
        // await element.isDisplayed();
        await element.click();

    }

    async enterAmountToTransfer(amountToTransfer: string) {
        // const editTextElement = await $('//android.widget.TextView[contains(@text,"' + amountToTransfer + '")]/../android.widget.EditText');
        const editTextElement = await $('//android.widget.TextView[contains(@text,"' + amountToTransfer + '")]/..');
        await expect(editTextElement).toBeDisplayed();
        await editTextElement.clearValue();
        await editTextElement.setValue(amountToTransfer);
    }

    async selectBtnContinuar() {
        await (await this.btnContinuar).waitForDisplayed({ timeout: 50000 });
        await (await this.btnContinuar).waitForEnabled();
        (await this.btnContinuar).click();
    }


    async selectpopup() {
        await (await this.popupmsg1).waitForDisplayed({ timeout: 40000 });
        await (await this.popupmsg1continuar).waitForDisplayed({ timeout: 6000 });
        (await this.popupmsg1continuar).click();
    }




    async entermontopagar() {
        await (await this.txtAbonoCapital).waitForDisplayed({ timeout: 50000 });
        // (await this.cbkAbonoCapital).click();
        await this.txtMonedaAbonoCapital.isDisplayed();
        await this.montoPagarAbono.clearValue();
        await this.montoPagarAbono.setValue("1");
    }

    async validateVerificationScreen() {
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.txtAmount).toBeDisplayed();
        await expect(this.txtDesdeCuentaVerificacion).toBeDisplayed();
        await expect(this.desdeCuentaDescripcionVerificacion).toBeDisplayed();
        await expect(this.txtPrestamoVerificacion).toBeDisplayed();
        await expect(this.prestamoDescripcionVerificacion).toBeDisplayed();
        await expect(this.btnCancelarVerificacion).toBeDisplayed();
        await expect(this.btnContinuarnVerificacion).toBeDisplayed();
    }

    async selectBtnContinuarVerificacion() {
        await expect(this.btnContinuarnVerificacion).toBeDisplayed();
        await (await this.btnCancelarVerificacion).waitForEnabled();
        (await this.btnContinuarnVerificacion).click();
    }



    async typeTokenPopular(code: string) {
        for (var i = 0; i < 50; i++) {
            if (await (await this.typeCodeField).isDisplayed()) {
                (await this.typeCodeField).clearValue();
                (await this.typeCodeField).setValue(code);
                break;
            }
        }
    }

    async selectContinuarBtnOnTokenScreen() {
        for (var i = 0; i < 50; i++) {
            if (await (await this.continuarBtnTokenPopular).isDisplayed()) {
                await (await this.continuarBtnTokenPopular).waitForEnabled();
                (await this.continuarBtnTokenPopular).click();
                break;
            }
        }
    }

    async validateComprobanteScreen() {
        await expect(this.titleComprobante).toBeDisplayed();
        await expect(this.checkImgComprobante).toBeDisplayed();
        // await expect(this.montoComprobante).toBeDisplayed();
        // await expect(this.descripcionComprobante).toBeDisplayed();
        // await expect(this.lblDesdeCuentaComprobante).toBeDisplayed();
        // await expect(this.descripDesdeCuentaComprobante).toBeDisplayed();
        // await expect(this.lblDesdeCuentaComprobante).toBeDisplayed();
        // await expect(this.descripDesdeCuentaComprobante).toBeDisplayed();
        // await expect(this.lblFechaComprobante).toBeDisplayed();
        // await expect(this.descripFechaComprobanteBene).toBeDisplayed();
        // await expect(this.lblImpuestoComprobante).toBeDisplayed();
        // await expect(this.descripImpuestoComprobante).toBeDisplayed();
        // await expect(this.btnContinuarComprobante).toBeDisplayed();
    }

    async selectBtnContinuarComprobante() {
        if (await (await this.titleComprobante).isDisplayed() && await (await this.btnContinuarComprobante).isDisplayed()) {
            await expect(this.btnContinuarComprobante).toBeDisplayed();
            await (await this.btnContinuarComprobante).waitForEnabled();
            (await this.btnContinuarComprobante).click();
        }
    }
}
export default new PagarPrestamosPage();