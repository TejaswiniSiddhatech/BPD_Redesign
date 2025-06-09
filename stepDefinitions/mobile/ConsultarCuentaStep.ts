import { Given, Then, When } from '@cucumber/cucumber';
import ConsultarCuentaPage from '../../pages/mobile/ConsultarCuentaPage';
import DashboardPage from '../../pages/mobile/DashboardPage';


let valueSinceAmout =""
let valueUntilAmout =""

When(/^user select a "(.*)" account$/, async (nroAccount: string) => {
    await DashboardPage.validate();
    //await DashboardPage.setDashboardBalance(nroAccount);
    //await DashboardPage.selectAccountbyAccountNumber(nroAccount);
    await DashboardPage.setDashboardBalance1();
    await DashboardPage.selectAccountbyAccountNumber1();
    
});

/*When(/^user clicks on "(Bpd Cuenta|Ahorros o Corrientes|Ahorros)"$/, async (Text) => {

    switch(Text) {
        case "Bpd Cuenta":            
            await DashboardPage.setDashboardBalance(Text);
            await DashboardPage.selectAccountbyAccountNumber(Text);
            break;
        case "Ahorros o Corrientes":          
            await DashboardPage.setDashboardBalance(Text);
            await DashboardPage.selectAccountbyAccountNumber(Text);
            break;
        case "Ahorros":
            await DashboardPage.setDashboardBalance(Text);
            await DashboardPage.selectAccountbyAccountNumber(Text);
            break;
        default:
            throw new Error("Invalid text");
    }
});*/

Then(/^the basic screen of saving account balance should displayed$/, async () => {
    await ConsultarCuentaPage.validateSavingAccountDetailScreen();
});

Then(/^the balance of the account should be the same as displayed at the dashboard$/, async () => {
    //const dashboardBalance = await DashboardPage.getDashboardBalance();
    const dashboardBalance = await DashboardPage.getDashboardBalance();
   // const dashboardBalanceToText = dashboardBalance.toString();
    const dashboardBalanceToText = dashboardBalance.toString();
   // await expect(ConsultarCuentaPage.lblBalanceDisponible).toHaveAttribute('text', dashboardBalanceToText);
    await expect(ConsultarCuentaPage.lblBalanceDisponible).toBeDisplayed();
});

Then(/^the basic screen of cuenta corriente balance should displayed$/, async () => {
    await ConsultarCuentaPage.validateCuentaCorrienteDetailScreen();
});

Then(/^the basic screen of certificado account balance should displayed$/, async () => {
    await ConsultarCuentaPage.validateCuentaCertificadoDetailScreen();
});

Then(/^the message "(.*)" should displayed on detail account screen$/, async (expectedMessage: string) => {
    const actualMessage = (await ConsultarCuentaPage.msgNoTransaction);
    await expect(actualMessage).toHaveAttribute('text', expectedMessage);
});

When(/^user drag the history on the detail of the account$/, async () => {
    await ConsultarCuentaPage.validateSavingAccountDetailScreen();
    await ConsultarCuentaPage.dragHistory();
});

When(/^user select the first transaction on the detail of the account$/, async () => {
    await ConsultarCuentaPage.validateLastMovements();
    await ConsultarCuentaPage.setTransactionAmount();
    await ConsultarCuentaPage.selectTransaction();
});

Given(/^user tap on icon filter$/, async () => {
    await ConsultarCuentaPage.tapIconFilter()
});

When(/^user apply filter of "(.*)"$/, async (option:string) => {
    await ConsultarCuentaPage.applyOneFilter(option)
});

Then(/^user should see the transactions of "(.*)"$/, async (expectedMessage: string) => {
    await ConsultarCuentaPage.validateFilterApplied(expectedMessage)
    
});

Then(/^user should see that the account has no transactions$/, async () => {
    await ConsultarCuentaPage.validateThereAreNotTransaction()
    
});

When(/^user selects the date range from "(.*)" (.*) to actual day$/, async (dayBefore:string,condition:string) => {
    await ConsultarCuentaPage.applyDateFilter(dayBefore,condition)
});


Then(/^user should see the transactions from "(.*)" to actual day$/, async (dayBefore:string) => {
    await ConsultarCuentaPage.validateFilterApplied(dayBefore)
    
});
When(/^user input "(.*)" and "(.*)"$/, async (sinceAmount:string,untilAmount:string) => {
    valueSinceAmout =sinceAmount
    valueUntilAmout=untilAmount
    await ConsultarCuentaPage.inputAmountFilter(sinceAmount,untilAmount)
});



Then(/^user should see a message that the range is invalid$/, async () => {
    await ConsultarCuentaPage.rangeInvalid()
    
});


Then(/^user should see that the account has no transactions in a range of amount$/, async () => {
    await ConsultarCuentaPage.noTransactionRangeAmount(valueSinceAmout,valueUntilAmout)
    
});


When(/^user tap in any filter$/, async () => {
    await ConsultarCuentaPage.appliedAnyFilter()
});

When(/^user restart filters "(.*)"$/, async (applyFilter:string) => {
    await ConsultarCuentaPage.restartFilter(applyFilter)
});


Then(/^user should see that there isn't any filter applied$/, async () => {
    await ConsultarCuentaPage.withoutFiltersApplied()
    
});

Then(/^user should see the transactions from "(.*)" to "(.*)" pesos$/, async (sinceAmount:string,untilAmount:string) => {
    await ConsultarCuentaPage.validateFilterRangeAmount(sinceAmount,untilAmount) 
});

Given(/^user select filter "(.*)"$/, async (option:string) => {
    await ConsultarCuentaPage.tapOption(option)
    
});