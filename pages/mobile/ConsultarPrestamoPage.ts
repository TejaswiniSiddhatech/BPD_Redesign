import Gestures from "../../commons/gestures";
import commonsPage from "./commonsPage";
import Page from "./page";
let transactionAmountInitial = "";


class ConsultarPrestamoPage extends Page {

    //get txtTitlePrestamo() { return $('//android.widget.TextView[@text="Préstamo"]') }

    get txtAliasCuenta(){ return $('//android.widget.TextView[@text="Detalles"]/../../../../android.widget.TextView')}
    get txtNroCuenta() { return $('//android.widget.TextView[@text="Detalles"]/../../android.widget.TextView[1]') }

    get txtDetalle() { return $('//android.widget.TextView[@text="Detalles"]') }
    get txtBalanceDisponible() { return $('//android.widget.TextView[@text="Balance a la fecha:"]') }
    get lblBalanceDisponible() { return $('//android.widget.TextView[@text="Balance a la fecha:"]/following-sibling::android.widget.TextView[1]') }
    get txtMontoCuenta() { return $('//android.widget.TextView[@text="Monto de la cuota:"]') }
    get lblMontoCuenta() { return $('//android.widget.TextView[@text="Monto de la cuota:"]/following-sibling::android.widget.TextView[1]') }
    get txtTasaInteres() { return $('//android.widget.TextView[@text="Tasa de interés:"]') }
    get lblTasaInteres() { return $('//android.widget.TextView[@text="Tasa de interés:"]/following-sibling::android.widget.TextView[1]') }
    get txtProximoPago() { return $('//android.widget.TextView[@text="Próximo pago:"]') }
    get lblProximoPago() { return $('//android.widget.TextView[@text="Próximo pago:"]/following-sibling::android.widget.TextView[1]') }
    get txtLastTransactions() { return $('//android.widget.TextView[@text="Últimas transacciones"]') }
    get imgDragHistory() { return $('//android.widget.TextView[@text="Últimas transacciones"]/preceding-sibling::android.view.View[1]')}

    get imgSearch() { return $('//android.widget.TextView[@text="Últimas transacciones"]/../../android.view.View[2]') }
    get imgFiltros() { return $('//android.widget.TextView[@text="Últimas transacciones"]/../../android.view.View[3]') }

    get snackbarDesembolso(){ return $('//android.widget.TextView[@text="Desembolsar"]')}
    get snackbarPagar(){ return $('//android.widget.TextView[@text="Pagar"]')}
    get snackbarSolicitarServicios(){ return $('//android.widget.TextView[@text="Solicitar\nservicios"]')}
    get snackbarFacilidadesPago(){ return $('//android.widget.TextView[@text="Facilidades\nde pago"]')}    

    async validate(): Promise<void> {
        //await expect(this.txtTitlePrestamo).toBeDisplayed();
        await expect(this.txtNroCuenta).toBeDisplayed();
        await expect(this.txtDetalle).toBeDisplayed();
        await expect(this.txtBalanceDisponible).toBeDisplayed();
        await expect(this.lblBalanceDisponible).toBeDisplayed();
        await expect(this.txtMontoCuenta).toBeDisplayed();
        await expect(this.lblMontoCuenta).toBeDisplayed();
        await expect(this.txtTasaInteres).toBeDisplayed();
        await expect(this.lblTasaInteres).toBeDisplayed();
        // await expect(this.snackbarDesembolso).toBeDisplayed();
        await commonsPage.tapBytext("Ver todo")
        await expect(this.txtProximoPago).toBeDisplayed();
        await expect(this.lblProximoPago).toBeDisplayed();
        await expect(this.txtLastTransactions).toBeDisplayed();
        await expect(this.imgDragHistory).toBeDisplayed();
        await expect(this.snackbarPagar).toBeDisplayed();
        await expect(this.snackbarSolicitarServicios).toBeDisplayed();
        await expect(this.snackbarFacilidadesPago).toBeDisplayed();
    }

    async dragHistory(){
        await (await this.imgDragHistory).click();
    }

    async validateLastMovements() {
        await expect(this.txtLastTransactions).toBeDisplayed();
        await expect(this.imgSearch).toBeDisplayed();
        await expect(this.imgFiltros).toBeDisplayed();
    }

    async selectTransaction(transaction: string) {
        const transactionElement = await $('//android.widget.TextView[@text= "' + transaction + '"]');

        await transactionElement.waitForDisplayed({ timeout: 4000 });
        await transactionElement.click();
    }

    
    async setTransactionAmount(transaction: string){
        const transactionAmount = await $('//android.widget.TextView[@text="' + transaction + '"]/following-sibling::android.widget.TextView[1]');
        //const transactionAmount = await $('//android.widget.TextView[contains(@text, "prestamos")]');

        let balanceAttr = "";
        let elementIsDisplayed = false;

        while (elementIsDisplayed == false) {
            if (await transactionAmount.isDisplayed()) {
                elementIsDisplayed = true;
                balanceAttr = await transactionAmount.getAttribute('text');
                transactionAmountInitial = balanceAttr.replace(' + ', '');
            }else{
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
            }
        }
    }

    async getTransactionAmount(){
        return transactionAmountInitial;
    }

}
export default new ConsultarPrestamoPage();