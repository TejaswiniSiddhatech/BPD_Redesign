import { Given, Then, When } from '@cucumber/cucumber';
import ConfigurarQuickBalancePage from '../../pages/mobile/ConfigurarQuickBalancePage';
let globalNroAccount1 = ""
let globalNroAccount2 = ""

When(/^user enable quick balance on Configurar vista rapida screen$/, async () => {
    await ConfigurarQuickBalancePage.validate();
    await ConfigurarQuickBalancePage.enableDisableToggle();
    await ConfigurarQuickBalancePage.validateQuickBalanceEnabled();
});

// When(/^user choose the accounts "(.*)" "(.*)" to include in the quick balance$/, async (nroAccount1: string, nroAccount2: string) => {
//     globalNroAccount1 = nroAccount1
//     globalNroAccount2 = nroAccount2
//     await ConfigurarQuickBalancePage.getCheckbox()
//     await ConfigurarQuickBalancePage.selectAccount(nroAccount1);
//     await ConfigurarQuickBalancePage.selectAccount(nroAccount2);
// });

When(/^user choose the accounts "(.*)" to include in the quick balance$/, async (nroAccount1: string) => {
    globalNroAccount1 = nroAccount1
    await ConfigurarQuickBalancePage.getCheckbox()
    await ConfigurarQuickBalancePage.selectAccount(nroAccount1);

});


When(/^user choose to save changes on Quick balance screen$/, async () => {
    await ConfigurarQuickBalancePage.selectGuardarCambios();
});

Then(/^user should see that the changes were successfully saved on the Quick Balance screen$/, async () => {
    await ConfigurarQuickBalancePage.validateConfirmationQuickBalance();
});

When(/^user choose the account "(.*)" to include in the quick balance$/, async (nroAccount: string) => {
    await ConfigurarQuickBalancePage.selectAccount(nroAccount);
});

Then(/^the user shouldn't be able to continue with the configuration of quick balance$/, async (expectedMsg: string) => {
    await ConfigurarQuickBalancePage.validateCantContinueWithQuickBalance();
});

When(/^user choose Ir a mis productos on Quick Balance screen$/, async () => {
    await ConfigurarQuickBalancePage.validateConfirmationQuickBalance();
    await ConfigurarQuickBalancePage.selectIrAMisProductos();
});

When(/^user disable quick balance on Configurar vista rapida screen$/, async () => {
    await ConfigurarQuickBalancePage.validate();
    await ConfigurarQuickBalancePage.enableDisableToggle();
});

When(/^user go back to setting screen$/, async () => {
    await ConfigurarQuickBalancePage.selectGoBackBtn();
});

When(/^user select Si, salir on modal$/, async () => {
    await ConfigurarQuickBalancePage.validateSeguroDeseasSalirModal();
    await ConfigurarQuickBalancePage.selectSiSalir();
});
Then(/^user should see that the accounts were not included in the quick balance$/, async () => {
    // await ConfigurarQuickBalancePage.validateNotIncludeAccounts(globalNroAccount1, globalNroAccount2);
    await ConfigurarQuickBalancePage.validateNotIncludeAccounts1(globalNroAccount1);
});

Then(/^the other accounts are deactivated$/, async () => {
    // await ConfigurarQuickBalancePage.validateIncludeAccounts(globalNroAccount1, globalNroAccount2);
    await ConfigurarQuickBalancePage.validateIncludeAccounts(globalNroAccount1);
    await ConfigurarQuickBalancePage.validateAccountsDisabled();
});

Then(/^the account should be selected$/, async () => {
    await ConfigurarQuickBalancePage.validateIncludeAccounts(globalNroAccount1);
});