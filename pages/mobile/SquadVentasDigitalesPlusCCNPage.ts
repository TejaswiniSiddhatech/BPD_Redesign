import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';
 
class SquadVentasDigitalesPlusCCNPage extends Page {
 
    get plusCCNTitle() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/topText"]') }
    get solicitartarjetabtn() { return $('//android.widget.Button[@resource-id="com.popular.app.android:id/solicitarTarjetaBtn6"]') }
    get Botoncontenidabtn() { return $("//*[@class = 'android.widget.Button' and (@text = 'botón contenido' or . = 'botón contenido')]") }
 
 
    async validate(): Promise<void> {
        await this.plusCCNTitle.waitForDisplayed({ timeout: 30000 })
        await expect(this.plusCCNTitle).toBeDisplayed()
    }
 
    async Selectsolicitartarjetabtn() {
        await this.solicitartarjetabtn.waitForDisplayed()
        await expect(this.solicitartarjetabtn).toBeDisplayed()
        await this.solicitartarjetabtn.click()
    }
 
    async Clickonsiguentebtn() {
        await (await this.Botoncontenidabtn).waitForDisplayed({ timeout: 6000 });
        (await this.Botoncontenidabtn).click();
    }
 
}
export default new SquadVentasDigitalesPlusCCNPage()