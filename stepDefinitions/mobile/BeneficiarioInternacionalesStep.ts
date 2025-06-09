import { Given, Then, When } from '@cucumber/cucumber';
import BeneficiariosInternacionalesPage from '../../pages/mobile/BeneficiariosInternacionalesPage';


Then(/^the screen Beneficiarios Internacionales should displayed$/, async () => {
    await BeneficiariosInternacionalesPage.validateBeneficiarioInternacionalesScreen();
    //await BeneficiariosInternacionalesPage.gotodashboard();

});
