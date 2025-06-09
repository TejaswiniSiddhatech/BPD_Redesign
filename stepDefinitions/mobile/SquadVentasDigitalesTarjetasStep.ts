import { Given, Then, When } from '@cucumber/cucumber';
import VentasDigitalesPrestamosPage from '../../pages/mobile/VentasDigitalesPrestamosPage';
import VentasDigitalesTarjetasPage from '../../pages/mobile/VentasDigitalesTarjetasPage';
import VentasDigitalesCuentasPage from '../../pages/mobile/VentasDigitalesCuentasPage';
import SquadVentasDigitalesTarjetasPage from '../../pages/mobile/SquadVentasDigitalesTarjetasPage';
import { remote } from 'webdriverio'
import SquadVentasDigitalesGoldTarjetasPage from '../../pages/mobile/SquadVentasDigitalesGoldTarjetasPage';
import SquadVentasDigitalesISITarjetasPage from '../../pages/mobile/SquadVentasDigitalesISITarjetasPage';
import SquadVentasDigitalesInfiniaTarjetasPage from '../../pages/mobile/SquadVentasDigitalesInfiniaTarjetasPage';
import SquadVentasDigitalesJetBluePage from '../../pages/mobile/SquadVentasDigitalesJetBluePage';
import SquadVentasDigitalesGnialPage from '../../pages/mobile/SquadVentasDigitalesGnialPage';
import SquadVentasDigitalesPlusCCNPage from '../../pages/mobile/SquadVentasDigitalesPlusCCNPage';
import SquadVentasDigitalesPrestamoPersonalPage from '../../pages/mobile/SquadVentasDigitalesPrestamoPersonalPage';
import SquadVentasDIgitasTitaniumPage from '../../pages/mobile/SquadVentasDIgitasTitaniumPage';

Given(/^In order to enter the Deeplink Credit Card Titanium flow screen, first click on the Titanium link$/, async () => {
    await driver.terminateApp('com.popular.app.android');
    await driver.activateApp('com.popular.app.android');
 
    await driver.execute('mobile: deepLink', {
        url: 'https://deeplink.popularenlinea.com/titanium',
        package: 'com.popular.app.android'
    });
 
});

Given(/^In order to enter the Deeplink Tarjeta Clásica flow screen, first click on the Tarjeta Clásica link$/, async () => {
    // await browser.closeApp();
    // await browser.reset();
    await driver.terminateApp('com.popular.app.android');

    // Relaunch the app (optional if you're going to deeplink it right after)
    await driver.activateApp('com.popular.app.android');

    // const desiredCaps = {
    //     platformName: 'Android',
    //     deviceName: 'emulator-5554',
    //     browserName: 'chrome',
    //     automationName: 'UiAutomator2'
    // };

    // await browser.url('https://apppopular.page.link/clasica')
    
    await driver.execute('mobile: deepLink', {
        url: 'https://apppopular.page.link/clasica',
        package: 'com.popular.app.android'
    });

});
Given(/^In order to enter the Deeplink Gnial Credit card flow screen, first click on the Tarjeta Gnial link$/, async () => {
    await driver.terminateApp('com.popular.app.android');
    await driver.activateApp('com.popular.app.android');
 
    await driver.execute('mobile: deepLink', {
        url: 'https://deeplink.popularenlinea.com/gnial',
        package: 'com.popular.app.android'
    });
 
});
 
Given(/^In order to enter the Deeplink Prestamo Personal loan request flow screen, first click on the Prestamo Personal link$/, async() => {
	await driver.terminateApp('com.popular.app.android');
    await driver.activateApp('com.popular.app.android');
 
    await driver.execute('mobile: deepLink', {
        url: 'https://deeplink.popularenlinea.com/prestamospersonales',
        package: 'com.popular.app.android'
    });
});
 
When(/^Select Solicitar tarjeta Button from Gnial Tarjetas$/, async () => {
    await SquadVentasDIgitasTitaniumPage.validateTitle('Tarjeta Gnial');
    // try {
    //     await SquadVentasDigitalesGnialPage.validate()
    //     await SquadVentasDigitalesGnialPage.Selectsolicitartarjetabtn()
    // } catch (Exception) {
    //     await SquadVentasDigitalesGnialPage.validate()
    //     await SquadVentasDigitalesGnialPage.Clickonsiguentebtn()
    // }
    await browser.pause(5000)
});
When(/^Validate Credit Card Titanium link is Open$/, async () => {
    try {
        await SquadVentasDIgitasTitaniumPage.validateTitle('Tarjeta TITANIUM');
        await SquadVentasDigitalesGnialPage.Selectsolicitartarjetabtn();
    } catch (Exception) {
       console.log("Link is not open ....")
    }
    await browser.pause(5000)
});
Given(/^In order to enter the Deeplink Plus CCN Credit card flow screen, first click on the Tarjeta Plus CCN link$/, async() => {
	await driver.terminateApp('com.popular.app.android');
    await driver.activateApp('com.popular.app.android');
 
    await driver.execute('mobile: deepLink', {
        url: 'https://deeplink.popularenlinea.com/plusccn',
        package: 'com.popular.app.android'
    });
});

Given(/^In order to enter the Deeplink Gold Credit card flow screen, first click on the Tarjeta Gold link$/, async () => {
  
    await driver.terminateApp('com.popular.app.android');

    // Relaunch the app (optional if you're going to deeplink it right after)
    await driver.activateApp('com.popular.app.android');

    // Now open the deeplink
    await driver.execute('mobile: deepLink', {
        url: 'https://apppopular.page.link/gold',
        package: 'com.popular.app.android'
    });
    // await browser.url('https://apppopular.page.link/gold')
});


Given(/^In order to enter the Deeplink ISI Credit card flow screen, first click on the Tarjeta ISI link$/, async () => {
    // await browser.closeApp();
    // await browser.reset();

    // const desiredCaps = {
    //     platformName: 'Android',
    //     deviceName: 'emulator-5554',
    //     browserName: 'chrome',
    //     automationName: 'UiAutomator2'
    // };
     // await browser.url('https://apppopular.page.link/isi')

    await driver.terminateApp('com.popular.app.android');
    await driver.activateApp('com.popular.app.android');
    await driver.execute('mobile:deepLink' ,{
        url: 'https://apppopular.page.link/isi',
        package:'com.popular.app.android'
    })

   
});


Given(/^In order to enter the Deeplink Infinia Credit card flow screen, first click on the Tarjeta Infinia link$/, async () => {
    // await browser.closeApp();
    // await browser.reset();

    // const desiredCaps = {
    //     platformName: 'Android',
    //     deviceName: 'emulator-5554',
    //     browserName: 'chrome',
    //     automationName: 'UiAutomator2'
    // };

    // await browser.url('https://apppopular.page.link/infinia')
    await driver.terminateApp('com.popular.app.android');
    await driver.activateApp('com.popular.app.android');

    await driver.execute('mobile: deepLink', {
        url: 'https://apppopular.page.link/infinia',
        package: 'com.popular.app.android'
    });
});


Given(/^In order to enter the Deeplink JetBlue Credit card flow screen, first click on the Tarjeta JetBlue link$/, async () => {
    // await browser.closeApp();
    // await browser.reset();

     await driver.terminateApp('com.popular.app.android');

    // Relaunch the app (optional if you're going to deeplink it right after)
    await driver.activateApp('com.popular.app.android');

    // Now open the deeplink
    await driver.execute('mobile: deepLink', {
        url: 'https://apppopular.page.link/jetblue',
        package: 'com.popular.app.android'
    });
    // const desiredCaps = {
    //     platformName: 'Android',
    //     deviceName: 'Pixel 7 Pro API 30',
    //     browserName: 'chrome',
    //     automationName: 'UiAutomator2'
    // };
    // await driver.execute('mobile: deepLink', {
    //     url: 'https://apppopular.page.link/jetblue',
    //     package: 'com.popular.app.android'
    // })

    // // await browser.url('https://apppopular.page.link/jetblue')
});

Then(/^user is on PLUS CCN Page$/, async() => {
	await SquadVentasDigitalesPlusCCNPage.validate()
    await browser.pause(5000)
});
Then(/^validate user is on Prestamos_Personales Page and Validate Solicitar tarjeta Button$/, async() => {
	// await SquadVentasDigitalesPrestamoPersonalPage.validate()
    await SquadVentasDIgitasTitaniumPage.validateTitle('Préstamos Personales');
});
When(/^Select Solicitar tarjeta Button from Plus CCN Tarjetas$/, async() => {
    await SquadVentasDIgitasTitaniumPage.validateTitle('PLUS CCN');
	//  try {
    //     await SquadVentasDigitalesPlusCCNPage.Selectsolicitartarjetabtn()
    // } catch (Exception) {
    //     await SquadVentasDigitalesPlusCCNPage.validate()
    //     await SquadVentasDigitalesPlusCCNPage.Clickonsiguentebtn()
    // }
    // await browser.pause(5000)
});

When(/^Select Ver Mas Detalle Button$/, async () => {
    //Select Ver Mas Detalle Button for deeplink Classic credit card flow
    try {
        await SquadVentasDigitalesTarjetasPage.validate()
        await SquadVentasDigitalesTarjetasPage.ClickonSolicitarTarjetasbtn()
    } catch (Exception) {
            await (await SquadVentasDigitalesTarjetasPage.SVDTarjetasTitle).waitForDisplayed({ timeout: 60000 });
            await (await SquadVentasDigitalesTarjetasPage.solicitartarjetasbtn2).waitForDisplayed({ timeout: 6000 });
            await SquadVentasDigitalesTarjetasPage.solicitartarjetasbtn2.click();
    }
});


When(/^Select Solicitar tarjeta Button Button of deeplink gold credit card$/, async () => {
    try {
        //  await SquadVentasDigitalesGoldTarjetasPage.validate()
        await SquadVentasDIgitasTitaniumPage.validateTitle('Tarjeta Gnial');
        await SquadVentasDigitalesGoldTarjetasPage.ClickonGoldTarjetasbtn()

    } catch (Exception) {
      
            // await SquadVentasDigitalesGoldTarjetasPage.validate()
            await SquadVentasDigitalesTarjetasPage.ClickonSolicitarTarjetasbtn()
    }

});

When(/^On the card selection screen, select one of the gold cards displayed on the screen$/, async () => {

    try {
        await SquadVentasDigitalesGoldTarjetasPage.selectgoldcard()
        await browser.pause(1000);
        await SquadVentasDigitalesGoldTarjetasPage.ClickonGoldsiguentebtn2()
    } catch (Exception) {
            await SquadVentasDigitalesGoldTarjetasPage.selectgoldcard()
            await SquadVentasDigitalesGoldTarjetasPage.ClickonGoldsiguentebtn()
    }

});

When(/^Select Solicitar tarjeta Button from ISI Tarjetas$/, async () => {

    await SquadVentasDIgitasTitaniumPage.validateTitle('ISI');
    // try {
    //     await SquadVentasDigitalesISITarjetasPage.validate()
    //     await SquadVentasDigitalesTarjetasPage.ClickonSolicitarTarjetasbtn()
    // } catch (Exception) {
    //         await SquadVentasDigitalesISITarjetasPage.validate()
    //         await (await SquadVentasDigitalesTarjetasPage.solicitartarjetasbtn2).waitForDisplayed({ timeout: 6000 });
    //         await SquadVentasDigitalesTarjetasPage.solicitartarjetasbtn2.click();
    // }
});


When(/^Select Solicitar tarjeta Button from Infinia Tarjetas$/, async () => {

    await SquadVentasDIgitasTitaniumPage.validateTitle('INFINIA');
    // try {
    //     await SquadVentasDigitalesInfiniaTarjetasPage.validate()
    //     await SquadVentasDigitalesInfiniaTarjetasPage.Selectsolicitartarjetabtn()

    // } catch (Exception) {
    //         await SquadVentasDigitalesInfiniaTarjetasPage.validate()
    //         await SquadVentasDigitalesInfiniaTarjetasPage.ClickonBoyonContinuarbtn()
    // }
});


When(/^Select Solicitar tarjeta Button from JetBlue Tarjetas$/, async () => {
    await SquadVentasDIgitasTitaniumPage.validateTitle('JetBlue');
    // try {
    //     await SquadVentasDigitalesJetBluePage.validate()
    //     await SquadVentasDigitalesJetBluePage.Selectsolicitartarjetabtn()
    // } catch (Exception) {
       
    //         await SquadVentasDigitalesJetBluePage.validate()
    //         await SquadVentasDigitalesJetBluePage.Clickonsiguentebtn()
    // }
});

When(/^Select Solicitar tarjeta Button from JetBlue Tarjetas Classica$/, async() => {
    await SquadVentasDIgitasTitaniumPage.validateTitle('Tarjeta Clásica');
    //     try {
    //     await SquadVentasDigitalesJetBluePage.validateClasicaTrajetas()
    //     await SquadVentasDigitalesJetBluePage.Selectsolicitartarjetabtn()
    // } catch (Exception) {
       
    //         // await SquadVentasDigitalesJetBluePage.validate()
    //         await SquadVentasDigitalesJetBluePage.Clickonsiguentebtn()
    // }
});



// When(/^Press hyperlink to open terms and condition pop up$/, async () => {


// });


When(/^Press option Cancelar or Ir a mis productos when MCR flag is true or fail to go to dashboard and cancel flow$/, async () => {
    try {
        await SquadVentasDigitalesTarjetasPage.cancelartarjetabtn()
    } catch (Exception) {
            await (await VentasDigitalesTarjetasPage.IrMisProductosBtn).waitForDisplayed({ timeout: 30000 })
        
    }
});


When(/^Press Button Continuar to go to forword$/, async () => {
   
        await SquadVentasDigitalesTarjetasPage.continuartarjetabtn()

});
When(/^Select the Solicitar button form verification page$/, async () => {
   
 
await SquadVentasDigitalesTarjetasPage.verificationSoilictarButton();
});

When(/^On the card selection screen, select one of the cards displayed on the screen$/, async () => {
    try {
        await SquadVentasDigitalesTarjetasPage.selectcard()
        
        await SquadVentasDigitalesTarjetasPage.Clickonsiguentebtn()
    } catch (Exception) {
            await SquadVentasDigitalesGoldTarjetasPage.ClickonGoldsiguentebtn2()
    }

});

When(/^On the province selection screen, select one of the options shown$/, async () => {
   
        await SquadVentasDigitalesTarjetasPage.Selectprovincia()
});

When(/^In the pop-up that appears, select the Seleccionar sucursal option$/, async () => {
        await SquadVentasDigitalesTarjetasPage.selectsusurcasloption()

});

When(/^On the form screen, select the province field and select the Distrito$/, async () => {
    try {
        await SquadVentasDigitalesTarjetasPage.Selectprovincia2()
    } catch (Exception) {
            await SquadVentasDigitalesTarjetasPage.Selectprovincia3()
    
    }
});

When(/^On Seleccionar una sucursal page select a branch$/, async () => {
        await SquadVentasDigitalesTarjetasPage.Selectbranch1()
});

When(/^User enter employee code on verification page$/, async () => {
        await SquadVentasDigitalesTarjetasPage.Enter6digitemployeecode2()
   
});


When(/^Verify Reviewing application screen$/, async () => {
        await (await SquadVentasDigitalesTarjetasPage.reviewdocumenticon).waitForDisplayed({ timeout: 30000 });
        //await VentasDigitalesTarjetasPage.IrMisProductosBtn.click();
});


// });

When(/^Verify Approved Screen$/, async () => {
    
        await (await SquadVentasDigitalesTarjetasPage.reviewdocumenticon).waitForDisplayed({ timeout: 30000 });
        //await VentasDigitalesTarjetasPage.IrMisProductosBtn.click();

});



When(/^Select Radio Button Si to verify email and trueblue code$/, async () => {
    await SquadVentasDigitalesJetBluePage.selectradiobtnSi()
});


When(/^Fill the textbox with email "(.*)" in Correo electrinico field$/, async (email: string) => {
    await SquadVentasDigitalesJetBluePage.Enteremailid(email);
});

When(/^Fill the textbox with "(.*)" trueblue code$/, async (code:number) => {
    await SquadVentasDigitalesJetBluePage.Entertruebluecode(code)
});

When(/^Press the siguente button for jetblue trublue cuenta page$/, async () => {
        await SquadVentasDigitalesJetBluePage.clickonjetbluesiguentebtn()
});

When(/^Select Radio Button No to verify only email$/, async () => {
    await SquadVentasDigitalesJetBluePage.SelectRadiobtnNo()
});

