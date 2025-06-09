import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import TokenPopular from '../../pages/mobile/TokenPopularPage';
import TokenPopularPage from '../../pages/mobile/TokenPopularPage';
import AvanceEfectivoPage from '../../pages/mobile/AvanceEfectivoPage';

const pages: { [key: string]: Page } = { ["Token"]: TokenPopular };


When(/^the user click the button Token Popular$/, async () => {
    await TokenPopularPage.loginTokenPopular()
});

Given(/^the user fill the username field with "(.*)"$/, async (text: string) => {
    await (await TokenPopularPage.userfieldLbl).setValue(text)
});

Then(/^the user fill the password field with "(.*)"$/, async (text: string) => {
    await (await TokenPopularPage.passfieldLbl).setValue(text)
});

When(/^the user tap the button with the text Continuar$/, async () => {
    await (await TokenPopularPage.continuarBtn).click()
});

When(/^the user tap the label with text Pulsa aqui para utilizar otro método de autenticación$/, async () => {
    await (await TokenPopularPage.otraAutenBtn).click()

});

When(/^the user select the option Enviar a mi correo electronico$/, async () => {
    await (await TokenPopularPage.emailOption).click()
});

When(/^the user press the button with the text Continuar$/, async () => {
    await (await TokenPopularPage.emailContinuarBtn).click()
});

Then(/^the user fill the security code field with the number (.*)$/, async (text: string) => {
    await (await TokenPopularPage.secuCodeLbl).setValue(text)
});

Then(/^the user click the checkbox with the text (.*)$/, async (text: string) => {
    const txt = await TokenPopularPage.terYConLbl;
    expect(txt).toHaveTextContaining(text);
    (await TokenPopularPage.acepTermChk).click()
});

Given(/^the user click the button with the text Continuar$/, async () => {
    await (await TokenPopularPage.acepTermContinuarBtn).click()
});

Then(/^the screen show the label with the text (.*)$/, async (text3: string) => {
    const txt1 = await TokenPopularPage.lisMssgLbl;
    (expect(txt1)).toHaveTextContaining(text3);
    await (await TokenPopularPage.SalirBtn).click()
});

/*

Then(/^And (.*)$/, async (text2: string) => {
    const txt2 = await TokenPopularPage.lisMssgLbl;
    await (expect(txt2).toHaveTextContaining(text2));
});
 */


When(/^user type token popular code$/, async () => {
    await TokenPopularPage.typeTokenPopular("321321");
});

When(/^user select continuar on Token Popular screen$/, async () => {
    await TokenPopularPage.selectBtnContinuarOnPopularTokenScreen();

});

Then(/^screen Digite su Token Popular should displayed$/, async () => {
    await TokenPopularPage.validateTokenPopularScreen();

});

When(/^user enter the token popular$/, async () => {
    await TokenPopularPage.validateTokenPopular();
    await TokenPopular.enterTokenPopular("321321");

});