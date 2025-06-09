import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';


class SquadVentasDigitalesTarjetasPage extends Page {


    get SVDTarjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tarjeta Clásica' or . = 'Tarjeta Clásica') and @resource-id = 'com.popular.app.android:id/topText']") }
    get solicitartarjetasbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Solicitar tarjeta' or . = 'Solicitar tarjeta') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get solicitartarjetasbtn2() { return $("//*[@class = 'android.widget.Button' and @index = '0' and (@text = 'Ver Más Detalles' or . = 'Ver Más Detalles') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }

    get GoldarjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tarjeta Gold' or . = 'Tarjeta Gold') and @resource-id = 'com.popular.app.android:id/topText']") }
    get Botondepruebogoldbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Botón de prueba content' or . = 'Botón de prueba content') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get descriptiongold1stpage() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Descripción de prueba para la tarjeta Gold.' or . = 'Descripción de prueba para la tarjeta Gold.') and @resource-id = 'com.popular.app.android:id/tvDescriptionGold']") }
    get selectgoldcardtitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona la marca de tu preferencia:' or . = 'Selecciona la marca de tu preferencia:') and @resource-id = 'com.popular.app.android:id/topText']") }
    get selectgoldcardbutton() { return $("//*[@class = 'android.widget.Button' and (@text = 'Texto prueba seleccionar marca' or . = 'Texto prueba seleccionar marca') and @resource-id = 'com.popular.app.android:id/siguienteButton']") }


    get InfiniaTrjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'INFINIA' or . = 'INFINIA') and @resource-id = 'com.popular.app.android:id/topText']") }
    get Infiniasolicitartarjetabtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Solicitar tarjeta' or . = 'Solicitar tarjeta') and @resource-id = 'com.popular.app.android:id/solicitarTarjetaBtn6']") }
    get BeneficiotxtInfinia1stpage() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Beneficios:' or . = 'Beneficios:')]") }
    get selectprovinciaPuertoplata() { return $("//*[@class = 'android.widget.TextView' and (@text = 'PUERTO PLATA' or . = 'PUERTO PLATA') and @resource-id = 'com.popular.app.android:id/textView']") }


    get JetbluetarjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'JetBlue' or . = 'JetBlue') and @resource-id = 'com.popular.app.android:id/topText']") }
    get selectNoradiobtn() { return $("//*[@class = 'android.widget.RadioButton' and (@text = 'No' or . = 'No') and @resource-id = 'com.popular.app.android:id/radioBtnNo']") }
    get selectsiradiobtn() { return $("//*[@class = 'android.widget.RadioButton' and (@text = 'Si' or . = 'Si') and @resource-id = 'com.popular.app.android:id/radioBtnSi']") }
    get enteremailidedittxt() { return $("//*[@class = 'android.widget.EditText' and (@text = 'Ej juanalmonte@correro.com' or . = 'Ej juanalmonte@correro.com') and @resource-id = 'com.popular.app.android:id/editEmail']") }
    get EntereditCodigoTrueBlue() { return $("//*[@class = 'android.widget.EditText' and (@text = '0000000000' or . = '0000000000') and @resource-id = 'com.popular.app.android:id/editCodigoTrueBlue']") }
    get CodigoTrueBluetxt() { return $("//*[@class = 'android.widget.TextView' and (@text = '¿Posee cuenta TrueBlue de JetBlue?' or . = '¿Posee cuenta TrueBlue de JetBlue?') and @resource-id = 'com.popular.app.android:id/radioButtonsTitle']") }
    get selectJetbluecardbutton() { return $("//*[@class = 'android.widget.Button' and (@text = 'Siguiente' or . = 'Siguiente') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }


    get ISITarjetasTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'ISI' or . = 'ISI') and @resource-id = 'com.popular.app.android:id/topText']") }


    get cancelarpopupdescription() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Al continuar, autorizo al Banco Popular a analizar mi perfil para determinar el límite al cual califico.' or . = 'Al continuar, autorizo al Banco Popular a analizar mi perfil para determinar el límite al cual") }
    get cancelarbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'CANCELAR' or . = 'CANCELAR') and @resource-id = 'android:id/button2']") }
    get continuarbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'CONTINUAR' or . = 'CONTINUAR') and @resource-id = 'android:id/button1']") }
    get tarjetaIrmisproductosbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }

    get susurcalselect() { return $("//*[@class = 'android.widget.Button' and (@text = 'Seleccionar sucursal' or . = 'Seleccionar sucursal') and @resource-id = 'com.popular.app.android:id/seleccionarSucursalBtn']") }
    get card1() { return $("//*[@class = 'android.widget.RadioButton' and (@text = 'Tarjeta Mastercard Clásica' or . = 'Tarjeta Mastercard Clásica') and @resource-id = 'com.popular.app.android:id/radioBtn1']") }
    get card2() { return $("//*[@class = 'android.widget.RadioButton' and (@text = 'Tarjeta Visa Clásica' or . = 'Tarjeta Visa Clásica') and @resource-id = 'com.popular.app.android:id/radioBtn2']") }
    get selectcardbottomdescription() { return $("//*[@class = 'android.widget.TextView' and (@text = 'En caso de ser aprobada estarías recibiendo tu plástico en los próximos 5 días.' or . = 'En caso de ser aprobada estarías recibiendo tu plástico en los próximos 5 días.') and @resource-id = 'com.popular.app.android:id/processText1']") }

    get provinciadropdown2() { return $("//*[@class = 'android.widget.LinearLayout' and @resource-id = 'com.popular.app.android:id/stateDropDown' and (@text = '' or . = '')]") }
    get branch1() { return $("//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.popular.app.android:id/mainItemLayout' and (@text = '' or . = '')]") }
    get siguentebtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/siguienteButton"]') }
    get branch2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textTitle"]') }



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
    get diasmackbox2() { return $("//*[@class = 'android.widget.CheckBox' and (@text = 'Mi' or . = 'Mi') and @resource-id = 'com.popular.app.android:id/checkbox4']") }
    get horariostxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/schedules_labelTxt"]') }
    get horarioschbox() { return $('//android.widget.CheckBox[@resource-id="com.popular.app.android:id/checkbox8"]') }
    get horarioschbox2() { return $("//*[@class = 'android.widget.CheckBox' and (@text = '8am-12pm' or . = '8am-12pm') and @resource-id = 'com.popular.app.android:id/checkbox8']") }
    get noradiobtndescripton() { return $('//android.widget.TextView[@text="¿En caso de no estar presente, desea dejar a cargo a alguien para recibir su tarjeta?"]') }
    get noradiobtn() { return $('//android.widget.RadioButton[@resource-id="com.popular.app.android:id/noRadioBtn"]') }
    //android.widget.RadioButton[@resource-id="com.popular.app.android:id/radioBtnNo"]
//android.widget.RadioButton[@resource-id="com.popular.app.android:id/radioBtnSi"]

    get requirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get continuebtnpopup() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get employeecodetxt() { return $('//android.widget.TextView[@text="Código de quien te asistió (si aplica)"]') }
    get employeecodeedittxt() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/employeeCodeEditTxt"]') }
    get siguentebtn2() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSiguente"]') }

    get verificationtxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsTitle"]') }
    get termsconditionchbox() { return $('//android.widget.FrameLayout[@resource-id="com.popular.app.android:id/checkBoxLayout"]') }
    get TermsconditionDescripton() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsCondition"]') }
    get solicitarbtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSolicitar"]') }
    get IrMisProductosBtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }

    get reviewdocumenticon() { return $("//*[@class = 'android.widget.ImageView' and @resource-id = 'com.popular.app.android:id/successImage' and (@text = '' or . = '')]") }
    get acceptedicon() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }


    get chrome() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Chrome' or . = 'Chrome')]") }
    get nothanks1() { return $("//*[@class = 'android.widget.Button' and (@text = 'No thanks' or . = 'No thanks') and @resource-id = 'com.android.chrome:id/negative_button']") }
    get nothanks2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/termsCondition"]') }
    get edittxtsearch() { return $("//*[@class = 'android.widget.EditText' and (@text = 'Search or type web address' or . = 'Search or type web address') and @resource-id = 'com.android.chrome:id/search_box_text']") }
    get searchcontinuarbtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }

        get verifiaction_Solicitar(){ return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnSolicitar"]') }


    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }

    async verificationSoilictarButton()
    {
        await (await this.verifiaction_Solicitar).waitForDisplayed({timeout:3000});
        (await this.verifiaction_Solicitar).click();
    }

    async validate(): Promise<void> {
        await (await this.SVDTarjetasTitle).waitForDisplayed({ timeout: 60000 });

    }

    async ClickonSolicitarTarjetasbtn(): Promise<void> {
        await (await this.solicitartarjetasbtn).waitForDisplayed({ timeout: 6000 });
        await this.solicitartarjetasbtn.click();
    }


    async validateInfiniaTarjetas(): Promise<void> {
        //await (await this.SVDTarjetasTitle).waitForDisplayed({ timeout: 6000 });
        await (await this.solicitartarjetasbtn).waitForDisplayed({ timeout: 60000 });
        await this.solicitartarjetasbtn.click();
    }

    async validateNetTarjetas(): Promise<void> {
        //await (await this.SVDTarjetasTitle).waitForDisplayed({ timeout: 6000 });
        await (await this.solicitartarjetasbtn).waitForDisplayed({ timeout: 6000 });
        await this.solicitartarjetasbtn.click();
    }

    async validateISITarjetas(): Promise<void> {
        //await (await this.SVDTarjetasTitle).waitForDisplayed({ timeout: 6000 });
        await (await this.solicitartarjetasbtn).waitForDisplayed({ timeout: 60000 });
        await this.solicitartarjetasbtn.click();
    }


    async cancelartarjetabtn(): Promise<void> {
        //await (await this.cancelarpopupdescription).waitForDisplayed({ timeout: 60000 });
        await (await this.cancelarbtn).waitForDisplayed({ timeout: 60000 });
        // await this.cancelarbtn.click();
    }

    async continuartarjetabtn(): Promise<void> {
        //await (await this.cancelarpopupdescription).waitForDisplayed({ timeout: 60000 });
        await (await this.continuarbtn).waitForDisplayed({ timeout: 60000 });
        await this.continuarbtn.click();
    }

    async selectcard(): Promise<void> {
        await (await this.card1).waitForDisplayed({ timeout: 30000 });
        await this.card1.click();


    }

    async selectsusurcasloption(): Promise<void> {
        await (await this.susurcalselect).waitForDisplayed({ timeout: 60000 });
        await this.susurcalselect.click();


    }

    async Selectprovincia2() {
        await (await this.provinciatxt).waitForDisplayed({ timeout: 60000 });
        (await this.provinciadropdown2).click();
        await (await this.provincialist1).waitForDisplayed({ timeout: 6000 });
        (await this.provincialist1).click();
    }

    async Selectprovincia3() {
        // await (await this.provinciatxt).waitForDisplayed({ timeout: 40000 });
        // (await this.provinciadropdown2).click();
        await (await this.provincialist2).waitForDisplayed({ timeout: 6000 });
        (await this.provincialist2).click();
    }

    async Selectprovincia() {
        // await commonsPage.scrollView1();
        await (await this.provinciatxt).waitForDisplayed({ timeout: 60000 });
        (await this.provinciadropdown).click();
        await (await this.provincialist2).waitForDisplayed({ timeout: 65000 });
        (await this.provincialist2).click();
    }


    async Selectbranch1() {
        await (await this.branch1).waitForDisplayed({ timeout: 30000 });
        (await this.branch1).click();

    }

    async SelectMuncipio() {
        await (await this.muncipiotxt).waitForDisplayed({ timeout: 60000 });
        (await this.muncipiodropdown).click();
        await (await this.muncipiolist1).waitForDisplayed({ timeout: 60000 });
        (await this.muncipiolist1).click();
    }

    async SelectdistMuncipal() {
        await (await this.distmuncipaltxt).waitForDisplayed({ timeout: 60000 });
        (await this.distmuncipatldropdown).click();
        await (await this.distmuncipallist1).waitForDisplayed({ timeout: 60000 });
        (await this.distmuncipallist1).click();
    }

    async Selectsector() {
        await (await this.sectortxt).waitForDisplayed({ timeout: 60000 });
        (await this.sectordropdown).click();
        await (await this.sectorlist1).waitForDisplayed({ timeout: 60000 });
        (await this.sectorlist1).click();

    }

    async EnterEmpresa() {
        // await commonsPage.scrollView();
        await commonsPage.scrollView1();
        await (await this.empresatxt).waitForDisplayed({ timeout: 60000 });
        (await this.empresaedittxt).addValue("La otra querida");


    }

    async Entercalle() {
        await (await this.calletxt).waitForDisplayed({ timeout: 60000 });
        (await this.calleedittxt).addValue("Calle la bella damma");

    }

    async Enteredificio() {
        await (await this.edificiotxt).waitForDisplayed({ timeout: 60000 });
        (await this.edificioedittxt).addValue("La querida damma");


    }

    async EnterContactno() {
        await (await this.contactotxt).waitForDisplayed({ timeout: 30000 });
        (await this.contactoedittxt).addValue("987654321924");


    }

    async clickonsiguentebtn2() {
        // await commonsPage.scrollView();
        await commonsPage.scrollView1()
        browser.execute('mobile: performEditorAction', { action: 'done' });
        await (await this.siguentebtn1).waitForDisplayed({ timeout: 30000 });
        (await this.siguentebtn1).click();


    }

    async Selectdate() {
        await (await this.diastxt).waitForDisplayed({ timeout: 30000 });
        await (await this.diasmackbox).waitForDisplayed();
        (await this.diasmackbox).click();
        await (await this.diastxt).waitForDisplayed({ timeout: 6000 });
        await (await this.diasmackbox2).waitForDisplayed();
        (await this.diasmackbox2).click();
    }

    async SelectTime() {
        await (await this.horariostxt).waitForDisplayed({ timeout: 30000 });
        await (await this.horarioschbox).waitForDisplayed();
        (await this.horarioschbox).click();
        await (await this.horariostxt).waitForDisplayed({ timeout: 6000 });
        await (await this.horarioschbox2).waitForDisplayed();
        (await this.horarioschbox2).click();
    }

    async verifytermsandcondition() {
        await (await this.TermsconditionDescripton).waitForDisplayed({ timeout: 30000 });
        await (await this.termsconditionchbox).waitForDisplayed();
        (await this.termsconditionchbox).click();
    }

    async Enter6digitemployeecode2() {
        await (await this.employeecodetxt).waitForDisplayed({ timeout: 30000 });
        (await this.employeecodetxt).click();
        await (await this.employeecodeedittxt).addValue("250129");

    }

    async Clickonsiguentebtn3() {
        await (await this.siguentebtn2).waitForDisplayed({ timeout: 30000 });
        (await this.siguentebtn2).click();


    }

    async Clickonsiguentebtn() {
        browser.pause(1000);
        // await commonsPage.scrollView()
         await commonsPage.scrollView1();
        //browser.execute('mobile: performEditorAction', { action: 'done' });
        //await (await this.selectcardbottomdescription).waitForDisplayed({ timeout: 60000 });
        await (await this.siguentebtn).waitForDisplayed({ timeout: 6000 });
        (await this.siguentebtn).click();


    }


    async ClickonSolicitarBtn() {
        // await commonsPage.scrollView();
        await commonsPage.scrollView1()
        await (await this.solicitarbtn).waitForDisplayed({ timeout: 30000 });
        (await this.solicitarbtn).click();


    }

    async VerifyrequirementError() {
        await (await this.requirementerrormsg).waitForDisplayed({ timeout: 30000 });
        //(await this.requirementerrormsg).click();


    }

}
export default new SquadVentasDigitalesTarjetasPage();