    import Page from "./page";
    import Gestures from "../../commons/gestures";

    class ServiciosReclamacionesPage extends Page{
        get Asegúrateque(){ return $('//android.widget.TextView[@text="Asegúrate que tu pasaporte esté vigente y el correo actualizado."]')}
        get Deacuerdo(){ return $('//android.widget.TextView[@text="De acuerdo"]')}
        get Solicitarcartas(){ return $('//android.widget.TextView[@text="Solicitar cartas"]')}
        get Tipodecarta(){ return $('//android.widget.TextView[@text="Tipo de carta:"]')}
        get Númeropasaporte(){ return $('//android.widget.TextView[@text="Número de pasaporte vigente:"]')}
        get Escribepasaporte(){ return $("//*[@class = 'android.widget.EditText' and @index = '3']")}
        get Correoelectronico(){ return $('//android.widget.TextView[@text="Correo electrónico:"]')}
        get Continuar(){ return $('//android.widget.TextView[@text="Continuar"]')}
        
        
        get AccountScreen(){ return $('//android.widget.TextView[@text="Selecciona los productos que serán incluidos en tu carta"]')}
        get Checkbox(){ return $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.widget.ScrollView[1]/android.widget.ScrollView[1]/android.widget.CheckBox[1]')}
        get Verifica(){ return $('//android.widget.TextView[@text="Verifica los datos"]')}
        get Confirmo(){ return $('//android.widget.TextView[@text="Confirmo que mi pasaporte está vigente y mi correo actualizado."]')}
        get CheckBox(){ return $("//*[@class = 'android.widget.CheckBox' and @index = '4']")}
        get Solicitar(){ return $('//android.widget.TextView[@text="Solicitar"]')}
        get Escribe(){ return $('//android.widget.TextView[@text="Escribe el país, consulado o embajada al cual va dirigida la carta:"]')}
        get Set(){ return $("//*[@class = 'android.widget.EditText' and @index = '3']")}
        get Select(){ return $("//*[@class = 'android.widget.RadioButton' and @index = '1']")}
        
        get RNC(){ return $('//android.widget.TextView[@text="RNC de la empresa destinatario:"]')}
        get EscribeRNC(){ return $("//*[@class = 'android.widget.EditText' and @index = '3']")}
       
        get CreditCancelledError(){ return $('//android.widget.TextView[@text="Se necesita tarjeta de crédito pagada y cancelada."]')}
        get Prestamosaldado(){ return $('//android.widget.TextView[@text="Préstamo saldado:"]')}
        get Selecciona(){ return $('//android.widget.TextView[@text="Selecciona tu préstamo"]')}
        get Seleccionatxt(){ return $('//android.widget.TextView[@text="Selecciona tu préstamo que será incluido en tu carta"]')}
        get account() { return $('//android.widget.TextView[contains(@text,"Monto aprobado: RD$")]') }
    

        async validate(): Promise<void> {
            await expect(this.Solicitarcartas).toBeDisplayed();
            await expect(this.Tipodecarta).toBeDisplayed();
            await expect(this.Correoelectronico).toBeDisplayed();
        }
        async Popup(){
            await expect(this.Asegúrateque).toBeDisplayed();
            await expect(this.Deacuerdo).toBeDisplayed();
            await (await this.Deacuerdo).click();
        }
        async ConsularScreen(passportno: string){
            await expect(this.Númeropasaporte).toBeDisplayed();
            await (await this.Escribepasaporte).click();
            (await this.Escribepasaporte).setValue(passportno);
            await driver.hideKeyboard();
            await (await this.Continuar).click();
        }
        async select(city: string){
            await expect(this.Escribe).toBeDisplayed();
            await (await this.Set).click();
            (await this.EscribeRNC).setValue(city);
            await (await this.Select).click();
            await (await this.Continuar).click();
        }
        async SelectAccount(){
            await expect(this.AccountScreen).toBeDisplayed();
            await (await this.Checkbox).click();
            await (await this.Continuar).click();
        }
        async verify(){
            await expect(this.Verifica).toBeDisplayed();
            // await expect(this.Confirmo).toBeDisplayed();
            await (await this.CheckBox).click();
            await (await this.Solicitar).click();
            await browser.pause(6000)
        }
        
        async RNCNo(rnc: string){
            await expect(this.RNC).toBeDisplayed();
            await (await this.EscribeRNC).click();
            (await this.EscribeRNC).setValue(rnc);
            await driver.hideKeyboard();
            await (await this.Continuar).click();
        }
        async CreditCancelled(){
            await expect(this.CreditCancelledError).toBeDisplayed();
            await expect(this.Deacuerdo).toBeDisplayed();
            await (await this.Deacuerdo).click();
        }
        async prestamo(){
            await expect(this.Prestamosaldado).toBeDisplayed();
            await expect(this.Selecciona).toBeDisplayed();
            await (await this.Selecciona).click();
            await expect(this.Seleccionatxt).toBeDisplayed();
            await (await this.account).click();
            await (await this.Continuar).click();

        }

    }
    export default new ServiciosReclamacionesPage();