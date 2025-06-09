import Gestures from "../../commons/gestures";
import Page from "./page";


class TransferirEntreMisCuentasPage extends Page {

    get transferirTitle() { return $('//android.widget.TextView[@text="Transferir entre mis cuentas"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get lblSeleccionaTuCuenta() { return $('//android.widget.TextView[@text="Selecciona tu cuenta"]') }
    get accountItems() { return $$('//android.widget.TextView') }
    get txtHastaCuenta() { return $('//android.widget.TextView[@text="Hasta cuenta:"]') }
    get lblHastaCuenta() { return $('//android.widget.TextView[@text="Selecciona cuenta destino"]') }
    get txtMontoTransferir() { return $('//android.widget.TextView[@text="Monto a transferir:"]') }
    get lblDOPMontoTransferir() { return $('//android.widget.EditText[@text="RD$"]') }
    get lblUSDMontoTransferir() { return $('//android.widget.EditText[@text="US$"]') }
    get btnContinuar() { return $('//android.widget.TextView[@text="Continuar"]') }

    get titleMessage() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[1]') }
    get bodyMessage() { return $('//android.widget.ImageView[@content-desc="info"]/following-sibling::android.widget.TextView[2]') }
    get errorMessage() { return $('//android.widget.TextView[@text="El monto para transferir debe ser mayor a RD$0.01"]') }

    get verificacionTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]') }
    get amountVerificacion1Screen() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]/following-sibling::android.widget.TextView[1]') }
    get amountVerificacion2Screen() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]/following-sibling::android.widget.TextView[2]') }
    get desdeCuentaVerificacionScreen() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get desdeCuentaDescripVerificacionScreen() { return $('//android.widget.TextView[@text="Desde cuenta:"]/following-sibling::android.widget.TextView[1]') }
    get txtHastaCuentaVerificacionScreen() { return $('//android.widget.TextView[@text="Hasta cuenta:"]') }
    get descripHastaCuentaVerificacionScreen() { return $('//android.widget.TextView[@text="Hasta cuenta:"]/following-sibling::android.widget.TextView[1]') }
    get txtTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio:"]') }
    get descripTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio:"]/following-sibling::android.widget.TextView[1]') }
    get txtfechaVerificacionScreen() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get fechaVerificacionDescripScreen() { return $('//android.widget.TextView[@text="Fecha:"]/following-sibling::android.widget.TextView[1]') }
    get txtDescripcionVerificacionScreen() { return $('//android.widget.TextView[@text="Descripción: "]') }
    get descripcionDetalleVerificacionScreen() { return $('//android.widget.TextView[@text="Descripción: "]/following-sibling::android.widget.TextView[1]') }
    get btnSitransferirVerificacionScreen() { return $('//android.widget.TextView[@text="Sí, transferir"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get txtDescripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get typeCodeField() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    get continuarBtnTokenPopular() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }
    get btnAunNoTienesTP() { return $('//android.widget.TextView[@text="¿Aún no tienes Token Popular?"]') }

    get comprobanteImg() { return $('//android.widget.ImageView') }
    get comprobanteTitle() { return $('//android.widget.TextView[@text="COMPROBANTE"]') }
    get comprobanteMonto1() { return $('//android.widget.TextView[@text="COMPROBANTE"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteMonto2() { return $('//android.widget.TextView[@text="COMPROBANTE"]/following-sibling::android.widget.TextView[2]') }
    get comprobantDescrip() { return $('//android.widget.TextView[@text="Tu transferencia ha sido realizada"]') }
    get comprobanteDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get comprobanteDesdeCuentaDescrip() { return $('//android.widget.TextView[@text="Desde cuenta:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteHastaCuenta() { return $('//android.widget.TextView[@text="Hasta cuenta:"]') }
    get comprobanteHastaCuentaDescrip() { return $('//android.widget.TextView[@text="Hasta cuenta:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio:"]') }
    get comprobanteDescripTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteFecha() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get comprobanteFechaDescrip() { return $('//android.widget.TextView[@text="Fecha:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteNoReferencia() { return $('//android.widget.TextView[@text="No. de referencia:"]') }
    get comprobanteNoReferenciaDescrip() { return $('//android.widget.TextView[@text="No. de referencia:"]/following-sibling::android.widget.TextView[1]') }
    get comprobanteDescripcionTxt() { return $('//android.widget.TextView[@text="Descripción: "]') }
    get comprobanteDescripcionDetalle() { return $('//android.widget.TextView[@text="Descripción: "]/following-sibling::android.widget.TextView[1]') }
    get btnIrMisProductos() { return $('//android.widget.TextView[@text="Ir a mis productos"]') }


    get ServiceInterptionbtn1() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos')]") }
    get ServiceInterptionbtn2() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Llamar a Telebanco Popular' or . = 'Llamar a Telebanco Popular')]") }

    get reuirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get requirementecontinuarbtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }



    async validate(): Promise<void> {
        await (await this.transferirTitle).waitForDisplayed({ timeout: 30000 });

        //await expect(this.transferirTitle).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        await expect(this.lblSeleccionaTuCuenta).toBeDisplayed();
        await expect(this.txtHastaCuenta).toBeDisplayed();
        await expect(this.lblHastaCuenta).toBeDisplayed();
        await expect(this.txtMontoTransferir).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisplayed();
    }

    async selectSeleccionaCuenta() {
        await (await this.lblSeleccionaTuCuenta).waitForDisplayed({ timeout: 30000 });

        (await this.lblSeleccionaTuCuenta).click();
    }


    async VerifyServiceInterptionpop() {
        await (await this.ServiceInterptionbtn1).waitForDisplayed({ timeout: 20000 });
        await (await this.ServiceInterptionbtn2).waitForDisplayed({ timeout: 10000 });
    }


    async verifyrequirementerror() {
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 20000 });
        const msg = await (await this.reuirementerrormsg).getText();
        console.log('Verifying Requirement Error : ' + msg)
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 20000 });
        // (await this.requirementecontinuarbtn).click();

    }

    async validateSelectAccountScreen() {
        await expect(this.accountItems).toBeDisplayed();
    }

    async selectAnAccount(nroCuenta: string) {
        const elementAccount = await $('//android.widget.TextView[contains(@text,"' + nroCuenta + '")]');
        await (await elementAccount).waitForDisplayed({ timeout: 30000 });

        await elementAccount.click();
    }

    async selectCuentaDestino() {
        await (await this.lblHastaCuenta).waitForDisplayed({ timeout: 30000 });

        (await this.lblHastaCuenta).click();
    }

    // async enterAmountDOPCurrency(amountTransfer: string) {
    //     await (await this.lblDOPMontoTransferir).waitForDisplayed({ timeout: 30000 });

    //     //  await expect(this.lblDOPMontoTransferir).toBeDisplayed();

    //     (await this.lblDOPMontoTransferir).setValue(amountTransfer);
    //     (await this.lblDOPMontoTransferir).click();
    //     //  await driver.hideKeyboard();
    //     browser.execute('mobile: performEditorAction', { action: 'done' });
    // }

    async enterAmountUSDCurrency(amountTransfer: string) {
        //   await (await this.lblUSDMontoTransferir).waitForDisplayed({ timeout: 30000 });
        await (await this.lblUSDMontoTransferir).waitForDisplayed({ timeout: 30000 });
        //await expect(this.lblUSDMontoTransferir).toBeDisplayed();
        (await this.lblUSDMontoTransferir).clearValue();
        (await this.lblUSDMontoTransferir).setValue(amountTransfer);
        //  (await this.lblDOPMontoTransferir).click();
        await browser.pause(15000);
        await browser.execute('mobile: performEditorAction', { action: 'done' });

    }

    async enterAmountDOPCurrency(amountTransfer: string) {
        const inputField = await this.lblDOPMontoTransferir;
        // await inputField.waitForDisplayed({ timeout: 30000 });

        await inputField.setValue(amountTransfer);
        (await inputField).click();
        await browser.pause(5000);
        // Hide the keyboard using ADB shell command
        //  await browser.execute('mobile: shell', { command: 'input', args: ['keyevent', 'KEYCODE_BACK'] });
        //  await browser.execute('mobile: hideKeyboard');

        //  await browser.keys(['Enter']); // Simulate pressing the Enter key
        await browser.execute('mobile: performEditorAction', { action: 'done' });
    }






    // async selectBtnContinuar() {
    //     browser.execute('mobile: performEditorAction', { action: 'done' });
    //     await (await this.btnContinuar).waitForDisplayed({ timeout: 30000 });
    //     (await this.btnContinuar).click();
    // }

    async selectBtnContinuar() {
        //  await browser.keys(['Enter']); // This will simulate pressing the Enter key
        // await (await this.btnContinuar).waitForDisplayed({ timeout: 30000 });
        await expect(this.btnContinuar).toBeDisplayed();
        await (await this.btnContinuar).click();
    }


    async selectSiTransferir() {
        await (await this.btnSitransferirVerificacionScreen).waitForDisplayed({ timeout: 30000 });

        await (await this.btnSitransferirVerificacionScreen).click();
    }

    async validateVerificacionWithoutDescriptionScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });

        //  await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtHastaCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.descripHastaCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
        await expect(this.btnSitransferirVerificacionScreen).toBeDisplayed();
    }

    async validateVerificacionWithDescriptionScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });

        //  await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtHastaCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.descripHastaCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
        await expect(this.txtDescripcionVerificacionScreen).toBeDisplayed();
        await expect(this.descripcionDetalleVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
        await expect(this.btnSitransferirVerificacionScreen).toBeDisplayed();
    }

    async validateVerificacionNoDescriptionMulticurrencyScreen() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 40000 });

        // await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacion1Screen).toBeDisplayed();
        await expect(this.amountVerificacion2Screen).toBeDisplayed();
        await expect(this.desdeCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeCuentaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.txtHastaCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.descripHastaCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.txtTasaCambio).toBeDisplayed();
        await expect(this.descripTasaCambio).toBeDisplayed();
        await expect(this.txtfechaVerificacionScreen).toBeDisplayed();
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

    // async validateTokenPopularScreen() {
    //     await (await this.titleTokenPopular).waitForDisplayed({ timeout: 30000 });

    //     // await expect(this.titleTokenPopular).toBeDisplayed();
    //     await expect(this.txtDescripTokenPopular).toBeDisplayed();
    //     await expect(this.typeCodeField).toBeDisplayed();
    //     await expect(this.continuarBtnTokenPopular).toBeDisplayed();
    // }

    // async typeTokenPopular(tokenPopularCode: string) {
    //     await (await this.typeCodeField).clearValue();
    //     await (await this.typeCodeField).addValue(tokenPopularCode);
    // }


    async validateTokenPopularScreen() {
        for (var i = 0; i < 60; i++) {
            if (await (await this.titleTokenPopular).isDisplayed()) {
                //   await (await this.titleTokenPopular).waitForDisplayed({ timeout: 30000 });

                // await expect(this.titleTokenPopular).toBeDisplayed();
                await expect(this.txtDescripTokenPopular).toBeDisplayed();
                await expect(this.typeCodeField).toBeDisplayed();
                await expect(this.continuarBtnTokenPopular).toBeDisplayed();
                break;
            }
        }
    }


    async typeTokenPopular(tokenPopularCode: string) {
        for (var i = 0; i < 60; i++) {
            if (await (await this.titleTokenPopular).isDisplayed() || await (await this.typeCodeField).isDisplayed()) {
                await (await this.typeCodeField).clearValue();
                await (await this.typeCodeField).addValue(tokenPopularCode);
                break;
            }
        }
    }


    // async typeTokenPopular(tokenPopularCode: string) {
    //     await (await this.typeCodeField).clearValue();
    //     await (await this.typeCodeField).addValue(tokenPopularCode);
    // }


    // async selectBtnContinuarOnPopularTokenScreen() {
    //         await (await this.continuarBtnTokenPopular).waitForDisplayed({ timeout: 20000 });

    //         (await this.continuarBtnTokenPopular).click();
    //     }



    async selectBtnContinuarOnPopularTokenScreen() {
        for (var i = 0; i < 60; i++) {
            if (await (await this.continuarBtnTokenPopular).isDisplayed()) {
                //  await (await this.continuarBtnTokenPopular).waitForDisplayed({ timeout: 20000 });
                (await this.continuarBtnTokenPopular).click();
                break;
            }
        }
    }



    async validateComprobanteWithoutDescriptionScreen() {
        await (await this.comprobanteImg).waitForDisplayed({ timeout: 40000 });

        //  await expect(this.comprobanteImg).toBeDisplayed();
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteHastaCuenta).toBeDisplayed();
        await expect(this.comprobanteHastaCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await expect(this.btnIrMisProductos).toBeDisplayed();
    }

    async validateComprobanteMulticurrencyScreenNoDescription() {
        await (await this.comprobanteImg).waitForDisplayed({ timeout: 40000 });

        // await expect(this.comprobanteImg).toBeDisplayed();
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobanteMonto2).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteHastaCuenta).toBeDisplayed();
        await expect(this.comprobanteHastaCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteTasaCambio).toBeDisplayed();
        await expect(this.comprobanteDescripTasaCambio).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await expect(this.btnIrMisProductos).toBeDisplayed();
    }



    async validateComprobanteUSDCurrency() {
        await expect(this.comprobanteMonto1).toHaveAttributeContaining('text', 'US$');
        await expect(this.comprobanteMonto2).toHaveAttributeContaining('text', 'RD$');
    }

    async validateComprobanteDOPCurrency() {
        await expect(this.comprobanteMonto1).toHaveAttributeContaining('text', 'RD$');
        await expect(this.comprobanteMonto2).toHaveAttributeContaining('text', 'US$');
    }

    async validateComprobanteWithtDescriptionScreen() {
        await (await this.comprobanteImg).waitForDisplayed({ timeout: 40000 });

        //  await expect(this.comprobanteImg).toBeDisplayed();
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteHastaCuenta).toBeDisplayed();
        await expect(this.comprobanteHastaCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
        await expect(this.comprobanteDescripcionTxt).toBeDisplayed();
        await expect(this.comprobanteDescripcionDetalle).toBeDisplayed();
        await expect(this.btnIrMisProductos).toBeDisplayed();
    }



    async validateComprobanteWithoutDescriptionMulticurrencyScreen() {
        await (await this.comprobanteImg).waitForDisplayed({ timeout: 40000 });

        // await expect(this.comprobanteImg).toBeDisplayed();
        await expect(this.comprobanteTitle).toBeDisplayed();
        await expect(this.comprobanteMonto1).toBeDisplayed();
        await expect(this.comprobantDescrip).toBeDisplayed();
        await expect(this.comprobanteDesdeCuenta).toBeDisplayed();
        await expect(this.comprobanteDesdeCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteHastaCuenta).toBeDisplayed();
        await expect(this.comprobanteHastaCuentaDescrip).toBeDisplayed();
        await expect(this.comprobanteFecha).toBeDisplayed();
        await expect(this.comprobanteFechaDescrip).toBeDisplayed();
        await expect(this.comprobanteNoReferencia).toBeDisplayed();
        await expect(this.comprobanteNoReferenciaDescrip).toBeDisplayed();
        await expect(this.btnIrMisProductos).toBeDisplayed();
    }



    async selectIrMisProductos() {
        await (await this.btnIrMisProductos).waitForDisplayed({ timeout: 40000 });

        //  await expect(this.btnIrMisProductos).toBeDisplayed();
        (await this.btnIrMisProductos).click();
    }

    async validateIsServiceUp() {
        if (await (await this.titleMessage).isDisplayed()) {
            await expect(this.titleMessage).not.toBeDisplayed();
        }
    }
}
export default new TransferirEntreMisCuentasPage();   