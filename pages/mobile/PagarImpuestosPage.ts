import Page from "./page";


class PagarImpuestosPage extends Page {


    get title() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblTitle"]') }
    get backBtn() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgcuenta"]') }

    get txtInstitucionBeneficiaria() { return $('//android.widget.TextView[@text="Institución beneficiaria:"]') }
    get lblInstitucionBeneficiaria() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout[1]/android.widget.RelativeLayout') }
    get btnCancelar() { return $('//android.widget.TextView[@text="Cancelar"]') }
    get btnContinuar() { return $('//android.widget.Button[@text="Continuar"]') }


    get descripcionInstitucionBeneficiariaList() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtListTitle"]') }
    get itemsInstitucionBeneficiariaList() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryType"]') }

    get txtNroReferencia() { return $('//android.widget.TextView[@text="Número de referencia y/o RNC:"]') }

    get lblNroReferencia() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/txtRefNumber"]') }



    get txtIntitucionBeneficiaria() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/institutionBenLbl"]') }
    get descripInstitucionBeneficiaria() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBenInstitution"]') }
    get txtNroReferenciaDetalleScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/referenceNumberLbl"]') }
    get descripNroReferenciaDetalleScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtReferenceNumber"]') }
    get informacionNroReferenciaDetalleScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtProvidedInfo"]') }
    get txtNombreContribuyente() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/taxPayerLbl"]') }
    get descripNombreContribuyente() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTaxPayer"]') }
    get txtMontoDetalleScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/amountLbl"]') }
    get descripMontoDetalleScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAmount"]') }
    get imgFlechaVerMasDetalle() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/detailsActionImg"]') }
    get txtVerMasDetalle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/detailsStatus"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/desdeAccountLbl"]') }
    get lblDesdeCuenta() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/selFromAccount"]') }
    get btnCancelarDetalleScreen() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/buttonCancel"]') }
    get btnContinuaDetalleScreen() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/buttonContinue"]') }


    get titleAccountList() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountTypesTitle"]') }
    get firstAccount() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout') }

    get itemsAccountList() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtaccType"]') }



    get titleConfirmacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/confirmationTxt"]') }
    get txtAmountConfirmacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDestinoAmount"]') }
    get txtInstitucionBeneficiariaConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textTaxEntity"]') }
    get descripInstitucionBeneficiariaConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTaxEntity"]') }
    get txtNroReferenciaConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textReferenceNumber"]') }
    get descripNroReferenciaConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtReferenceNumber"]') }
    get txtNombreContribuyenteConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textTaxPayer"]') }
    get descripNombreContribuyenteConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTaxPayer"]') }
    get txtRncCedula() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewRNC"]') }
    get descripRncCedula() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtRNC"]') }
    get txtFechaReferencia() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewFecha"]') }
    get descripFechaReferencia() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtFecha"]') }
    get txtMontoConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewMonto"]') }
    get descripMontoConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtMonto"]') }
    get txtDesdeCuentaConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewDesde"]') }
    get descripDesdeCuentaConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDesde"]') }
    get txtFechaPagoConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewFechaDePago"]') }
    get descripFechaPagoConfirmacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtFechaDePago"]') }
    get btnCancelarConfirmacionScreen() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancelar"]') }
    get btnContinuarConfirmacionScreen() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }





    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get checkImgComprobante() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgSuccess"]') }
    get montoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTaxAmount"]') }
    get descripcionComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtReqProcess"]') }
    get lblInstitucionBeneficiariaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewTaxEntity"]') }
    get descripInstitucionBeneficiariaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textTaxEntity"]') }
    get lblNroReferenciaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textRefNoLbl"]') }
    get descripNroReferenciaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textRefNo"]') }
    get lblNombreContribuyenteComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewTaxPayer"]') }
    get descripNombreContribuyenteComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTaxPayer"]') }
    get lblRncCedulaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textRNC"]') }
    get descripRncCedulaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtRNC"]') }
    get lblFechaReferenciaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewFechaDeRef"]') }
    get descripFechaReferenciaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtFechaDeRef"]') }
    get lblMontoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textMontoLbl"]') }
    get descripMontoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtMonto"]') }
    get lblDesdeCuentaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textDesdeLbl"]') }
    get descripDesdeCuentaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDesde"]') }
    get lblFechaPagoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textFechaDePagoLbl"]') }
    get descripFechaPagoComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtFechaDePago"]') }
    get btnContinuarComprobante() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }
    get errorMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }

    get desdecuentaacc2() { return $('(//android.widget.TextView[@resource-id="com.popular.app.android:id/textView2"])[2]') }
    get insufficientbalancepop1() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get insufficientbalancecontinuarbtn1() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get menuicon() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgMenu"]') }
    get Iriniciomenu() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblListHeader" and @text="Ir al inicio"]') }



    get Errortxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Error' or . = 'Error') and @resource-id = 'android:id/alertTitle']") }
    get balancedisponibleErrortxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'La cuenta origen no posee balance disponible para realizar esta transacción.' or . = 'La cuenta origen no posee balance disponible para realizar esta transacción.') and @resource-id = 'android:id/message']") }


    async validate(): Promise<void> {
        await expect(this.title).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.txtInstitucionBeneficiaria).toBeDisplayed();
        await expect(this.btnCancelar).toBeEnabled();
        await expect(this.btnContinuar).toBeDisabled();
    }


    async selectpopuperror() {
        await (await this.insufficientbalancepop1).waitForDisplayed({ timeout: 20000 });
        await (await this.insufficientbalancecontinuarbtn1).waitForDisplayed({ timeout: 6000 });
        (await this.insufficientbalancecontinuarbtn1).click();
    }


    async selectdesdeacc2() {
        await (await this.txtDesdeCuenta).waitForDisplayed({ timeout: 50000 });
        (await this.txtDesdeCuenta).click();
        await (await this.itemsAccountList).waitForDisplayed({ timeout: 20000 });
        (await this.desdecuentaacc2).click();
        await expect(this.btnContinuaDetalleScreen).toBeEnabled();
        (await this.btnContinuaDetalleScreen).click();
    }

    async selectSeleccionaInstitucionBeneficiaria() {
        await (await this.lblInstitucionBeneficiaria).waitForDisplayed({ timeout: 50000 });
        (await this.lblInstitucionBeneficiaria).click();
    }

    async validateInstitucionBeneficiariaList() {
        await expect(this.descripcionInstitucionBeneficiariaList).toBeDisplayed();
        await expect(this.itemsInstitucionBeneficiariaList).toBeDisplayed();
    }

    async selectABeneficiaryInstitution(institucionBeneficiaria: string) {
        await expect(this.itemsInstitucionBeneficiariaList).toBeDisplayed();
        (await this.itemsInstitucionBeneficiariaList).forEach(async (element) => {
            if ((await element.getAttribute('text')).includes(institucionBeneficiaria)) {
                await element.click();
            }
        });
    }

    async enterNroReferenciaORnc(nroReferencia: string) {
        await expect(this.lblNroReferencia).toBeDisplayed();
        (await this.lblNroReferencia).addValue(nroReferencia);
    }

    async selectContinuarBtn() {
        await (await this.btnContinuar).waitForDisplayed({ timeout: 50000 });
        await expect(this.btnContinuar).toBeEnabled();
        (await this.btnContinuar).click();
    }

    async validateVerMasDetalleScreen() {
        await expect(this.txtIntitucionBeneficiaria).toBeDisplayed();
        await expect(this.descripInstitucionBeneficiaria).toBeDisplayed();
        await expect(this.txtNroReferenciaDetalleScreen).toBeDisplayed();
        await expect(this.descripNroReferenciaDetalleScreen).toBeDisplayed();
        await expect(this.informacionNroReferenciaDetalleScreen).toBeDisplayed();
        await expect(this.txtNombreContribuyente).toBeDisplayed();
        await expect(this.descripNombreContribuyente).toBeDisplayed();
        await expect(this.txtMontoDetalleScreen).toBeDisplayed();
        await expect(this.descripMontoDetalleScreen).toBeDisplayed();
        await expect(this.imgFlechaVerMasDetalle).toBeDisplayed();
        await expect(this.txtVerMasDetalle).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        await expect(this.lblDesdeCuenta).toBeDisplayed();
        await expect(this.btnCancelarDetalleScreen).toBeDisplayed();
        await expect(this.btnContinuaDetalleScreen).toBeDisplayed();
    }

    async selectSeleccionaDesdeCuenta() {
        await expect(this.lblDesdeCuenta).toBeDisplayed();
        (await this.lblDesdeCuenta).click();
    }

    async validateAccountList() {
        await expect(this.titleAccountList).toBeDisplayed();
        await expect(this.itemsAccountList).toBeDisplayed();
    }

    async selectFirstAccount() {
        await expect(this.firstAccount).toBeDisplayed();
        (await this.firstAccount).click();
    }

    async selectContinuarBtnOnDetalle() {
        await expect(this.btnContinuaDetalleScreen).toBeEnabled();
        (await this.btnContinuaDetalleScreen).click();
    }

    async validateConfirmacionScreen() {
        (await this.titleConfirmacion).waitForDisplayed({ timeout: 50000 });
        await expect(this.titleConfirmacion).toBeDisplayed();
        await expect(this.txtAmountConfirmacion).toBeDisplayed();
        await expect(this.txtInstitucionBeneficiariaConfirmacionScreen).toBeDisplayed();
        await expect(this.descripInstitucionBeneficiariaConfirmacionScreen).toBeDisplayed();
        await expect(this.txtNroReferenciaConfirmacionScreen).toBeDisplayed();
        await expect(this.descripNroReferenciaConfirmacionScreen).toBeDisplayed();
        await expect(this.txtNombreContribuyenteConfirmacionScreen).toBeDisplayed();
        await expect(this.descripNombreContribuyenteConfirmacionScreen).toBeDisplayed();
        await expect(this.txtRncCedula).toBeDisplayed();
        await expect(this.descripRncCedula).toBeDisplayed();
        await expect(this.txtFechaReferencia).toBeDisplayed();
        await expect(this.descripFechaReferencia).toBeDisplayed();
        await expect(this.txtMontoConfirmacionScreen).toBeDisplayed();
        await expect(this.descripMontoConfirmacionScreen).toBeDisplayed();
        await expect(this.txtDesdeCuentaConfirmacionScreen).toBeDisplayed();
        await expect(this.descripDesdeCuentaConfirmacionScreen).toBeDisplayed();
        await expect(this.txtFechaPagoConfirmacionScreen).toBeDisplayed();
        await expect(this.descripFechaPagoConfirmacionScreen).toBeDisplayed();
        await expect(this.btnCancelarConfirmacionScreen).toBeDisplayed();
        await expect(this.btnContinuarConfirmacionScreen).toBeDisplayed();
    }

    async selectContinuarBtnOnConfirmacion() {
        (await this.btnContinuarConfirmacionScreen).waitForDisplayed({ timeout: 50000 });
        (await this.btnContinuarConfirmacionScreen).click();
    }

    async validateComprobanteScreen() {
        (await this.titleComprobante).waitForDisplayed({ timeout: 50000 });
        await expect(this.titleComprobante).toBeDisplayed();
        await expect(this.checkImgComprobante).toBeDisplayed();
        await expect(this.montoComprobante).toBeDisplayed();
        await expect(this.descripcionComprobante).toBeDisplayed();
        await expect(this.lblInstitucionBeneficiariaComprobante).toBeDisplayed();
        await expect(this.descripInstitucionBeneficiariaComprobante).toBeDisplayed();
        await expect(this.lblInstitucionBeneficiariaComprobante).toBeDisplayed();
        await expect(this.descripInstitucionBeneficiariaComprobante).toBeDisplayed();
        await expect(this.lblNombreContribuyenteComprobante).toBeDisplayed();
        await expect(this.descripNombreContribuyenteComprobante).toBeDisplayed();
        await expect(this.lblRncCedulaComprobante).toBeDisplayed();
        await expect(this.descripRncCedulaComprobante).toBeDisplayed();
        await expect(this.btnContinuarComprobante).toBeDisplayed();
    }

    async validatepopuperror() {
        (await this.Errortxt).waitForDisplayed({ timeout: 50000 });
        // (await this.insufficientbalancepop1).waitForDisplayed({ timeout: 6000 });
        (await this.balancedisponibleErrortxt).waitForDisplayed({ timeout: 6000 });

    }

    async selectBtnContinuarComprobante() {
        (await this.btnContinuarComprobante).waitForDisplayed({ timeout: 50000 });
        await expect(this.btnContinuarComprobante).toBeDisplayed();
        (await this.btnContinuarComprobante).click();
    }



}
export default new PagarImpuestosPage();