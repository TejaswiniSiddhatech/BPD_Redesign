import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import DashboardPage from '../../pages/mobile/DashboardPage';
import Gestures from '../../commons/gestures';
import LoginPage from '../../pages/mobile/LoginPage';
import VentasDigitalesTarjetasPage from '../../pages/mobile/VentasDigitalesTarjetasPage';


const pages: { [key: string]: Page } = { ["Dashboard"]: DashboardPage };


When(/^the user tap the burger menu$/, async () => {
    //  await DashboardPage.validate();
    await DashboardPage.selectBurgerMenu();

});

When(/^the user have diferent types of products$/, async () => {
    await DashboardPage.filtroMasDeTresCuentas()
});

Then(/^the filter of products is displayed$/, async () => {
    await DashboardPage.filtroMasDeTresCuentasClick()
});


When(/^the user have one type of products$/, async () => {
    await DashboardPage.filtroMasDeTresCuentas1()
});
Then(/^the filter of products is not displayed$/, async () => {
    await DashboardPage.filtroMasDeTresCuentasClick1()
});



When(/^the user open the option Transferir in the snackbar$/, async () => {
    await DashboardPage.selectSnackBarTransferirButton();
});

Then(/^the Transferir menu is displayed$/, async () => {
    await DashboardPage.validateTransferirOptionsSnackbar();
});

When(/^the user open the option Pagar in the snackbar$/, async () => {
    await DashboardPage.selectSnackBarPagarButton();
});

Then(/^the Pagar menu is displayed$/, async () => {
    await DashboardPage.validatePagarOptionsSnackbar();
});

When(/^the user open the option CodigoCash in the snackbar$/, async () => {
    await DashboardPage.selectSnackBarCodigoCashButton();
});

When(/^the user open the option Solicitar productos in the snackbar$/, async () => {
    await DashboardPage.selectSnackBarSolicitarProductosButton();
});

When(/^user tap the option Avance de efectivo$/, async () => {
    await DashboardPage.selectAvanceEfectivo();
});

When(/^user tap the option Cambiar divisas$/, async () => {
    await DashboardPage.selectCambioDivisasBM();
});

When(/^user tap the option Entre mis cuentas from Cambiar divisas dropdown list$/, async () => {
    await DashboardPage.selectCDMisCuentasBM();
});


When(/^user tap on Pagar from burger menu$/, async () => {
    await DashboardPage.selectPagarBM();
});

When(/^user tap on Transferir from burger menu$/, async () => {
    await DashboardPage.selectTransferirBM();
});

When(/^user tap the option Expresos from Transferir dropdown list$/, async () => {
    await DashboardPage.selectTransferirExpresosBM();
});

When(/^user tap the option Cuentas de terceros from Transferir dropdown list$/, async () => {
    await DashboardPage.selectTransferirCuentasTercerosBM();
});


Then(/^the screen of Dashboard should displayed$/, async () => {
    await DashboardPage.validate();
});

When(/^user tap on "(.*)" from burger menu$/, async (optionBM: string) => {
    await DashboardPage.selectOptionBM(optionBM);
});

When(/^user select "(.*)" from user menu$/, async (userMenuOption: string) => {
    await DashboardPage.selectAnOptionUM(userMenuOption);
});

When(/^user select the account "(.*)" from when the transfer was made on Dashboard screen$/, async (nroCuenta: string) => {
    await DashboardPage.selectAccountNumber(nroCuenta);
});

When(/^user swipe up on burger menu$/, async () => {
    await Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
});

//When(/^user select a "(.*)" account$/, async (nroAccount: string) => {
// await DashboardPage.validate();
// await DashboardPage.setDashboardBalance(nroAccount);
// await DashboardPage.selectAccountbyAccountNumber(nroAccount);
//});

When(/^user select an account number "(.*)"$/, async (nroCuenta: string) => {
    await DashboardPage.selectAccountNumber(nroCuenta);
});

When(/^user select on profile avatar$/, async () => {
    // await DashboardPage.validate();
    await DashboardPage.selectProfileAvatar();

});

When(/^the user open the option Solicitar productos  in the snackbar$/, async () => {
    await DashboardPage.selectSnackBarSolicitarProductosButton();
});

When(/^user select the option of "(.*)" from the snackbar of transfers$/, async (transferOption: string) => {
    await DashboardPage.selectTransferOption(transferOption);
});

When(/^user select the option of "(.*)" from the snackbar of payments$/, async (paymentOption: string) => {
    await DashboardPage.selectPaymentOption(paymentOption);
});

When(/^user select the option of Transferir entre mis cuentas from the snackbar of transfers$/, async () => {
    await DashboardPage.selectEntreMisCuentasOpt();
});

When(/^user select the option of Tarjeta de credito from the snackbar of payments$/, async () => {
    await DashboardPage.selectPagarTCOpt();
});

When(/^user select the option of Servicios y facturas from the snackbar of payments$/, async () => {
    await DashboardPage.selectPagarServiciosFacturasOpt();
});

When(/^user tap the option Entre mis cuentas from Transferir dropdown list$/, async (transferOption: string) => {
    await DashboardPage.selectEntreMisCuentas(transferOption);
});

When(/^user select "(.*)" from burguer menu$/, async (bmOption: string) => {
    await DashboardPage.selectOptionBurguerMenu(bmOption);
});


Then(/^Validate filter for "(.*)"$/, async (option: string) => {
    await DashboardPage.menuOption(option)
});
