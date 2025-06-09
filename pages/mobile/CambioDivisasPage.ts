import Page from "./page";


class CambioDivisasPage extends Page {


    get menucambiardivias() { return $('//android.widget.TextView[@text="Cambiar divisas"]') }
    get iconcambiardiviasicon() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[9]/android.view.View') }
    get entremiscuentatxtCD() { return $('//android.widget.TextView[@text="Entre mis cuentas"]') }
    get tercerostxtCD() { return $('//android.widget.TextView[@text="Terceros"]') }

    get transferirMisCuentasTitle() { return $('//android.widget.TextView[@text = "Transferir entre mis cuentas"]') }
    get lblDesdeCuenta() { return $('//android.widget.TextView[@text = "Desde cuenta:"]') }
    get desdeCuentaSearch() { return $('//android.widget.TextView[@text = "Selecciona tu cuenta"]') }
    get lblHastaCuenta() { return $('//android.widget.TextView[@text = "Hasta cuenta:"]') }
    get hastaCuentaSearch() { return $('//android.widget.TextView[@text = "Selecciona cuenta destino"]') }
    get lblMontoTransferir() { return $('//android.widget.TextView[@text = "Monto a transferir:"]') }
    get montoTrasferirField() { return $('//android.widget.TextView[@text = "0.00"]/..') }
    get btnContinuar() { return $('//android.widget.TextView[@text = "Continuar"]') }

    get cuentaSearchDescrip() { return $('//android.widget.TextView[@text="Selecciona la cuenta desde la cual realizarás la transacción:"]') }
    get firstAccountList() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]') }
    get destinationAccountDescrip() { return $('//android.widget.TextView[@text="Selecciona la cuenta a la cual se realizará la transacción:"]') }
    get firstDestinationAccountList() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]') }

    get verificationTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]') }
    get amountRegister() { return $('//android.widget.TextView[contains(@text,"RD$")]') }
    get lblDesdeCuentaVerification() { return $('//android.widget.TextView[@text="Desde cuenta:"]') }
    get desdeCuentaDescrip() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.TextView[2]') }
    get lblHastaCuentaVerification() { return $('//android.widget.TextView[@text="Hasta cuenta:"]') }
    get hastaCuentaDescrip() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.TextView[4]') }
    get lblFechaVerification() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get fechaDescripVerification() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.TextView[6]') }
    get btnSiTransferir() { return $('//android.widget.TextView[@text="Sí, transferir"]') }

    get tokenPopularDescripcion() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get typeTokenPopular() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/..') }
    get continuarBtnTokenPopular() { return $('//android.widget.TextView[@text="Continuar"]') }
    get btnAunNoTienesTP() { return $('//android.widget.TextView[@text="¿Aún no tienes Token Popular?"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get txtDescripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get typeCodeField() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    // get continuarBtnTokenPopular() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }




    async validate(): Promise<void> {
        await (await this.transferirMisCuentasTitle).waitForDisplayed({ timeout: 50000 });
        await expect(this.lblDesdeCuenta).toBeDisplayed();
        // await expect(this.desdeCuentaSearch).toBeDisplayed();
        await expect(this.lblHastaCuenta).toBeDisplayed();
        await expect(this.hastaCuentaSearch).toBeDisplayed();
        await expect(this.lblMontoTransferir).toBeDisplayed();
        await expect(this.montoTrasferirField).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisabled();
    }

    async selectDesdeCuentaSearch() {
        await (await this.desdeCuentaSearch).waitForDisplayed({ timeout: 50000 });
        (await this.desdeCuentaSearch).click();
    }

    async SelectcambiarDiviasMenu() {
        await (await this.menucambiardivias).waitForDisplayed({ timeout: 50000 });
        (await this.menucambiardivias).click();
    }

    async SelectEntremiscunetasmenuCD() {
        await (await this.entremiscuentatxtCD).waitForDisplayed({ timeout: 50000 });
        (await this.entremiscuentatxtCD).click();
    }

    async SelectTercerosmenuCD() {
        await (await this.tercerostxtCD).waitForDisplayed({ timeout: 50000 });
        (await this.tercerostxtCD).click();
    }

    async selectFirstAccount() {
        await (await this.cuentaSearchDescrip).waitForDisplayed({ timeout: 50000 });
        await expect(this.firstAccountList).toBeDisplayed();
        (await this.firstAccountList).click();
    }

    async selectHastaCuentaSearch() {
        await (await this.hastaCuentaSearch).waitForDisplayed({ timeout: 50000 });
        (await this.hastaCuentaSearch).click();
    }

    async selectFirstDestinationAccount() {
        // await(await this.amountRegister).waitForDisplayed({timeout:40000});
        // // await (await this.firstDestinationAccountList).waitForDisplayed({ timeout: 50000 });
        // (await this.firstDestinationAccountList).click();

        const elementAccount = await $('//android.widget.TextView[contains(@text,"RD$")]');
        await (await elementAccount).waitForDisplayed({ timeout: 30000 });

        await elementAccount.click();
    }

    async sendAmountForTransfer(amountTransfer: string) {
        await (await this.montoTrasferirField).waitForDisplayed({ timeout: 50000 });
        // await (await this.amountRegister).waitForDisplayed({ timeout: 50000 });
        // (await this.amountRegister).setValue(amountTransfer);
        (await this.montoTrasferirField).setValue(amountTransfer);

    }

    async selectContinuarBtn() {
        await (await this.btnContinuar).waitForDisplayed({ timeout: 50000 });
        (await this.btnContinuar).click();
    }

    async validateVerificationScreen() {
        await expect(this.verificationTitle).toBeDisplayed();
        await expect(this.amountRegister).toBeDisplayed();
        await expect(this.lblDesdeCuentaVerification).toBeDisplayed();
        await expect(this.desdeCuentaDescrip).toBeDisplayed();
        await expect(this.lblHastaCuentaVerification).toBeDisplayed();
        await expect(this.hastaCuentaDescrip).toBeDisplayed();
        await expect(this.lblFechaVerification).toBeDisplayed();
        await expect(this.fechaDescripVerification).toBeDisplayed();
        await expect(this.btnSiTransferir).toBeDisplayed();
    }

    async selectBtnSiTransferir() {
        await (await this.btnSiTransferir).waitForDisplayed({ timeout: 50000 });
        await expect(this.btnSiTransferir).toBeDisplayed();
        (await this.btnSiTransferir).click();
    }

    // async validateTokenPopularScreen() {
    //     await (await this.tokenPopularDescripcion).waitForDisplayed({ timeout: 50000 });
    //     await expect(this.tokenPopularDescripcion).toBeDisplayed();
    //     await expect(this.typeTokenPopular).toBeDisplayed();
    //     await expect(this.continuarBtnTokenPopular).toBeDisplayed();
    //     await expect(this.btnAunNoTienesTP).toBeDisplayed();
    // }

    async validateTokenPopularScreen() {
        // for (var i = 0; i < 100; i++) {
        //     if (await (await this.titleTokenPopular).isDisplayed()) {
        await (await this.titleTokenPopular).waitForDisplayed({ timeout: 50000 });

        // await expect(this.titleTokenPopular).toBeDisplayed();
        await expect(this.txtDescripTokenPopular).toBeDisplayed();
        await expect(this.typeCodeField).toBeDisplayed();
        // break;
        // }
        // }
    }

    async sendTokenPopular(tokenPopularCode: string) {
        await expect(this.typeTokenPopular).toBeDisplayed();
        (await this.typeTokenPopular).clearValue();
        (await this.typeTokenPopular).setValue(tokenPopularCode);
    }



}
export default new CambioDivisasPage();