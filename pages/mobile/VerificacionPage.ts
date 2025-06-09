import Page from "./page";


class VerificacionPage extends Page{

    get verificacionTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]')}
    get amountVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDestinoAmount"]')}
    get desdeTarjetaVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView5"]')}
    get desdeTarjetaDescripVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtdesde"]')}
    get hastaCuentaVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView3"]')}
    get hastaCuentaDescipVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtHasta"]')}
    get fechaVerificacionScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView11"]')}
    get fechaVerificacionDescripScreen() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtfecha"]')}
    get continuarBtnVerficacion() { return $('//android.widget.Button[@text="Continuar"]')}
    get btnCancelarVerficacion() { return $('//android.widget.Button[@text="Cancelar"]')}


    async validate(): Promise<void> {
        
    }

    async selectBtnContinuarOnVerificacionScreen(){
        await expect(this.continuarBtnVerficacion).toBeDisplayed();
        (await this.continuarBtnVerficacion).click();
    }

    async validateVerificationAvanceEfectivoScreen(){
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.amountVerificacionScreen).toBeDisplayed();
        await expect(this.desdeTarjetaVerificacionScreen).toBeDisplayed();
        await expect(this.desdeTarjetaDescripVerificacionScreen).toBeDisplayed();
        await expect(this.hastaCuentaVerificacionScreen).toBeDisplayed();
        await expect(this.hastaCuentaDescipVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionScreen).toBeDisplayed();
        await expect(this.fechaVerificacionDescripScreen).toBeDisplayed();
        await expect(this.continuarBtnVerficacion).toBeDisplayed();
    }

}
export default new VerificacionPage();