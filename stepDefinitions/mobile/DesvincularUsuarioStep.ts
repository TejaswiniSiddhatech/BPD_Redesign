import { Given, Then, When } from '@cucumber/cucumber';
import DesvincularUsuarioPage from '../../pages/mobile/DesvincularUsuarioPage';

When(/^user select the option Desvincular mi usuario$/, async () => {
    await DesvincularUsuarioPage.selectDesvincularUsuario();
});

When(/^user select Desvincular from popup$/, async () => {
    await DesvincularUsuarioPage.selectDesvincularBtn();
});

When(/^user select Cancelar from popup$/, async () => {
    await DesvincularUsuarioPage.selectCancelarBtn();
});


 