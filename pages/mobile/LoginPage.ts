import commonsPage from './commonsPage';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get usernameLbl() { return $('//android.widget.TextView[@text = "Usuario"]/../..') }
    get passwordLbl() { return $('//android.widget.TextView[@text="Contraseña"]/../..') }
    get olvidasteTuContraseñaTxt() { return $('//android.widget.TextView[@text="¿Olvidaste tu usuario o contraseña?"]') }
    get accederLoginBtn() { return $('//android.widget.TextView[@text="Acceder"]') }
    get accederBiometricoTxt() { return $('//android.widget.TextView[@text="Acceder con rostro o huella"]') }
    get volverButtonLoginBtn() { return $('//android.widget.TextView[@text="¿Olvidaste tu usuario o contraseña?"]/..//following-sibling::android.view.View[1]') }

    get preScreenTxt() { return $('//android.widget.TextView[@text="Con la nueva funcionalidad de Vista Rápida podrás ver los balances de tus productos sin necesidad de iniciar sesión."]') }
    get ahoraNoBtn() { return $('//android.widget.TextView[@text="Ahora no"]/..') }
    get btnLoHareLuego() { return $('//android.widget.TextView[@text="Lo haré luego"]') }

    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }
    get txtDescripTokenPopular() { return $('//android.widget.TextView[@text="Ingresa el código de seguridad mostrado en tu Token Popular."]') }
    get typeCodeField() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    // get ValidarTokenPopularBtn() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }
    // get ValidarTokenPopularBtn() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }
    get ValidarTokenPopularBtn() { return $('//android.widget.TextView[contains(@text,"Validar Token Popular")]') }
    get btnAunNoTienesTP() { return $('//android.widget.TextView[@text="¿Aún no tienes Token Popular?"]') }

    get Nopuedesiniciarsesiontitle() { return $("//*[@class = 'android.widget.TextView' and (@text = '¿No puedes iniciar sesión?' or . = '¿No puedes iniciar sesión?')]") }
    get Nopuedesiniciarsesiondescription() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Si crees haber olvidado tus accesos, recupéralos en la opción de abajo. Si estás registrado con pasaporte, puedes hacerlo desde popularenlinea.com o visitando una de nuestras oficinas.' or . = 'Si crees haber olvidado tus accesos, recupéralos en la opción de abajo. Si estás registrado con pasaporte, puedes hacerlo desde popularenlinea.com o visitando una de nuestras oficinas.')]") }
    get Recupraraccesosbtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Recuperar accesos' or . = 'Recuperar accesos')]") }
    get Deacuerdobtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'De acuerdo' or . = 'De acuerdo')]") }

    get iniciarSessiontitle() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Tu sesión ha expirado.' or . = 'Tu sesión ha expirado.')]") }
    get Iniciarsesiondescription() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Por seguridad, hemos finalizado tu sesión. Ingresa nuevamente.' or . = 'Por seguridad, hemos finalizado tu sesión. Ingresa nuevamente.')]") }
    get Iniciarsesionbtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Iniciar sesión' or . = 'Iniciar sesión')]") }

    get preLoginAccederBtn() { return $('//android.widget.TextView[@text = "Acceso clientes"]/..') }
    get iconViewPassword() { return $('//android.view.View[@content-desc="VisibilityIcon"]') }
    get Mastardenotificationtxt() { return $('//android.widget.TextView[@text="Más tarde"]') }

    get Algosaliomaltxt() { return $('//android.widget.TextView[@text="Algo salió mal."]') }
    get Algosaliomalconrasenabtn() { return $('//android.widget.TextView[@text="¿Olvidaste tu usuario o contraseña?"]') }
    get algosaliomalDeacuerdobtn() { return $('//android.widget.TextView[@text="De acuerdo"]') }



    async validate(): Promise<void> {
    }

    async validateLoginScreen(): Promise<void> {
        await expect(this.usernameLbl).toBeDisplayed();
        await expect(this.passwordLbl).toBeDisplayed();
        await expect(this.accederLoginBtn).toBeDisplayed();
        await expect(this.olvidasteTuContraseñaTxt).toBeDisplayed();
        await expect(this.accederBiometricoTxt).toBeDisplayed();
        await expect(this.volverButtonLoginBtn).toBeDisplayed();
    }



    async volverButtonLogin(): Promise<void> {
        await (await this.volverButtonLoginBtn).click();
    }


    async login(username: string, password: string) {
       // await expect(this.usernameLbl).toBeDisplayed();
        await expect(this.passwordLbl).toBeDisplayed();

        await (await this.usernameLbl).setValue(username);
        await (await this.passwordLbl).setValue(password);
        await (await (this.accederLoginBtn)).waitForEnabled();
        await browser.takeScreenshot();
        await (await this.accederLoginBtn).click();
    }

    async selectAhoraNoBtn() {
        await expect(this.ahoraNoBtn).toBeDisplayed();
        await (await this.ahoraNoBtn).click();
    }

    async selectLoHareLuego() {

        try {
            if (await (await this.btnLoHareLuego).waitForDisplayed({ timeout: 20000 })) {
                await (await this.btnLoHareLuego).click();
            }
        } catch (Exception) {
            console.log('Pop-up not displayed:', Exception);
            for (var i = 0; i < 20; i++) {
                if (await (await this.btnLoHareLuego).isDisplayed()) {
                    await (await this.btnLoHareLuego).click();
                    break;
                }

            }
            await browser.pause(100);
        }

    }

    async selectLoHareLuego1() {
        for (var i = 0; i < 20; i++) {
            if (await (await this.btnLoHareLuego).isDisplayed()) {
                await (await this.btnLoHareLuego).click();
                break;
            }
        }

    }
    async selectmastardenotificationbtn() {
        // await driver.pause(2000)
        for (var i = 0; i < 20; i++) {
            if (await (await this.Mastardenotificationtxt).isDisplayed()) {
                await (await this.Mastardenotificationtxt).click();
                break;
            }
        }

    }

    async loginWithPassword(password: string) {
      //  await expect(this.usernameLbl).toBeDisplayed();
        await expect(await this.passwordLbl).toBeDisplayed();
        await (await this.passwordLbl).waitForDisplayed({ timeout: 10000 });
        //  await (await this.passwordLbl).isDisplayed();

        await (await this.passwordLbl).setValue(password);
        await (await (this.accederLoginBtn)).waitForEnabled();
        await (await this.accederLoginBtn).click();
    }


    // async validateIfTokenIsUp(tokenPopular: string) {
    //     // await driver.pause(2000)
    //     for (var i = 0; i < 150; i++) {
    //         if (await (await this.typeCodeField).isDisplayed()) {
    //             await (await this.typeCodeField).setValue(tokenPopular);
    //             await (await this.ValidarTokenPopularBtn).click();
    //             break;
    //         }
    //     }

    // }

    async validateIfTokenIsUp(tokenPopular: string) {

        try {
            if (await (await this.typeCodeField).waitForDisplayed({ timeout: 20000 })) {
                await (await this.typeCodeField).setValue(tokenPopular);
                await (await (this.ValidarTokenPopularBtn)).waitForEnabled();
                await (await this.ValidarTokenPopularBtn).click();
            }
        }
        catch (Exception) {
            for (var i = 0; i < 20; i++) {
                if (await (await this.typeCodeField).isDisplayed()) {
                    await (await this.typeCodeField).setValue(tokenPopular);
                    await (await (this.ValidarTokenPopularBtn)).waitForEnabled();
                    await (await this.ValidarTokenPopularBtn).click();
                    break;
                }
            }
            await browser.pause(100);

        }
    }

    // async validateIfTokenIsUp(tokenPopular: string) {

    //     // if (await expect(this.typeCodeField).toBeDisplayed()) {
    //     //     await (await this.typeCodeField).waitForDisplayed();
    //     //     await (await this.typeCodeField).setValue(tokenPopular);
    //     //     await (await this.ValidarTokenPopularBtn).click();
    //     // }
    //     await (await this.typeCodeField).waitForDisplayed({ timeout: 50000 });
    //     await (await this.typeCodeField).setValue(tokenPopular);
    //     await (await this.ValidarTokenPopularBtn).click();
    // }

    async skipBiometricNotification() {
        const title = commonsPage.createXpath("¿Te gustaría iniciar sesión más rápido?")
        const btnConfigurar = commonsPage.createXpath("Sí, configurar")
        const paragraph = commonsPage.createXpath('Activa el acceso con rostro o huella para ingresar a la App Popular desde la opción de "configurar".')
        await (await title).isDisplayed()
        await (await paragraph).isDisplayed()
        await (await btnConfigurar).isDisplayed()
        await driver.pause(2000)
        if (await (await this.btnLoHareLuego).isDisplayed()) {
            await (await this.btnLoHareLuego).click();
        }


    }

    async validateIncorrectCredentials() {
        await commonsPage.validateElement("Usuario o contraseña incorrecto.")
        await commonsPage.validateElement("Confirma los datos ingresados e inténtalo de nuevo.")
        await commonsPage.validateElement("¿Olvidaste tu usuario o contraseña?")
        await commonsPage.validateElement("De acuerdo")

    }

    async blockUsername(username: string, password: string) {
        await expect(this.usernameLbl).toBeDisplayed();
        await (await this.usernameLbl).addValue(username);

        for (let i = 0; i < 4; i++) {
            await expect(this.passwordLbl).toBeDisplayed();
            await (await this.passwordLbl).addValue(password);
            await (await this.iconViewPassword).click()
            await (await this.accederLoginBtn).click();
            await this.validateIncorrectCredentials()
            await commonsPage.tapBytext("De acuerdo")
        }
    }

    async validateUserBlocked() {
        await driver.pause(2000)
        await commonsPage.validateElement("Tu usuario ha sido bloqueado")
        await commonsPage.validateElement("Has superado la cantidad de intentos permitidos. Para poder ingresar, debes recuperar tus accesos. Si necesitas asistencia, contáctanos por Telebanco Popular en la opción 2.")
        await commonsPage.validateElement("Recuperar accesos")
        await commonsPage.validateElement("De acuerdo")

    }

    async expiredSession() {
        console.log("------EXPIRADO")
        // await driver.pause(300000)
        await (await this.preLoginAccederBtn).waitForDisplayed({ timeout: 300000 });
        //await (await this.accederLoginBtn).waitForDisplayed({ timeout: 300000 });
        // await driver.pause(300000)
    }

    async logInAfterExpiredSession(password: string) {
        //await driver.pause(300000)s
        // await commonsPage.validateDisplayElement("Tu sesión ha expirado.")
        // await commonsPage.validateDisplayElement("Por seguridad, hemos finalizado tu sesión. Ingresa nuevamente.")
        // await commonsPage.validateDisplayElement("Iniciar sesión")
        // await commonsPage.tapBytext("Iniciar sesión")
        await this.loginWithPassword(password)
        await this.selectLoHareLuego();
        await this.skipBiometricNotification()
    }


    async VerifyExpiredSessionafterLogin() {
        for (var i = 0; i < 30; i++) {
            if (await (await this.iniciarSessiontitle).isDisplayed()) {
                await (await this.Iniciarsesionbtn).click();
                break;
            }
        }
    }

    async selectAccederButtonPreLogin(password: string) {
        await (await this.preLoginAccederBtn).waitForDisplayed({ timeout: 30000 });
        await (await this.preLoginAccederBtn).click();
        await this.loginWithPassword(password)
        // await this.selectLoHareLuego();
        // await this.validateIfTokenIsUp('321321');
        // await this.skipBiometricNotification()
    }

    async VerifyNopuedesIniciarsesionPopup() {
        await (await this.Nopuedesiniciarsesiontitle).waitForDisplayed({ timeout: 60000 });
        //await (await this.Nopuedesiniciarsesiondescription).waitForDisplayed({ timeout: 6000 });
        //  await (await this.Recupraraccesosbtn).waitForDisplayed({ timeout: 6000 });
        await (await this.Deacuerdobtn).waitForDisplayed({ timeout: 6000 });
    }

    async VerifyAlgosaliomalPopup() {
        await (await this.Algosaliomaltxt).waitForDisplayed({ timeout: 60000 });
        //await (await this.Nopuedesiniciarsesiondescription).waitForDisplayed({ timeout: 6000 });
        //  await (await this.Recupraraccesosbtn).waitForDisplayed({ timeout: 6000 });
        await (await this.algosaliomalDeacuerdobtn).waitForDisplayed({ timeout: 6000 });
    }

}
export default new LoginPage();
