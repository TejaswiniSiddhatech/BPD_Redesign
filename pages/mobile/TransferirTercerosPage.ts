import Gestures from "../../commons/gestures";
import Page from "./page";


class TransferirTercerosPage extends Page {

    get transferirTercerosTitle() { return $('//android.widget.TextView[@text="Transferir a terceros"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get lblSeleccionaTuCuenta() { return $('//android.widget.TextView[@text="Selecciona tu cuenta"]') }
    get txtCuentaTercero() { return $('//android.widget.TextView[@text="Cuenta de tercero:"]') }
    get lblSeleccionaBeneficiario() { return $('//android.widget.TextView[@text="Selecciona un beneficiario"]') }
    get txtMontoTransferir() { return $('//android.widget.TextView[@text="Monto a transferir:"]') }
    get lblDOPMontoTransferir() { return $('//android.widget.EditText[@text="RD$"]') }
    get lblUSDMontoTransferir() { return $('//android.widget.EditText[@text="US$"]') }
    get fieldEscribirDescrip() { return $('//android.widget.TextView[@text="Descripción (opcional)"]/../..') }
    get btnContinuar() { return $('//android.widget.TextView[@text="Continuar"]') }

    get paragrap1SearchBeneficiary() { return $('//android.widget.TextView[@text="Selecciona el beneficiario al que deseas transferir:"]') }
    get searchBar() { return $('//android.widget.TextView[@text="Buscar beneficiario"]/../..') }
    get addNewBeneficiaryBtn() { return $('//android.widget.TextView[@text="Agregar nuevo beneficiario"]') }

    get titleMessage() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[1]') }
    get bodyMessage() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[2]') }
    get errorMsgMontoMinimo() { return $('//android.widget.TextView[@text="El monto para transferir debe ser mayor a RD$0.01"]') }

    get popupTitle() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[1]') }
    get popupDescription() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[2]') }
    get popupSiSalirBtn() { return $('//android.widget.TextView[@text="Sí, salir"]') }
    get popupVolverBtn() { return $('//android.widget.TextView[@text="Volver"]') }

    get verificacionTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]') }
    get amountVerificacion1Screen() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]/following-sibling::android.widget.TextView[1]') }
    get amountVerificacion2Screen() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]/following-sibling::android.widget.TextView[2]') }
    get desdeCuentaVerificacionScreen() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get desdeCuentaDescripVerificacionScreen() { return $('//android.widget.TextView[@text="Desde cuenta:"]/following-sibling::android.widget.TextView[1]') }
    get txtCuentaTerceroVerificacionScreen() { return $('//android.widget.TextView[@text="Cuenta de tercero:"]') }
    get descripCuentaTerceroVerificacionScreen() { return $('//android.widget.TextView[@text="Cuenta de tercero:"]/following-sibling::android.widget.TextView[1]') }
    get txtfechaVerificacionScreen() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get fechaVerificacionDescripScreen() { return $('//android.widget.TextView[@text="Fecha:"]/following-sibling::android.widget.TextView[1]') }
    get txtDescripcionVerificacionScreen() { return $('//android.widget.TextView[@text="Descripción: "]') }
    get descripcionDetalleVerificacionScreen() { return $('//android.widget.TextView[@text="Descripción: "]/following-sibling::android.widget.TextView[1]') }
    get btnSitransferirVerificacionScreen() { return $('//android.widget.TextView[@text="Sí, transferir"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get txtDescripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get typeCodeField() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    get edittxttypeCodeField() { return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]") }
    get continuarBtnTokenPopular() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }
    get btnAunNoTienesTP() { return $('//android.widget.TextView[@text="¿Aún no tienes Token Popular?"]') }

    get comprobanteImg() { return $('//android.widget.ImageView') }
    get comprobanteTitle() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get comprobanteMonto1() { return $('//android.widget.TextView[@text="COMPROBANTE"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteMonto2() { return $('//android.widget.TextView[@text="COMPROBANTE"]/following-sibling::android.widget.TextView[2]') }
    get comprobantDescrip() { return $('//android.widget.TextView[@text="Tu transferencia ha sido realizada"]') }
    get comprobanteDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get comprobanteDesdeCuentaDescrip() { return $('//android.widget.TextView[@text="Desde cuenta:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteCuentaTercero() { return $('//android.widget.TextView[@text="Cuenta de tercero:"]') }
    get comprobanteCuentaTerceroDescrip() { return $('//android.widget.TextView[@text="Cuenta de tercero:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteFecha() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get comprobanteFechaDescrip() { return $('//android.widget.TextView[@text="Fecha:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteImpuesto() { return $('//android.widget.TextView[@text="Impuesto DGII 0.15%:"]') }
    get comprobanteImpDescrip() { return $('//android.widget.TextView[@text="Impuesto DGII 0.15%:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteNoReferencia() { return $('//android.widget.TextView[@text="No. de referencia:"]') }
    get comprobanteNoReferenciaDescrip() { return $('//android.widget.TextView[@text="No. de referencia:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteDescripcionTxt() { return $('//android.widget.TextView[@text="Descripción: "]') }
    get comprobanteDescripcionDetalle() { return $('//android.widget.TextView[@text="Descripción: "]/following-sibling::android.widget.TextView[1]') }
    get irMisProductosBtn() { return $('//android.widget.TextView[@text="Ir a mis productos"]') }
    get otraTransferenciaBtn() { return $('//android.widget.TextView[@text="Realizar otra transferencia"]') }

    get requirementerrormsg() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tu requerimiento no pudo ser completado. Por favor intenta más tarde.' or . = 'Tu requerimiento no pudo ser completado. Por favor intenta más tarde.') and @resource-id = 'android:id/message']") }

    get nobeneficiarioavailabletxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Actualmente no tienes beneficiarios guardados para realizar transferencias.' or . = 'Actualmente no tienes beneficiarios guardados para realizar transferencias.')]") }
    get hacertranferirexpresabtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Hacer transferencia expresa' or . = 'Hacer transferencia expresa')]") }
    get agregarnuevobeneficiariobtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Agregar nuevo beneficiario' or . = 'Agregar nuevo beneficiario')]") }


    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }

    async validate(): Promise<void> {
        await (await this.transferirTercerosTitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.transferirTercerosTitle).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        // await expect(this.lblSeleccionaTuCuenta).toBeDisplayed();
        await expect(this.txtCuentaTercero).toBeDisplayed();
        // await expect(this.lblSeleccionaBeneficiario).toBeDisplayed();
        await expect(this.txtMontoTransferir).toBeDisplayed();
        await expect(this.fieldEscribirDescrip).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisplayed();
    }

    async selectSeleccionaCuenta() {
        for (var i = 0; i = 20; i++) {
            if (await (await this.lblSeleccionaTuCuenta).isDisplayed()) {
                (await this.lblSeleccionaTuCuenta).click();
                break;
            }
        }
    }

    async selectAnAccount(nroCuenta: string) {
        const elementAccount = await $('//android.widget.TextView[contains(@text,"' + nroCuenta + '")]');
        //const elementAccount = await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View');
        await elementAccount.click();
    }

    async selectSeleccionaBeneficiario() {
        for (var i = 0; i <= 20; i++) {
            if (await (await this.lblSeleccionaBeneficiario).isDisplayed()) {
                (await this.lblSeleccionaBeneficiario).click();
                break;
            }
        }
    }

    async validateSearchBeneficiary() {
        await (await this.transferirTercerosTitle).waitForDisplayed({ timeout: 50000 });
        await expect(this.paragrap1SearchBeneficiary).toBeDisplayed();
        await expect(this.searchBar).toBeDisplayed();
        await expect(this.addNewBeneficiaryBtn).toBeDisplayed();
    }

    async selectABeneficiary(beneficiaryAccount: string) {
        const elementAccount = await $('//android.widget.TextView[contains(@text,"' + beneficiaryAccount + '")]');
        for (var i = 0; i <= 20; i++) {
            if (await elementAccount.isDisplayed()) {
                await elementAccount.click();
                break;
            }
        }
    }

    async VerifyNoBeneficiarioAvailable() {
        await (await this.nobeneficiarioavailabletxt).isDisplayed()
        await expect(this.hacertranferirexpresabtn).toBeDisplayed();
        await expect(this.agregarnuevobeneficiariobtn).toBeDisplayed();
    }


    async searchBeneficiary(beneficiary: string) {
        await (await this.searchBar).setValue(beneficiary);
    }

    async selectAddNewBeneficiary() {
        await (await this.addNewBeneficiaryBtn).waitForDisplayed({ timeout: 40000 });
        //  await expect(this.addNewBeneficiaryBtn).toBeDisplayed();
        (await this.addNewBeneficiaryBtn).click();
    }

    async validatePopupBeneficiary() {
        await (await this.popupTitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.popupTitle).toBeDisplayed();
        await expect(this.popupDescription).toBeDisplayed();
        await expect(this.popupSiSalirBtn).toBeDisplayed();
        await expect(this.popupVolverBtn).toBeDisplayed();
    }

    async selectSiSalir() {
        await (await this.popupSiSalirBtn).waitForDisplayed({ timeout: 40000 });
        (await this.popupSiSalirBtn).click();
    }

    async selectVolverBtn() {
        await (await this.popupVolverBtn).waitForDisplayed({ timeout: 40000 });
        (await this.popupVolverBtn).click();
    }

    async enterAmountUSDCurrency(amountTransfer: string) {
        await (await this.lblUSDMontoTransferir).waitForDisplayed({ timeout: 40000 });
        // await expect(this.lblUSDMontoTransferir).toBeDisplayed();
        (await this.lblUSDMontoTransferir).clearValue();
        (await this.lblUSDMontoTransferir).setValue(amountTransfer);
    }

    async enterAmountDOPCurrency(amountTransfer: string) {
        await (await this.lblDOPMontoTransferir).waitForDisplayed({ timeout: 40000 });
        // await expect(this.lblDOPMontoTransferir).toBeDisplayed();
        (await this.lblDOPMontoTransferir).setValue(amountTransfer);
        (await this.lblDOPMontoTransferir).click();
        await driver.hideKeyboard();
        browser.execute('mobile: performEditorAction', { action: 'done' });
    }

    async enterDescription(description: string) {
        (await this.fieldEscribirDescrip).clearValue();
        (await this.fieldEscribirDescrip).setValue(description);
    }

    async selectBtnContinuar() {
        await (await this.btnContinuar).waitForDisplayed({ timeout: 30000 });
        (await this.btnContinuar).click();
    }

    async selectSiTransferir() {
        await (await this.btnSitransferirVerificacionScreen).waitForDisplayed({ timeout: 30000 });
        await (await this.btnSitransferirVerificacionScreen).click();
    }

    async validateVerificacionWithoutDescriptionScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtCuentaTerceroVerificacionScreen).toBeDisplayed();
        await expect(this.descripCuentaTerceroVerificacionScreen).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
        await expect(this.btnSitransferirVerificacionScreen).toBeDisplayed();

    }

    async typeTokenPopular(tokenPopularCode: string) {
        for (var i = 0; i <= 150; i++) {
            if (await (await this.typeCodeField).isDisplayed()) {
                (await this.typeCodeField).clearValue();
                (await this.typeCodeField).addValue(tokenPopularCode);
                break;
            }
        }
    }

    async selectBtnContinuarOnPopularTokenScreen() {
        for (var i = 0; i <= 40; i++) {
            if (await (await this.continuarBtnTokenPopular).isDisplayed()) {
                (await this.continuarBtnTokenPopular).click();
                break;
            }
        }
    }

    async validateVerificacionWithDescriptionScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtCuentaTerceroVerificacionScreen).toBeDisplayed();
        await expect(this.descripCuentaTerceroVerificacionScreen).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
        await expect(this.txtDescripcionVerificacionScreen).toBeDisplayed();
        await expect(this.descripcionDetalleVerificacionScreen).toBeDisplayed();
        await expect(this.btnSitransferirVerificacionScreen).toBeDisplayed();
    }



    async validateVerificacionWithDescriptionMulticurrencyScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.amountVerificacion2Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtCuentaTerceroVerificacionScreen).toBeDisplayed();
        await expect(this.descripCuentaTerceroVerificacionScreen).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
        await expect(this.txtDescripcionVerificacionScreen).toBeDisplayed();
        await expect(this.descripcionDetalleVerificacionScreen).toBeDisplayed();
        await expect(this.btnSitransferirVerificacionScreen).toBeDisplayed();

    }

    async validateVerificacionUSDCurrency() {
        await expect(this.amountVerificacion1Screen).toHaveAttributeContaining('text', 'US$');
        await expect(this.amountVerificacion2Screen).toHaveAttributeContaining('text', 'RD$');
    }

    async validateVerificacionDOPCurrency() {
        await expect(this.amountVerificacion1Screen).toHaveAttributeContaining('text', 'RD$');
        await expect(this.amountVerificacion2Screen).toHaveAttributeContaining('text', 'US$');
    }

    async validateComprobanteScreenWithDescription() {
        await (await this.comprobanteTitle).waitForDisplayed({ timeout: 50000 });
        await expect(this.comprobanteImg).toBeDisplayed();
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteCuentaTercero).toBeDisplayed();
        await expect(this.comprobanteCuentaTerceroDescrip).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteImpuesto).toBeDisplayed();
        await expect(this.comprobanteImpDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await this.swipeUp();
        await expect(this.comprobanteDescripcionTxt).toBeDisplayed();
        await expect(this.comprobanteDescripcionDetalle).toBeDisplayed();
        await expect(this.irMisProductosBtn).toBeDisplayed();
    }

    async validateComprobanteMulticurrencyScreenWithDescription() {
        await (await this.comprobanteTitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.comprobanteImg).toBeDisplayed();
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobanteMonto2).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteCuentaTercero).toBeDisplayed();
        await expect(this.comprobanteCuentaTerceroDescrip).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteImpuesto).toBeDisplayed();
        await expect(this.comprobanteImpDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await this.swipeUp();
        await expect(this.comprobanteDescripcionTxt).toBeDisplayed();
        await expect(this.comprobanteDescripcionDetalle).toBeDisplayed();
        await expect(this.irMisProductosBtn).toBeDisplayed();
    }

    async validateComprobanteScreenWithoutDescription() {
        await (await this.comprobanteTitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.comprobanteImg).toBeDisplayed();
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteCuentaTercero).toBeDisplayed();
        await expect(this.comprobanteCuentaTerceroDescrip).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteImpuesto).toBeDisplayed();
        await expect(this.comprobanteImpDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await expect(this.irMisProductosBtn).toBeDisplayed();
    }

    async validateComprobanteUSDCurrency() {
        await expect(this.comprobanteMonto1).toHaveAttributeContaining('text', 'US$');
        await expect(this.comprobanteMonto2).toHaveAttributeContaining('text', 'RD$');
    }

    async validateComprobanteDOPCurrency() {
        await expect(this.comprobanteMonto1).toHaveAttributeContaining('text', 'RD$');
        await expect(this.comprobanteMonto2).toHaveAttributeContaining('text', 'US$');
    }

    async selectIrMisProductos() {
        await (await this.irMisProductosBtn).waitForDisplayed({ timeout: 40000 });

        // await expect(this.irMisProductosBtn).toBeDisplayed();
        (await this.irMisProductosBtn).click();
    }

    async selectRealizarOtraTransferencia() {
        await (await this.otraTransferenciaBtn).waitForDisplayed({ timeout: 20000 });

        // await expect(this.otraTransferenciaBtn).toBeDisplayed();
        (await this.otraTransferenciaBtn).click();
    }

    async VerifyrequirementError() {
        await (await this.requirementerrormsg).waitForDisplayed({ timeout: 60000 });
        //(await this.requirementerrormsg).click();


    }


}
export default new TransferirTercerosPage();