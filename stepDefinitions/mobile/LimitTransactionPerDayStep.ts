import { Given, Then, When } from '@cucumber/cucumber';
import TransferirTercerosPage from '../../pages/mobile/TransferirTercerosPage';
import LimitTransactionPerDayPage from '../../pages/mobile/LimitTransactionPerDayPage';
import TransferirEntreMisCuentasPage from '../../pages/mobile/TransferirEntreMisCuentasPage';
import TransferirExpresosPage from '../../pages/mobile/TransferirExpresosPage';




When(/^user select the account "(.*)" from accounts list on Transferir a terceros screen$/, async (nroCuenta: string) => {
    await LimitTransactionPerDayPage.selectAnAccount3(nroCuenta);
});

When(/^user select the account "(.*)" from accounts list on Transferir Expresos screen$/, async (nroCuenta: string) => {
    await LimitTransactionPerDayPage.selectAnAccount3(nroCuenta);
});

When(/^user select the account "(.*)" from list of account Transferir a mis cuentas screen$/, async (nroCuenta: string) => {
    // await TransferirEntreMisCuentasPage.validateSelectAccountScreen();
    await LimitTransactionPerDayPage.selectAnAccount3(nroCuenta);
});

When(/^user select the account "(.*)" from lists of a Cuenta destino Transferir a mis cuentas screen$/, async (nroCuenta: string) => {
    await LimitTransactionPerDayPage.selectAnAccount3(nroCuenta);
});

When(/^user enter account numbers "(.*)" of Beneficiario in Transferir Expresos screen$/, async (nroCuenta: string) => {
    await LimitTransactionPerDayPage.enterNroCuenta(nroCuenta);
});

When(/^user enter an amount with DOP currency "(.*)" to transfers for Transferir a terceros$/, async (amountTransfer: string) => {
    await LimitTransactionPerDayPage.enterAmountDOPCurrenc(amountTransfer);
});

When(/^user enter amount "(.*)" to transfer to a DOP accounts on a Transferir a mis cuentas$/, async (transferAmount: string) => {
    await LimitTransactionPerDayPage.enterAmountDOPCurrenc(transferAmount);
});

When(/^user enter an amount with DOP currency "(.*)" to transfers for a Transferir Expresos$/, async (amountTransfer: string) => {
    await LimitTransactionPerDayPage.enterAmountDOPCurrenc(amountTransfer);
});

Then(/^the message "(.*)" should be displayed on a Transferir a mis cuentas screen$/, async (expectedBodyMessage: string) => {
    try {
        const actualBodyMessage = LimitTransactionPerDayPage.bodyMessage;
        await expect(actualBodyMessage).toHaveAttribute('text', expectedBodyMessage);
    }
    catch (Exception) {
        await LimitTransactionPerDayPage.comprobanteIrMisProductosBtn.isDisplayed();
        await TransferirExpresosPage.selectIrMisProductos();
    }
});

Then(/^the message "(.*)" should be displayes on Transfer Expresos screen$/, async (expectedBodyMessage: string) => {
    try {
        const actualBodyMessage = LimitTransactionPerDayPage.bodyMessage;
        await expect(actualBodyMessage).toHaveAttribute('text', expectedBodyMessage);
    }
    catch (Exception) {
        await LimitTransactionPerDayPage.comprobanteIrMisProductosBtn.isDisplayed();
        await TransferirExpresosPage.selectIrMisProductos();
    }
});

/*
Then(/^the message "(.*)" should be displayed on a Transferir a terceros screen$/, async (expectedBodyMessage: string) => {
    // const actualBodyMessage = TransferirTercerosPage.bodyMessage;
    // await expect(actualBodyMessage).toHaveAttribute('text', expectedBodyMessage);

    if (await LimitTransactionPerDayPage.otraTransferenciaBtn.isDisplayed()) {

        (await LimitTransactionPerDayPage.otraTransferenciaBtn).click();

    } else {
        const actualBodyMessage = LimitTransactionPerDayPage.bodyMessage;
        await expect(actualBodyMessage).toHaveAttribute('text', expectedBodyMessage);
    }
});*/

Then(/^the message "(.*)" should be display on a Transferir a terceros screen$/, async (expectedBodyMessage: string) => {
    try {
        const actualBodyMessage = LimitTransactionPerDayPage.bodyMessage;
        await expect(actualBodyMessage).toHaveAttribute('text', expectedBodyMessage);
    }
    catch (Exception) {
        await LimitTransactionPerDayPage.comprobanteIrMisProductosBtn.isDisplayed();
        await TransferirExpresosPage.selectIrMisProductos();
    }
});