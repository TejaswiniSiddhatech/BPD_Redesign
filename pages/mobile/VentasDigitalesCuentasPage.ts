import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';


class VentasDigitalesCuentasPage extends Page {

    //get solicitarproductosTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'SOLICITUD DE PRODUCTOS' or . = 'SOLICITUD DEDUCTOS')]") }
    get dasdboardmenuVdtxt() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View[4]') }
    get MenubarSolicitarProductos() { return $('//android.widget.TextView[@text="Solicitar productos"]') }
    get VDPrestamosmenu() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/prestamoTxtTitle"]') }
    get submenusolicitarproductos() { return $('(//android.widget.TextView[@text="Solicitar productos"])[2]') }
    get VDSubtitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/selectLoanText"]') }
    get CuentasMenu() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Cuentas' or . = 'Cuentas') and @resource-id = 'com.popular.app.android:id/cuentaTxtTitle']") }
    get AbrirCuentabtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Abrir cuenta' or . = 'Abrir cuenta') and @resource-id = 'com.popular.app.android:id/abrirCuentaBtn']") }
    get AbrirCuentatitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Cuenta Digital Libre' or . = 'Cuenta Digital Libre') and @resource-id = 'com.popular.app.android:id/cuentaDigitalLibreTxt']") }
    get AbrirCuentadescription() { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/topText"]') }
    get abrirbtn2() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ver Detalles de la Cuenta' or . = 'Ver Detalles de la Cuenta') and @resource-id = 'com.popular.app.android:id/abrirCuentaBtn']") }
    get AbrirCuentatitle2() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Apertura de Cuenta Digital Libre' or . = 'Apertura de Cuenta Digital Libre') and @resource-id = 'com.popular.app.android:id/cuentaDigitalLibreTxt']") }
    get abribrcunetastitletxt2() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Comienza tu Proceso en Minutos' or . = 'Comienza tu Proceso en Minutos') and @resource-id = 'com.popular.app.android:id/topText']") }

    get TCcheckbox() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/checkImageView"]') }
    get TCdescription() { return $("//*[@class = 'android.widget.TextView' and (@text = 'He leído y aceptado los Términos y Condiciones, los cuales puedes consultar en Popularenlinea.com' or . = 'He leído y aceptado los Términos y Condiciones, los cuales puedes consultar en Popularenlinea.com') and @resource-id = 'com.popular.app.android:id/termsCondition']") }
    get TCTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Términos y condiciones “Ventas Digitales”' or . = 'Términos y condiciones “Ventas Digitales”') and @resource-id = 'com.popular.app.android:id/termLable']") }

    get TCAceptobtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Acepto' or . = 'Acepto') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }

    get termsconditionchckbox() { return $("//*[@class = 'android.widget.ImageView' and @resource-id = 'com.popular.app.android:id/checkImageView' and (@text = '' or . = '')]") }

    get requirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get continuebtnpopup() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }

    get tokenPopularDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTokenMessage"]') }
    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get titleTokenPopular() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Para Continuar,debes responder las preguntas de seguridad.' or . = 'Para Continuar,debes responder las preguntas de seguridad.') and @resource-id = 'com.popular.app.android:id/txtLockout']") }
    get atrasbutton() { return $("//*[@class = 'android.widget.Button' and (@text = 'Atrás' or . = 'Atrás') and @resource-id = 'com.popular.app.android:id/btnCancelar']") }
    get btnContinuar() { return $("//*[@class = 'android.widget.Button' and (@text = 'Continuar' or . = 'Continuar') and @resource-id = 'com.popular.app.android:id/btnContinuar']") }

    get IrMisProductosBtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'Ir a mis productos' or . = 'Ir a mis productos') and @resource-id = 'com.popular.app.android:id/offerAccepted']") }
    get titleIrMisProductopage() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tu solicitud está siendo evaluada.' or . = 'Tu solicitud está siendo evaluada.') and @resource-id = 'com.popular.app.android:id/processing']") }


    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }


    async selectsolicitarproductomenu() {
        // await commonsPage.scrollView();
        await commonsPage.scrollView1()
        await (await this.MenubarSolicitarProductos).waitForDisplayed({ timeout: 60000 });
        (await this.MenubarSolicitarProductos).click();

    }

    async selectsolicitarproductodashboard() {
        await (await this.dasdboardmenuVdtxt).waitForDisplayed({ timeout: 60000 });
        (await this.dasdboardmenuVdtxt).click();

    }

    async selectsolicitarproductosubmenu() {
        //await commonsPage.scrollView();
        await commonsPage.scrollView1()
        await (await this.submenusolicitarproductos).waitForDisplayed({ timeout: 60000 });
        (await this.submenusolicitarproductos).click();
    }

    async validate(): Promise<void> {
        //await (await this.solicitarproductosTitle).waitForDisplayed();
        await (await this.VDSubtitle).waitForDisplayed({ timeout: 60000 });
        await expect(this.VDPrestamosmenu).toBeDisplayed();
        await expect(this.CuentasMenu).toBeDisplayed();
    }

    async clickonCuentasMenu() {
        await (await this.CuentasMenu).waitForDisplayed({ timeout: 30000 });
        (await this.CuentasMenu).click();

    }

    async SelectAbrircuentabtn(): Promise<void> {
        await (await this.AbrirCuentatitle).waitForDisplayed({ timeout: 30000 });
        await expect(this.AbrirCuentadescription).toBeDisplayed();
        await expect(this.AbrirCuentabtn).toBeDisplayed();
        await this.AbrirCuentabtn.click();
    }

    async SelectAbrircuentabtn2(): Promise<void> {
        await (await this.AbrirCuentatitle2).waitForDisplayed({ timeout: 30000 });
        await expect(this.abribrcunetastitletxt2).toBeDisplayed();
        await expect(this.abrirbtn2).toBeDisplayed();
        await this.abrirbtn2.click();
    }

    async selecttermsandCondition(): Promise<void> {
        await (await this.TCTitle).waitForDisplayed({ timeout: 30000 });
        await (await this.TCdescription).waitForDisplayed();
        await expect(this.termsconditionchckbox).toBeDisplayed();
        await this.termsconditionchckbox.click();
        await expect(this.TCAceptobtn).toBeDisplayed();
        await this.TCAceptobtn.click();

    }

    async selectAceptoBtn(): Promise<void> {
        await (await this.TCAceptobtn).waitForDisplayed({ timeout: 30000 });
        await this.TCAceptobtn.click();

    }

    async typeTokenPopular() {
        await (await this.typeCodeField).waitForDisplayed({ timeout: 15000 });
        (await this.typeCodeField).clearValue();
        (await this.typeCodeField).setValue("321321");
    }

    async typeTokenPopular2() {
        //await (await this.titleTokenPopular).waitForDisplayed({ timeout: 15000 });
        await (await this.atrasbutton).waitForDisplayed({ timeout: 15000 });
        await (await this.btnContinuar).waitForDisplayed({ timeout: 15000 });
        await this.btnContinuar.click();
    }


    async selectBtnContinuarOnPopularTokenScreen() {
        await (await this.continuarBtnTokenPopular).waitForDisplayed({ timeout: 30000 });
        (await this.continuarBtnTokenPopular).click();
    }

    async selectIrMisProductos() {
        //await (await this.titleIrMisProductopage).waitForDisplayed({ timeout: 30000 });
        await (await this.IrMisProductosBtn).waitForDisplayed({ timeout: 30000 });
        // await (await this.IrMisProductosBtn).click();
    }

}
export default new VentasDigitalesCuentasPage();