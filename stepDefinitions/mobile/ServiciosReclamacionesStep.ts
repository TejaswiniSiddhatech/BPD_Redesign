import { Given,Then,When } from "@wdio/cucumber-framework";
import ServiciosReclamacionesPage from '../../pages/mobile/ServiciosReclamacionesPage'
import commonsPage from "../../pages/mobile/commonsPage";


When(/^user gets the popup to ensure Passport and email update$/, async () => {
	await ServiciosReclamacionesPage.Popup();
});

When(/^user enter "([^"]*)" Passport number on Solicitar cartas page for Consular flow$/, async (passportno: string) => {
	await ServiciosReclamacionesPage.ConsularScreen(passportno);
});

When(/^user select the city address"([^"]*)"$/, async (city: string) => {
	await ServiciosReclamacionesPage.select(city);
});


When(/^user tapped on Checbox selected from Cambio fecha de pago Page$/, async () => {
	await ServiciosReclamacionesPage.SelectAccount();
});

When(/^user verify los datos screen$/, async () => {
	await ServiciosReclamacionesPage.verify();
});




When(/^user enter "([^"]*)" Passport number on Solicitar cartas page for Referencia flow$/, async (rnc: string) => {
	await ServiciosReclamacionesPage.RNCNo(rnc);
});


When(/^user gets Credit card paid and cancelled is required popups$/, async () => {
	await ServiciosReclamacionesPage.CreditCancelled();
});

When(/^user select account on Solicitar cartas page for Prestamo flow$/, async () => {
	await ServiciosReclamacionesPage.prestamo();
});

