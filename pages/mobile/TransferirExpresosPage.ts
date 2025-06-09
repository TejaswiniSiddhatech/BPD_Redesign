import Gestures from "../../commons/gestures";
import Page from "./page";

class TransferirExpresosPage extends Page {

    get transferirExpresosTitle() { return $('//android.widget.TextView[@text="Transferir expresos"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get fieldSeleccionaCuenta() { return $('//android.widget.TextView[@text="Selecciona tu cuenta"]') }
    get txtBeneficiario() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get fieldNroCuenta() { return $('//android.widget.TextView[@text="Número de cuenta"]/../..') }
    get txtMontoTransferir() { return $('//android.widget.TextView[@text="Monto a transferir:"]') }
    get fieldMontoTransferir() { return $('//android.widget.TextView[@text="0.00"]/../..') }
    get lblDOPMontoTransferir() { return $('//android.widget.EditText[@text="RD$"]') }
    get lblUSDMontoTransferir() { return $('//android.widget.EditText[@text="US$"]') }
    get fieldEscribirDescrip() { return $('//android.widget.TextView[@text="Descripción (opcional)"]/../..') }
    get btnContinuar() { return $('//android.widget.TextView[@text="Continuar"]') }

    get btnSiTransferir() { return $('//android.widget.TextView[@text = "Sí, transferir"]') }

    get titleMessage() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[1]') }
    get bodyMessage() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[2]') }
    get titleErrorMsg() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[1]') }
    get bodyErrorMsg() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[2]') }

    get errorMsgTxtMontoMinimo() { return $('//android.widget.TextView[@text="El monto para transferir debe ser mayor a RD$0.01"]') }

    get verificacionTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]') }
    get amountVerificacion1Screen() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]/following-sibling::android.widget.TextView[1]') }
    get amountVerificacion2Screen() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]/following-sibling::android.widget.TextView[2]') }
    get desdeCuentaVerificacionScreen() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get desdeCuentaDescripVerificacionScreen() { return $('//android.widget.TextView[@text="Desde cuenta:"]/following-sibling::android.widget.TextView[1]') }
    get txtBeneficiarioVerificacionScreen() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get descripBeneficiarioVerificacionScreen() { return $('//android.widget.TextView[@text="Beneficiario:"]/following-sibling::android.widget.TextView[1]') }
    get txtfechaVerificacionScreen() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get fechaVerificacionDescripScreen() { return $('//android.widget.TextView[@text="Fecha:"]/following-sibling::android.widget.TextView[1]') }
    get txtDescripcionVerificacionScreen() { return $('//android.widget.TextView[@text="Descripción: "]') }
    get descripcionDetalleVerificacionScreen() { return $('//android.widget.TextView[@text="Descripción: "]/following-sibling::android.widget.TextView[1]') }
    get btnSitransferirVerificacionScreen() { return $('//android.widget.TextView[@text = "Sí, transferir"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get txtDescripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get typeCodeField() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    get ValidarTokenPopularBtn() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }
    get btnAunNoTienesTP() { return $('//android.widget.TextView[@text="¿Aún no tienes Token Popular?"]') }

    get comprobanteImg() { return $('//android.widget.ImageView') }
    get comprobanteTitle() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get comprobanteMonto1() { return $('//android.widget.TextView[@text="COMPROBANTE"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteMonto2() { return $('//android.widget.TextView[@text="COMPROBANTE"]/following-sibling::android.widget.TextView[2]') }
    get comprobantDescrip() { return $('//android.widget.TextView[@text="Tu transferencia ha sido realizada"]') }
    get comprobanteDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get comprobanteDesdeCuentaDescrip() { return $('//android.widget.TextView[@text="Desde cuenta:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteBeneficiario() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get comprobanteBeneficiarioDescrip() { return $('//android.widget.TextView[@text="Beneficiario:"]/following-sibling::android.widget.TextView[1]') }
    get txtTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio:"]') }
    get lblTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteFecha() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get comprobanteFechaDescrip() { return $('//android.widget.TextView[@text="Fecha:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteImpuestoTxt() { return $('//android.widget.TextView[@text="Impuesto DGII 0.15%:"]') }
    get comprobanteImpDescrip() { return $('//android.widget.TextView[@text="Impuesto DGII 0.15%:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteNoReferencia() { return $('//android.widget.TextView[@text="No. de referencia:"]') }
    get comprobanteNoReferenciaDescrip() { return $('//android.widget.TextView[@text="No. de referencia:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteDescripcionTxt() { return $('//android.widget.TextView[@text="Descripción: "]') }
    get comprobanteDescripcionDetalle() { return $('//android.widget.TextView[@text="Descripción: "]/following-sibling::android.widget.TextView[1]') }
    get comprobanteIrMisProductosBtn() { return $('//android.widget.TextView[@text="Ir a mis productos"]') }
    get comprobanteRealizarOtraTransferBtn() { return $('//android.widget.TextView[@text="Realizar otra transferencia"]') }

    get Algosaliomaltxt() { return $('//android.widget.TextView[@text="Algo salió mal."]') }
    get Algosaliomalconrasenabtn() { return $('//android.widget.TextView[@text="¿Olvidaste tu usuario o contraseña?"]') }
    get algosaliomalDeacuerdobtn() { return $('//android.widget.TextView[@text="De acuerdo"]') }



    async validate(): Promise<void> {
        await (await this.transferirExpresosTitle).waitForDisplayed({ timeout: 40000 });

        await expect(this.transferirExpresosTitle).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        // await expect(this.fieldSeleccionaCuenta).toBeDisplayed();
        await expect(this.txtBeneficiario).toBeDisplayed();
        await expect(this.fieldNroCuenta).toBeDisplayed();
        await expect(this.txtMontoTransferir).toBeDisplayed();
        await expect(this.fieldMontoTransferir).toBeDisplayed();
        await expect(this.fieldEscribirDescrip).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisplayed();
    }

    // async selectSeleccionaCuenta() {
    //     if (await (await this.fieldSeleccionaCuenta).isDisplayed()) {
    //         (await this.fieldSeleccionaCuenta).click();
    //     }
    // }


    async selectSeleccionaCuenta() {
        for (var i = 0; i < 60; i++) {
            if (await (await this.fieldSeleccionaCuenta).isDisplayed()) {
                (await this.fieldSeleccionaCuenta).click();
                break;
            }
        }
    }


    async VerifyAlgosaliomalPopup() {
        await (await this.Algosaliomaltxt).waitForDisplayed({ timeout: 60000 });
        //await (await this.Nopuedesiniciarsesiondescription).waitForDisplayed({ timeout: 6000 });
        //  await (await this.Recupraraccesosbtn).waitForDisplayed({ timeout: 6000 });
        await (await this.algosaliomalDeacuerdobtn).waitForDisplayed({ timeout: 6000 });
    }

    async selectAnAccount(nroCuenta: string) {
        const accountElement = $('//android.widget.TextView[contains(@text,"' + nroCuenta + '")]');

        await expect(accountElement).toBeDisplayed();
        await (await accountElement).click();
    }

    // async enterNroCuenta(nroCuenta: string) {
    //     (await this.fieldNroCuenta).click();
    //     // (await this.fieldNroCuenta).addValue(nroCuenta);
    //     (await this.fieldNroCuenta).setValue(nroCuenta);
    //     await browser.pause(5000);

    //     browser.execute('mobile: performEditorAction', { action: 'done' });
    //     await browser.pause(10000);
    // }


    async enterNroCuenta(nroCuenta: string) {
        await expect(this.fieldNroCuenta).toBeDisplayed();
        //   const inputField = await this.lblDOPMontoTransferir;
        // await inputField.waitForDisplayed({ timeout: 30000 });
        (await this.fieldNroCuenta).click();

        (await this.fieldNroCuenta).setValue(nroCuenta);


        await browser.pause(5000);
        // Hide the keyboard using ADB shell command
        //  await browser.execute('mobile: shell', { command: 'input', args: ['keyevent', 'KEYCODE_BACK'] });
        //  await browser.execute('mobile: hideKeyboard');

        //  await browser.keys(['Enter']); // Simulate pressing the Enter key
        await browser.execute('mobile: performEditorAction', { action: 'done' });
        await browser.pause(5000);

    }


    async validateDOPcurrency() {
        await (await this.lblDOPMontoTransferir).waitForDisplayed({ timeout: 30000 });
        // await expect(this.lblDOPMontoTransferir).toBeDisplayed();
    }

    async validateUSDcurrency() {
        await (await this.lblUSDMontoTransferir).waitForDisplayed({ timeout: 30000 });
        //  await expect(this.lblUSDMontoTransferir).toBeDisplayed();
    }

    async enterAmountDOPToTransfer(amountTransfer: string) {
        (await this.lblDOPMontoTransferir).setValue(amountTransfer);

        (await this.lblDOPMontoTransferir).click();

        await browser.pause(5000);

        // await driver.hideKeyboard();

        await browser.execute('mobile: performEditorAction', { action: 'done' });
        await browser.pause(5000);

    }




    async enterAmountUSDToTransfer(amountTransfer: string) {
        (await this.lblUSDMontoTransferir).clearValue();

        (await this.lblUSDMontoTransferir).setValue(amountTransfer);

        await browser.pause(5000);

        // await driver.hideKeyboard();
        await browser.execute('mobile: performEditorAction', { action: 'done' });
        await browser.pause(5000);

    }


    async enterDescription(description: string) {
        (await this.fieldEscribirDescrip).clearValue();
        (await this.fieldEscribirDescrip).setValue(description);
        await browser.pause(5000);
        // await driver.hideKeyboard();
        await browser.execute('mobile: performEditorAction', { action: 'done' });
        await browser.pause(5000);

    }

    async selectBtnContinuar() {
        // for (var i = 0; i < 40; i++) {
        //     if (await (await this.btnContinuar).isDisplayed()) {
        //         //  await expect(this.btnContinuar).toBeDisplayed();
        //         (await this.btnContinuar).click();
        //     }
        // }
        await browser.execute('mobile: performEditorAction', { action: 'done' });
        await (await this.btnContinuar).waitForDisplayed({ timeout: 30000 });
        (await this.btnContinuar).click();
    }


    async selectBtnContinuar2() {
        await browser.execute('mobile: performEditorAction', { action: 'done' });
        await (await this.btnContinuar).waitForDisplayed({ timeout: 30000 });
        // await expect(this.btnContinuar).toBeDisplayed();
        (await this.btnContinuar).click();
    }

    async selectSiTransferir() {
        await (await this.btnSiTransferir).waitForDisplayed({ timeout: 30000 });
        // await expect(this.btnSiTransferir).toBeDisplayed();
        await (await this.btnSiTransferir).click();
    }

    async validateVerificacionWithoutDescriptionScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });

        // await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtBeneficiarioVerificacionScreen).toBeDisplayed();
        await expect(this.descripBeneficiarioVerificacionScreen).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
        await expect(this.btnSitransferirVerificacionScreen).toBeDisplayed();
    }

    async validateVerificacionWithDescriptionScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });

        // await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtBeneficiarioVerificacionScreen).toBeDisplayed();
        await expect(this.descripBeneficiarioVerificacionScreen).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
        await expect(this.txtDescripcionVerificacionScreen).toBeDisplayed();
        await expect(this.descripcionDetalleVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
        await expect(this.btnSitransferirVerificacionScreen).toBeDisplayed();
    }

    async validateVerificacionMulticurrencyScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });

        // await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.amountVerificacion2Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtBeneficiarioVerificacionScreen).toBeDisplayed();
        await expect(this.descripBeneficiarioVerificacionScreen).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
        // await expect(this.txtDescripcionVerificacionScreen).toBeDisplayed();
        // await expect(this.descripcionDetalleVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
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

    async validateTokenPopularScreen() {
        for (var i = 0; i < 80; i++) {
            if (await (await this.typeCodeField).isDisplayed() || await (await this.titleTokenPopular).isDisplayed()) {
                await expect(this.titleTokenPopular).toBeDisplayed();
                await expect(this.txtDescripTokenPopular).toBeDisplayed();
                await expect(this.typeCodeField).toBeDisplayed();
                await expect(this.ValidarTokenPopularBtn).toBeDisplayed();
            }
        }
    }

    async typeTokenPopular(tokenPopularCode: string) {
        for (var i = 0; i < 80; i++) {
            if (await (await this.typeCodeField).isDisplayed() || await (await this.titleTokenPopular).isDisplayed()) {
                await expect(this.typeCodeField).toBeDisplayed();
                (await this.typeCodeField).addValue(tokenPopularCode);
            }
        }
    }


    async selectBtnValidarTokenPopular() {
        for (var i = 0; i < 80; i++) {
            if (await (await this.typeCodeField).isDisplayed() || await (await this.titleTokenPopular).isDisplayed()) {
                (await this.ValidarTokenPopularBtn).click();
            }
        }
    }



    async validateComprobanteWithoutDescriptionScreen() {
        (await (this.comprobanteImg)).waitForDisplayed({ timeout: 40000 });
        (await (this.comprobanteTitle)).waitForDisplayed({ timeout: 40000 });
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteBeneficiario).toBeDisplayed();
        await expect(this.comprobanteBeneficiarioDescrip).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteImpuestoTxt).toBeDisplayed();
        await expect(this.comprobanteImpDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await expect(this.comprobanteIrMisProductosBtn).toBeDisplayed();
        await expect(this.comprobanteRealizarOtraTransferBtn).toBeDisplayed();
    }


    async validateComprobanteWithtDescriptionScreen() {
        (await (this.comprobanteTitle)).waitForDisplayed({ timeout: 40000 });
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteBeneficiario).toBeDisplayed();
        await expect(this.comprobanteBeneficiarioDescrip).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteImpuestoTxt).toBeDisplayed();
        await expect(this.comprobanteImpDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
        await expect(this.comprobanteDescripcionTxt).toBeDisplayed();
        await expect(this.comprobanteDescripcionDetalle).toBeDisplayed();
        await expect(this.comprobanteIrMisProductosBtn).toBeDisplayed();
        await expect(this.comprobanteRealizarOtraTransferBtn).toBeDisplayed();
    }


    async validateComprobanteMulticurrencyScreenWithDescription() {
        (await (this.comprobanteTitle)).waitForDisplayed({ timeout: 40000 });
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobanteMonto2).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteBeneficiario).toBeDisplayed();
        await expect(this.comprobanteBeneficiarioDescrip).toBeDisplayed();
        await expect(this.txtTasaCambio).toBeDisplayed();
        await expect(this.lblTasaCambio).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteImpuestoTxt).toBeDisplayed();
        await expect(this.comprobanteImpDescrip).toBeDisplayed();
        await Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await expect(this.comprobanteDescripcionTxt).toBeDisplayed();
        await expect(this.comprobanteDescripcionDetalle).toBeDisplayed();
        await expect(this.comprobanteIrMisProductosBtn).toBeDisplayed();
        await expect(this.comprobanteRealizarOtraTransferBtn).toBeDisplayed();
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
        (await (this.comprobanteIrMisProductosBtn)).waitForDisplayed({ timeout: 40000 });
        await expect(this.comprobanteIrMisProductosBtn).toBeDisplayed();
        await (await this.comprobanteIrMisProductosBtn).click();
    }


    async selectRealizarOtraTransfer() {
        (await (this.comprobanteRealizarOtraTransferBtn)).waitForDisplayed({ timeout: 50000 });
        await expect(this.comprobanteRealizarOtraTransferBtn).toBeDisplayed();
        await (await this.comprobanteRealizarOtraTransferBtn).click();
    }
}

export default new TransferirExpresosPage();
