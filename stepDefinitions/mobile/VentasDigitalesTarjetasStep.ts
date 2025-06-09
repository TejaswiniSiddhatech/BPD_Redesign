import { Given, Then, When } from '@cucumber/cucumber';
import VentasDigitalesPrestamosPage from '../../pages/mobile/VentasDigitalesPrestamosPage';
import VentasDigitalesTarjetasPage from '../../pages/mobile/VentasDigitalesTarjetasPage';
import constants from '../../commons/constants';


When(/^user Select the Tarjeta option from Solicitud De Productos$/, async () => {
    await VentasDigitalesTarjetasPage.validate()
    await VentasDigitalesTarjetasPage.Clickontarjetamenu()

});

When(/^On the income screen, select the income field and enter an amount$/, async () => {
    await VentasDigitalesTarjetasPage.Entertotalincomeamount()

});

When(/^User Select the benefits field and radio Button presented on the screen.$/, async () => {
    await VentasDigitalesTarjetasPage.Selectcardtype()

});

When(/^User Select a name want to give to card$/, async () => {
    await VentasDigitalesTarjetasPage.selectcardname()
});

When(/^User Select the Siguiente button to continue with the flow$/, async () => {
    // try {
    await VentasDigitalesTarjetasPage.clicksiguentebtn()
    // } catch (Exception) {     
    //         await VentasDigitalesPrestamosPage.VerifyFirebasepopup()
    // }
});

When(/^On the card selection screen, select one of the cards displayed and then press the La quiero button$/, async () => {
    await VentasDigitalesTarjetasPage.selectcard()
});

When(/^On the form screen, select the province field and select the Distrito Nacional$/, async () => {
    await VentasDigitalesTarjetasPage.Selectprovincia()
});
When(/^In the displayed list select a province other than Distrito nacional "(.*)"$/, async (option:string) => {
    await VentasDigitalesTarjetasPage.provincia(option);
});


When(/^In the pop-up that appears, select the "(.*)"$/, async (option:string) => {
     const Selectoption =await $(`android=new UiSelector().textContains("${option}")`);
    // const Selectoption = await $(`android=new UiSelector().description("${option}")`);

    await Selectoption.waitForDisplayed({timeout:30000});
    await Selectoption.click();
    console.log('sucessfully clicked on:' +Selectoption);
});

When(/^On the province selection screen, select a branch from options shown$/, async () => {
    // (await VentasDigitalesTarjetasPage.SucursalBtn).click();
    (await VentasDigitalesTarjetasPage.JAIMEMOTAESQPADREBILLINI).click();
});



When(/^On the form screen, select the Municipio field and A value must be selected from a displayed list$/, async () => {
    await VentasDigitalesTarjetasPage.SelectMuncipio()
});

When(/^On the form screen, select the Dist Municipar field and A value must be selected from a displayed list$/, async () => {
    await VentasDigitalesTarjetasPage.SelectdistMuncipal()
});

When(/^On the form screen, select the Sector field and A value must be selected from a displayed list$/, async () => {
    await VentasDigitalesTarjetasPage.Selectsector()
});



When(/^In the field Calle must be filled with information$/, async () => {
    await VentasDigitalesTarjetasPage.Entercalle()

});
When(/^In the field Calle must be filled with "(.*)" information$/, async (calle:string) => {
    await VentasDigitalesTarjetasPage.DaynamicEnter_calle(calle)

});

// When(/^In the field Calle must be filled with information$/, async (calle: string)() => {
//     await VentasDigitalesTarjetasPage.Entercalle(calle)
// });



When(/^In the field edificio must be filled with information$/, async () => {
    await VentasDigitalesTarjetasPage.Enteredificio();
});
When(/^In the field edificio must be filled with "(.*)" information$/, async (edificio:string) => {
    await VentasDigitalesTarjetasPage.DaynamicEnteredificio(edificio);
});

// When(/^In the field empresa must be filled with information$/, async () => {
//     await VentasDigitalesTarjetasPage.EnterEmpresa()

// });
When(/^In the field empresa must be filled with "(.*)" information$/, async (empresa:string) => {
    await VentasDigitalesTarjetasPage.DyanmicEnterEmpresa(empresa);

});

When(/^In the field empresa must be filled with information$/, async() => {
    await VentasDigitalesTarjetasPage.EnterEmpresa()
});




When(/^In the field tel Contacto must enter "(.*)" to be able to continue with the flow$/, async (Contacto:number) => {
    await VentasDigitalesTarjetasPage.DyanmicEnterContactno(Contacto);

});


// When(/^In the field tel Contacto must enter to be able to continue with the flow$/, async () => {
//     await VentasDigitalesTarjetasPage.EnterContactno()

// });

When(/^In the field tel Contacto must enter to be able to continue with the flow$/, async() => {
    await VentasDigitalesTarjetasPage.EnterContactno()
});




When(/^Select the Siguiente button to continue with the flow$/, async () => {
    await VentasDigitalesTarjetasPage.clickonsiguentebtn2()
});

When(/^In the checkboxes select days and times$/, async () => {
    await VentasDigitalesTarjetasPage.Selectdate()
    await VentasDigitalesTarjetasPage.SelectTime()
});

When(/^select the Codigo referidor box and enter the employee code$/, async () => {
    await VentasDigitalesTarjetasPage.Enter6digitemployeecode()

});

When(/^Select the Siguiente button.$/, async () => {
    await VentasDigitalesTarjetasPage.Clickonsiguentebtn3()
});

When(/^Select and check the Terms and condition on Verification page$/, async () => {
    await VentasDigitalesTarjetasPage.verifytermsandcondition()

});

When(/^Select the Solicitar button$/, async () => {
// if(await(await VentasDigitalesTarjetasPage.solicitarbtn).isDisplayed())
// {
        await VentasDigitalesTarjetasPage.ClickonSolicitarBtn();
// }
//   else
//    {
//         await VentasDigitalesPrestamosPage.clickonsolicitarbtn();
//     }
});

Then(/^Select the Ir a mis productos button$/, async () => {
    browser.pause(6000);
    await (await VentasDigitalesTarjetasPage.IrMisProductosBtn).waitForEnabled();
    //await (await VentasDigitalesTarjetasPage.IrMisProductosBtn).isDisplayed();
    await VentasDigitalesTarjetasPage.IrMisProductosBtn.click();
});