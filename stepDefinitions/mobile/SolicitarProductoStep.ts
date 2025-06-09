import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import SolicitudProductosPage from '../../pages/mobile/SolicitudProductosPage';


Then(/^the screen Solicitar productos is displayed$/, async () => {
    await SolicitudProductosPage.validate();
});