import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';
 
class SquadVentasDigitalesGinalTarjetasPage extends Page {
 
    get tarjetaGnialTitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tarjeta Gnial' or . = 'Tarjeta Gnial')]") }
    get solicitartarjetabtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Solicitar tarjeta' or . = 'Solicitar tarjeta')]") }
    get Botoncontenidabtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'botón contenido' or . = 'botón contenido')]") }
 
    async validate(): Promise<void> {
        await this.tarjetaGnialTitle.waitForDisplayed({ timeout: 60000 })
        await expect(this.tarjetaGnialTitle).toBeDisplayed()
    }
 
    async Selectsolicitartarjetabtn() {
        await this.solicitartarjetabtn.waitForDisplayed({timeout:5000})
        await expect(this.solicitartarjetabtn).toBeDisplayed();
        // await this.solicitartarjetabtn.click()
    }
 
    async Clickonsiguentebtn() {
        await (await this.Botoncontenidabtn).waitForDisplayed({ timeout: 6000 });
        (await this.Botoncontenidabtn).click();
    }
}
export default new SquadVentasDigitalesGinalTarjetasPage()