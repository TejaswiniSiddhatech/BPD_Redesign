import Page from "./page";


class BeneficiariosServiciosFacturas extends Page {

    get beneficiariosServiciosFacturasTitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblTitle"]') }
    get adicionarBtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnAddBeneficiary"]') }

    get txtCategoria() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/categorylbl"]') }
    get lblSeleccione() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtSelectCategory"]') }

    get txtSeleccioneCategoria() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiary"]') }
    get searchField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/benefiaciarySearch"]') }
    get txtCategoriasList() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/benefiaciarySearch"]') }
    get itemsCategoriaList() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryType"]') }

    get txtDetalleBeneficiario() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/subCategorylbl"]') }
    get lblSeleccioneNombreEmpresa() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtSelectSubCategory"]') }
    get txtSeleccioneEmpresa() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtListTitle"]') }
    get itemEmpresaList() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryType"]') }

    get txtNumeroContrato() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/contractolbl"]') }
    get fieldNroContrato() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editContracto"]') }
    get txtAlias() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAlias"]') }
    get fieldAlias() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editAlias"]') }
    get txtCorreoElectronico() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmail"]') }
    get fieldCorreoElectronico() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editEmail"]') }
    get btnCancelar() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBackAction"]') }
    get btnContinuar() { return $('//android.widget.Button[@text="Continuar"]') }

    get verificacionTitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textConfirmMsg"]') }
    get txtNombreEmpresa() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/beneficiaryNamelbl"]') }
    get detalleNombreEmpresa() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryName"]') }
    get txtNroContrato() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/serviceIdlbl"]') }
    get detalleNroContrato() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtServiceId"]') }
    get txtAliasVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/aliaslbl"]') }
    get detalleAliasVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAlias"]') }
    get txtCorreoElectronicoVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmailId"]') }
    get detalleCorreoElectronicoVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtEmail"]') }
    get btnCancelarVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBackAction"]') }
    get btnContinuarVerificacionScreen() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }

    get tokenPopularDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTokenMessage"]') }
    // get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    // get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    // get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get titleComprobante() { return $('//android.widget.TextView[@text="confirmación"]') }
    get checkImgComprobante() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgSuccess"]') }
    get lblNombreEmpresaComprobante() { return $('//android.widget.TextView[@text="Nombre de empresa:"]') }
    get descripNombreEmpresaComprobante() { return $('') }
    get lblNroCuentaComprobanteBene() { return $('//android.widget.TextView[@text="Número de contrato:"]') }
    get descripNroCuentaComprobanteBene() { return $('') }
    get lblAliasComprobanteBene() { return $('//android.widget.TextView[@text="Alias:"]') }
    get descripAliasComprobanteBene() { return $('') }
    get lblCorreoElecComprobanteBene() { return $('//android.widget.TextView[@text="Correo electrónico:"]') }
    get descripCorreoElecComprobanteBene() { return $('') }
    // get btnContinuarComprobanteBene() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }

    // get identidaddescription() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/screenMessage"]') }
    // get termsconditioncheckbox() { return $('//android.widget.CheckBox[@resource-id="com.popular.app.android:id/checkboxTerms"]') }
    get termscondtiondescription() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/acceptTermMsg"]') }
    // get atrasbtn() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBackAction"]') }
    // get identidadcontinarbtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }
    // get androidlayout() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/mainLayout"]') }
    // get confirmationdeidentidadtitle() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/mainLayout"]') }
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
        await expect(this.beneficiariosServiciosFacturasTitle).toBeDisplayed();
        await expect(this.adicionarBtn).toBeDisplayed();
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





    async selectAdicionarBtn() {
        (await this.adicionarBtn).click();
    }

    async selectSeleccioneOpt() {
        await expect(this.lblSeleccione).toBeDisplayed();
        (await this.lblSeleccione).click();
    }

    async selectCategory(categorySelected: string) {
        await expect(this.txtSeleccioneCategoria).toBeDisplayed();
        await expect(this.searchField).toBeDisplayed();
        await expect(this.txtCategoriasList).toBeDisplayed();
        await expect(this.itemsCategoriaList).toBeDisplayed();
        (await this.itemsCategoriaList).forEach(async (element) => {
            if ((await element.getAttribute('text')) == categorySelected) {
                await element.click();
            }
        });
    }

    async selectSeleccioneEmpresa() {
        await expect(this.txtDetalleBeneficiario).toBeDisplayed();
        await expect(this.lblSeleccioneNombreEmpresa).toBeDisplayed();
        (await this.lblSeleccioneNombreEmpresa).click();
    }

    async selectEmpresa(empresaSelected: string) {
        await expect(this.txtSeleccioneEmpresa).toBeDisplayed();
        await expect(this.itemEmpresaList).toBeDisplayed();
        (await this.itemEmpresaList).forEach(async (element) => {
            if ((await element.getAttribute('text')) == empresaSelected) {
                await element.click();
            }
        });
    }

    async enterNroContrato(nroContrato: string) {
        await expect(this.txtNumeroContrato).toBeDisplayed();
        await expect(this.fieldNroContrato).toBeDisplayed();
        (await this.fieldNroContrato).addValue(nroContrato);
    }

    async enterAlias(alias: string) {
        await expect(this.txtAlias).toBeDisplayed();
        await expect(this.fieldAlias).toBeDisplayed();
        (await this.fieldAlias).addValue(alias);
    }

    async enterCorreoElectronico(correoElectronico: string) {
        // browser.execute('mobile: performEditorAction', { action: 'done' });

        // (await this.androidlayout).click();
        await expect(this.txtCorreoElectronico).toBeDisplayed();
        await expect(this.fieldCorreoElectronico).toBeDisplayed();
        (await this.fieldCorreoElectronico).addValue(correoElectronico);
    }

    async selectContinuarBtn() {
        await expect(this.btnContinuar).toBeDisplayed();
        (await this.btnContinuar).click();
    }

    async selectCancelarBtn() {
        await expect(this.btnCancelar).toBeDisplayed();
        (await this.btnCancelar).click();
    }

    async validateVerificacionScreen() {
        (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.txtNombreEmpresa).toBeDisplayed();
        await expect(this.detalleNombreEmpresa).toBeDisplayed();
        await expect(this.txtNroContrato).toBeDisplayed();
        await expect(this.detalleNroContrato).toBeDisplayed();
        await expect(this.txtAliasVerificacionScreen).toBeDisplayed();
        await expect(this.detalleAliasVerificacionScreen).toBeDisplayed();
        await expect(this.txtCorreoElectronicoVerificacionScreen).toBeDisplayed();
        await expect(this.detalleCorreoElectronicoVerificacionScreen).toBeDisplayed();
        await expect(this.btnCancelarVerificacionScreen).toBeDisplayed();
        await expect(this.btnContinuarVerificacionScreen).toBeDisplayed();
    }

    async selectContinuarBtnVerificacionScreen() {
        (await this.btnContinuarVerificacionScreen).waitForDisplayed({ timeout: 40000 });
        await expect(this.btnContinuarVerificacionScreen).toBeDisplayed();
        (await this.btnContinuarVerificacionScreen).click();
    }

    async selectCancelarBtnVerificacionScreen() {
        await expect(this.btnCancelarVerificacionScreen).toBeDisplayed();
        (await this.btnCancelarVerificacionScreen).click();
    }

    // async typeTokenPopular(code: string) {
    //     (await this.typeCodeField).waitForDisplayed({ timeout: 40000 });
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
        // (await this.confirmationdeidentidadtitle).waitForDisplayed({ timeout: 60000 });
        // (await this.termscondtiondescription).waitForDisplayed({ timeout: 60000 });
        // (await this.identidaddescription).waitForDisplayed({ timeout: 60000 });
        (await this.btnContinuar).waitForDisplayed({ timeout: 9000 });
        // (await this.atrasbtn).waitForDisplayed({ timeout: 60000 });
        // (await this.atrasbtn).click();

    }

    // async selectContinuarBtnOnTokenScreen() {
    //     await expect(this.continuarBtnTokenPopular).toBeDisplayed();
    //     (await this.continuarBtnTokenPopular).click();
    // }

    async validateComprobanteScreen() {
        (await this.titleComprobante).waitForDisplayed({ timeout: 50000 });
        await expect(this.checkImgComprobante).toBeDisplayed();
        await expect(this.lblNombreEmpresaComprobante).toBeDisplayed();
        await expect(this.descripNombreEmpresaComprobante).toBeDisplayed();
        await expect(this.lblNroCuentaComprobanteBene).toBeDisplayed();
        await expect(this.descripNroCuentaComprobanteBene).toBeDisplayed();
        await expect(this.lblAliasComprobanteBene).toBeDisplayed();
        await expect(this.lblCorreoElecComprobanteBene).toBeDisplayed();
        await expect(this.descripCorreoElecComprobanteBene).toBeDisplayed();
        await expect(this.lblAliasComprobanteBene).toBeDisplayed();
        await expect(this.descripAliasComprobanteBene).toBeDisplayed();
        await expect(this.btnContinuarVerificacionScreen).toBeDisplayed();
    }

}
export default new BeneficiariosServiciosFacturas();