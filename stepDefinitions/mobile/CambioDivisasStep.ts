import { Given, Then, When } from '@cucumber/cucumber';
import CambioDivisasPage from '../../pages/mobile/CambioDivisasPage';
import TransferirEntreMisCuentasPage from '../../pages/mobile/TransferirEntreMisCuentasPage';



When(/^user select an account from desde cuenta option$/, async () => {
    // CambioDivisasPage.validate();
    // CambioDivisasPage.selectDesdeCuentaSearch();
    await TransferirEntreMisCuentasPage.validate();
    await TransferirEntreMisCuentasPage.selectSeleccionaCuenta();
});

When(/^user select an account from CD list$/, async () => {
    await CambioDivisasPage.selectFirstAccount();
});

When(/^user select a destination account from hasta cuenta option$/, async () => {
    CambioDivisasPage.selectHastaCuentaSearch();
});

When(/^user select a destination account from CD list$/, async () => {
    CambioDivisasPage.selectFirstDestinationAccount();
});

When(/^user type amount "(.*)" to transfer$/, async (transferAmount: string) => {
    // CambioDivisasPage.sendAmountForTransfer(amountTransfer);
    await TransferirEntreMisCuentasPage.enterAmountDOPCurrency(transferAmount);
});

When(/^user continue with Cambiar divisas$/, async () => {
    //  CambioDivisasPage.selectContinuarBtn();
    try {
        await TransferirEntreMisCuentasPage.selectBtnContinuar();
    } catch (Exception) {
        try {
            await TransferirEntreMisCuentasPage.selectBtnContinuar();
        } catch (Exception) {
            await TransferirEntreMisCuentasPage.selectBtnContinuar();
        }
    }
});

When(/^user select button Si, transferir on Verification screen$/, async () => {
    // CambioDivisasPage.selectBtnSiTransferir();
        await TransferirEntreMisCuentasPage.validateVerificacionWithoutDescriptionScreen();
        await TransferirEntreMisCuentasPage.selectSiTransferir();
  
});

When(/^type token popular code on CD Token Popular screen$/, async () => {
    // CambioDivisasPage.sendTokenPopular("321321");
        await TransferirEntreMisCuentasPage.validateTokenPopularScreen();
        await TransferirEntreMisCuentasPage.typeTokenPopular("321321")
});


When(/^user tap the option Terceros from Cambio de divisas dropdown list$/, async () => {
    CambioDivisasPage.SelectTercerosmenuCD();
});

When(/^user tap the option Cambio de divisas$/, async () => {
    CambioDivisasPage.SelectcambiarDiviasMenu();
});

When(/^user tap the option Entre mis cuentas from Cambio de divisas dropdown list$/, async () => {
    CambioDivisasPage.SelectEntremiscunetasmenuCD();
});

Then(/^the screen Verificacion should displayed$/, async () => {
    await TransferirEntreMisCuentasPage.validateVerificacionWithoutDescriptionScreen();
    // CambioDivisasPage.validateVerificationScreen();
});

Then(/^the screen Token Popular should displayed$/, async () => {
    await CambioDivisasPage.validateTokenPopularScreen();
});


