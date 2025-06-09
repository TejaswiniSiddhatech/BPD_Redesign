import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';


class PagarTarjetaCreditoPage extends Page {

    get title() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtPagosTitle"]') }
    get backBtn() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgcuenta"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get lblDesdeCuenta() { return $('//android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.RelativeLayout') }
    get txtTarjetaCredito() { return $('//android.widget.TextView[@text="Tarjeta de crédito:"]') }
    get lblTarjetaCredito() { return $('//android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.RelativeLayout') }
    get btnCancelar() { return $('//android.widget.Button[@text="Cancelar"]') }
    get btnContinuar() { return $('//android.widget.Button[@text="Continuar"]') }

    get descripAccountListScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountTypesTitle"]') }
    get firstAccount() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout') }

    get descripTarjetaCreditoListScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountTypesTitle"]') }
    get firstTarjetaCredito() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout') }

    get txtMontoPagar() { return $('//android.widget.TextView[@text="Monto a pagar:"]') }

    get verificacionTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]') }
    get txtAmount() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDestinoAmount"]') }
    get txtDesdeCuentaVerificacion() { return $('//android.widget.TextView[@text="Desde cuenta:    "]') }
    get desdeCuentaDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDesdeCuenta"]') }
    //get desdeCuentaDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView3"]') }
    get txtBeneficiarioVerificacion() { return $('//android.widget.TextView[@text="Beneficiario:    "]') }
    get beneficiarioDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiario"]') }
    // get beneficiarioDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView7"]') }
    get txtFechaVerificacion() { return $('//android.widget.TextView[@text="Fecha:         "]') }
    get fechaDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtfecha"]') }
    // get fechaDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView11"]') }
    get btnCancelarVerificacion() { return $('//android.widget.Button[@text="Cancelar"]') }
    get btnContinuarnVerificacion() { return $('//android.widget.Button[@text="Continuar"]') }

    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }
    get tarjetasiguentebtn() { return $('//android.widget.Button[@text="Siguiente"]') }




    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get checkImgComprobante() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgSuccess"]') }
    get montoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDestinoAmount"]') }
    get descripcionComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtSuccess"]') }
    get lblBeneficiarioComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblDesde"]') }
    get descripBeneficiarioComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtdesde"]') }
    get lblDesdeCuentaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblHasta"]') }
    get descripDesdeCuentaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtHasta"]') }
    get lblFechaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView11"]') }
    get descripFechaComprobanteBene() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtfecha"]') }
    get lblImpuestoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView13"]') }
    get descripImpuestoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTax"]') }
    get lblNroReferenciaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView9"]') }
    get descripNroReferenciaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtRef"]') }
    get btnContinuarComprobante() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }

    get errorMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }

    get popupmsg1() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get popupmsg1continuar() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get tarjetacreditacc2() { return $('((//android.widget.TextView[@resource-id="com.popular.app.android:id/textView2"])[2]') }
    get checkotromonto() { return $('(//android.widget.ImageView[@content-desc="image resource"])[6]') }
    get otromontotxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtMenuName" and @text="Otro monto:"]') }
    get otromontoedittxt() { return $('(//android.widget.EditText[@resource-id="com.popular.app.android:id/editMonto"])[4]') }

    get ServiceInterptionbtn1() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos')]") }
    get ServiceInterptionbtn2() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Llamar a Telebanco Popular' or . = 'Llamar a Telebanco Popular')]") }

    get reuirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get requirementecontinuarbtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }


    get tarjetasaccdashboard() { return $('//android.widget.TextView[contains(@text, "Tarjeta de crédito")]') }
    get Balancealafechaaccdashboard() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Balance a la fecha:' or . = 'Balance a la fecha:')]") }
    get pagarmenufromtaretadashboard2() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/rel_Pagos' and (contains(@text,'\nPagar'))]") }
    get pagarmenufromtaretadashboard() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Pagar' or . = 'Pagar') and @resource-id = 'com.popular.app.android:id/textView9']") }
    get selectPagarfromtarjeta() { return $('//android.widget.TextView[@text="Pagar"]') }
    // get snackBarPagar() { return $('//android.view.View[@content-desc="Pagar"]') }

    get snackBarPagar() { return $("//*[@class = 'android.widget.ImageView' and @resource-id = 'com.popular.app.android:id/imageView2' and (@text = '' or . = '')]") }
    get selecpagartarjetafromdashboard() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/rel_pagarTarjeta' and (@text = '' or . = '')]") }
    get pagartarjetadashboardtarjeta() { return $('//android.widget.TextView[@text="Pagar\ntarjeta"]') }



    async validate(): Promise<void> {
        await expect(this.title).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        await expect(this.lblDesdeCuenta).toBeDisplayed();
        await expect(this.txtTarjetaCredito).toBeDisplayed();
        await expect(this.lblTarjetaCredito).toBeDisplayed();
        await expect(this.btnCancelar).toBeDisplayed();
        // await expect(this.btnContinuar).toBeDisplayed();
        await expect(await this.tarjetasiguentebtn).toBeDisplayed();

    }

    async VerifyServiceInterptionpop() {
        await (await this.ServiceInterptionbtn1).waitForDisplayed({ timeout: 20000 });
        await (await this.ServiceInterptionbtn2).waitForDisplayed({ timeout: 10000 });
    }


    async verifyrequirementerror() {
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 50000 });
        const msg = await (await this.reuirementerrormsg).getText();
        console.log('Verifying Requirement Error : ' + msg)
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 60000 });
        // (await this.requirementecontinuarbtn).click();

    }



    async selectSeleccioneDesdeCuentaOpt() {
        (await this.lblDesdeCuenta).click();
    }

    async validateListAccount() {
        await expect(this.descripAccountListScreen).toBeDisplayed();
    }

    async selectFirstAccount() {
        await expect(this.firstAccount).toBeDisplayed();
        (await this.firstAccount).click();
    }


    async selectTarjetaAccountdashboard() {
        await expect(this.Balancealafechaaccdashboard).toBeDisplayed();
        (await this.Balancealafechaaccdashboard).click();
    }


    async selectPagarFromTarjetadashboard() {
        // await expect(this.pagarmenufromtaretadashboard2).toBeDisplayed();
        //await (this.selectPagarfromtarjeta).waitForDisplayed();
        // await (await (this.selectPagarfromtarjeta)).waitForEnabled();
        await expect(this.snackBarPagar).toBeDisplayed();
        (await this.snackBarPagar).click();
    }

    async selectPagartarjetaFromTarjetadashboard() {
        // await expect(this.pagarmenufromtaretadashboard2).toBeDisplayed();
        await (this.pagartarjetadashboardtarjeta).waitForDisplayed();
        await (await (this.pagartarjetadashboardtarjeta)).waitForEnabled();
        (await this.pagartarjetadashboardtarjeta).click();
    }

    async selectAnAccount(accountNro: string) {
        //let accountElement = $('//android.widget.TextView[contains(@text,"'+accountNro+'")]');
        let accountElement = $('//android.widget.ListView[@resource-id="com.popular.app.android:id/listAccounts"]/android.widget.LinearLayout[1]');
        await expect(accountElement).toBeDisplayed();
        await (await accountElement).click();
    }

    async selectSeleccioneTCOpt() {
        await expect(this.lblTarjetaCredito).toBeDisplayed();
        (await this.lblTarjetaCredito).click();
    }

    async validateListTC() {
        await expect(this.descripTarjetaCreditoListScreen).toBeDisplayed();
    }

    async selectFirstTC() {
        await expect(this.firstTarjetaCredito).toBeDisplayed();
        (await this.firstTarjetaCredito).click();
    }

    async selectACreditCard(creditNro: string) {
        let nroCreditCardElement = $('//android.widget.TextView[contains(@text,"' + creditNro + '")]');

        // let nroCreditCardElement = $('//android.widget.TextView[contains(@text,"' + creditNro + '")]');
        // let nroCreditCardElement = $('//android.widget.ListView[@resource-id="com.popular.app.android:id/listAccounts"]/android.widget.LinearLayout[3]');
        //  let nroCreditCardElement = $('//android.widget.ListView[@resource-id="com.popular.app.android:id/listAccounts"]/android.widget.LinearLayout[1]');
        await (await nroCreditCardElement).waitForDisplayed();
        await (await nroCreditCardElement).click();
    }


    async selectACreditCardUS(nroAccount: string) {
        //android.widget.TextView[contains(@text, "US$")]
        // const accountNumberByAccountName = await $('//android.widget.TextView[@text="' + nroAccount + '"]');
        let nroCreditCardElement = $('//android.widget.TextView[contains(@text,"' + nroAccount + '")]');
        //android.widget.TextView[contains(@text, "US$")]
        let elementIsDisplayed = false;
        let intentosMax = 0;

        while (!elementIsDisplayed && intentosMax < 6) {
            // Check if the element is displayed
            if (await nroCreditCardElement.isDisplayed()) {
                elementIsDisplayed = true; // Element is visible
                (await nroCreditCardElement).click();
                break; // Break the loop if the element is found
            } else {
                // Swipe to scroll the view
                await Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++; // Increment the swipe attempt counter
                await driver.pause(500); // Allow the UI to update after the scroll
            }
        }
    }

    // async selectACreditCardUS(creditNro: string) {
    //     let nroCreditCardElement = $('//android.widget.TextView[contains(@text,"' + creditNro + '")]');

    //     // let nroCreditCardElement = $('//android.widget.TextView[contains(@text,"' + creditNro + '")]');
    //     // let nroCreditCardElement = $('//android.widget.ListView[@resource-id="com.popular.app.android:id/listAccounts"]/android.widget.LinearLayout[3]');
    //     //  let nroCreditCardElement = $('//android.widget.ListView[@resource-id="com.popular.app.android:id/listAccounts"]/android.widget.LinearLayout[1]');
    //     await commonsPage.scrollView();
    //     await (await nroCreditCardElement).waitForDisplayed();
    //     await (await nroCreditCardElement).click();
    // }


    async selectMontoPagar(montoPagar: string) {
        let montoPagarElement = $('//android.widget.TextView[@text="' + montoPagar + '"]');

        await (await montoPagarElement).waitForDisplayed();
        await (await montoPagarElement).click();
    }

    async enterAmountToTransfer(montoPagar: string, amountToTransfer: string) {
        //let editTextElement = $('//android.widget.TextView[@text="' + montoPagar + '"]/following-sibling::android.widget.EditText');

        let editTextElement = $('(//android.widget.EditText[@resource-id="com.popular.app.android:id/editMonto"])[4]');
        await (await editTextElement).waitForDisplayed();
        await (await editTextElement).clearValue();
        await (await editTextElement).setValue(amountToTransfer);
        //await (await editTextElement).setValue(10);
    }

    async selectBtnContinuar() {
        //  (await this.btnContinuar).click();
        await (await this.tarjetasiguentebtn).waitForDisplayed();
        await (await this.tarjetasiguentebtn).waitForEnabled();
        (await (this.tarjetasiguentebtn)).click();
    }

    async selectpopuperror() {
        await (await this.popupmsg1).waitForDisplayed({ timeout: 6000 });
        await (await this.popupmsg1continuar).waitForDisplayed({ timeout: 6000 });
        (await this.popupmsg1continuar).click();
    }


    async EnterMontoPagar() {
        (await this.otromontotxt).waitForDisplayed({ timeout: 9000 });
        await (await this.checkotromonto).click();
        await (await this.otromontoedittxt).waitForDisplayed({ timeout: 6000 });
        await (await this.otromontoedittxt).clearValue();
        await (await this.otromontoedittxt).setValue("1");
        (await this.btnContinuar).click();
    }



    async validateVerificationScreen() {
        (await this.verificacionTitle).waitForDisplayed({ timeout: 60000 });
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.txtAmount).toBeDisplayed();
        await expect(this.txtDesdeCuentaVerificacion).toBeDisplayed();
        await expect(this.desdeCuentaDescripcionVerificacion).toBeDisplayed();
        await expect(this.txtBeneficiarioVerificacion).toBeDisplayed();
        await expect(this.beneficiarioDescripcionVerificacion).toBeDisplayed();
        await expect(this.txtFechaVerificacion).toBeDisplayed();
        await expect(this.fechaDescripcionVerificacion).toBeDisplayed();
        await expect(this.btnCancelarVerificacion).toBeDisplayed();
        await expect(this.btnContinuarnVerificacion).toBeDisplayed();
    }

    async validateVerificationWithMulticurrencyScreen() {
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.txtAmount).toBeDisplayed();
        await expect(this.txtDesdeCuentaVerificacion).toBeDisplayed();
        await expect(this.desdeCuentaDescripcionVerificacion).toBeDisplayed();

        await expect(this.txtBeneficiarioVerificacion).toBeDisplayed();
        await expect(this.beneficiarioDescripcionVerificacion).toBeDisplayed();
        await expect(this.txtFechaVerificacion).toBeDisplayed();
        await expect(this.fechaDescripcionVerificacion).toBeDisplayed();
        await expect(this.btnCancelarVerificacion).toBeDisplayed();
        await expect(this.btnContinuarnVerificacion).toBeDisplayed();
    }

    async selectBtnContinuarVerificacion() {
        (await this.btnContinuarnVerificacion).click();
    }

    async typeTokenPopular(code: string) {
        for (var i = 0; i <= 80; i++) {
            if (await (await this.typeCodeField).isDisplayed()) {
                (await this.typeCodeField).clearValue();
                (await this.typeCodeField).setValue(code);
                await this.selectContinuarBtnOnTokenScreen();
                break;
            }

        }
    }

    async selectContinuarBtnOnTokenScreen() {
        await expect(this.continuarBtnTokenPopular).toBeDisplayed();
        await (await (this.continuarBtnTokenPopular)).waitForEnabled();
        (await this.continuarBtnTokenPopular).click();
    }

    async validateComprobanteScreen() {
        await expect(this.titleComprobante).toBeDisplayed();
        await expect(this.checkImgComprobante).toBeDisplayed();
        await expect(this.montoComprobante).toBeDisplayed();
        await expect(this.descripcionComprobante).toBeDisplayed();
        await expect(this.lblBeneficiarioComprobante).toBeDisplayed();
        await expect(this.descripBeneficiarioComprobante).toBeDisplayed();
        await expect(this.lblBeneficiarioComprobante).toBeDisplayed();
        await expect(this.descripBeneficiarioComprobante).toBeDisplayed();
        await expect(this.lblFechaComprobante).toBeDisplayed();
        await expect(this.descripFechaComprobanteBene).toBeDisplayed();
        await expect(this.lblImpuestoComprobante).toBeDisplayed();
        await expect(this.descripImpuestoComprobante).toBeDisplayed();
        Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
        await expect(this.btnContinuarComprobante).toBeDisplayed();
    }

    async validateComprobanteWithMulticurrencyScreen() {
        await expect(this.titleComprobante).toBeDisplayed();
        await expect(this.checkImgComprobante).toBeDisplayed();
        await expect(this.montoComprobante).toBeDisplayed();
        await expect(this.descripcionComprobante).toBeDisplayed();
        await expect(this.lblBeneficiarioComprobante).toBeDisplayed();
        await expect(this.descripBeneficiarioComprobante).toBeDisplayed();
        await expect(this.lblBeneficiarioComprobante).toBeDisplayed();
        await expect(this.descripBeneficiarioComprobante).toBeDisplayed();
        await expect(this.lblFechaComprobante).toBeDisplayed();
        await expect(this.descripFechaComprobanteBene).toBeDisplayed();
        await expect(this.lblImpuestoComprobante).toBeDisplayed();
        await expect(this.descripImpuestoComprobante).toBeDisplayed();
        await expect(this.btnContinuarComprobante).toBeDisplayed();
    }

    async selectBtnContinuarComprobante() {
        await expect(this.btnContinuarComprobante).toBeDisplayed();
        (await this.btnContinuarComprobante).click();
    }

}
export default new PagarTarjetaCreditoPage();