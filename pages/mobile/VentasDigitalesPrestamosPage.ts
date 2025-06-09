import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';
import LoginPage from "./LoginPage";


class VentasDigitalesPrestamosPage extends Page {

    //get solicitarproductosTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'SOLICITUD DE PRODUCTOS' or . = 'SOLICITUD DEDUCTOS')]") }
    get dasdboardmenuVdtxt() { return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[4]/android.view.View[4]") }
    get MenubarSolicitarProductos() { return $('//android.widget.TextView[@text="Solicitar productos"]') }
    get VDPrestamosmenu() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/prestamoTxtTitle"]') }
    get submenusolicitarproductos() { return $('(//android.widget.TextView[@text="Solicitar productos"])[2]') }
    get VDSubtitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/selectLoanText"]') }
    get Extracreditopopulartxt() { return $('//android.widget.TextView[@text="Extracrédito Popular"]') }
    get Extracreditopopdescription() { return $('//android.widget.TextView[@text="Utiliza el monto disponible como desees. A medida que lo pagas, vuelves a tener los fondos a tu disposición."]') }
    get Extracrediovermastxt() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/extracreditoVerMasBtn"]') }

    //verify Extracredio popular page
    get btnCextracreditotitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Extracrédito Popular' or . = 'Extracrédito Popular') and @resource-id = 'com.popular.app.android:id/topText']") }
    get extracreditTxt() { return $('//android.widget.TextView[@text="Si deseas un monto mayor a RD$ 500,000.00 de ser aprobado deberás pasar por una oficina para finalizar el proceso."]')}
    get processed () {return $('//android.widget.Button[@resource-id="android:id/button1"]')}

    get description1() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Es el préstamo más rápido, ya que una vez aprobado, te permite disponer de efectivo cuando lo necesites, sin necesidad de visitar nuestras oficinas bancarias.' or . = 'Es el préstamo más rápido, ya que una vez aprobado, te permite disponer de efectivo cuando lo necesites, sin necesidad de visitar nuestras oficinas bancarias.') and @resource-id = 'com.popular.app.android:id/extracreditoPushDetailTxt']") }
    get description2() { return $("//*[@class = 'android.widget.TextView' and (@text = '•		Auto Desembolsable' or . = '•		Auto Desembolsable') and @resource-id = 'com.popular.app.android:id/tvTitle1']") }
    get description3() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Realiza desembolsos de manera rápida a través de nuestros canales digitales App Popular, Intenet Banking y Cajeros Automáticos (ATM’s).' or . = 'Realiza desembolsos de manera rápida a través de nuestros canales digitales App Popular, Intenet Banking y Cajeros Automáticos (ATM’s).') and @resource-id = 'com.popular.app.android:id/tvTitle2']") }

    get description4() { return $("//*[@class = 'android.widget.TextView' and (@text = '•		Pagos automáticos' or . = '•		Pagos automáticos') and @resource-id = 'com.popular.app.android:id/tvTitle3']") }
    get description5() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Permite pagos automáticos de la cuota mensual a través de su cuenta de banco.' or . = 'Permite pagos automáticos de la cuota mensual a través de su cuenta de banco.') and @resource-id = 'com.popular.app.android:id/tvTitle4']") }
    get description6() { return $("//*[@class = 'android.widget.TextView' and (@text = '•		Acceso al banco 24/7' or . = '•		Acceso al banco 24/7') and @resource-id = 'com.popular.app.android:id/tvTitle5'") }

    get solicitarextracreditobtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Solicitar extracrédito' or . = 'Solicitar extracrédito') and @resource-id = 'com.popular.app.android:id/solicitarExtracredito1']") }
    get solicitarextracreditobtn2() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/solicitarExtracredito4"]') }

    get montoedittxt1() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editAmount1"]') }
    get monto1() { return $('//android.widget.TextView[@text="1. Digita el monto total que deseas solicitar:"]') }
    get monto2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/requestAmountTxt3"]') }
    get montoedittxt2() { return $("//*[@class = 'android.widget.EditText' and (@text = '0.00' or . = '0.00') and @resource-id = 'com.popular.app.android:id/editAmount2']") }

    get verificacionTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'VERIFICACIÓN' or . = 'VERIFICACIÓN') and @resource-id = 'com.popular.app.android:id/textView2']") }
    get bottomarrow() { return $("//*[@class = 'android.widget.ImageView' and @resource-id = 'com.popular.app.android:id/scrollToBottomGrayArrow' and (@text = '' or . = '')]") }
    get btnacepto() { return $("//*[@class = 'android.widget.Button' and (@text = 'Acepto' or . = 'Acepto') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }
    
    get btnsiguente() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSiguente"]') }
    get btnsolicitar() { return $("//*[@class = 'android.widget.Button' and (@text = 'Solicitar' or . = 'Solicitar') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }


    get verificationcodigo() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Código de quien te asistió (si aplica)' or . = 'Código de quien te asistió (si aplica)')]") }
    get verificationcodigoedittxt() { return $('//android.widget.TextView[@text="Descripción: "]') }
    get seleccionesacctxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona la cuenta que estará atada a este préstamo:' or . = 'Selecciona la cuenta que estará atada a este préstamo:') and @resource-id = 'com.popular.app.android:id/txtAccountTypesTitle']") }
    get selectaccountlabel() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/rel_SeleccioneDesde' and (@text = '' or . = '')]") }
    get sigunte() {return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]')}
    get plazzotxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Plazo:' or . = 'Plazo:')]") }
    get selectlacctitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona la cuenta que estará atada a este préstamo:' or . = 'Selecciona la cuenta que estará atada a este préstamo:') and @resource-id = 'com.popular.app.android:id/txtAccountTypesTitle']") }
    get selectacclabel() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/rel_SeleccioneDesde' and (@text = '' or . = '')]") }
    get selctaccountlistdescription() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }
    get acc2() { return $('(//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/rel_cuenta"])[1]') }

    get codigoreferigotxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Código de quien te asistió (si aplica)' or . = 'Código de quien te asistió (si aplica)')]") }
    get codigoreferigoedittxt() { return $("//*[@class = 'android.widget.EditText' and (@text = 'Digita el código (opcional)' or . = 'Digita el código (opcional)') and @resource-id = 'com.popular.app.android:id/employeeCodeEditTxt']") }
    get aceptobtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Acepto' or . = 'Acepto') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }
    get termsconditiontxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsCondition"]') }
    get termsconditionchckbox() { return $('//android.widget.FrameLayout[@resource-id="com.popular.app.android:id/checkBoxLayout"]') }


    get prestamopersonaltxt() { return $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/prestamoVerMasBtnTxtLayout"]') }
    get prestamopersonaldescription() { return $('//android.widget.TextView[@text="Esta facilidad te permite satisfacer tus necesidades crediticias, para realizar compras."]') }
    get prestamopersonalvermas() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/prestamoVerMasBtn"]') }
    get prestamopersonaltitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/tvTitle"]') }
    get prestamodescription1() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/tvTitle1"]') }
    get prestamodescription2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/tvTitle2"]') }
    get prestamodescription3() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/tvTitle3"]') }
    get prestamodescription4() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/tvTitle4"]') }
    get prestamodescription5() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/tvTitle5"]') }
    get prestamodescription6() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/solicitarPrestamoBtn5"]') }
    get solicitarprestamobtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/solicitarPrestamoBtn4"]') }

    get requirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get continuebtnpopup() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get rateinterestdropdown() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/rateListLayout"]') }
    get rateinteresttxt() { return $('//android.widget.TextView[@text="Tasa de interés:"]') }
    get plazzoselect3() { return $('//android.view.View[@content-desc="picker_minute"]') }

//android.widget.TextView[@text="Estatus de tu solicitud"]
    get tokenPopularDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTokenMessage"]') }
    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get descripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get lblIngreseTokenPopular() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    get btnContinuar() { return $('//android.widget.TextView[@text="Continuar"]') }

    get IrMisProductosBtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }
    get titlelastpage() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tu solicitud está siendo evaluada.' or . = 'Tu solicitud está siendo evaluada.') and @resource-id = 'com.popular.app.android:id/processing']") }


    get NotificationMastardebtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Más tarde' or . = 'Más tarde')]") }
    get NotificationVermasBtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Ver más' or . = 'Ver más')]") }
    get Firebasepopupcerrarbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'CERRAR' or . = 'CERRAR') and @resource-id = 'android:id/button2']") }
    get popupEstatussolicitudbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'ESTATUS SOLICITUD' or . = 'ESTATUS SOLICITUD') and @resource-id = 'android:id/button1']") }

    get Extracrditopopsolicitarprestamotxt() { return $("//*[@class = 'android.widget.Button' and (@text = 'SOLICITAR' or . = 'SOLICITAR') and @resource-id = 'android:id/button1']") }
    get ExtracrediopopupahoroNotxt() { return $("//*[@class = 'android.widget.Button' and (@text = 'AHORA NO' or . = 'AHORA NO') and @resource-id = 'android:id/button2']") }
    get ClosedRequestList() {return $('(//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/productNameMainLayout"])[1]')}

    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }



    async selectNotificationmastardeBtn() {
        for (var i = 0; i < 20; i++) {
            if (await (await this.NotificationVermasBtn).isDisplayed()) {
                await (await this.NotificationVermasBtn).click();
                break;
            }
        }
    }

    async VerifyFirebasepopup() {
        for (var i = 0; i < 5; i++) {
            if (await (await this.Firebasepopupcerrarbtn).isDisplayed()) {
                await (await this.popupEstatussolicitudbtn).isDisplayed()
                break;
            }
        }
    }

    async VerifyExtracreditopopup() {
        await (await this.Extracrditopopsolicitarprestamotxt).waitForDisplayed({ timeout: 30000 });
        await (await this.ExtracrediopopupahoroNotxt).waitForDisplayed({ timeout: 30000 });
        (await this.Extracrditopopsolicitarprestamotxt).click();

    }


    async selectsolicitarproductomenu() {
        browser.pause(10000);
         await commonsPage.scrollView1();
        // await commonsPage.scrollView();
        await (await this.MenubarSolicitarProductos).isDisplayed();
        // await (await this.MenubarSolicitarProductos).isDisplayed();
        (await this.MenubarSolicitarProductos).click();

    }

    async selectsolicitarproductodashboard() {
        await (await this.dasdboardmenuVdtxt).waitForDisplayed({ timeout: 30000 });
        (await this.dasdboardmenuVdtxt).click();

    }
    async selectsolicitarproductosubmenu() {
        try {
            await browser.pause(3000);
            const submenu = await this.submenusolicitarproductos;
    
            await submenu.waitForDisplayed({ timeout: 10000 });
            await submenu.click();
            console.log("Clicked on Solicitar Productos submenu");
        } catch (error) {
            console.error("Failed to select Solicitar Productos submenu:", error);
            throw error; // important for test failure
        }
    }
    
    // async selectsolicitarproductosubmenu() {
    //     //  await commonsPage.scrollView();
    //     await browser.pause(3000);
    //     await (await this.submenusolicitarproductos).isDisplayed();
      
    //     (await this.submenusolicitarproductos).click();
    // }

    async validate(): Promise<void> {
        //await (await this.solicitarproductosTitle).waitForDisplayed();
        await (await this.VDSubtitle).isDisplayed();
        await expect(this.VDPrestamosmenu).toBeDisplayed();

    }

    async clickonPrestamosmenu() {
        await (await this.VDPrestamosmenu).isDisplayed();
        await browser.pause(1000);
        (await this.VDPrestamosmenu).click();

    }

    async SelectExtracreditomenu(): Promise<void> {
        await (await this.Extracreditopopulartxt).waitForDisplayed({ timeout: 30000 });
        await expect(this.Extracreditopopdescription).toBeDisplayed();
        await expect(this.Extracrediovermastxt).toBeDisplayed();
        await this.Extracrediovermastxt.click();
    }

    async validateextracreditopopularpage(): Promise<void> {
        await (await this.btnCextracreditotitle).waitForDisplayed({ timeout: 30000 });
        await (await this.description1).waitForDisplayed();
        await expect(this.description2).toBeDisplayed();
        await expect(this.description3).toBeDisplayed();
        await expect(this.description4).toBeDisplayed();
        await expect(this.description5).toBeDisplayed();


    }
    async typeTokenPopular() {
        try {
            const isVisible = await (await this.typeCodeField).waitForDisplayed({ timeout: 20000 });
            if (isVisible) {
                await (await this.typeCodeField).clearValue();
                await (await this.typeCodeField).setValue("321321");
            }
        } catch (error) {
            // If the element is not displayed within 20s, handle fallback
            await LoginPage.validateIfTokenIsUp("321321");
        }
    }
    
    

//     async typeTokenPopular() {
//         if (await (await this.typeCodeField).waitForDisplayed({ timeout: 20000 })) {
//             await (await this.typeCodeField).waitForDisplayed({ timeout: 20000 });
//             (await this.typeCodeField).clearValue();
//             (await this.typeCodeField).setValue("321321");
//         }
// else if(await (await this.typeCodeField).waitForDisplayed({ timeout: 20000 })){
//     await LoginPage.validateIfTokenIsUp("321321");
// }
//     }

    async selectBtnContinuarOnPopularTokenScreen() {
        if (await (this.continuarBtnTokenPopular).waitForDisplayed({ timeout: 30000 })) {
            await expect(this.continuarBtnTokenPopular).toBeDisplayed();
            (await this.continuarBtnTokenPopular).click();
        }
    }

    async selectIrMisProductos() {
        await (await this.titlelastpage).waitForDisplayed({ timeout: 40000 });
        await (await this.IrMisProductosBtn).waitForDisplayed({ timeout: 30000 });
        await expect(this.IrMisProductosBtn).toBeDisplayed();
        await (await this.IrMisProductosBtn).click();
    }

    async clickonextracreditobtn() {
        await (await this.solicitarextracreditobtn2).waitForDisplayed({ timeout: 30000 });
        (await this.solicitarextracreditobtn2).click();

    }

    async Selectprestamopersonalmenu(): Promise<void> {
        await (await this.prestamopersonaltxt).waitForDisplayed();
        //  await expect(this.prestamopersonaldescription).toBeDisplayed();
        await expect(this.prestamopersonalvermas).toBeDisplayed();
        await this.prestamopersonalvermas.click();
    }

    async Validatepersnalprestamopage(): Promise<void> {
        // await (await this.prestamodescription1).waitForDisplayed({ timeout: 30000 });
        // await (await this.prestamopersonaltitle).waitForDisplayed({ timeout: 30000 });
        // await (await this.prestamodescription2).waitForDisplayed();
        // await expect(this.prestamodescription3).toBeDisplayed();
        // await expect(this.prestamodescription4).toBeDisplayed();
        // await expect(this.prestamodescription5).toBeDisplayed();
        //  await expect(this.prestamodescription6).toBeDisplayed();
        (await $('//android.widget.TextView[@resource-id="com.popular.app.android:id/topText"]')).isDisplayed();



    }

    async clickonsolicitarprestamobtn() {
        await (await this.solicitarprestamobtn).waitForDisplayed();
        browser.pause(1000);
        (await this.solicitarprestamobtn).click();

    }

    async EnterMonto1() {
        await (await this.monto1).waitForDisplayed({ timeout: 30000 });
        (await this.montoedittxt1).click();
        //await (await this.edittxt1).addValue("50000");
        (await this.montoedittxt1).addValue("50000");
        await driver.pause(10000);
        
        await (await this.monto1).waitForDisplayed({ timeout: 30000 });
      
        //  await driver.performActions();
        // await driver.execute("mobile:shell",{
        //     command:'input',
        //     args:['keyevent','66']
        // });
        (await this.montoedittxt1).addValue("50000");
        // await browser.execute('mobile: performEditorAction', { action: 'Enter' });
        await browser.execute('mobile: performEditorAction', { action: 'done' });
      
    }

    async EnterMonto1prestamo() {
        await (await this.monto1).waitForDisplayed();
        (await this.montoedittxt1).click();
        //await (await this.edittxt1).addValue("50000");
        (await this.montoedittxt1).addValue("1000000");
        await (await this.monto1).waitForDisplayed();
        await browser.execute('mobile: performEditorAction', { action: 'done' });
    }
    async EnterAmount(amount:number) {
        await (await this.monto1).waitForDisplayed();
        (await this.montoedittxt1).click();
        //await (await this.edittxt1).addValue("50000");
        (await this.montoedittxt1).addValue(amount);
        await (await this.monto1).waitForDisplayed();
        await browser.execute('mobile: performEditorAction', { action: 'done' });
        // await (await this.monto1).waitForDisplayed();
    }

    async EnterMonto2() {
        await (await this.monto2).waitForDisplayed({ timeout: 30000 });
        (await this.montoedittxt2).click();
        (await this.montoedittxt2).addValue("25000");
        await browser.execute('mobile: performEditorAction', { action: 'done' });
        await (await this.monto2).waitForDisplayed({ timeout: 30000 });
    }

    async enterAmount2(amount:number) {
        await (await this.monto2).waitForDisplayed({ timeout: 30000 });
        (await this.montoedittxt2).click();
        (await this.montoedittxt2).addValue(amount);
        await driver.pause(1000);
        await browser.execute('mobile: performEditorAction', { action: 'done' });
        await (await this.monto2).waitForDisplayed({ timeout: 30000 });
    }


    async verifyplazzo() {
        // browser.execute('mobile: performEditorAction', { action: 'done' });
        await (await this.plazzotxt).waitForDisplayed({ timeout: 600000 });
        // await (await this.plazzoselect3).waitForDisplayed({ timeout: 6000 });

    }
    async ProceswsExtraCredit()
    {  
        const popup = await $('android=new UiSelector().textContains("Si deseas un monto mayor a ")');
         if( await(await this.extracreditTxt).isDisplayed())
        // {
        //     (await this.processed).click();

        // }
      
        await popup.waitForDisplayed({ timeout: 5000 });
    
        const text = await popup.getText();
        console.log('Popup message:', text);
        const PROCEDERButton = await $('android=new UiSelector().textContains("PROCEDER")'); 
        await PROCEDERButton.click();
    }

    async SelectRateInterest() {
        //browser.execute('mobile: performEditorAction', { action: 'done' });
        await (await this.rateinteresttxt).waitForDisplayed({ timeout: 60000 });
        await (await this.rateinterestdropdown).waitForDisplayed({ timeout: 30000 });
        (await this.rateinterestdropdown).click();
    }

    async clickonsolicitarbtn() {
        browser.pause(1000);
        // await commonsPage.scrollView();
        await commonsPage.scrollView1();
        await (await this.btnsolicitar).isDisplayed();
        browser.pause(1000);
        (await this.btnsolicitar).click();


    }

    async verifyaccount() {
        // await (await this.selectacclabel).waitForDisplayed({ timeout: 60000 });
        await (await this.seleccionesacctxt).waitForDisplayed({ timeout: 30000 });
        (await this.selectacclabel).click();


    }

    async clickonsiguentebtn() {
        await (await this.btnsiguente).isDisplayed();
        (await this.btnsiguente).click();

        if(await(await this.sigunte).isDisplayed())
        {
            (await this.sigunte).click();
        }


    }

    async selectAnAccount() {
        const element = $('//android.widget.TextView[contains(@text, RD$")]');
        await element.isDisplayed();

        let balanceText = await element.getText();
        console.log('print amount:' + balanceText);

        if (!balanceText.includes('zero') && !balanceText.includes('NA')) {
            await element.click();
        } else {
            console.log("No account with balance greater than zero and NA found.");
            await this.acc2.click();
        }
    }


    async verificationpage() {
        await (await this.verificacionTitle).waitForDisplayed({ timeout: 30000 });
        await (await this.codigoreferigotxt).waitForDisplayed();
        (await this.codigoreferigotxt).click();
    }


    async verifytermsandcondition() {
        await (await this.termsconditiontxt).waitForDisplayed({ timeout: 30000 });
        await (await this.termsconditionchckbox).waitForDisplayed();
        (await this.termsconditionchckbox).click();
    }

    async Prestamosemployeecode1() {
        await (await this.codigoreferigoedittxt).waitForDisplayed({ timeout: 30000 });
        await (await this.codigoreferigoedittxt).addValue("556288");


    }

    async Extracreditoemployeecode() {
        await (await this.codigoreferigoedittxt).waitForDisplayed({ timeout: 30000 });
        await (await this.codigoreferigoedittxt).addValue("857444");


    }

    async Prestamosemployeecode() {
        await (await this.codigoreferigoedittxt).waitForDisplayed({ timeout: 30000 });
        await (await this.codigoreferigoedittxt).addValue("444444");


    }

    async clickonaceptobtn() {
        await (await this.btnacepto).waitForDisplayed({ timeout: 30000 });
        (await this.btnacepto).click();


    }



}
export default new VentasDigitalesPrestamosPage();