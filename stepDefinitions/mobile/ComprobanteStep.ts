import { Given, Then, When } from '@cucumber/cucumber';
import ComprobantePage from '../../pages/mobile/ComprobantePage';
import AvanceEfectivoPage from '../../pages/mobile/AvanceEfectivoPage';


Then(/^the screen Comprobante should displayed$/, async () => {
   
        await ComprobantePage.validateComprobanteAvanceEfectivoScreen();

});