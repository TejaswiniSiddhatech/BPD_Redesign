import commonsPage from "./commonsPage";
import Page from "./page";

let GloballistCheckboxEnabled = []
let GloballistCheckboxDisabled = []

class ConfigurarQuickBalancePage extends Page {


    get btnGoBack() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]') }

    get txtHabilitarVistaRapida() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Habilitar vista rápida' or . = 'Habilitar vista rápida')]") }
    // get toggle() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]') }
    get toggle() { return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.widget.ScrollView[1]/android.view.View[1]") }


    get btnGuardarCambios() { return $('//android.widget.TextView[@text="Guardar cambios"]') }
    get validatevistarapidatitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Vista rápida de productos' or . = 'Vista rápida de productos')]") }


    get txtListo() { return $('//android.widget.TextView[@text="¡Listo!"]') }
    get txtParagraphConfirmation1() { return $('//android.widget.TextView[@text="La próxima vez que entres al App Popular, podrás ver los balances de las cuentas y/o tarjetas elegiste en la pantalla inicial."]') }
    get txtParagraphConfirmation2() { return $('//android.widget.TextView[@text="Puedes desactivar esta opción cuando quieras desde Configurar > Configurar vista rápida."]') }
    get btnIrAmisProductos() { return $('//android.widget.TextView[@text="Ir a mis productos"]') }

    get iconExclamation() { return $('//android.widget.ImageView[@content-desc="info"]') }
    get txtQuestion() { return $('//android.widget.TextView[@text="¿Seguro que deseas salir?"]') }
    get txtParagraphModal() { return $('//android.widget.TextView[@text="Los cambios no serán guardados."]') }
    get btnVolver() { return $('//android.widget.TextView[@text="Volver"]') }
    get btnSiSalir() { return $('//android.widget.TextView[@text="Sí, salir"]') }

    get listCheckboxEnabled() { return $$('//android.widget.ScrollView/android.widget.CheckBox[@enabled="true"]') }

    async validate(): Promise<void> {
        //  await commonsPage.validateDisplayElement("Configurar vista rápida")
        await expect(this.validatevistarapidatitle).toBeDisplayed();
        await commonsPage.validateDisplayElement("Al habilitar esta opción podrás ver el balance de tus productos antes de iniciar sesión.")
        await expect(this.txtHabilitarVistaRapida).toBeDisplayed();
        await expect(this.toggle).toBeDisplayed();
        await expect(this.btnGuardarCambios).toBeDisplayed();
    }

    async enableDisableToggle() {
        (await this.toggle).click();
    }

    async validateQuickBalanceEnabled() {
        //  await commonsPage.validateDisplayElement('Puedes elegir hasta 2 cuentas y/o tarjetas para incluir en la vista rápida.')
        await expect(this.btnGuardarCambios).toBeDisplayed();
    }

    async selectAccount(nroAccount: string) {
        const checkboxAccountElement = $('//android.widget.TextView[@text="' + nroAccount + '"]/following-sibling::android.widget.CheckBox[1]');

        await expect(checkboxAccountElement).toBeEnabled();
        await (await checkboxAccountElement).click();
    }

    async selectGuardarCambios() {
        await expect(this.btnGuardarCambios).toBeDisplayed();
        (await this.btnGuardarCambios).click();
        await expect(this.btnIrAmisProductos).toBeDisplayed();

    }

    async validateConfirmationQuickBalance() {
        await commonsPage.validateElement("¡Listo!")
        await commonsPage.validateElement("La próxima vez que entres al App Popular, podrás ver los balances de las cuentas y/o tarjetas elegiste en la pantalla inicial.")
        await commonsPage.validateElement("Puedes desactivar esta opción cuando quieras desde Configurar > Configurar vista rápida.")
        await commonsPage.validateElement("Ir a mis productos")
    }

    async validateCantContinueWithQuickBalance() {
        await (await this.btnGuardarCambios).click();
        for (var i = 0; i <= 20; i++) {
            if (await (await this.txtListo).isDisplayed()) {
                await expect(this.txtParagraphConfirmation1).not.toBeDisplayed();
            }
        }
    }

    async selectIrAMisProductos() {
        await expect(this.btnIrAmisProductos).toBeDisplayed();

        (await this.btnIrAmisProductos).click();
    }

    async selectGoBackBtn() {
        (await this.btnGoBack).click();
    }

    async validateSeguroDeseasSalirModal() {
        await expect(this.iconExclamation).toBeDisplayed();
        await expect(this.txtQuestion).toBeDisplayed();
        await expect(this.txtParagraphModal).toBeDisplayed();
        await expect(this.btnVolver).toBeDisplayed();
        await expect(this.btnSiSalir).toBeDisplayed();
    }

    async selectSiSalir() {
        (await this.btnSiSalir).click();
    }

    // async validateNotIncludeAccounts(globalNroAccount1: string, globalNroAccount2: string) {
    //     // async validateNotIncludeAccounts(globalNroAccount1: string) {
    //     await driver.pause(1000)
    //     const checkboxAccountElement1 = $('//android.widget.TextView[@text="' + globalNroAccount1 + '"]/following-sibling::android.widget.CheckBox[1]');
    //     // const checkboxAccountElement2 = $('//android.widget.TextView[@text="' + globalNroAccount2 + '"]/following-sibling::android.widget.CheckBox[1]');
    //     const checkboxAccountElement2 = $('//android.widget.TextView[contains(@text,"' + globalNroAccount2 + '")]/following-sibling::android.widget.CheckBox[1]');


    //     await expect(await checkboxAccountElement1).not.toBeChecked();
    //     await expect(await checkboxAccountElement2).not.toBeChecked();

    // }

    async validateNotIncludeAccounts1(globalNroAccount1: string) {
        await driver.pause(1000)
        const checkboxAccountElement1 = $('//android.widget.TextView[@text="' + globalNroAccount1 + '"]/following-sibling::android.widget.CheckBox[1]');
        // const checkboxAccountElement2 = $('//android.widget.TextView[@text="' + globalNroAccount2 + '"]/following-sibling::android.widget.CheckBox[1]');

        await expect(await checkboxAccountElement1).not.toBeChecked();
        // await expect(await checkboxAccountElement2).not.toBeChecked();

    }


    // async validateIncludeAccounts(globalNroAccount1: string, globalNroAccount2: string) {
    //     await driver.pause(1000)
    //     const checkboxAccountElement1 = $('//android.widget.TextView[@text="' + globalNroAccount1 + '"]/following-sibling::android.widget.CheckBox[1]');
    //     // const checkboxAccountElement2 = $('//android.widget.TextView[@text="' + globalNroAccount2 + '"]/following-sibling::android.widget.CheckBox[2]');

    //     const checkboxAccountElement2 = $('//android.widget.TextView[contains(@text,"' + globalNroAccount2 + '")]/following-sibling::android.widget.CheckBox[1]');

    //     const isChecked1 = await (await checkboxAccountElement1).getAttribute('checked');
    //     const isChecked2 = await (await checkboxAccountElement2).getAttribute('checked');
    //     expect(isChecked1).toBeTruthy();
    //     expect(isChecked2).toBeTruthy();
    // }

    async validateIncludeAccounts(globalNroAccount1: string) {
        await driver.pause(1000)
        const checkboxAccountElement1 = $('//android.widget.TextView[@text="' + globalNroAccount1 + '"]/following-sibling::android.widget.CheckBox[1]');
        const isChecked1 = await (await checkboxAccountElement1).getAttribute('checked');
        expect(isChecked1).toBeTruthy();
    }


    async getCheckbox() {
        GloballistCheckboxEnabled = await $$('//android.widget.ScrollView/android.widget.CheckBox[@enabled="true"]')
        GloballistCheckboxDisabled = await $$('//android.widget.ScrollView/android.widget.CheckBox[@enabled="false"]')
    }
    // async validateAccountsDisabled() {
    //     const CheckboxDisabledAfterSelectAccount = await $$('//android.widget.ScrollView/android.widget.CheckBox[@enabled="false"]')
    //     await expect(CheckboxDisabledAfterSelectAccount.length).toEqual(GloballistCheckboxEnabled.length - 2 + GloballistCheckboxDisabled.length)
    // }

    async validateAccountsDisabled() {
        const CheckboxDisabledAfterSelectAccount = await $$('//android.widget.ScrollView/android.widget.CheckBox[@enabled="false"]')
        await expect(CheckboxDisabledAfterSelectAccount.length).toEqual(GloballistCheckboxEnabled.length - 1 + GloballistCheckboxDisabled.length)
    }

}
export default new ConfigurarQuickBalancePage();