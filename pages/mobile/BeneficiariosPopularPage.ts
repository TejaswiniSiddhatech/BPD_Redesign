import commonsPage from "./commonsPage";
import Page from "./page";


class BeneficiariosPopularPage extends Page {

    get beneficiariosTitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblTitle"]') }
    get adicionarBtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnAddBeneficiary"]') }
    get beneficiarioSearchField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/benefiacrytSearch"]') }
    get cuentaTercerosTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtHeader"]') }

    get tipoBeneficiarioTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView4"]') }
    get seleccioneTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryTipo"]') }
    get cuentaContratoTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccno"]') }
    get cuentaContratoField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editAccno"]') }
    get aliasTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAlias"]') }
    get aliasField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editAlias"]') }
    get correoTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmail"]') }
    get correoField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editEmail"]') }
    get cancelarBtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancelar"]') }
    get continuarBtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }

    get seleccioneTipoBeneficiarioTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView1"]') }
    get benefeciarioType() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBenType"]') }
    get cuentaTercerosTxtBenType() { return $('//android.widget.TextView[@text="Cuentas de terceros"]') }
    get prestamoBancoTxtBenType() { return $('//android.widget.TextView[@text="Préstamo Banco Popular"]') }
    get TarjetaRDTxtBenType() { return $('//android.widget.TextView[@text="Tarjeta del Popular RD$"]') }
    get TajetaBankTxtBenType() { return $('//android.widget.TextView[@text="Tarjeta del Popular Bank"]') }
    get TarjetaUSDTxtBenType() { return $('//android.widget.TextView[@text="Tarjeta del Popular US$"]') }

    get confirmacionTitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textConfirmMsg"]') }
    get tipoBeneficiarioTxtConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView3"]') }
    get tipoBeneficiarioDescripConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiarioType"]') }
    get cuentaContratoTxtConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView5"]') }
    get cuentaContratoDescripConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryCuenta"]') }
    get nombreTxtConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView7"]') }
    get nombreDescripConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtNombre"]') }
    get aliasTxtConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView11"]') }
    get aliasDescripConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAlias"]') }
    get correoTxtConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView9"]') }
    get correoDescripConf() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmail"]') }
    get cancelarBtnConf() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancelar"]') }
    // get continuarBtnConf() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }

    get tokenPopularDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTokenMessage"]') }
    // get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    // get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get checkImgComprobante() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgSuccess"]') }
    get comprobanteDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiarySuccess"]') }

    get lblTipoBeneficiarioComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView3"]') }
    get tipoBeneficiarioDescripComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiarioType"]') }
    get lblCuentaContratoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView5"]') }
    get cuentaContratoDescripComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccno"]') }
    get lblNombreComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView7"]') }
    get nombreComprobanteDescrip() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtNombre"]') }
    get lblAliasComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView11"]') }
    get aliasDescripComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAlias"]') }
    get lblCorreoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView9"]') }
    get correoDescripComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmail"]') }
    get btnRealizarPago() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/btnFinal"]') }
    get btnFinalizar() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnRealizarPago"]') }

    get identidaddescription() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/screenMessage"]') }
    get termsconditioncheckbox() { return $('//android.widget.CheckBox[@resource-id="com.popular.app.android:id/checkboxTerms"]') }
    get termscondtiondescription() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/acceptTermMsg"]') }
    get atrasbtn() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBackAction"]') }
    get identidadcontinarbtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }
    // get androidlayout() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/mainLayout"]') }
    get androidlayout() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/topLayout' and (@text = '' or . = '')]") }

    get confirmationdeidentidadtitle() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/mainLayout"]') }
    get menuicon() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgMenu"]') }
    get Iriniciomenu() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblListHeader" and @text="Ir al inicio"]') }

    get reuirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get requirementecontinuarbtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get EditTokenvalidation() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get txtDescripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get typeCodeField() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    get continuarBtnTokenPopular() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }

    async validate(): Promise<void> {
        (await this.beneficiariosTitle).waitForDisplayed({ timeout: 40000 });
        await expect(await this.beneficiariosTitle).toBeDisplayed()
        await commonsPage.validateElement("Adicionar")
        await expect(await this.beneficiarioSearchField).toBeDisplayed();
    }

    async gotodashboard() {
        (await this.menuicon).waitForDisplayed({ timeout: 40000 });
        (await this.menuicon).click();
        await expect(this.Iriniciomenu).toBeDisplayed();
        (await this.Iriniciomenu).click();
    }

    async selectAdicionarBtn() {
        await expect(this.adicionarBtn).toBeDisplayed();
        (await this.adicionarBtn).click();
    }

    async selectBeneficiarioSearch() {
        await expect(this.seleccioneTxt).toBeDisplayed();
        (await this.seleccioneTxt).click();
    }

    async selectBeneficiarioType(type: string) {
        await expect(this.benefeciarioType).toBeDisplayed();
        (await this.benefeciarioType).forEach(async (element) => {
            if ((await element.getAttribute('text')) == type) {
                await element.click();
            }
        });
    }

    async typeAccountNro(accountNro: string) {
        await expect(this.cuentaContratoField).toBeDisplayed();
        (await this.cuentaContratoField).addValue(accountNro);
    }

    async typeAlias(alias: string) {
        await expect(this.aliasField).toBeDisplayed();
        (await this.aliasField).addValue(alias);
    }

    async typeEmail(email: string) {
        await expect(this.correoField).toBeDisplayed();
        (await this.correoField).addValue(email);
    }

    async selectContinuarBtn() {
        await expect(this.continuarBtn).toBeDisplayed();
        (await this.continuarBtn).click();
    }

    async selectContinuarBtnOnVerificacionScreen() {
        (await this.continuarBtn).waitForDisplayed({ timeout: 40000 });

        // await expect(this.continuarBtnConf).toBeDisplayed();
        // (await this.continuarBtnConf).click();
        await expect(this.continuarBtn).toBeDisplayed();
        (await this.continuarBtn).click();
    }

    // async typeTokenPopular(code: string) {
    //     await expect(this.typeCodeField).toBeDisplayed();
    //     (await this.typeCodeField).clearValue();
    //     (await this.typeCodeField).setValue(code);

    // }




    async typeTokenPopular(tokenPopularCode: string) {
        for (var i = 0; i < 50; i++) {
            if (await (await this.EditTokenvalidation).isDisplayed()) {
                await expect(this.EditTokenvalidation).toBeDisplayed();
                await (await this.EditTokenvalidation).clearValue();
                await (await this.EditTokenvalidation).setValue(tokenPopularCode);
                await this.selectBtnContinuarOnPopularTokenScreen();
                break;
            }
        }

    }

    async selectBtnContinuarOnPopularTokenScreen() {
        await (await this.continuarBtnTokenPopular).waitForDisplayed()
        await (await this.continuarBtnTokenPopular).waitForEnabled();
        (await this.continuarBtnTokenPopular).click();
    }



    async validateCONFIRMACIÓNDEIDENTIDAD() {
        // (await this.confirmationdeidentidadtitle).waitForDisplayed({ timeout: 40000 });
        (await this.termscondtiondescription).waitForDisplayed({ timeout: 40000 });
        //(await this.identidaddescription).waitForDisplayed({ timeout: 60000 });
        (await this.continuarBtn).waitForDisplayed({ timeout: 9000 });
        // (await this.atrasbtn).waitForDisplayed({ timeout: 60000 });
        //(await this.atrasbtn).click();

    }

    // async selectContinuarBtnOnTokenScreen() {
    //     (await this.continuarBtn).waitForDisplayed({ timeout: 40000 });
    //     (await this.continuarBtn).click();
    //     // await expect(this.continuarBtnTokenPopular).toBeDisplayed();
    //     // (await this.continuarBtnTokenPopular).click();
    // }

    async verifyrequirementerror() {
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 50000 });
        const msg = await (await this.reuirementerrormsg).getText();
        console.log('Verifying Requirement Error : ' + msg)
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 1000 });
        // (await this.requirementecontinuarbtn).click();

    }

    async validateComprobanteBenefiScreen() {
        (await this.titleComprobante).waitForDisplayed({ timeout: 50000 });
        await expect(this.checkImgComprobante).toBeDisplayed();
        await expect(this.lblTipoBeneficiarioComprobante).toBeDisplayed();
        await expect(this.tipoBeneficiarioDescripComprobante).toBeDisplayed();
        await expect(this.lblCuentaContratoComprobante).toBeDisplayed();
        await expect(this.cuentaContratoDescripComprobante).toBeDisplayed();
        await expect(this.lblNombreComprobante).toBeDisplayed();
        await expect(this.nombreComprobanteDescrip).toBeDisplayed();
        await expect(this.lblAliasComprobante).toBeDisplayed();
        await expect(this.aliasDescripComprobante).toBeDisplayed();
        await expect(this.lblCorreoComprobante).toBeDisplayed();
        await expect(this.correoDescripComprobante).toBeDisplayed();
        await expect(this.btnRealizarPago).toBeDisplayed();
        await expect(this.btnFinalizar).toBeDisplayed();
    }

}
export default new BeneficiariosPopularPage();