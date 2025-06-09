import Page from "./page";


class DetalleTransaccionPage extends Page{

    get txtMontoTransaccion () { return $('//android.widget.TextView[@resource-id = "com.popular.app.android:id/txtTransAmount"]')}

    get txtEstado () { return $('//android.widget.TextView[@text="Estado: "]')}
    get txtBeneficiario () { return $('//android.widget.TextView[@text="Beneficiario:"]')}
    // get lblEstado () { return $('//android.widget.TextView[@text="Estado: "]/following-sibling::android.widget.TextView[1]')}
    get txtFechaTransaccion () { return $('//android.widget.TextView[@text="Fecha de transacción:"]')}
    get lblFechaTransaccion () { return $('//android.widget.TextView[@text="Fecha de transacción:"]/following-sibling::android.widget.TextView[1]')}

    get txtHacerReclamaciones () { return $('//android.widget.TextView[@text="Servicios y reclamaciones"]')}

    get txtNoReconozcoConsumo() { return $('//android.widget.TextView[@text="No reconozco este consumo"]')}
    get txtDuplicaronConsumo(){ return $('//android.widget.TextView[@text="Me duplicaron este consumo"]')}

    
    get estadoTxt () { return $('')}


    async validate(): Promise<void> {
        await expect(this.txtMontoTransaccion).toBeDisplayed();
        if(await (await this.txtEstado).isDisplayed(),{setTimeout:2000}){
            await (await this.txtEstado).isDisplayed();
        }
        if(await (await this.txtBeneficiario).isDisplayed(),{setTimeout:2000}){
            await (await this.txtBeneficiario).isDisplayed();
        }
        await expect(this.txtFechaTransaccion).toBeDisplayed();
        await expect(this.lblFechaTransaccion).toBeDisplayed();
    }

    async selectServiciosReclamaciones(){
        (await this.txtHacerReclamaciones).waitForDisplayed({timeout: 3000});
        await (await this.txtHacerReclamaciones).click();
    }

    async selectComplainOption(complainOption:string){
        const complainElement = await $('//android.widget.TextView[@text="'+complainOption+'"]/following-sibling::android.widget.RelativeLayout');

        await complainElement.waitForDisplayed({timeout: 3000});
        await complainElement.click();
    }

}
export default new DetalleTransaccionPage();