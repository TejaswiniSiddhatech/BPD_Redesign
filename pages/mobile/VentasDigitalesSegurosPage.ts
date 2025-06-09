import Page from "./page";

class VentasDigitalesSegurosPage extends Page{

    get SOLICITUD() { return $('//android.widget.TextView[contains(@text,"SOLICITUD DE")]'); }
    get seguros() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/segurosTxtTitle"]') }
    get SEGUROS() { return $('//android.widget.TextView[@text="SEGUROS"]') }
    get TxtPreguntasfrecuentes() { return $('//android.widget.TextView[@text="Preguntas frecuentes"]')}
  
    get ConditionTxt() { return $('//android.widget.TextView[@text="Acepto los Términos y Condiciones aplicables a las Ventas Digitales, los cuales serán enviados a mi correo."]') }
    get Checkbox() { return $('//android.widget.ImageView[@content-desc="image resource"]') }
    get Continuar() { return $('//android.widget.TextView[@text="Continuar"]') }
    

    async validate(): Promise<void> { 
    }
    async Seguros() {
      // await expect(this.SOLICITUD).toBeDisplayed();
      await expect(this.seguros).toBeDisplayed();
      (await this.seguros).click();
  }
  async TermsAndCondition() {
    await expect(this.TxtPreguntasfrecuentes).toBeDisplayed();
    await expect(this.ConditionTxt).toBeDisplayed();
    (await this.Checkbox).click();
    await expect(this.Continuar).toBeDisplayed();
    (await this.Continuar).click();
}
           
}

export default new VentasDigitalesSegurosPage();