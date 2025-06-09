import { Given, Then, When } from '@cucumber/cucumber';
import ConfigurarPage from '../../pages/mobile/ConfigurarPage';


When(/^user select Quick Balance from Configurar screen$/, async () => {
    await ConfigurarPage.validate();
    await ConfigurarPage.selectConfigurarQuickBalance();
});

When(/^user select go back on setting screen$/, async () => {
    await ConfigurarPage.selectGoBack();
});

Then(/^the screen of Configurar should displayed$/, async () => {
    await ConfigurarPage.validate();
});