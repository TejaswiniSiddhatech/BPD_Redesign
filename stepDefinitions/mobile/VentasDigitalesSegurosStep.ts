import { Given,Then,When } from '@cucumber/cucumber';
import VentasDigitalesSegurosPage from '../../pages/mobile/VentasDigitalesSegurosPage'


When(/^user select the Seguros Option from Solicitud De Productos$/, async () => {
	await VentasDigitalesSegurosPage.Seguros();
});

When(/^user the accept the Terms and Condition screen$/, async () => {
	await VentasDigitalesSegurosPage.TermsAndCondition();
});
