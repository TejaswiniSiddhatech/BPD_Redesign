import { Given, Then, When } from '@cucumber/cucumber';
import VerificacionPage from '../../pages/mobile/VerificacionPage';
import AvanceEfectivoPage from '../../pages/mobile/AvanceEfectivoPage';

When(/^user select Continuar on verificacion screen$/, async () => {
    await VerificacionPage.selectBtnContinuarOnVerificacionScreen();
});

Then(/^screen Verificacion should displayed$/, async () => {
    await VerificacionPage.validateVerificationAvanceEfectivoScreen();
});