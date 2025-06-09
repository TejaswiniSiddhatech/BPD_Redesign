import { Given, Then, When } from '@cucumber/cucumber';
import QuickBalancePage from '../../pages/mobile/QuickBalancePage';


Then(/^the view of Quick Balance should displayed on Pre login screen$/, async () => {
    await QuickBalancePage.validateServiceIsUp();
    await QuickBalancePage.validate();
});

Then(/^the accounts "(.*)" "(.*)" should displayed at Quick Balance view on Pre login screen$/, async (expectedAccount1: string, expectedAccount2: string) => {
    await QuickBalancePage.validateAccount(expectedAccount1);
    await QuickBalancePage.validateAccount(expectedAccount2);
});

Then(/^the account "(.*)" should displayed at Quick Balance view on Pre login screen$/, async (expectedAccount: string) => {
    await QuickBalancePage.validateAccount(expectedAccount);
});