import { Given, Then, When } from '@cucumber/cucumber';
import LoginPage from '../../pages/mobile/LoginPage';
import Page from '../../pages/mobile/page';
import DashboardPage from '../../pages/mobile/DashboardPage';
import PreLoginPage from '../../pages/mobile/PreLoginPage';

const pages: { [key: string]: Page } = { ["initial"]: LoginPage };


When(/^the user tap the button Volver in Login screen$/, async () => {
    await LoginPage.volverButtonLogin();
});

When(/^user login with username "(.*)" and "(.*)"$/, async (username: string, password: string) => {

    await LoginPage.login(username, password);
    await LoginPage.selectLoHareLuego();
    await LoginPage.validateIfTokenIsUp("321321")

});

When(/^user login with blocked username "(.*)" and "(.*)"$/, async (username: string, password: string) => {
    try {
        await LoginPage.login(username, password);
    } catch (Exception) {
        console.error('Not able to login due to service error')

    }
});
When(/^user login with invalid credentials username "(.*)" and "(.*)"$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});
Then(/^the screen with the message "(.*)" is displayed$/, async (text: string) => {
    const txt = await LoginPage.preScreenTxt;
    await expect(txt).toHaveTextContaining(text);
});

When(/^tap on the button Ahora no$/, async () => {
    await LoginPage.selectAhoraNoBtn();
});

When(/^user select button Lo hare luego$/, async () => {
    await LoginPage.selectLoHareLuego();
    // await LoginPage.validateIfTokenIsUp("321321")
});

When(/^user login with password "(.*)"$/, async (password: string) => {
    await LoginPage.loginWithPassword(password);
    await LoginPage.validateIfTokenIsUp('321321');
    // await LoginPage.selectmastardenotificationbtn();
    // await LoginPage.selectLoHareLuego1();
    // await LoginPage.skipBiometricNotification()
});


Then(/^user should see a message that written my credentials are incorrect$/, async () => {
    try {
        await LoginPage.validateIncorrectCredentials();
    } catch (Exception) {
        try {
            await LoginPage.validateUserBlocked();
        } catch (Exception) {
            await LoginPage.VerifyNopuedesIniciarsesionPopup();

        }

    }

});


When(/^user login 3 times with invalid credentials username "(.*)" and "(.*)"$/, async (username: string, password: string) => {
    try {
        await LoginPage.blockUsername(username, password)
    } catch (Exception) {
        try {
            await LoginPage.validateIncorrectCredentials();
        } catch (Exception) {
            await LoginPage.VerifyNopuedesIniciarsesionPopup();
        }
    }
});

Then(/^user's username has been blocked$/, async () => {
    await LoginPage.validateUserBlocked();
});

Then(/^user should a message that say username has been blocked$/, async () => {
    try {
        await LoginPage.validateUserBlocked();
    } catch (Exception) {
        try {
            await LoginPage.validateIncorrectCredentials();
        } catch (Exception) {
            await LoginPage.VerifyNopuedesIniciarsesionPopup();

        }

    }


});

When(/^user does not interact with the application for 5 minutes$/, { timeout: 1000 * 360 }, async () => {
    try {
        await DashboardPage.validate();
        await LoginPage.expiredSession();
    } catch (Exception) {

        await (await PreLoginPage.burgerMenuPreLoginBtnAfterLogout).waitForDisplayed({ timeout: 60000 });
    }

});


When(/^user login with expired session with password only "(.*)"$/, async (password: string) => {

    await LoginPage.VerifyExpiredSessionafterLogin();
    await LoginPage.selectAccederButtonPreLogin(password);
    await LoginPage.selectLoHareLuego1();
    await LoginPage.validateIfTokenIsUp('321321');
});

