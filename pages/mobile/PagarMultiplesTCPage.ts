import Page from "./page";


class PagarMultiplesTCPage extends Page {

    get title() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/titleView"]') }
    get backBtn() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgBackArrow"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get lblDesdeCuenta() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.RelativeLayout') }
    get txtBeneficiario() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get listOfTC() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtCCName"]') }
    get btnCancelar() { return $('//android.widget.Button[@text="Cancelar"]') }
    get btnContinuar() { return $('//android.widget.Button[@text="Continuar"]') }

    get descripAccountListScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountTypesTitle"]') }
    get firstAccount() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout') }
    get accountItems() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtaccType"]') }

    get selectAllChk() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.CheckBox') }
    get firstChkTC() { return $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.ListView/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.CheckBox") }
    get secondChkTC() { return $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.ListView/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.CheckBox") }

    get verificacionTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]') }
    get txtBeneficiarioVerificacion() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get firstTCdescripVerificacion() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.LinearLayout/android.widget.TextView[1]') }
    get secondTCdescripVerificacion() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.TextView[1]') }
    get txtMontoVerificacion() { return $('//android.widget.TextView[@text="Monto:"]') }
    get descripMontoVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtMontoTotal"]') }
    get txtDesdeCuentaVerificacion() { return $('//android.widget.TextView[@text="Desde:"]') }
    get desdeCuentaDescripcionVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textFromAccDetail"]') }
    get txtFechaVerificacion() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get descripFechaVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtFecha"]') }
    get btnCancelarVerificacion() { return $('//android.widget.Button[@text="Cancelar"]') }
    get btnContinuarnVerificacion() { return $('//android.widget.Button[@text="Continuar"]') }

    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get imgCheck(){ return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgSuccess"]')}
    get amountToPay(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtmultipleCCAmount"]')}
    get descripPayment(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtReqProcess"]')}
    
    get txtPagosExitosos() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textBeneficiaryLblSuccessful"]') }
    get descripPagoExitosoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/accountName"]') }

    get txtBeneficiarios(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView1"]')}
    get descripBenificarioComprobante(){ return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/accountName"]')}
    get desdeComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textFromAccDetailLbl"]') }
    get descripDesdeComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textfromAccountDetail"]') }
    get txtFechaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView3"]') }
    get descripFechaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtFecha"]') }
    get txtImpuestoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView4"]') }
    get descripImpuestoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTaxValue"]') }
    get txtNroReferencia(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView5"]')}
    get descripNroReferencia(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtRefernace"]')}
    get btnContinuarComprobante() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }

    get errorMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }



    async validate(): Promise<void> {
        await expect(this.title).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        await expect(this.lblDesdeCuenta).toBeDisplayed();
        await expect(this.txtBeneficiario).toBeDisplayed();
        await expect(this.listOfTC).toBeDisplayed();
        await expect(this.btnCancelar).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisabled();
    }

    async selectSeleccione() {
        (await this.lblDesdeCuenta).click();
    }

    async selectAnAccount(accountNro: string) {
        await expect(this.accountItems).toBeDisplayed();
        (await this.accountItems).forEach(async (element) => {
            if ((await element.getAttribute('text')).includes(accountNro)) {
                await element.click();
            }
        });
    }

    async selectAllTC(){
        await expect(this.selectAllChk).toBeDisplayed();
        (await this.selectAllChk).click(); 
    }

    async selectFirstTC() {
        await expect(this.firstChkTC).toBeDisplayed();
        (await this.firstChkTC).click();
    }

    async selectSecondTC() {
        await expect(this.secondChkTC).toBeDisplayed();
        (await this.secondChkTC).click();
    }

    async selectContinuarBtn() {
        await expect(this.btnContinuar).toBeEnabled();
        (await this.btnContinuar).click();
    }

    async validateVerificationScreen() {
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.txtDesdeCuentaVerificacion).toBeDisplayed();
        await expect(this.desdeCuentaDescripcionVerificacion).toBeDisplayed();
        await expect(this.txtBeneficiarioVerificacion).toBeDisplayed();
        await expect(this.firstTCdescripVerificacion).toBeDisplayed();
        await expect(this.btnCancelarVerificacion).toBeDisplayed();
        await expect(this.btnContinuarnVerificacion).toBeDisplayed();
    }

    async selectContinuarBtnOnVerificacionScreen() {
        await expect(this.btnContinuarnVerificacion).toBeEnabled();
        (await this.btnContinuarnVerificacion).click();
    }

    async typeTokenPopular(code: string) {
        await expect(this.typeCodeField).toBeDisplayed();
        (await this.typeCodeField).clearValue();
        (await this.typeCodeField).setValue(code);

    }

    async selectContinuarBtnOnTokenScreen() {
        await expect(this.continuarBtnTokenPopular).toBeDisplayed();
        (await this.continuarBtnTokenPopular).click();
    }

    async validateComprobanteScreen() {
        await expect(this.titleComprobante).toBeDisplayed();
        await expect(this.imgCheck).toBeDisplayed();
        await expect(this.amountToPay).toBeDisplayed();
        await expect(this.descripPayment).toBeDisplayed();
        await expect(this.txtBeneficiarios).toBeDisplayed();
        await expect(this.descripBenificarioComprobante).toBeDisplayed();
        await expect(this.desdeComprobante).toBeDisplayed();
        await expect(this.descripDesdeComprobante).toBeDisplayed();
        await expect(this.txtFechaComprobante).toBeDisplayed();
        await expect(this.descripFechaComprobante).toBeDisplayed();
        await expect(this.txtImpuestoComprobante).toBeDisplayed();
        await expect(this.descripImpuestoComprobante).toBeDisplayed();
        await expect(this.btnContinuarComprobante).toBeDisplayed();
    }

    async validateComprobanteScreenWithOneCreditCard() {
        await expect(this.titleComprobante).toBeDisplayed();
        await expect(this.imgCheck).toBeDisplayed();
        await expect(this.amountToPay).toBeDisplayed();
        await expect(this.descripPayment).toBeDisplayed();
        await expect(this.txtBeneficiarios).toBeDisplayed();
        await expect(this.descripBenificarioComprobante).toBeDisplayed();
        await expect(this.desdeComprobante).toBeDisplayed();
        await expect(this.descripDesdeComprobante).toBeDisplayed();
        await expect(this.txtFechaComprobante).toBeDisplayed();
        await expect(this.descripFechaComprobante).toBeDisplayed();
        await expect(this.txtImpuestoComprobante).toBeDisplayed();
        await expect(this.descripImpuestoComprobante).toBeDisplayed();
        await expect(this.txtNroReferencia).toBeDisplayed();
        await expect(this.descripNroReferencia).toBeDisplayed();
        await expect(this.btnContinuarComprobante).toBeDisplayed();
    }

    async selectBtnContinuarComprobante() {
        await expect(this.btnContinuarComprobante).toBeDisplayed();
        (await this.btnContinuarComprobante).click();
    }
}
export default new PagarMultiplesTCPage();