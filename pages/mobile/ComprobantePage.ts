import Page from "./page";


class ComprobantePage extends Page{

    get titleComprobante() { return $('//android.widget.TextView[@text="COMPROBANTE"]')}
    get checkImgComprobante() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgSuccess"]')}
    
    get destinationAmountTxt() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtDestinoAmount"]')}
    get comprobanteDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtSuccess"]')}
    get lblDesdeTarjetaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblDesde"]')}
    get desdeTarjetaDescripComprobante(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtdesde"]')}
    get lblHastaCuentaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblHasta"]')}
    get hastaCuentaDescripComprobante(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtHasta"]')}
    get fechaComprobante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView11"]')}
    get fechaComprobanteDescrip() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtfecha"]')}
    get NroReferencia() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/textView9"]')}
    get nroReferenciaDescrip(){ return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtRef"]')}
    
    get btnContinuarOnComprobanteScreen() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/btnContinuar"]')}


    async validate(): Promise<void> {
        
    }

    async validateComprobanteAvanceEfectivoScreen(){
        await expect(this.titleComprobante).toBeDisplayed();
        await expect(this.checkImgComprobante).toBeDisplayed();
        await expect(this.destinationAmountTxt).toBeDisplayed();
        await expect(this.comprobanteDescripcion).toBeDisplayed();
        await expect(this.lblDesdeTarjetaComprobante).toBeDisplayed();
        await expect(this.desdeTarjetaDescripComprobante).toBeDisplayed();
        await expect(this.lblHastaCuentaComprobante).toBeDisplayed();
        await expect(this.hastaCuentaDescripComprobante).toBeDisplayed();
        await expect(this.fechaComprobante).toBeDisplayed();
        await expect(this.fechaComprobanteDescrip).toBeDisplayed();
        await expect(this.NroReferencia).toBeDisplayed();
        await expect(this.nroReferenciaDescrip).toBeDisplayed();
        await expect(this.btnContinuarOnComprobanteScreen).toBeDisplayed();
    }
    
}
export default new ComprobantePage();