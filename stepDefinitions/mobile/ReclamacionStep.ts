import { Given, Then, When } from '@cucumber/cucumber';
import ReclamacionPage from '../../pages/mobile/ReclamacionPage';

Then(/^the screen of Reclamacion - No reconozco este consumo should displayed$/, async () => {
    await ReclamacionPage.validateReclamacionNoReconozcoConsumo();
});

Then(/^the screen of Reclamacion - Me duplicaron este consumo should displayed$/, async () => {
    await ReclamacionPage.validateReclamacionDuplicaronConsumo();
});