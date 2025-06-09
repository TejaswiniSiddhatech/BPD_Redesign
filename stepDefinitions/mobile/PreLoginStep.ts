import { Given, Then, When } from '@cucumber/cucumber';
import PreLoginPage from '../../pages/mobile/PreLoginPage';
import LoginPage from '../../pages/mobile/LoginPage';


When(/^the user select Permitir on the Permission modal$/, async () => {
    await PreLoginPage.validatePermissionScreen();
    await PreLoginPage.allowPermission();
});

When(/^user grant permissions$/, async () => {
    await PreLoginPage.grantPermissions();
    await LoginPage.selectLoHareLuego();

});

Then(/^the welcome carrousel should displayed$/, async () => {
    try {
        await PreLoginPage.validateCarrousel();
    } catch (Exception) {
        await PreLoginPage.completeWelcomeOnboarding();
    }
});

When(/^user complete the welcome onboarding of the app$/, async () => {
    await PreLoginPage.completeWelcomeOnboarding();
});

When(/^the screen Politicas is displayed$/, async () => {
    await PreLoginPage.validatePermissionScreen()
});

Then(/^the screen Llamadas is displayed$/, async () => {
    try {
        await PreLoginPage.validateAllowPhoneCallsScreen()

    } catch (Exception) {

        await PreLoginPage.validateAllowPhoneCallsScreen()

    }
});

Then(/^the PreLogin screen is displayed$/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.validatePreLoginScreen()
});

Given(/^the PreLogin is displayed$/, async () => {
    await PreLoginPage.validatePermissionScreen();
    await PreLoginPage.allowPermission();
    await PreLoginPage.grantPermissions();
    await LoginPage.selectLoHareLuego();
    await PreLoginPage.completeWelcomeOnboarding();
    // await PreLoginPage.validateEstadoCuentaModal();
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.validatePreLoginScreen();
});

When(/^the user open the burger menu$/, async () => {
    await PreLoginPage.openPreLoginBurgerMenu();
});

When(/^the user open the burger menu after logout$/, async () => {
    await PreLoginPage.openPreLoginBurgerMenuAfterLogout();
});

Then(/^the screen Qué deseas hacer is displayed$/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.validateQueDeseasHacerBurgerMenuScreen();
});

When(/^the user tap the button Contactos, turnos y citas$/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.selectContactosTurnosYcitasButton();
});

Then(/^the screen A quién deseas contactar is displayed$/, async () => {
    await PreLoginPage.validateContactosTurnosYcitasScreen();
});

When(/^the user tap the button Token Popular$/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.selectTokenPopularPreLoginButton();
});

Then(/^the screen Instalar Token Popular is displayed$/, async () => {
    await PreLoginPage.validateInstalarTokenPopular();
});

When(/^the user tap the button Mas Transacciones$/, async () => {
    await PreLoginPage.selectMasTransaccionesPreLoginButton();
});

Then(/^the screen with the text Qué deseas hacer is displayed$/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.validateMasTransaccionesPreLoginScreen();
});

When(/^the user tap the button Acceder in Prelogin screen$/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.selectAccederButtonPreLogin();
});

Then(/^the screen Login is displayed$/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await LoginPage.validateLoginScreen();
});

Then(/^the screen PreLogin is displayed/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.validatePreLoginScreen();
});

When(/^user tap the button Volver in Pre login burger menu$/, async () => {
    await PreLoginPage.selectVolverBurgerMenu();
});

When(/^user close the informative modal of pre login screen$/, async () => {
    await PreLoginPage.selectCerrarBtn();
});

Then(/^the informative modal of Prelogin should displayed$/, async () => {
    await PreLoginPage.validateEstadoCuentaModal();
});

When(/^the user tap on option "(.*)" from the burger menu$/, async (option: string) => {
    await PreLoginPage.selectOptBurgerMenu(option);
});

Then(/^the modal of Tasa de cambio should displayed$/, async () => {
    try {
        await PreLoginPage.validateModalTasaCambio();
    } catch (Exception) {
        await expect(PreLoginPage.titleTasaCambio).toBeDisplayed();
    }
});

Given(/^user select corelibrary backend$/, async () => {
    await PreLoginPage.selectCerrarBtn();
    await PreLoginPage.openPreLoginBurgerMenu();
    await PreLoginPage.selectCoreLibBackend();
});