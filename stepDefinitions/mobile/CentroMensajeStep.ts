import { Given, Then, When } from '@cucumber/cucumber';
import centroMensajesPage from '../../pages/mobile/CentroMensajesPage';

When(/^user select the toggle menu$/, async () => {
    await centroMensajesPage.validate();
    await centroMensajesPage.selectToggleMenu();
});

When(/^user select "(.*)" from toggle menu$/, async (selectedOption:string) => {
    await centroMensajesPage.selectOptionFromToggleMenu(selectedOption);
});

Then(/^the screen of centro de mensajes should displayed$/, async () => {
    await centroMensajesPage.validateCentroMensajesScreen();
});

Then(/^screen with message "(.*)" should be displayed$/, async (expectedMessage:string) => {
    await centroMensajesPage.validateCentroMensajeMessage(expectedMessage);
});

