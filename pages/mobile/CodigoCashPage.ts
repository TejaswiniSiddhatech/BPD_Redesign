import Page from "./page";


class CodigoCashPage extends Page {

    get title() { return $('//android.widget.TextView[@text = "CÓDIGO CASH"]') }
    get imgCodigoCash() { return $('//android.widget.ImageView[@content-desc="image resource"]') }
    get txtMsgIntro1() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/codeInstructionMsg"]') }
    get txtMsgIntro2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/codeInstrMsg"]') }
    get txtActivosHeader() { return $('//android.widget.TextView[@text="Activos"]') }
    get txtUtilizadosHeader() { return $('//android.widget.TextView[@text="Utilizados"]') }
    get txtCanceladosExpirados() { return $('//android.widget.TextView[@text="Cancelados / Expirados"]') }
    get btnGenerarCodigo() { return $('//android.widget.Button[@resource-id = "com.popular.app.android:id/btnGenerateCode"]') }

    get titleGenerarCodigo() { return $('//android.widget.TextView[@resource-id = "@resource-id = "com.popular.app.android:id/txtScreenTitle"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@text = "Desde cuenta:"]') }
    get txtSelecciona() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtSelecciona"]') }
    get txtCedulaBeneficiario() { return $('//android.widget.TextView[@text = "Cédula del Beneficiario:"]') }
    get editCedulaBeneficiario() { return $('//android.widget.EditText[@resource-id = "com.popular.app.android:id/editMobileNo"]') }
    get txtMsgInformativo() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/textVerifyMobileLbl"]') }
    get txtMonto() { return $('//android.widget.TextView[@text = "Monto:"]') }
    get txtCurrencyMonto() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/amountTextLbl"]') }
    get txtMontoValue() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/amountTextValue"]') }
    get imgMinusSeekBar() { return $('//android.widget.ImageView[@resource-id = "com.popular.app.android:id/imgMinusIcon"]') }
    get rangeSeekBar() { return $('//android.widget.SeekBar[@resource-id = "com.popular.app.android:id/rangeSeekbar1"]') }
    get imgPlusSeekBar() { return $('//android.widget.ImageView[@resource-id = "com.popular.app.android:id/imgPlusIcon"]') }
    get tooltipLimiteRetiroIcon() { return $('//android.widget.ImageView[@resource-id = "com.popular.app.android:id/info_icon"]') }
    get txtLimiteRetiroMsg() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/textlimitInstruction"]') }
    get btnCancelar() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtCancel"]') }
    get btnContinuar() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtContinue"]') }

    get titleAccountList() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtAccountTypesTitle"]') }
    get firstAccount() { return $('//hierarchy/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[2]/android.widget.ListView[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]') }
    get itemsAccountList() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtaccType"]') }

    get titleVerificacion() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtScreenTitle"]') }
    get txtMontoVerificacion() { return $('//android.widget.TextView[@text="Monto:"]') }
    get descripMontoVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/amountValueTxt"]') }
    get txtDesdeCuentaVerificacion() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get descripDesdeCuentaVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/fromAccountTxt"]') }
    get txtCedulaBeneficiarioVerificacion() { return $('//android.widget.TextView[@text="Cédula del Beneficiario:"]') }
    get descripCedulaBeneficiarioVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/beneficioryNameTxt"]') }
    get txtVenceDescripcion() { return $('//android.widget.TextView[@text="Vence:"]') }
    get descripVenceDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/expireTimetTxt"]') }
    get txtExpiraInformativo() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textExpireLbl"]') }
    get btnContinuarVerificacion() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }

    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get masoptionsMenu() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Más\nopciones' or . = 'Más\nopciones')]") }
    get masoptiondashboard() { return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[3]/android.view.View[4]") }
    get codigocashcuenta() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Código\ncash' or . = 'Código\ncash')]") }
    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }


    async validate(): Promise<void> {
        await expect(this.title).toBeDisplayed();
        // await expect(this.imgCodigoCash).toBeDisplayed();
        // await expect(this.txtMsgIntro1).toBeDisplayed();
        // await expect(this.txtMsgIntro2).toBeDisplayed();
        // await expect(this.txtActivosHeader).toBeDisplayed();
        // await expect(this.txtUtilizadosHeader).toBeDisplayed();
        // await expect(this.btnGenerarCodigo).toBeDisplayed();
    }

    async selectGenerarCodigoBtn() {
        (await this.btnGenerarCodigo).click();
    }

    async validateGenerarCodigoScreeen() {
        // await expect(this.titleGenerarCodigo).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        await expect(this.txtSelecciona).toBeDisplayed();
        await expect(this.txtCedulaBeneficiario).toBeDisplayed();
        await expect(this.editCedulaBeneficiario).toBeDisplayed();
        await expect(this.txtMsgInformativo).toBeDisplayed();
        await expect(this.txtMonto).toBeDisplayed();
        await expect(this.txtCurrencyMonto).toBeDisplayed();
        await expect(this.txtMontoValue).toBeDisplayed();
        await expect(this.imgMinusSeekBar).toBeDisplayed();
        await expect(this.rangeSeekBar).toBeDisplayed();
        await expect(this.imgPlusSeekBar).toBeDisplayed();
        await expect(this.tooltipLimiteRetiroIcon).toBeDisplayed();
        await expect(this.txtLimiteRetiroMsg).toBeDisplayed();
        await expect(this.btnCancelar).toBeDisplayed();
        // await expect(this.btnContinuar).toBeDisabled();

    }

    async selectSelecciona() {
        (await this.txtSelecciona).click();
    }

    async validateAccountListScreen() {
        await expect(this.titleAccountList).toBeDisplayed();
        await expect(this.itemsAccountList).toBeDisplayed();
    }

    async SelectCodigoCashCuentaDashboard() {
        // await expect(this.masoptiondashboard).toBeDisplayed();
        // (await (this.masoptiondashboard)).click();
        await expect(this.masoptionsMenu).toBeDisplayed();
        (await (this.masoptiondashboard)).click();
        await expect(this.codigocashcuenta).toBeDisplayed();
        (await (this.codigocashcuenta)).click();
    }

    async selectFirsAccount() {
        (await this.firstAccount).click();
    }

    async enterCedulaBeneficiario(cedulaBeneficiario: string) {
        await expect(this.editCedulaBeneficiario).toBeDisplayed();
        (await this.editCedulaBeneficiario).addValue(cedulaBeneficiario);
    }

    async selectContinuarBtn() {
        (await this.btnContinuar).click();
    }

    async validateVerificacionScreen() {
        await expect(this.titleVerificacion).toBeDisplayed();
        await expect(this.txtMontoVerificacion).toBeDisplayed();
        await expect(this.descripMontoVerificacion).toBeDisplayed();
        await expect(this.txtDesdeCuentaVerificacion).toBeDisplayed();
        await expect(this.descripDesdeCuentaVerificacion).toBeDisplayed();
        await expect(this.txtCedulaBeneficiarioVerificacion).toBeDisplayed();
        await expect(this.descripCedulaBeneficiarioVerificacion).toBeDisplayed();
        await expect(this.txtVenceDescripcion).toBeDisplayed();
        await expect(this.descripVenceDescripcion).toBeDisplayed();
        await expect(this.txtExpiraInformativo).toBeDisplayed();

    }

    async selectContinuarBtnOnVerificacion() {
        await expect(this.btnContinuarVerificacion).toBeDisplayed();
        (await this.btnContinuarVerificacion).click();
    }



    async typeTokenPopular(code: string) {
        for (var i = 0; i < 20; i++) {
            if (await (await this.typeCodeField).isDisplayed()) {
                (await this.typeCodeField).clearValue();
                (await this.typeCodeField).setValue(code);
                break;
            }

        }

    }


    async selectContinuarBtnOnTokenScreen() {
        for (var i = 0; i < 20; i++) {
            if (await (await this.typeCodeField).isDisplayed()) {
                await expect(this.continuarBtnTokenPopular).toBeDisplayed();
                (await this.continuarBtnTokenPopular).click();
                break;
            }
        }
    }

    async VerifyComprobanteScreen() {
        await expect(this.titleComprobante).toBeDisplayed();
    }


}
export default new CodigoCashPage();