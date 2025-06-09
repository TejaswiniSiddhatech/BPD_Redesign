import { Given, Then, When } from '@cucumber/cucumber';
import TransferirOtrosBancosPage from '../../pages/mobile/TransferirOtrosBancosPage';
import TransferirTercerosPage from '../../pages/mobile/TransferirTercerosPage';
import TransferirExpresosPage from '../../pages/mobile/TransferirExpresosPage';

let isDescripcion = false
Then(/^the screen of Transferir Otros Bancos should displayed$/, async () => {
    await TransferirOtrosBancosPage.validate();
});


When(/^user select account "(.*)", beneficiary "(.*)" on Transferir a otros bancos screen$/, async (nroCuenta: string, beneficiary: string) => {
    await TransferirOtrosBancosPage.validate();
    await TransferirOtrosBancosPage.selectAnAccount(nroCuenta)
    await TransferirOtrosBancosPage.selectAnBeneficiary(beneficiary)
});


When(/^beneficiary "(.*)" on Transferir a otros bancos screen$/, async (beneficiary: string) => {
    await TransferirOtrosBancosPage.validate();
    await TransferirOtrosBancosPage.selectAnBeneficiary(beneficiary)
});


When(/^user input "(.*)" on Transferir a otros bancos screen$/, async (amount: string) => {

    await TransferirOtrosBancosPage.inputAmount(amount)
});
When(/^user select checkbox "(.*)" on Transferir a otros bancos screen$/, async (checkbox: string) => {

    await TransferirOtrosBancosPage.chooseViaPayment(checkbox)
});
When(/^user add a description "(.*)" on Transferir a otros bancos screen$/, async (description: string) => {
    isDescripcion = true
    await TransferirOtrosBancosPage.registerDescription(description)
});

When(/^user continue with Transferir a otros bancos$/, async () => {
    await TransferirOtrosBancosPage.tapContinueTransfer()
});

When(/^user select Si, Transferir from Verificacion - Transferir a otros bancos screen$/, async () => {
    await TransferirOtrosBancosPage.validateConfirmScreen()
    await TransferirOtrosBancosPage.tapConfirmTransfer()
});


When(/^user type token popular code for Transfer other banks$/, async () => {
    await TransferirTercerosPage.typeTokenPopular("321321");
});
When(/^user select continuar on Token Popular screen for Transfer other banks$/, async () => {
    await TransferirTercerosPage.selectBtnContinuarOnPopularTokenScreen();
});

Then(/^the screen of Comprobante for Transferir a otros bancos should displayed$/, async () => {
    await TransferirOtrosBancosPage.validateVoucherTransferAnotherBank(isDescripcion);
});

Then(/^user should see a message that written there isn't sufficient funds$/, async () => {
    await TransferirOtrosBancosPage.validateInsufficienteFounds();
});

Then(/^user should see a message that says the amount must be greater than RD\$0.01$/, async () => {
    await TransferirOtrosBancosPage.validateMinimumAmount();
});

When(/^user select Realizar otra transferencia button on Transferir a otros bancos screen$/, async () => {
    await TransferirOtrosBancosPage.validateVoucherTransferAnotherBank(isDescripcion);
    await TransferirExpresosPage.selectRealizarOtraTransfer();
});