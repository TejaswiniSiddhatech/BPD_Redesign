import commonsPage from "./commonsPage";
import Page from "./page";


class MiPerfilPage extends Page {

    get titleMiPerfil() { return $('//android.widget.TextView[@text="Mi Perfil"]') }
    get imgProfilePic() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtInitial"]') }
    get txtActualizar() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewEditProfile"]') }
    get txtFullNameUser() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtUserName"]') }
    get txtCorreoElectronico() { return $('//android.widget.TextView[@text="Correo electrónico"]') }
    get descripCorreoElectronico() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewEmail"]') }
    get txtNroContacto() { return $('//android.widget.TextView[@text="Números de contacto"]') }
    get descripNroContacto() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewMobileNum"]') }
    get descripDireccion1() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewUserAddOne"]') }
    get descripDireccion2() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewUserAddTwo"]') }

    // get txtActualizaDatos() { return $('//android.widget.TextView[@text="Actualiza tus datos"]') }
    get txtActualizaDatos() { return $('//android.widget.TextView[@text="Actualizar datos"]') }
    get txtInformacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView1"]') }
    get btnActualizarModal() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewButton"]') }
    get btnCerrar() { return $('//android.widget.TextView[@text="Cerrar"]') }
    get backarrow() { return $("//*[@class = 'android.widget.Button' and (@text = '' or . = '')]") }

    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get txtCorreoElectronicoUpdate() { return $('//android.widget.TextView[@text="Correo electrónico"]') }
    get editCorreoElectronicoUpdate() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editTextEmail"]') }
    get txtNroContactoUpdate() { return $('//android.widget.TextView[@text="Número de contacto"]') }
    get editNroContactoUpdate() { return $('//android.widget.EditText[@resource-id="com.popular.app.android:id/editTextMobile"]') }
    get btnGuardarCambios() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/buttonSave"]') }
    get btnDescartar() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/buttonDiscard"]') }

    get btnGuardarCambiosConfirmacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewSave"]') }
    get btnCancelarConfirmacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewDiscard"]') }
    get txtPreguntaConfirmacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewTitle"]') }
    get txtMsgConfirmacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textViewAlertMsg"]') }


    async validate(): Promise<void> {
        await expect(this.titleMiPerfil).toBeDisplayed();
        await commonsPage.validateElement("Mi Perfil")
        await commonsPage.validateElement("Actualizar")
        // await expect(this.imgProfilePic).toBeDisplayed();
        // await expect(this.txtFullNameUser).toBeDisplayed();
        await commonsPage.validateElement("Correo electrónico")
        //  await expect(this.descripCorreoElectronico).toBeDisplayed();
        await commonsPage.validateElement("Número(s) de contacto")
        //  await commonsPage.validateElement("Móvil")
        //  await expect(this.descripNroContacto).toBeDisplayed();
        await commonsPage.validateElement("Dirección")
        // await expect(this.descripDireccion1).toBeDisplayed();
        // await expect(this.descripDireccion2).toBeDisplayed();

    }

    async selectGoBackActualizarDatos() {
        // await expect(this.btnCerrar).toBeDisplayed();
        // (await this.btnCerrar).click();
        await expect(this.backarrow).toBeDisplayed();
        (await this.backarrow).click();
    }


    async validateAcutalizarDatos() {
        await expect(this.txtActualizaDatos).toBeDisplayed();
        (await (this.txtActualizaDatos)).click();
        await commonsPage.validateElement("Actualización de datos")
    }


    async GoBackMiPerfil() {
        await expect(this.backarrow).toBeDisplayed();
        (await (this.backarrow)).click();
    }


    async selectActualizarBtn() {
        await expect(this.btnActualizarModal).toBeDisplayed();
        (await this.btnActualizarModal).click();
    }

    async typeTokenPopular(code: string) {
        await expect(this.typeCodeField).toBeDisplayed();
        (await this.typeCodeField).clearValue();
        (await this.typeCodeField).setValue(code);

    }

    async selectContinuarBtnOnTokenScreen() {
        await expect(this.continuarBtnTokenPopular).toBeDisplayed();
        (await this.continuarBtnTokenPopular).click();
    }

    async updateNroContacto(nroContacto: string) {
        await expect(this.editNroContactoUpdate).toBeDisplayed();
        (await this.editNroContactoUpdate).clearValue();
        (await this.editNroContactoUpdate).addValue(nroContacto);
        (await this.imgProfilePic).click();
    }

    async selectGuardarCambiosBtn() {
        await expect(this.btnGuardarCambios).toBeEnabled();
        (await this.btnGuardarCambios).click();
    }

    async selectGuardarCambiosBtnOnConfirmarModal() {
        await expect(this.btnGuardarCambiosConfirmacion).toBeEnabled();
        (await this.btnGuardarCambiosConfirmacion).click();
    }
}
export default new MiPerfilPage();