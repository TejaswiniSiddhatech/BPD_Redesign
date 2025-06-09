import Gestures from "../../commons/gestures";
import commonsPage from "./commonsPage";
import Page from "./page";

let optionViaPago = ""
class TransferirOtrosBancosPage extends Page {

    get transferirTitle() { return $('//android.widget.TextView[@text="Transferir a otros bancos"]') }
    get txtDesdeCuenta() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get lblSeleccionaTuCuenta() { return $('//android.widget.TextView[@text="Selecciona tu cuenta"]') }
    get txtBeneficiario() { return $('//android.widget.TextView[@text="Beneficiario:"]') }
    get lblBeneficiario() { return $('//android.widget.TextView[@text="Selecciona un beneficiario"]') }
    get Search() { return $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]') }
    get BuscarBeneficiario() { return $('//android.widget.TextView[@text="Buscar beneficiario"]') }
    get Set() { return $("//*[@class = 'android.widget.EditText' and @index = '1']") }
    get RD$() { return $('//android.widget.TextView[contains(@text,"RD$")]') }

    get txtMontoTransferir() { return $('//android.widget.TextView[@text="Monto a transferir:"]') }
    get fieldMontoTransferir() { return $('//android.widget.TextView[@text="0.00"]/../..') }
    get valueAmountTransfer() { return $('//android.widget.EditText[@text="RD$"]') }
    get txtViaPagoInterbancario() { return $('//android.widget.TextView[@text="Vía de pago interbancario:"]') }
    get txtACH() { return $('//android.widget.TextView[@text="ACH"]') }
    get txtPagosInstantes() { return $('//android.widget.TextView[@text="Pagos al instante BCRD"]') }
    get fieldEscribirDescrip() { return $('//android.widget.TextView[@text="Descripción (opcional)"]/../..') }
    get btnContinuar() { return $('//android.widget.TextView[@text="Continuar"]') }

    get radioButtonACH() { return $('//android.widget.ScrollView/android.widget.RadioButton[1]') }
    get radioButtonPagosInstantes() { return $('//android.widget.ScrollView/android.widget.RadioButton[2]') }

    get txtInformationButtonACH() { return $('//android.widget.TextView[@text="Las transferencias realizadas a través de la red ACH entre las 8:01 a.m. y 1:00 p.m. serán acreditadas a partir de las 2:30 p.m., y las efectuadas después de las 1:00 p.m. serán acreditadas el siguiente día laborable."]') }
    get txtInformationButtonPagosInstantes() { return $('//android.widget.TextView[@text="Las transferencias realizadas vía el servicio de pagos al instante BCRD serán aplicadas de forma inmediata los días laborables de 7:00 a.m. a 4:00 p.m. y de 6:30 p.m. a 11:00 p.m, y fines de semana y feriados de 7:00 a.m. a 11:00 p.m."]') }

    get titleMessage() { return $('//android.widget.TextView[contains(@text,"Cuenta con fondos insuficientes")]') }


    async validate(): Promise<void> {
        await expect(this.transferirTitle).toBeDisplayed();
        await expect(this.txtDesdeCuenta).toBeDisplayed();
        // await expect(this.lblSeleccionaTuCuenta).toBeDisplayed();
        await expect(this.txtBeneficiario).toBeDisplayed();
        // await expect(this.lblBeneficiario).toBeDisplayed();
        await expect(this.txtMontoTransferir).toBeDisplayed();
        //  await expect(this.fieldMontoTransferir).toBeDisplayed();
        await expect(this.txtViaPagoInterbancario).toBeDisplayed();
        await expect(this.txtACH).toBeDisplayed();
        await expect(this.txtPagosInstantes).toBeDisplayed();
        await expect(this.fieldEscribirDescrip).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisplayed();
    }

    async validateConfirmScreen() {
        await expect(this.transferirTitle).toBeDisplayed();
        await commonsPage.validateDisplayElement("VERIFICACIÓN")
        await commonsPage.validateDisplayElement("Desde cuenta:")
        await commonsPage.validateDisplayElement("Beneficiario:")
        await commonsPage.validateDisplayElement("Fecha:")
        await commonsPage.validateDisplayElement("Via de pago:")
        await commonsPage.validateDisplayElement("Total a debitar:")
        await commonsPage.validateDisplayElement("Monto comisión:")
        // await commonsPage.validateDisplayElement("Descripción:")

        // if(optionViaPago=="ACH"){
        //     await expect(await this.txtInformationButtonACH).toBeDisplayed()
        // }else if(optionViaPago=="Pagos al instante BCRD"){
        //     await expect(await this.txtInformationButtonPagosInstantes).toBeDisplayed()
        // }

    }

    async selectAnAccount(nroCuenta: string) {
        if (await (await this.lblSeleccionaTuCuenta).waitForDisplayed()) {
            await (await this.lblSeleccionaTuCuenta).click();
        }
        await commonsPage.tapContainsText(nroCuenta)
    }

    async selectAnBeneficiary(beneficiary: string) {
        if (await (await this.lblBeneficiario).isDisplayed()) {
            await (await this.lblBeneficiario).waitForEnabled()
            await (await this.lblBeneficiario).click();
        }
        await browser.pause(3000)
        await (await this.Search).click();
        await (await this.BuscarBeneficiario).click();
        await (await this.Set).setValue(beneficiary);
        await (await this.RD$).click();
    }
    async inputAmount(amount: string) {
        await (await this.valueAmountTransfer).click();
        await (await this.valueAmountTransfer).setValue(amount)
        await driver.hideKeyboard();
    }

    async chooseViaPayment(checkbox: string) {
        optionViaPago = checkbox
        if (checkbox == "ACH") {
            await (await this.radioButtonACH).click()
            await (await this.txtInformationButtonACH).isDisplayed()
        } else if (checkbox == "Pagos al instante BCRD") {
            await (await this.radioButtonPagosInstantes).click()
            await (await this.txtInformationButtonPagosInstantes).isDisplayed()
        }
    }

    async registerDescription(description: string) {
        await Gestures.swipe({ x: 700, y: 1800 }, { x: 364, y: 900 });
        await (await this.fieldEscribirDescrip).click()
        await (await this.fieldEscribirDescrip).setValue(description)
        await driver.hideKeyboard();
    }

    async tapContinueTransfer() {
        await browser.pause(3000)
        await (await this.btnContinuar).click()
    }
    async tapConfirmTransfer() {
        await commonsPage.tapBytext("Sí, transferir")
    }
    async validateVoucherTransferAnotherBank(isDescripcion: boolean) {
        await expect(this.transferirTitle).toBeDisplayed();
        await commonsPage.validateElement("Transferir a otros bancos")
        await commonsPage.validateElement("COMPROBANTE")
        await commonsPage.validateElement("Tu transferencia ha sido realizada")
        await commonsPage.validateElement("Desde cuenta:")
        await commonsPage.validateElement("Beneficiario:")
        await commonsPage.validateElement("Fecha:")
        await commonsPage.validateElement("Vía de pago interbancario:")
        await commonsPage.validateElement("Monto comisión:")
        await commonsPage.validateElement("Total a debitar:")
        await commonsPage.validateElement("Impuesto DGII 0.15%:")
        // if (isDescripcion) await commonsPage.validateElement("Descripción: ")
        await commonsPage.validateElement("Ir a mis productos")
        await commonsPage.validateElement("Realizar otra transferencia")
        if (optionViaPago == "ACH") {
            await (this.txtInformationButtonACH).isDisplayed()
        } else if (optionViaPago == "Pagos al instante BCRD") {
            await (this.txtInformationButtonPagosInstantes).isDisplayed()
        }

    }

    async validateInsufficienteFounds() {
        // const InsufficienteText = await $("//*[contains(@text,'Cuenta con fondos insuficientes')]");
        await expect(this.titleMessage).toBeDisplayed();
        //  await commonsPage.validateElement("Cuenta con fondos insuficientes")
        // await commonsPage.validateElement("La cuenta origen no tiene balance disponible suficiente para realizar esta transacción, revisa el monto o selecciona otra cuenta.")
        // await commonsPage.validateElement("De acuerdo")
    }

    async validateMinimumAmount() {
        browser.execute('mobile: performEditorAction', { action: 'done' });
        await commonsPage.validateElement("El monto para transferir debe ser mayor a RD$0.01")
    }
}
export default new TransferirOtrosBancosPage();