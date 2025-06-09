import { Given, Then, When } from '@cucumber/cucumber';
import BeneficiariosPopularPage from '../../pages/mobile/BeneficiariosPopularPage';


When(/^user select the button Adicionar$/, async () => {
    await BeneficiariosPopularPage.selectAdicionarBtn();
});

When(/^user select an account from Beneficiario search field$/, async () => {
    await BeneficiariosPopularPage.selectBeneficiarioSearch();
});

When(/^user select tipo de beneficiario "(.*)"$/, async (type: string) => {
    await BeneficiariosPopularPage.selectBeneficiarioType(type);
});

When(/^user type the account number "(.*)"$/, async (accountNro: string) => {
    await BeneficiariosPopularPage.typeAccountNro(accountNro);
});

When(/^user type the alias "(.*)"$/, async (alias: string) => {
    await BeneficiariosPopularPage.typeAlias(alias);
});

When(/^user type the email "(.*)"$/, async (email: string) => {
    await BeneficiariosPopularPage.typeEmail(email);
});

When(/^user continue with the adition of the beneficiario$/, async () => {
    await BeneficiariosPopularPage.selectContinuarBtn();
});

When(/^user select the button Continuar on Beneficiario Confirm screen$/, async () => {
        await BeneficiariosPopularPage.selectContinuarBtnOnVerificacionScreen();
});

When(/^user type code of token popular on Beneficiario Token Popular screen$/, async () => {
    //await BeneficiariosPopularPage.typeTokenPopular("321321");
    await BeneficiariosPopularPage.typeTokenPopular("321321");

});

When(/^user select button Continuar on Beneficiario Token Popular screen$/, async () => {
    await BeneficiariosPopularPage.selectBtnContinuarOnPopularTokenScreen();
});

Then(/^the screen of Comprobante for Beneficiario should displayed$/, async () => {
    await BeneficiariosPopularPage.validateComprobanteBenefiScreen();
});

Then(/^the screen of Beneficiarios should displayed$/, async () => {

    await BeneficiariosPopularPage.validate();

});