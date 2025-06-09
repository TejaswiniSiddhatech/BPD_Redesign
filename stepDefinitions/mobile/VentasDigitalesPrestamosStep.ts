import { Given, Then, When } from '@cucumber/cucumber';
import VentasDigitalesPrestamosPage from '../../pages/mobile/VentasDigitalesPrestamosPage';
import VentasDigitalesTarjetasPage from '../../pages/mobile/VentasDigitalesTarjetasPage';
import commonsPage from '../../pages/mobile/commonsPage';


When(/^user select Solicitar Productos from burguer menu$/, async () => {

    await VentasDigitalesPrestamosPage.selectsolicitarproductomenu()

});

When(/^user select Solicitar Productos from Solicitud De Productos Submenu$/, async () => {

     await VentasDigitalesPrestamosPage.selectsolicitarproductosubmenu()

});
When(/^Select one of the requests displayed on the screen$/, async () => {
    const ExtracrediotoOption = VentasDigitalesPrestamosPage.ClosedRequestList;

  
    await expect(ExtracrediotoOption).toBeDisplayed();
    await ExtracrediotoOption.click();

});
When(/^the user should see the Application Status Check screen$/, async () => {
    await commonsPage.validateTitle('EXTRACREDITO');
    await commonsPage.validateTitle('Estatus de solicitud');
    await commonsPage.validateTitle('Cerrada:');
    await commonsPage.validateTitle('Volver atrás');

});
When(/^the user Select "(.*)" to check the list of other requests$/, async (button:string) => {
    
    // await commonsPage.validateTitle(request);
    await commonsPage.tapOnTitle(button);
});

Then(/^user select the Prestamos Option from Solicitud De Productos$/, async () => {

       await browser.pause(10000);
       try{
        await VentasDigitalesPrestamosPage.validate();
        console.log("Validation passed");

        await VentasDigitalesPrestamosPage.clickonPrestamosmenu();
        console.log("Clicked on Prestamos menu");
       }catch(error){
        console.error("Error in Prestamos option step:", error);
        throw error;
       }
    // await VentasDigitalesPrestamosPage.validate()
    // await VentasDigitalesPrestamosPage.clickonPrestamosmenu()


});

// When(/^user select the Prestamos Option from Solicitud De Productos$/, async () => {
//     //  try {
//     // await browser.pause(10000);
//     // await VentasDigitalesPrestamosPage.validate()
//     await VentasDigitalesPrestamosPage.clickonPrestamosmenu()
//     // } catch (exception) {
//     //         await VentasDigitalesPrestamosPage.VerifyFirebasepopup()
//     // }
// });


When(/^user select the Ver mas button,In the Extracredito box$/, async () => {
    //  try {
    await VentasDigitalesPrestamosPage.SelectExtracreditomenu()
    // await VentasDigitalesPrestamosPage.VerifyExtracreditopopup()
    // } catch (Exception) {
    //         await VentasDigitalesPrestamosPage.VerifyFirebasepopup()
    // }

});

When(/^user select the "(.*)" Option from Solicitud De Productos$/, async (TitleOption:string) => {
    await commonsPage.tapOnTitle(TitleOption)
 
});

When(/^User select the Solicitar Extracredito button, On the benefits screen$/, async () => {
    //  try {
    await VentasDigitalesPrestamosPage.validateextracreditopopularpage()
    await VentasDigitalesPrestamosPage.clickonextracreditobtn()
    // } catch (Exception) {
    //         await VentasDigitalesPrestamosPage.VerifyFirebasepopup()
    // }
});

When(/^On the calculator screen, select the first field and enter an amount$/, async () => {
    await VentasDigitalesPrestamosPage.EnterMonto1()

});

When(/^User Select the second field and enter an amount$/, async () => {
    await VentasDigitalesPrestamosPage.EnterMonto2()
});

When(/^User Select the second field and enter an amount "(.*)"$/, async (amount2:number) => {
    await VentasDigitalesPrestamosPage.enterAmount2(amount2);
    await browser.pause(1000);
    // await browser.keys(['done']); 
      await driver.pressKeyCode(66);
 
});
When(/^In the plazo wheel, select a desired Plazo$/, async () => {
    await VentasDigitalesPrestamosPage.verifyplazzo()
});

// When(/^Select the Solicitar button$/, async () => {
//     await VentasDigitalesPrestamosPage.clickonsolicitarbtn()
// });

When(/^Select an account number$/, async () => {
    await VentasDigitalesPrestamosPage.verifyaccount()
    await VentasDigitalesPrestamosPage.acc2.click();
});

When(/^Select the Siguiente button$/, async () => {
    await VentasDigitalesPrestamosPage.clickonsiguentebtn()
});

When(/^Select the Codigo Referido field$/, async () => {
    await VentasDigitalesPrestamosPage.verificationpage()

});

// When(/^User Enter a employee code.$/, async () => {
//     await VentasDigitalesPrestamosPage.Enter6digitemployeecode()
// });

When(/^Select the Terms and Conditions check-box$/, async () => {
    await VentasDigitalesPrestamosPage.verifytermsandcondition()
});

When(/^select the Acepto button$/, async () => {
    await VentasDigitalesPrestamosPage.clickonaceptobtn()
});


When(/^Enter the token code, and then select the Continuar button$/, async () => {
    await VentasDigitalesPrestamosPage.typeTokenPopular();
    await VentasDigitalesPrestamosPage.selectBtnContinuarOnPopularTokenScreen();

});


Then(/^On the receipt screen, select the Ir a mis productos button to end the flow$/, async () => {
    // await (await VentasDigitalesTarjetasPage.IrMisProductosBtn).isDisplayed();
    //await VentasDigitalesTarjetasPage.IrMisProductosBtn.click();

    const okButton = await $('android=new UiSelector().textContains("Ir a mis productos")'); // adjust if it's "OK", "Cerrar", etc.
    await okButton.click();
});

When(/^user select the Ver mas button,In the  Prestamo Personal box$/, async () => {
    //  try {
    await VentasDigitalesPrestamosPage.Selectprestamopersonalmenu()
    // } catch (Exception) {
    //         await VentasDigitalesPrestamosPage.VerifyFirebasepopup()
    // }
});

When(/^User select the Solicitar Prestamo button, On the benefits screen$/, async () => {
    // try {
    await VentasDigitalesPrestamosPage.Validatepersnalprestamopage()
    await VentasDigitalesPrestamosPage.clickonsolicitarprestamobtn()
    // } catch (Exception) {
    //         await VentasDigitalesPrestamosPage.VerifyFirebasepopup()
    // }
});

When(/^On the calculator screen, select the field and enter an amount$/, async () => {
    await VentasDigitalesPrestamosPage.EnterMonto1prestamo()

});
When(/^On the calculator screen, select the field and enter an amount "(.*)"/, async (amount1:number) => {
    await VentasDigitalesPrestamosPage.EnterAmount(amount1);

});

When(/^handled Pop up Si deseas un monto mayor a$/, async()=>{
await VentasDigitalesPrestamosPage.ProceswsExtraCredit();
}) 


When(/^Select one of the displayed rates$/, async () => {
    await VentasDigitalesPrestamosPage.SelectRateInterest();
});


When(/^User Enter a employee code for extracredito$/, async () => {
    await VentasDigitalesPrestamosPage.Extracreditoemployeecode()

});

When(/^User Enter a employee code$/, async () => {
    await VentasDigitalesPrestamosPage.Prestamosemployeecode1()

});

When(/^User Enter a employee code for prestamo personal$/, async () => {
    await VentasDigitalesPrestamosPage.Prestamosemployeecode()

});

When(/^user select Solicitar Productos from dashboard$/, async () => {
    await VentasDigitalesPrestamosPage.selectsolicitarproductodashboard()

});