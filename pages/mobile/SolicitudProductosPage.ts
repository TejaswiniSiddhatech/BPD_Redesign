import Page from "./page";


class SolicitudProductosPage extends Page{

    get txtSolicitudProductoTitle (){ return $('//android.widget.TextView[@text="SOLICITUD DE\nPRODUCTOS"]')}


    async validate(): Promise<void> {
        await expect(this.txtSolicitudProductoTitle).toBeDisplayed();
        
    }
}
export default new SolicitudProductosPage();