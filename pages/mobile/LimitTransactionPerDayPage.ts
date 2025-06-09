import Gestures from "../../commons/gestures";
import Page from "./page";



class LimitTransactionPerDayPage extends Page {
    validate(): Promise<void> {
        throw new Error("Method not implemented.");
    }


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


    get txtBeneficiarioVerificacionScreen() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get descripBeneficiarioVerificacionScreen() { return $('//android.widget.TextView[@text="Beneficiario:"]/following-sibling::android.widget.TextView[1]') }

    get ValidarTokenPopularBtn() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }

    get comprobanteBeneficiario() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get comprobanteBeneficiarioDescrip() { return $('//android.widget.TextView[@text="Beneficiario:"]/following-sibling::android.widget.TextView[1]') }
    get txtTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio:"]') }
    get lblTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio:"]/following-sibling::android.widget.TextView[1]') }

    get comprobanteIrMisProductosBtn() { return $('//android.widget.TextView[@text="Ir a mis productos"]') }
    get comprobanteRealizarOtraTransferBtn() { return $('//android.widget.TextView[@text="Realizar otra transferencia"]') }

    get balanceinsufficienttitle() { return $('//android.widget.TextView[@text="La cuenta origen no tiene balance disponible suficiente para realizar esta transacción, revisa el monto o selecciona otra cuenta."]') }
    get balanceinsufficientdescription() { return $('//android.widget.TextView[@text="Realizar otra transferencia"]') }
    get Deacuradopopupbtn() { return $('//android.widget.TextView[@text="De acuerdo"]') }
    get desdeacc2txt() { return $('(//android.widget.TextView[@text="Ahorro"])[2]') }
    get desdeacc2() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]') }
    get desdeacc3() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]') }
    get lblSeleccionaTuCuenta() { return $('//android.widget.TextView[@text="Selecciona tu cuenta"]') }

    // get fieldNroCuenta() { return $('//android.widget.TextView[@text="Número de cuenta"]/../..') }

    /*  async selectAnAccounts1(nroCuenta: string) {
         //const elementAccount = await $('//android.widget.TextView[contains(@text,"' + nroCuenta + '")]');
         const elementAccount = await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View');
         await elementAccount.click();
     }
 
    async selectAnAccount2(nroCuenta: string) {
     // const accountElement = $('//android.widget.TextView[contains(@text,"' + nroCuenta + '")]');
      const elementAccount = await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]');
      await expect(elementAccount).toBeDisplayed();
      await elementAccount.click();
  }*/

    /*async selectAnAccount3(nroCuenta: string) {
      //  const elementAccount = await $('//android.widget.TextView[contains(@text,"' + nroCuenta + '")]');
      const elementAccount = await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]');
      await elementAccount.click();
     }*/

    async verifybalanceinsufficientpopup() {
        (await this.balanceinsufficienttitle).waitForDisplayed({ timeout: 60000 });
        (await this.balanceinsufficientdescription).waitForDisplayed({ timeout: 60000 });
        await this.Deacuradopopupbtn.click();
    }

    async selectSeleccionaCuenta() {
        (await this.lblSeleccionaTuCuenta).waitForDisplayed({ timeout: 60000 });
        (await this.lblSeleccionaTuCuenta).click();
        (await this.desdeacc2).waitForDisplayed({ timeout: 60000 });
        (await this.desdeacc2).click();
    }

    async selectBtnContinuar() {
        (await this.btnContinuar).click();
    }

    async selectAnAccount3(nroCuenta: string) {
        const element = $('//android.widget.TextView[contains(@text, "Disponible: RD$")]');
        await element.isDisplayed();

        let balanceText = await element.getText();
        console.log('print amount:' + balanceText);

        /*let amountMatch = balanceText.match(/Disponible: RD\$( [\d,.]+)/);
         if (amountMatch) {
             let amount = parseFloat(amountMatch[1].replace(/,/g, ''));
             console.log('print amount:' + amount);
       
             // Check if the balance is zero or NA and look for another account
             while ((balanceText.includes('zero') || balanceText.includes('NA')) && await element.isDisplayed()) {
                 Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                 // Fetch the new balance text
                 const newBalanceText = await element.getText();
                 if (!newBalanceText.match(/Disponible: RD\$( [\d,.]+)/)) {
                     console.log("Amount not found in balance text.");
                    // break; // Break out of the loop if balance text doesn't match
                 }
                 balanceText = newBalanceText;
                 amountMatch = balanceText.match(/Disponible: RD\$( [\d,.]+)/);
                 if (amountMatch) {
                     amount = parseFloat(amountMatch[1].replace(/,/g, ''));
                 }
             }*/

        // If the balance is greater than zero and not NA, click on the element
        if (!balanceText.includes('zero') && !balanceText.includes('NA')) {
            await element.click();
        } else {
            console.log("No account with balance greater than zero and NA found.");
            await this.desdeacc2.click();
        }
    } /*else {
      console.log("Amount not found in balance text.");
      Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
      // And click on next account where the amount is greater than 100
  }*/
    //}


    async enterAmountDOPCurrenc(amountTransfer: string) {
        const element = $('//android.widget.TextView[contains(@text, "Disponible: RD$")]');
        await element.isDisplayed();

        const balanceText = await element.getText();
        console.log('print amount:' + balanceText);

        const amountMatch = balanceText.match(/Disponible: RD\$([\d,.]+)/);
        if (amountMatch) {
            const amount = parseFloat(amountMatch[1].replace(/,/g, ''));
            console.log('print amount:', amount);

            const amountTransfer2 = amount - 1000;
            console.log("New balance after subtraction:", amountTransfer2);
            if (amountTransfer2 > 0 && amountTransfer2 < 10) {
                await expect(this.lblDOPMontoTransferir).toBeDisplayed();
                await this.lblDOPMontoTransferir.clearValue();
                await this.lblDOPMontoTransferir.setValue(amountTransfer2.toString());

            }
            else {

                await expect(this.lblDOPMontoTransferir).toBeDisplayed();
                (await this.lblDOPMontoTransferir).clearValue();
                (await this.lblDOPMontoTransferir).setValue("1");
            }
        } else {
            console.log("Amount not found in balance text.");
        }

    }

    async enterNroCuenta(nroCuenta: string) {
        (await this.fieldNroCuenta).addValue(nroCuenta);
        await browser.pause(7000);
    }


}
export default new LimitTransactionPerDayPage();