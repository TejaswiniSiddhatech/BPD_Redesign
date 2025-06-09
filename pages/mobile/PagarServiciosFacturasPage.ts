import Page from "./page";


class PagarServiciosFacturas extends Page {

    get pagosServiciosFacturasTitle() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/titleView"]') }
    get backBtn() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgBackArrow"]') }
    get txtDesde() { return $('//android.widget.TextView[@text="Desde:"]') }
    get txtSeleccione() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtSelecciona1"]') }

    get descripcionAccountList() { return $('//android.widget.TextView[@text="Selecciona la cuenta desde la que se realizará la transacción:"]') }
    get firstAccount() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout') }
    get txtAccountNumber() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtaccType"]') }

    get txtHasta() { return $('//android.widget.TextView[@text="Hasta"]') }
    get txtChkBeneficario() { return $('//android.widget.TextView[@text="Beneficiario"]') }
    get checkboxBeneficiario() { return $('//android.widget.ImageView[@resource-id = "com.popular.app.android:id/imgBenLayout"]') }
    get txtChkPagoExpresos() { return $('//android.widget.TextView[@text="Pago expreso"]') }
    get checkboxPagoExpreso() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgExpressServicePayment"]') }
    get beneficaryList() { return $('//android.widget.Spinner[@resource-id="com.popular.app.android:id/spinnerCategory"]') }

    get txtCategoria() { return $('//android.widget.TextView[@text="Categoría:"]') }
    get txtEligeCategoria() { return $('//android.widget.TextView[@text="Elige una categoría"]') }

    get txtSeleccioneCategoria() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiary"]') }
    get searchField() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/benefiaciarySearch"]') }
    get txtCategoriasList() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtListTitle"]') }
    get itemsCategoriaList() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryType"]') }

    get txtEmpresa() { return $('//android.widget.TextView[@text="Empresa :"]') }
    get txtSeleccioneEntidadBeneficiario() { return $('//android.widget.TextView[@text="Entidad o beneficiario"]') }

    get txtSeleccioneEmpresa() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtListTitle"]') }
    get itemEmpresaList() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtBeneficiaryType"]') }

    get txtDigiteNroContrato() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textNumeroContractLbl"]') }
    get lblDigiteNroContrato() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editNumeroContracto"]') }
    get btnVerificar() { return $('//android.widget.Button[@text="Verificar"]') }
    get txtMontoPagar() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAmountLbl"]') }
    get txtCurrency() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtUnCurrency"]') }
    get txtPayAmount() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editPayAmount"]') }

    get btnCancelar() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancel"]') }
    get btnContinuar() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }


    get verificacionTitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView"]') }
    get txtBeneficiarioVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textBeneficiaryLbl"]') }
    get detalleBeneficiarioVerificacionScreen() { return $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/accountLayout"]') }
    get txtMontoVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView2"]') }
    get detalleMontoVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtMontoTotal"]') }
    get txtDesdeVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView3"]') }
    get txtBalanceDisponibleVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView4"]') }
    get detalleDesdeVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textFromAccDetail"]') }
    get detalleBalanceDisponibleVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textFromAccBal"]') }
    get txtFechaVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView5"]') }
    get detalleFechaVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtFecha"]') }
    get btnCancelarVerificacionScreen() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnCancel"]') }
    get btnContinuarVerificacionScreen() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinue"]') }

    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get checkImgComprobante() { return $('(//android.widget.ImageView[@content-desc="image resource"])[3]') }
    get montoComprobante() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.TextView[2]') }
    get descripcionComprobante() { return $('//android.widget.TextView[@text="Su pago ha sido realizado."]') }
    get lblBeneficiarioComprobante() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get descripBeneficiarioComprobante() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout') }
    get lblDesdeCuentaComprobante() { return $('//android.widget.TextView[@text="Desde:"]') }
    get descripDesdeCuentaComprobante() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView[2]') }
    get lblFechaComprobante() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get descripFechaComprobanteBene() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.TextView[2]') }
    get lblImpuestoComprobante() { return $('//android.widget.TextView[@text="Impuesto DGII 0.15%:"]') }
    get descripImpuestoComprobante() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.TextView[2]') }
    get btnContinuarComprobante() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnFinal"]') }


    async validate(): Promise<void> {
        await expect(this.pagosServiciosFacturasTitle).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.txtDesde).toBeDisplayed();
        await expect(this.txtSeleccione).toBeDisplayed();
       // await expect(this.txtHasta).toBeDisplayed();
        // await expect(this.checkboxBeneficiario).toBeDisplayed();
        // await expect(this.checkboxPagoExpreso).toBeDisplayed();
        // await expect(this.beneficaryList).toBeDisplayed();
        await expect(this.btnCancelar).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisabled();
    }

    async selectSeleccioneOpt() {
        (await this.txtSeleccione).click();
    }

    async validateAccountList() {
        await expect(this.descripcionAccountList).toBeDisplayed();
        await expect(this.firstAccount).toBeDisplayed();
    }

    async selectFirstAccount() {
        await expect(this.firstAccount).toBeDisplayed();
        (await this.firstAccount).click();
    }

    async selectAnAccount(accountNro: string) {
        await expect(this.txtAccountNumber).toBeDisplayed();
        await expect(this.txtAccountNumber).toBeDisplayed();
        (await this.txtAccountNumber).forEach(async (element) => {
            if ((await element.getAttribute('text')).includes(accountNro)) {
                await element.click();
            }
        });
    }

    async selectCheckbox(chkSelected: string) {
        if (chkSelected == "Beneficiario") {
            (await this.checkboxBeneficiario).click();
        } else if (chkSelected == "Pago expreso") {
            (await this.checkboxPagoExpreso).click();
        }
    }

    async selectEligeCategoria() {
        await expect(this.txtEligeCategoria).toBeDisplayed();
        (await this.txtEligeCategoria).click();
    }


    async validateListCategory() {
        await expect(this.txtSeleccioneCategoria).toBeDisplayed();
        await expect(this.searchField).toBeDisplayed();
        await expect(this.txtCategoriasList).toBeDisplayed();
        await expect(this.itemsCategoriaList).toBeDisplayed();
    }

    async selectCategory(categorySelected: string) {
        (await this.itemsCategoriaList).forEach(async (element) => {
            if ((await element.getAttribute('text')) == categorySelected) {
                await element.click();
            }
        });
    }

    async selectSeleccioneEntidadBeneficiario() {
        await expect(this.txtEmpresa).toBeDisplayed();
        await expect(this.txtSeleccioneEntidadBeneficiario).toBeDisplayed();
        (await this.txtSeleccioneEntidadBeneficiario).click();
    }

    async selectEntidad(empresaSelected: string) {
        await expect(this.txtSeleccioneEmpresa).toBeDisplayed();
        await expect(this.itemEmpresaList).toBeDisplayed();
        (await this.itemEmpresaList).forEach(async (element) => {
            if ((await element.getAttribute('text')) == empresaSelected) {
                await element.click();
            }
        });
    }

    async enterNroContract(nroContrato: string) {
        await expect(this.lblDigiteNroContrato).toBeDisplayed();
        (await this.lblDigiteNroContrato).addValue(nroContrato);
    }

    async selectVerificarBtn() {
        await expect(this.btnVerificar).toBeEnabled();
        (await this.btnVerificar).click();
    }

    async validateMontoApagar() {
        await expect(this.txtMontoPagar).toBeDisplayed();
        await expect(this.txtCurrency).toBeDisplayed();
        await expect(this.txtPayAmount).toBeDisplayed();

        if ((await this.txtPayAmount).getAttribute('text') == null) {
            throw new Error("Pay amount is empty");
        }
    }

    async selectContinuarBtn() {
        await expect(this.btnContinuar).toBeEnabled();
        (await this.btnContinuar).click();
    }

    async selectCancelarBtn() {
        await expect(this.btnCancelar).toBeEnabled();
        (await this.btnCancelar).click();
    }

    async selectCancelarBtnOnVerificacionScreen() {
        await expect(this.btnCancelarVerificacionScreen).toBeEnabled();
        (await this.btnCancelarVerificacionScreen).click();
    }

    async validateVerificacionScreen() {
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.txtBeneficiarioVerificacionScreen).toBeDisplayed();
        await expect(this.detalleBeneficiarioVerificacionScreen).toBeDisplayed();
        await expect(this.txtMontoVerificacionScreen).toBeDisplayed();
        await expect(this.detalleMontoVerificacionScreen).toBeDisplayed();
        await expect(this.txtDesdeVerificacionScreen).toBeDisplayed();
        await expect(this.txtBalanceDisponibleVerificacionScreen).toBeDisplayed();
        await expect(this.detalleDesdeVerificacionScreen).toBeDisplayed();
        await expect(this.detalleBalanceDisponibleVerificacionScreen).toBeDisplayed();
        await expect(this.txtFechaVerificacionScreen).toBeDisplayed();
        await expect(this.detalleFechaVerificacionScreen).toBeDisplayed();
        await expect(this.btnCancelarVerificacionScreen).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisplayed();
    }

    async selectContinuarVerificacionScreen() {
        (await this.btnContinuar).click();
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

    async selectCancelarBtnOnTokenScreen() {
        await expect(this.btnCancelarTokenPopular).toBeDisplayed();
        (await this.btnCancelarTokenPopular).click();
    }

    async validateComprobanteScreen() {
        await expect(this.titleComprobante).toBeDisplayed();
        await expect(this.checkImgComprobante).toBeDisplayed();
        await expect(this.montoComprobante).toBeDisplayed();
        await expect(this.descripcionComprobante).toBeDisplayed();
        await expect(this.lblBeneficiarioComprobante).toBeDisplayed();
        await expect(this.descripBeneficiarioComprobante).toBeDisplayed();
        await expect(this.lblDesdeCuentaComprobante).toBeDisplayed();
        await expect(this.descripDesdeCuentaComprobante).toBeDisplayed();
        await expect(this.lblFechaComprobante).toBeDisplayed();
        await expect(this.descripFechaComprobanteBene).toBeDisplayed();
        await expect(this.lblImpuestoComprobante).toBeDisplayed();
        await expect(this.descripImpuestoComprobante).toBeDisplayed();
        await expect(this.btnContinuarComprobante).toBeDisplayed();
    }

    async selectContinuarOnComprobanteScreen() {
        await expect(this.btnContinuar).toBeDisplayed();
        (await this.btnContinuar).click();
        // await expect(this.btnContinuarComprobante).toBeDisplayed();
        // (await this.btnContinuarComprobante).click();
    }

}
export default new PagarServiciosFacturas();