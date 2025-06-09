import Page from "./page";


class QuickBalancePage extends Page {

    get txtActualizar() { return $('//android.widget.TextView[@text="Actualizar"]') }
    get txtTypeAccount() { return $('//android.view.View[2]/android.view.View/android.widget.TextView[1]') }
    get txtNroCuenta() { return $$('//android.view.View/android.widget.TextView[2]') }
    get imgCopy() { return $$('//android.view.View[2]/android.view.View/android.view.View') }
    get txtBalanceDisponible() { return $$('//android.widget.TextView[@text="Balance disponible:"]') }
    get txtActualizado() { return $('//android.widget.TextView[contains(@text,"Actualizado")]') }
    get txtMonto() { return $$('//android.widget.TextView[contains(@text,"RD")]') }
    get txtNoDisponible() { return $('//android.widget.TextView[@text="No disponible"]') }


    async validate(): Promise<void> {
        await expect(this.txtActualizar).toBeDisplayed();
        await expect(this.txtTypeAccount).toBeDisplayed();
        await expect(this.txtNroCuenta).toBeDisplayed();
        await expect(this.imgCopy).toBeDisplayed();
        await expect(this.txtBalanceDisponible).toBeDisplayed();
        await expect(this.txtActualizado).toBeDisplayed();
        await expect(this.txtMonto).toBeDisplayed();
    }

    async validateServiceIsUp() {
        if (await (await this.txtNoDisponible).isDisplayed()) {
            await expect(this.txtNoDisponible).not.toBeDisplayed();
        }
    }

    async validateAccount(expectedAccount: string) {
        // const accountElement = $('//android.widget.TextView[contains(@text,"' + nroCuenta + '")]');

        const accountElement = $('//android.widget.TextView[contains(@text,"' + expectedAccount + '")]');
        const accountElement2 = $('//android.widget.TextView[contains(@text,"Balance disponible:")]');
        await expect(accountElement).toBeDisplayed();
        await expect(accountElement2).toBeDisplayed();
    }
}
export default new QuickBalancePage();