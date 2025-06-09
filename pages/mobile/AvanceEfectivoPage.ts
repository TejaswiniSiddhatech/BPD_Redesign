import Page from "./page";



class AvanceEfectivoPage extends Page {


    get avanceEfectivoTitle() { return $('//android.widget.TextView[@text="Avanzar de efectivo"]') }
    get avanceEfectivodashboardtarjeta() { return $('//android.widget.TextView[@text="Avance\nde efectivo"]') }
    get desdeTarjetaTxt() { return $('//android.widget.TextView[@text="Desde tarjeta:"]') }
    get selectTarjetaSearchBtn() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/rel_seleccione' and (@text = '' or . = '')]") }
    get hastaCuentaTxt() { return $('//android.widget.TextView[@text="Hasta cuenta:"]') }
    get selectCuentaSearchBtn() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/rel_hasta_seleccione' and (@text = '' or . = '')]") }
    get montoAvanceTxt() { return $('//android.widget.TextView[@text="Monto avance:"]') }
    get montoAvanceField() { return $('//android.widget.EditText[@text="Digite el monto"]') }
    get cancelarBtn() { return $('//android.widget.Button[@text="Cancelar"]') }
    get continuarBtn() { return $('//android.widget.Button[@text="Continuar"]') }

    get selectTarjetaDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountTypesTitle"]') }
    get creditCardNameTxt() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.TextView[1]') }

    get selectCuentaDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtAccountTypesTitle"]') }
    get cuentaNameTxt() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.TextView[1]') }

    get noaccountavailabletxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'No tienes beneficiarios registrados.' or . = 'No tienes beneficiarios registrados.') and @resource-id = 'com.popular.app.android:id/txtNoData']") }
    get selectacclisttitletxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona la cuenta a la cual se realizará la transacción:' or . = 'Selecciona la cuenta a la cual se realizará la transacción:') and @resource-id = 'com.popular.app.android:id/txtAccountTypesTitle']") }

    get reuirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get requirementecontinuarbtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }


    async validate(): Promise<void> {

    }

    async validateAvanceEfectivoScreen() {
        await expect(this.avanceEfectivoTitle).toBeDisplayed();
        await expect(this.desdeTarjetaTxt).toBeDisplayed();
        await expect(this.selectTarjetaSearchBtn).toBeDisplayed();
        await expect(this.hastaCuentaTxt).toBeDisplayed();
        await expect(this.selectCuentaSearchBtn).toBeDisplayed();
        await expect(this.montoAvanceTxt).toBeDisplayed();
        await expect(this.montoAvanceField).toBeDisplayed();
        await expect(this.cancelarBtn).toBeDisplayed();
        await expect(this.continuarBtn).toBeDisplayed();

    }

    async selectDesdeTarjetaSearch() {
        await expect(this.selectTarjetaSearchBtn).toBeDisplayed();
        (await this.selectTarjetaSearchBtn).click();

        //  await expect(this.creditCardNameTxt).toBeDisplayed();
    }

    async SelectAvanceEfectivodashboard() {
        await expect(this.avanceEfectivodashboardtarjeta).toBeDisplayed();
        (await this.avanceEfectivodashboardtarjeta).click();

        //  await expect(this.creditCardNameTxt).toBeDisplayed();
    }

    async verifynoaccavailabletxt() {
        (await this.selectacclisttitletxt).waitForDisplayed({ timeout: 30000 });
        // await expect(this.noaccountavailabletxt).toBeDisplayed();
        // await expect(this.selectacclisttitletxt).toBeDisplayed();
    }

    async selectACreditCard() {
        await (await this.creditCardNameTxt).click();
    }

    async selectHastaCuentaSearch() {
        (await this.selectCuentaSearchBtn).waitForDisplayed({ timeout: 30000 });
        await expect(this.selectCuentaSearchBtn).toBeDisplayed();
        (await this.selectCuentaSearchBtn).click();

        // await expect(this.cuentaNameTxt).toBeDisplayed();
    }

    async verifyrequirementerror() {
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 50000 });
        const msg = await (await this.reuirementerrormsg).getText();
        console.log('Verifying Requirement Error : ' + msg)
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 60000 });
        // (await this.requirementecontinuarbtn).click();

    }

    // async selectAnAccount() {
    //     (await this.cuentaNameTxt).waitForDisplayed({ timeout: 30000 });
    //     await (await this.cuentaNameTxt).click();
    // }

    async selectAnAccount() {
        for (var i = 0; i < 20; i++) {
            if (await (await this.cuentaNameTxt).isDisplayed()) {
                await (await this.cuentaNameTxt).click();
                break;
            }
        }
    }

    async typeMontoOfAvance(montoAvance: string) {
        await expect(this.montoAvanceField).toBeDisplayed();
        await (await this.montoAvanceField).clearValue();
        (await this.montoAvanceField).setValue(montoAvance);
    }

    async selectBtnContinuarOnAFscreen() {
        (await this.continuarBtn).waitForDisplayed({ timeout: 30000 });
        (await this.continuarBtn).click();
    }

    async selectBtnCancelar() {
        (await this.cancelarBtn).waitForDisplayed({ timeout: 30000 });
        (await this.cancelarBtn).click();
    }


}
export default new AvanceEfectivoPage();