import commonsPage from "./commonsPage";
import Page from "./page";


class ConfigurarPage extends Page {

    get titleConfigurar() { return $('//android.widget.TextView[@text="Configurar"]') }
    get btnGoBack() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]') }
    get lblAccederRostroHuella() { return $('//android.widget.TextView[@text="Acceder con rostro o huella"]') }
    get lblNotificaciones() { return $('//android.widget.TextView[@text="Notificaciones"]') }
    get lblPreguntasSeguridad() { return $('//android.widget.TextView[@text="Preguntas de seguridad"]') }
    get lblConfigurarQuickBalance() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Vista rápida de productos' or . = 'Vista rápida de productos')]") }
    get lblIdentificadorDispositivo() { return $('//android.widget.TextView[@text="Identificador del Dispositivo"]') }




    async validate(): Promise<void> {
        await commonsPage.validateDisplayElement("Configurar")
        await expect(this.lblAccederRostroHuella).toBeDisplayed();
        // await expect(this.lblIdentificadorDispositivo).toBeDisplayed();
        await (this.lblIdentificadorDispositivo).isDisplayed();
        await expect(this.lblConfigurarQuickBalance).toBeDisplayed();
    }

    async selectConfigurarQuickBalance() {
        await expect(this.lblConfigurarQuickBalance).toBeDisplayed();

        (await this.lblConfigurarQuickBalance).click();
    }

    async selectGoBack() {
        await expect(this.btnGoBack).toBeDisplayed();
        (await this.btnGoBack).click();
    }
}
export default new ConfigurarPage();