import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';


class VentasDigitalesTarjetasPage extends Page {

    //get solicitarproductosTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'SOLICITUD DE PRODUCTOS' or . = 'SOLICITUD DEDUCTOS')]") }
    get dasdboardmenuVdtxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Solicitar productos' or . = 'Solicitar productos')]") }
    get MenubarSolicitarProductos() { return $('//android.widget.TextView[@text="Solicitar productos"]') }
    get VDTarjeta() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/tarjetaTxtTitle"]') }
    get submenusolicitarproductos() { return $('(//android.widget.TextView[@text="Solicitar productos"])[2]') }
    get VDSubtitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/selectLoanText"]') }
    get subtitle1() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/salesRequestOfferTitleTxt"]') }
    get monthlyincometxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/totalMonthlyIncome"]') }
    get edittxtincomeamount() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editIncomeAmount"]') }
    get tarjtatypetxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/selectBenifitFromCardTxt"]') }
    get tarjetatypedropdwn() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/selectBenifitFromCardDropDown"]') }

    //verify Extracredio popular page
    get miliasradiobtn1() { return $('//android.widget.RadioButton[@resource-id="com.popular.app.android:id/radioBtn1"]') }

    get milliasdescription() { return $('//android.webkit.WebView[@resource-id="com.popular.app.android:id/beneficio1WebView"]') }
    get userwanttoselecttxt() { return $('//android.widget.TextView[@text="¿Qué nombre deseas que tenga tu tarjeta?"]') }
    get userwanttoselect1() { return $('//android.widget.RadioButton[@resource-id="com.popular.app.android:id/radioBtnFirstNameType"]') }

    get userwanttoselect2() { return $('//android.widget.RadioButton[@resource-id="com.popular.app.android:id/radioBtnSecondNameType"]') }
    //get siguentebtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }
   // get siguentebtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/Siguiente"]') }
    //get siguentebtn() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/Siguiente"]') }
    get siguentebtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }
    //get siguentebtn() { return $('//android.widget.TextView[@text="Siguiente"]') }
    get subtitle2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textTitle"]') }

    get Laquierocardbtn() { return $('(//android.widget.Button[@resource-id="com.popular.app.android:id/expandCardDetailsBtn"])[1]') }
    get Laquierorelinfo() { return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.popular.app.android:id/recyclerView"]/android.widget.RelativeLayout[1]') }

    get laquierocardinfotext() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/cardsInfoTxt"]') }
    get subtitle3() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/ccOfferAddressTitle"]') }
    get Trabajotxt() { return $('//android.widget.TextView[@text="Trabajo"]') }
    get casaaptotxt() { return $('//android.widget.TextView[@text="Casa / Apto"]') }

    get provinciatxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/provinciaTxt"]') }
    get provinciadropdown() { return $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/stateDropDown"]') }
    get provincialist1() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView" and @text="DISTRITO NACIONAL"]') }
    get provincialist2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView" and @text="BARAHONA"]') }
    get muncipiotxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/municipioTxt"]') }


    get muncipiodropdown() { return $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/cityDropDown"]') }
    get muncipiolist1() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView" and @text="SANTO DOMINGO"]') }
    get distmuncipaltxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/dist_municipalTxt"]') }
    get distmuncipatldropdown() { return $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/districtDropDown"]') }

    get distmuncipallist1() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView" and @text="SANTO DOMINGO DE GUZMAN"]') }
    get sectortxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/SectorTxt"]') }
    get sectordropdown() { return $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/sectorDropDown"]') }
    get sectorlist1() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView" and @text="MARIA AUXILIADORA"]') }
    get calletxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/calleTxt"]') }

    get calleedittxt() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/calleEditTxt"]') }
    get edificiotxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/officeBuildingNameTxt"]') }
    get edificioedittxt() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/officeBuildingNameEditTxt"]') }
    get empresatxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/empresaTxt"]') }


    get empresaedittxt() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/empresaEditTxt"]') }
    get contactotxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/office_contactoTxt"]') }
    get contactoedittxt() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/officeContactoEditTxt"]') }
    get siguentebtn1() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]') }
    get subtitle4() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/ccOfferTitle"]') }
    get diastxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/díasTxt"]') }
    get diasmackbox() { return $('//android.widget.CheckBox[@resource-id="com.popular.app.android:id/checkbox3"]') }
    get horariostxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/schedules_labelTxt"]') }
    get horarioschbox() { return $('//android.widget.CheckBox[@resource-id="com.popular.app.android:id/checkbox8"]') }
    get noradiobtndescripton() { return $('//android.widget.TextView[@text="¿En caso de no estar presente, desea dejar a cargo a alguien para recibir su tarjeta?"]') }
    get noradiobtn() { return $('//android.widget.RadioButton[@resource-id="com.popular.app.android:id/noRadioBtn"]') }

    get requirementerrormsg() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tu requerimiento no pudo ser completado. Por favor intenta más tarde.' or . = 'Tu requerimiento no pudo ser completado. Por favor intenta más tarde.') and @resource-id = 'android:id/message']") }
    get continuebtnpopup() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get employeecodetxt() { return $('//android.widget.TextView[@text="Código de quien te asistió (si aplica)"]') }
    get employeecodeedittxt() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/employeeCodeEditTxt"]') }
    get siguentebtn2() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSiguente"]') }

    get verificationtxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsTitle"]') }
    get termsconditionchbox() { return $('//android.widget.FrameLayout[@resource-id="com.popular.app.android:id/checkBoxLayout"]') }
    get TermsconditionDescripton() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsCondition"]') }
    // get solicitarbtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSiguente"]') }
    get solicitarbtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSolicitar"]') }
    get SucursalBtn(){ return $('//android.widget.Button[@resource-id="com.popular.app.android:id/seleccionarSucursalBtn"]')}
    get JAIMEMOTAESQPADREBILLINI() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/direction"]')}
    // C/JAIME MOTA ESQ PADRE BILLINI
    // get IrMisProductosBtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }
    get IrMisProductosBtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/offerAccepted"]') }
    
    //android.widget.Button[@resource-id="com.popular.app.android:id/btnSolicitar"]

        verification_Solicitar() {return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSolicitar"]')}


    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }


    async selectsolicitarproductomenu() {
        // await commonsPage.scrollView();
        await commonsPage.scrollView1()
        await (await this.MenubarSolicitarProductos).waitForDisplayed({ timeout: 40000 });
        (await this.MenubarSolicitarProductos).click();

    }

    async selectsolicitarproductosubmenu() {
        //await commonsPage.scrollView();
        await commonsPage.scrollView1();
        await (await this.submenusolicitarproductos).waitForDisplayed({ timeout: 40000 });
        (await this.submenusolicitarproductos).click();
    }

    async validate(): Promise<void> {
        //await (await this.solicitarproductosTitle).waitForDisplayed();
        await (await this.VDSubtitle).waitForDisplayed({ timeout: 40000 });
        await expect(this.VDTarjeta).toBeDisplayed();

    }

    async Clickontarjetamenu() {
        await (await this.VDTarjeta).waitForDisplayed({ timeout: 40000 });
        (await this.VDTarjeta).click();

    }

    async Entertotalincomeamount(): Promise<void> {
        await (await this.monthlyincometxt).waitForDisplayed({ timeout: 20000 });
        (await this.edittxtincomeamount).addValue("25000");
    }

    async Selectcardtype(): Promise<void> {
        await (await this.tarjtatypetxt).waitForDisplayed({ timeout: 40000 });
        await (await this.tarjetatypedropdwn).waitForDisplayed();
        await this.tarjetatypedropdwn.click();
        await (await this.miliasradiobtn1).waitForDisplayed({ timeout: 6000 });
        //await expect(this.milliasdescription).toBeDisplayed();
        await this.miliasradiobtn1.click();


    }

    async selectcardname() {
        await (await this.userwanttoselecttxt).waitForDisplayed({ timeout: 40000 });
        (await this.userwanttoselect1).click();

    }

    async clicksiguentebtn(): Promise<void> {
        // await commonsPage.scrollView1();
        await (await this.siguentebtn).waitForDisplayed({ timeout: 20000 });
        await this.siguentebtn.click();
    }

    async selectcard(): Promise<void> {
        await (await this.Laquierocardbtn).waitForDisplayed({ timeout: 40000 });
        await (await this.laquierocardinfotext).waitForDisplayed({ timeout: 10000 });
        await (await this.Laquierorelinfo).waitForDisplayed();
        await this.Laquierocardbtn.click();


    }


    async provincia(option:string){await (await this.Trabajotxt).waitForDisplayed({ timeout: 40000 });
    await (await this.casaaptotxt).waitForDisplayed({ timeout: 3000 });
    await (await this.provinciatxt).waitForDisplayed({ timeout: 9000 });
    (await this.provinciadropdown).click();
        const provinceOption = await $(`android=new UiSelector().textContains("${option}")`);
        await provinceOption.waitForDisplayed({timeout:10000});
        
        await provinceOption.click();

    }
    async Selectprovincia() {
        await (await this.Trabajotxt).waitForDisplayed({ timeout: 40000 });
        await (await this.casaaptotxt).waitForDisplayed({ timeout: 3000 });
        await (await this.provinciatxt).waitForDisplayed({ timeout: 9000 });
        (await this.provinciadropdown).click();
        await (await this.provincialist1).waitForDisplayed({ timeout: 40000 });
        (await this.provincialist1).click();
    }

    async SelectMuncipio() {
        await (await this.muncipiotxt).waitForDisplayed({ timeout: 50000 });
        (await this.muncipiodropdown).click();
        await (await this.muncipiolist1).waitForDisplayed({ timeout: 20000 });
        (await this.muncipiolist1).click();
    }

    async SelectdistMuncipal() {
        await (await this.distmuncipaltxt).waitForDisplayed({ timeout: 40000 });
        (await this.distmuncipatldropdown).click();
        await (await this.distmuncipallist1).waitForDisplayed({ timeout: 20000 });
        (await this.distmuncipallist1).click();
    }

    async Selectsector() {
        await (await this.sectortxt).waitForDisplayed({ timeout: 40000 });
        (await this.sectordropdown).click();
        await (await this.sectorlist1).waitForDisplayed({ timeout: 20000 });
        (await this.sectorlist1).click();

    }

    async DyanmicEnterEmpresa(empresa:string) {
        await browser.pause(1000);
        await (await this.empresatxt).isDisplayed();
         await commonsPage.scrollView1();
        (await this.empresaedittxt).addValue("La otra querida");
        // (await this.empresaedittxt).addValue(empresa);


    }
    async EnterEmpresa() {
        await browser.pause(3000);
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Empresa"))');
        //await driver.execute('mobile: swipe', { direction: 'down' });
        //await commonsPage.swipeDown_S();
         await commonsPage.scrollView1();
        // await commonsPage.scrollView();
        await browser.pause(4000)
        await (await this.empresatxt).isDisplayed();
        //await commonsPage.scrollView1();
        //await driver.execute('mobile: scroll', { direction: 'down' });
        (await this.empresaedittxt).addValue("La otra querida");
        // (await this.empresaedittxt).addValue(empresa);


    }

    // async Entercalle(calle:string) {
    //     await (await this.calletxt).waitForDisplayed({ timeout: 40000 });
    //     (await this.calleedittxt).addValue(calle);
    //     // (await this.calleedittxt).addValue("Calle la bella damma");

    // }
    async Entercalle() {
        await (await this.calletxt).waitForDisplayed({ timeout: 40000 });
        //(await this.calleedittxt).addValue(calle);
         (await this.calleedittxt).addValue("Calle la bella damma");

    }
    async DaynamicEnter_calle(calle:string) {
        await (await this.calletxt).waitForDisplayed({ timeout: 40000 });
        //(await this.calleedittxt).addValue(calle);
       
         (await this.calleedittxt).addValue(calle);
         

    }

     async DaynamicEnteredificio(edificio:string) {
        await (await this.edificiotxt).waitForDisplayed({ timeout: 40000 });
        // (await this.edificioedittxt).addValue("La querida damma");
        (await this.edificioedittxt).addValue(edificio);

    }
    async Enteredificio() {
        await (await this.edificiotxt).waitForDisplayed({ timeout: 40000 });
         (await this.edificioedittxt).addValue("La querida damma");
       // (await this.edificioedittxt).addValue(edificio);

    }

    async DyanmicEnterContactno(Contacto:number) {
        await (await this.contactotxt).waitForDisplayed({ timeout: 6000 });
        // (await this.contactoedittxt).addValue("987654321924");

        (await this.contactoedittxt).addValue(Contacto);
    }

    async EnterContactno() {
        await (await this.contactotxt).waitForDisplayed({ timeout: 6000 });
         (await this.contactoedittxt).addValue("987654321924");

        //(await this.contactoedittxt).addValue(Contacto);
    }

    async clickonsiguentebtn2() {
        //await commonsPage.scrollView1();
        await browser.pause(4000)
        //await commonsPage.swipeDown_S()
         await commonsPage.scrollView1();
        // await commonsPage.scrollView();
       // await driver.execute('mobile: swipe', { direction: 'down' });
        // browser.execute('mobile: performEditorAction', { action: 'done' });
        await (await this.siguentebtn).waitForDisplayed();
        (await this.siguentebtn).click();
        


    }

    async Selectdate() {
        await (await this.diastxt).waitForDisplayed({ timeout: 20000 });
        await (await this.diasmackbox).waitForDisplayed();
        (await this.diasmackbox).click();
    }

    async SelectTime() {
        await (await this.horariostxt).waitForDisplayed({ timeout: 6000 });
        await (await this.horarioschbox).waitForDisplayed();
        (await this.horarioschbox).click();
    }

    async verifytermsandcondition() {
        await (await this.TermsconditionDescripton).waitForDisplayed({ timeout: 6000 });
        await (await this.termsconditionchbox).waitForDisplayed();
        (await this.termsconditionchbox).click();
    }

    async Enter6digitemployeecode() {
        await (await this.employeecodetxt).waitForDisplayed({ timeout: 6000 });
        (await this.employeecodetxt).click();
        await (await this.employeecodeedittxt).addValue("857444");


    }

    async Clickonsiguentebtn3() {
        await (await this.siguentebtn2).waitForDisplayed({ timeout: 20000 });
        (await this.siguentebtn2).click();


    }

    async ClickonSolicitarBtn() {
        browser.pause(10000);
        //  await commonsPage.scrollView();
        await commonsPage.scrollView1()
        await (await this.solicitarbtn).isDisplayed();
        
    browser.pause(1000);
        (await this.solicitarbtn).click();

        if(await(await this.siguentebtn).isDisplayed)
{
    (await this.siguentebtn).click();
}

    }

    async VerifyrequirementError() {
        await (await this.requirementerrormsg).waitForDisplayed({ timeout: 60000 });
        //(await this.requirementerrormsg).click();


    }

}
export default new VentasDigitalesTarjetasPage();