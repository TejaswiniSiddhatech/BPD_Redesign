import Page from "./page";


class BeneficiarioOtrosBancosPage extends Page {

    get entidadFinancieraTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/financialEntityLbl"]') }
    get seleccioneEntidadFinancieraTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtFinancialEntity"]') }

    get entidadFinancieraSearchField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/benefiacrytSearch"]') }
    get entidadFinancieraResults() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryType"]') }

    get tipoBeneficiarioTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/benTypeLbl"]') }
    get tipoBenLayout() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/benTypelayout"]') }

    get typeBeneficario() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryType"]') }

    get nroCuentaTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/accountNumberLbl"]') }
    get nroCuentaField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editAccountNumber"]') }
    get docIdentidadTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/benIdentityLbl"]') }
    get docIdentidadField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editBenIdentity"]') }
    get pasaporteOption() { return $('(//android.widget.ImageView[@content-desc="image resource"])[6]') }
    get cedulaOption() { return $('(//android.widget.ImageView[@content-desc="image resource"])[5]') }
    get pasaporteTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtPasaporte"]') }
    get cedulaTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtCedula"]') }

    get nombreBeneficiarios() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtPassportBen"]') }
    get nombreBeneficiarioField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editPassportBen"]') }
    get aliasTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAlias"]') }
    get aliasField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editAlias"]') }
    get correoTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmail"]') }
    get correoField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editEmail"]') }

    get btnContinuar() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }
    get btnCancelar() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancel"]') }

    get validacionDatosTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/validateMessage"]') }
    get validacionDatosDescrip() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/documentNoMessage"]') }
    get nombrePropietario() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/beneficiaryName"]') }
    get instruccionMensajeTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/InstructionMessage"]') }
    get acceptTermCheckbox() { return $('//android.widget.FrameLayout[@resource-id="com.popular.app.android:id/checkBoxLayout"]') }
    // get acceptTermDescrip() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/acceptTermMsg"]') }
    get btnCancelarValidacion() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancel"]') }
    get btnContinuarValidacion() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }
    get msjIntruccion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtInstruction"]') }

    get verificacionTitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView2"]') }
    get tipoBeneficiariotxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textBenType"]') }
    get tipoBeneficiarioVeriDescrip() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBenType"]') }
    get nroCuentaVeritxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textAccountNumber"]') }
    get nroCuentaVeriDescrip() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountNumber"]') }
    get entidadFinancieratxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textBankName"]') }
    get nombreTxtVeri() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textNombre"]') }
    get nombreDescripVeri() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtNombre"]') }
    get aliasTxtVeri() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textAlias"]') }
    get aliasDescripVeri() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAlias"]') }
    get tipoDocTxtVeri() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textDocType"]') }
    get tipoDocDescripVeri() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDocType"]') }
    get nroDocTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textDocNumber"]') }
    get nroDocDescrip() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDocNumber"]') }
    get correotxtVeri() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textEmail"]') }
    get correoDescripVeri() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmail"]') }
    get btnCancelarVeri() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancelar"]') }
    get btnContinuarVeri() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }

    // get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    // get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get checkImgComprobante() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgSuccess"]') }
    get lblTipoBeneficiarioComprobanteOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textBenType"]') }
    get descripTipoBeneComprobanteOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBenType"]') }
    get lblNroCuentaComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textAccountNumber"]') }
    get descripNroCuentaComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountNumber"]') }
    get lblEntidadFinancieraComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textBankName"]') }
    get descripEntidadFinancieraComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBankName"]') }
    get lblNombreComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textNombre"]') }
    get descripNombreComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtNombre"]') }
    get lblAliasComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textAlias"]') }
    get descripAliasComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAlias"]') }
    get lblTipoDocComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textDocType"]') }
    get descripTipoDocComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDocType"]') }
    get lblNroDocComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textDocNumber"]') }
    get descripNroDocComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDocNumber"]') }
    get lblCorreoComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textEmail"]') }
    get descripCorreoComprobanteBeneOB() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmail"]') }
    // get btnContinuarComprobanteBeneOB() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }

    get confirmationdeidentidadtitle() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/mainLayout"]') }

    get identidaddescription() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/screenMessage"]') }
    get termsconditioncheckbox() { return $('//android.widget.CheckBox[@resource-id="com.popular.app.android:id/checkboxTerms"]') }
    get termscondtiondescription() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/acceptTermMsg"]') }
    get atrasbtn() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBackAction"]') }
    get identidadcontinarbtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }
    get selectandroidview() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/topLayout' and (@text = '' or . = '')]") }
    get menuicon() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgMenu"]') }
    get Iriniciomenu() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblListHeader" and @text="Ir al inicio"]') }

    get reuirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get requirementecontinuarbtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get EditTokenvalidation() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get txtDescripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get typeCodeField() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    get continuarBtnTokenPopular() { return $("//*[@class = 'android.widget.Button' and (@text = 'Continuar' or . = 'Continuar') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }


    async validate(): Promise<void> {
    }


    async verifyrequirementerror() {
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 50000 });
        const msg = await (await this.reuirementerrormsg).getText();
        console.log('Verifying Requirement Error : ' + msg)
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 60000 });
        // (await this.requirementecontinuarbtn).click();

    }

    async gotodashboard() {
        (await this.menuicon).waitForDisplayed({ timeout: 40000 });
        (await this.menuicon).click();
        await expect(this.Iriniciomenu).toBeDisplayed();
        (await this.Iriniciomenu).click();
    }

    async selectEntidadFinanciera() {
        await expect(this.seleccioneEntidadFinancieraTxt).toBeDisplayed();
        (await this.seleccioneEntidadFinancieraTxt).click();
    }

    async searchEntidadFinanciera(entidadFinancieraSelected: string) {
        await expect(this.entidadFinancieraSearchField).toBeDisplayed();
        (await this.entidadFinancieraSearchField).addValue(entidadFinancieraSelected);
    }


    async selectEntidadFinancieraFromResults(entidadFinancieraSelected: string) {
        await expect(this.entidadFinancieraResults).toBeDisplayed();
        (await this.entidadFinancieraResults).forEach(async (element) => {
            if ((await element.getAttribute('text')) == entidadFinancieraSelected) {
                await element.click();
            }
        });
    }

    async selectTipoBeneficiarioOption() {
        await expect(this.tipoBenLayout).toBeDisplayed();
        (await this.tipoBenLayout).click();
    }

    async selectTipoBeneficiarioFromList(tipoBeneficarioSelected: string) {
        await expect(this.typeBeneficario).toBeDisplayed();
        (await this.typeBeneficario).forEach(async (element) => {
            if ((await element.getAttribute('text')) == tipoBeneficarioSelected) {
                await element.click();
            }
        });
    }

    async typeAccountNroOtroBancos(nroCuenta: string) {
        await expect(this.nroCuentaField).toBeDisplayed();
        (await this.nroCuentaField).addValue(nroCuenta);
    }

    async typeDocIdentidad(docIdentidad: string) {
        await expect(this.docIdentidadField).toBeDisplayed();
        (await this.docIdentidadField).click();
        (await this.docIdentidadField).addValue(docIdentidad);
        // (await this.docIdentidadField).setValue("02301169864");
        // await expect(this.docIdentidadField).toBeDisplayed();
    }

    async selectTipoDocIdentidad(tipoDocIdentidad: string) {
        await expect(this.pasaporteOption).toBeDisplayed();
        await expect(this.cedulaOption).toBeDisplayed();

        // let cedula = (await this.cedulaTxt).getAttribute('text');

        // if(tipoDocIdentidad == 'Pasaporte'){
        //     (await this.pasaporteOption).click();
        // }else if (tipoDocIdentidad = 'Cédula') {
        //     (await this.cedulaOption).click();
        // }
    }

    async typeAliasOtrosBancos(alias: string) {
        (await this.aliasField).waitForDisplayed({ timeout: 40000 });
        // await expect(this.aliasField).toBeDisplayed();
        (await this.aliasField).addValue(alias);
        (await this.selectandroidview).click();
    }

    async typeCorreoOtrosBancos(correo: string) {
        (await this.btnContinuarVeri).waitForDisplayed({ timeout: 40000 });
        await expect(this.correoField).toBeDisplayed();
        (await this.correoField).addValue(correo);
        await this.selectandroidview.click();
    }

    async selectContinarOtroBancos() {
        (await this.btnContinuar).waitForDisplayed({ timeout: 40000 });
        (await this.btnContinuar).click();
    }

    async selectCheckboxTerms() {
        (await this.acceptTermCheckbox).waitForDisplayed({ timeout: 40000 });
        await expect(this.acceptTermCheckbox).toBeDisplayed();
        (await this.acceptTermCheckbox).click();
    }

    async selectContinuarBtnValidacionDatos() {
        (await this.btnContinuarVeri).waitForDisplayed({ timeout: 40000 });
        (await this.btnContinuarValidacion).click();
    }

    async selectContinuarBtnVerificacionOB() {
        (await this.btnContinuarVeri).waitForDisplayed({ timeout: 40000 });
        (await this.btnContinuarVeri).click();
        // await expect(this.btnContinuarVeri).toBeDisplayed();
        // (await this.btnContinuarVeri).click();
    }

    // async typeTokenPopular(code: string) {
    //     (await this.typeCodeField).waitForDisplayed({ timeout: 40000 });
    //     await expect(this.typeCodeField).toBeDisplayed();
    //     (await this.typeCodeField).clearValue();
    //     (await this.typeCodeField).setValue(code);

    // }



    async typeTokenPopular(tokenPopularCode: string) {
        const tokenfield = await this.EditTokenvalidation;
        for (var i = 0; i < 50; i++) {
            if (await (await tokenfield).isDisplayed()) {
                await (await tokenfield).clearValue();
                await (await tokenfield).setValue(tokenPopularCode);
                await this.selectBtnContinuarOnPopularTokenScreen();
                break;
            }
        }
    }


    async selectBtnContinuarOnPopularTokenScreen() {
        await (await this.continuarBtnTokenPopular).waitForDisplayed();
        await (await this.continuarBtnTokenPopular).waitForEnabled();
        (await this.continuarBtnTokenPopular).click();
    }

    async validateCONFIRMACIÓNDEIDENTIDAD() {
        (await this.confirmationdeidentidadtitle).waitForDisplayed({ timeout: 40000 });
        // (await this.termscondtiondescription).waitForDisplayed({ timeout: 9000 });
        //(await this.identidaddescription).waitForDisplayed({ timeout: 60000 });
        // (await this.identidadcontinarbtn).waitForDisplayed({ timeout: 9000 });
        await expect(this.atrasbtn).toBeDisplayed();

        //  (await this.atrasbtn).waitForDisplayed({ timeout: 60000 });
        // (await this.atrasbtn).click();

    }

    async selectContinuarBtnOnTokenScreen() {
        (await this.continuarBtnTokenPopular).waitForDisplayed({ timeout: 40000 });
        //   await expect(this.continuarBtnTokenPopular).toBeDisplayed();
        (await this.continuarBtnTokenPopular).click();
    }

    async validateComprobanteBenefiOtrosBancosScreen() {
        (await this.titleComprobante).waitForDisplayed({ timeout: 50000 });
        await expect(this.checkImgComprobante).toBeDisplayed();
        await expect(this.lblTipoBeneficiarioComprobanteOB).toBeDisplayed();
        await expect(this.descripTipoBeneComprobanteOB).toBeDisplayed();
        await expect(this.lblNroCuentaComprobanteBeneOB).toBeDisplayed();
        await expect(this.descripNroCuentaComprobanteBeneOB).toBeDisplayed();
        await expect(this.lblEntidadFinancieraComprobanteBeneOB).toBeDisplayed();
        await expect(this.descripEntidadFinancieraComprobanteBeneOB).toBeDisplayed();
        await expect(this.lblNombreComprobanteBeneOB).toBeDisplayed();
        await expect(this.descripNombreComprobanteBeneOB).toBeDisplayed();
        await expect(this.lblAliasComprobanteBeneOB).toBeDisplayed();
        await expect(this.descripAliasComprobanteBeneOB).toBeDisplayed();
        await expect(this.lblTipoDocComprobanteBeneOB).toBeDisplayed();
        await expect(this.descripTipoDocComprobanteBeneOB).toBeDisplayed();
        await expect(this.lblNroDocComprobanteBeneOB).toBeDisplayed();
        await expect(this.descripNroDocComprobanteBeneOB).toBeDisplayed();
        await expect(this.lblCorreoComprobanteBeneOB).toBeDisplayed();
        await expect(this.descripCorreoComprobanteBeneOB).toBeDisplayed();
        await expect(this.btnContinuarVeri).toBeDisplayed();
    }
}
export default new BeneficiarioOtrosBancosPage();