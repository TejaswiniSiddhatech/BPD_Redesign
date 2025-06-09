import Page from "./page";
 
 
class ReclamacionPage extends Page{
 
    get reclamacionTitle() { return $('//android.widget.TextView[@text="RECLAMACIÓN"]')}
    get txtNoReconozcoConsumo(){ return $('//android.widget.TextView[@text="No reconozco este consumo"]')}
    get txtDuplicaronConsumo(){ return $('//android.widget.TextView[@text="Me duplicaron este consumo"]')}
 
 
    async validate(): Promise<void> {
 
    }
 
    async validateReclamacionNoReconozcoConsumo(){
        await expect(this.reclamacionTitle).toBeDisplayed();
        await expect(this.txtNoReconozcoConsumo).toBeDisplayed();
    }
 
    async validateReclamacionDuplicaronConsumo(){
        await expect(this.reclamacionTitle).toBeDisplayed();
        await expect(this.txtDuplicaronConsumo).toBeDisplayed();
    }
}
export default new ReclamacionPage();