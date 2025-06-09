import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TokenPopularPage extends Page {
    /**
     * define selectors using getter methods
     */

    get tokenPopularBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.TextView') }
    get userfieldLbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.widget.EditText') }
    get passfieldLbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[4]/android.widget.EditText') }
    get continuarBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]') }
    get otraAutenBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.widget.TextView') }
    get emailOption() { return $('(//android.view.View[@content-desc="image resource"])[1]') }
    get emailContinuarBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView') }
    get terYConLbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.TextView[3]') }
    get secuCodeLbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText') }
    get acepTermChk() { return $('//android.widget.ImageView[@content-desc="image resource"]') }
    get acepTermContinuarBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.widget.TextView') }
    get listoLbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.TextView[1]') }
    get lisMssgLbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.TextView[2]') }
    get SalirBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.widget.TextView') }

    get tokenPopularDescripcion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtTokenMessage"]') }
    get typeCodeField() { return $('//android.widget.EditText[@text="Digita el código"]') }
    get continuarBtnTokenPopular() { return $('//android.widget.Button[@text="Continuar"]') }
    get btnCancelarTokenPopular() { return $('//android.widget.Button[@text="Cancelar"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get descripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get lblIngreseTokenPopular() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    get btnContinuar() { return $('//android.widget.TextView[@text="Continuar"]') }


    async validate(): Promise<void> {
        await this.tokenPopularBtn
    }

    /**
     * Signin Button
     */
    async loginTokenPopular(): Promise<void> {
        await (await this.tokenPopularBtn).click();
    }

    async typeTokenPopular(tokenPopularCode: string) {
        (await this.typeCodeField).clearValue();
        (await this.typeCodeField).setValue(tokenPopularCode);
    }

    async selectBtnContinuarOnPopularTokenScreen() {
        (await this.continuarBtnTokenPopular).waitForDisplayed({ timeout: 30000 });
        await expect(this.continuarBtnTokenPopular).toBeDisplayed();
        (await this.continuarBtnTokenPopular).click();
    }

    async validateTokenPopularScreen() {
        await expect(this.tokenPopularDescripcion).toBeDisplayed();
        await expect(this.typeCodeField).toBeDisplayed();
        await expect(this.btnCancelarTokenPopular).toBeDisplayed();
        await expect(this.continuarBtnTokenPopular).toBeDisplayed();
    }

    async validateTokenPopular() {
        await expect(this.titleTokenPopular).toBeDisplayed();
        await expect(this.descripTokenPopular).toBeDisplayed();
        await expect(this.lblIngreseTokenPopular).toBeDisplayed();
        await expect(this.btnContinuar).toBeDisplayed();
    }

    async enterTokenPopular(tokenPopular: string) {
        await (await this.lblIngreseTokenPopular).clearValue();
        await (await this.lblIngreseTokenPopular).addValue(tokenPopular);
        (await this.btnContinuar).click();
    }

}

export default new TokenPopularPage();
