 
import Gestures from "../../commons/gestures";
import Page from "./page";
import commonsPage from './commonsPage';
 
class SquadVentasDigitalesPréstamosPersonalesPage extends Page {
 
    get plusCCNTitle() { return $('//android.widget.TextView[@text="Préstamos Personales" and @resource-id="com.popular.app.android:id/topText"]') }
    get solicitartarjetabtn() { return $('//android.widget.Button[@text="Solicitar préstamo" and @resource-id="com.popular.app.android:id/solicitarPrestamoBtn4"]') }
 
    async validate(): Promise<void> {
        await this.plusCCNTitle.waitForDisplayed({ timeout: 30000 })
        await expect(this.plusCCNTitle).toBeDisplayed()
        await expect(this.solicitartarjetabtn).toBeDisplayed()
    }
 
    async Selectsolicitartarjetabtn() {
        await this.solicitartarjetabtn.waitForDisplayed()
        await expect(this.solicitartarjetabtn).toBeDisplayed()
        await this.solicitartarjetabtn.click()
    }
 
}
export default new SquadVentasDigitalesPréstamosPersonalesPage()