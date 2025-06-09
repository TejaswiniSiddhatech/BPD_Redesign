import Gestures from "../../commons/gestures";
import commonsPage from "./commonsPage";
import Page from "./page";


class PreLoginPage extends Page {

    get grantPermissiontxt() { return $('//android.widget.Button[@text="Allow"]') }
    get permissionTitle() { return $('//android.widget.TextView[@text="Por políticas de seguridad solicitamos permiso a tu móvil."]') }
    get permissionTxt() { return $('//android.widget.TextView[@text="Es requerido para aplicar y mantener los controles de seguridad al usar la aplicación en tu celular. Tu número de teléfono no será utilizado en esta solicitud."]') }
    get permissionPermitirBtn() { return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[1]') }

    get firstScreenCarouselTitle() { return $('//android.widget.TextView[@text="Bienvenido a una nueva \nexperiencia."]') }
    get parragraphFirstScreenCarousel() { return $('//android.widget.TextView[@text="Nos estamos transformando para que sigas \nhaciendo todo con mayor rapidez y \nseguridad."]') }
    get secondScreenCarouselTitle() { return $('//android.widget.TextView[@text="Te brindamos mejor control."]') }
    get parragraphSecondScreenCarousel() { return $('//android.widget.TextView[@text="Aprovecha los servicios y facilidades \npara el uso de tus productos."]') }
    get thirdScreenCarouselTitle() { return $('//android.widget.TextView[@text="Encontrarás nuevas \nfuncionalidades."]') }
    get parragraphThridScreenCarousel() { return $('//android.widget.TextView[@text="Para que tengas el control de tus finanzas \ndesde la palma de tus manos."]') }
    get fourthScreenCarouselTitle() { return $('//android.widget.TextView[@text="¡Empecemos!"]') }
    get parragraphFourthScreenCarousel() { return $('//android.widget.TextView[@text="Inicia sesión y disfruta de todos \nnuestros beneficios."]') }
    get iniciarCarouselBtn() { return $('//android.widget.TextView[@text="Iniciar"]') }
    get siguienteCarouselBtn() { return $('//android.widget.TextView[@text="Siguiente"]') }

    get allowPhoneCallsTxt() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.TextView') }
    get allowBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]') }
    get denyBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[2]') }

    get burgerMenuPreLoginBtn() { return $('//android.widget.TextView[@text="¿Aún no te has registrado?"]/..//following-sibling::android.view.View[1]') }
    get burgerMenuPreLoginBtnAfterLogout() { return $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]') }

    get bmQueDeseasHacerTxt() { return $('//android.widget.TextView[@text = "¿Qué deseas hacer?"]') }
    get bmOficinasCajerosSABTxt() { return $('//android.widget.TextView[@text="Oficinas, cajeros y subagentes"]') }
    get bmTasaDeCambioTxt() { return $('//android.widget.TextView[@text="Tasa de cambio"]') }
    get bmVozDelClienteTxt() { return $('//android.widget.TextView[@text="Voz del cliente"]') }
    get bmPopularEnLineaTxt() { return $('//android.widget.TextView[@text="Popular en línea"]') }
    get bmProteccionAlUsuarioTxt() { return $('//android.widget.TextView[@text="Protección al usuario"]') }

    get preLoginAccederBtn() { return $('//android.widget.TextView[@text = "Acceso clientes"]/..') }
    get preLoginHazteClienteBtn() { return $('//android.widget.TextView[@text="Hazte cliente"]') }
    get btnAunNoTeHasRegistrado() { return $('//android.widget.TextView[@text="¿Aún no te has registrado?"]') }

    get contactosTurnosYcitasBtn() { return $('//android.widget.TextView[@text="Contactos,\n turnos y citas "]/..') }

    get preLoginTokenPopularBtn() { return $('//android.widget.TextView[@text="Token \n Popular"]/..') }
    get parragraph1CodigoSeguridad() { return $('//android.widget.TextView[@text="Instala tu token popular para poder acceder a tus productos y realizar transacciones de forma digital."]') }
    get btnInstalarTokenPopular() { return $('//android.widget.TextView[@text="Instalar Token Popular"]') }

    get txtAQuienDeseasContactar() { return $('//android.widget.TextView[@text="¿A quién deseas contactar?"]') }
    get aQuienContactarTelebancoPopularTxt() { return $('//android.widget.TextView[@text="Telebanco\n Popular"]') }
    get aQuienContactarReportarFracudeTxt() { return $('//android.widget.TextView[@text="Reportar\n fraude"]') }
    get aQuienContactarReportarTarjetaPerdidaTxt() { return $('//android.widget.TextView[@text="Reportar\ntarjeta perdida"]') }
    get aQuienContactarChatEnLineaTxt() { return $('//android.widget.TextView[@text="Chat en línea"]') }
    get aQuienContactarTurnosYCitasTxt() { return $('//android.widget.TextView[@text="Turnos \ny citas"]') }

    get btnMasTransacciones() { return $('//android.widget.TextView[@text="Más\nTransacciones"]/..') }
    get masTransaccionesQueDeseasHacerTxt() { return $('//android.widget.TextView[@text="¿Qué deseas hacer?"]') }
    get mtQueDeseasHacerWalletPopularTxt() { return $('//android.widget.TextView[@text=" Wallet \nPopular"]') }
    get mtQueDeseasHacerPagosQRTxt() { return $('//android.widget.TextView[@text="Pagos\nQR"]') }
    get mtQueDeseasHacerRemesasPopularTxt() { return $('//android.widget.TextView[@text="Remesas\nPopular"]') }
    get mtQueDeseasHacerCerrarBtn() { return $('//android.widget.TextView[@text="¿Qué deseas hacer?"]//preceding-sibling::android.view.View') }


    get volverBurgerMenu() { return $('//android.view.View[@content-desc="pre login header arrow"]') }

    get msgInformativoModal() { return $('//android.widget.TextView[@text="Recuerda que puedes iniciar sesión en el App Popular de forma más rápida y segura con tu rostro o huella."]') }
    get msgInformativoModal2() { return $('//android.widget.TextView[(@text = "Solicita tus estados de cuenta de manera rápida y sencilla."]') }
    get btnCerrar() { return $('//android.widget.TextView[@text = "Cerrar"]') }

    get titleTasaCambio() { return $('//android.widget.TextView[@text="Tasa de cambio"]') }
    get dolarTxt() { return $('//android.widget.TextView[@text="Dólar $"]') }
    get compraUSD() { return $('//android.widget.TextView[@text="Dólar $"]/following-sibling::android.widget.TextView[1]') }
    get ventaUSD() { return $('//android.widget.TextView[@text="Dólar $"]/following-sibling::android.widget.TextView[3]') }
    get euroTxt() { return $('//android.widget.TextView[@text="Euro €"]') }
    get compraEuro() { return $('//android.widget.TextView[@text="Euro €"]/following-sibling::android.widget.TextView[1]') }
    get ventaEuro() { return $('//android.widget.TextView[@text="Euro €"]/following-sibling::android.widget.TextView[3]') }
    get btnCerrarTasaCambio() { return $('//android.widget.TextView[@text="Cerrar"]') }

    get corelibBackendOpt() { return $('//android.widget.TextView[contains(@text,"Versión")]') }

    get closenaviagationmenu() { return $('//android.view.View[@content-desc="Close navigation menu"]') }



    async validate() {
    }

    async grantPermissions() {
        await (await this.grantPermissiontxt).waitForDisplayed({ timeout: 60000 });
        await (await this.grantPermissiontxt).click();
    }

    async validatePermissionScreen() {
        await commonsPage.validateElement("Permisos de seguridad")
        await commonsPage.validateElement("App Popular requiere colectar, almacenar, enviar y procesar:\n\nNúmero de teléfono: \nLa aplicación utiliza el número de teléfono para mantener los controles de seguridad, crear la sesión del cliente y prevenir fraudes.\n")
        await commonsPage.validateElement("Al aceptar, consientes nuestras\nPolíticas de Privacidad y los Términos y Condiciones de Uso.")
        await commonsPage.validateElement("Aceptar")
        await commonsPage.validateElement("Ahora no")


    }

    async allowPermission() {
        await (await this.permissionPermitirBtn).waitForDisplayed({ timeout: 20000 });
        await (await this.permissionPermitirBtn).click();
    }

    async validateAllowPhoneCallsScreen() {
        await expect(this.allowPhoneCallsTxt).toBeDisplayed();
        await expect(this.allowBtn).toBeDisplayed();
        await expect(this.denyBtn).toBeDisplayed();
        await (await this.allowBtn).click();
    }

    async validateAllowPhoneCallsScreen2() {
        await expect(this.allowPhoneCallsTxt).toBeDisplayed();
        await expect(this.allowBtn).toBeDisplayed();
        await expect(this.denyBtn).toBeDisplayed();
        await (await this.allowBtn).click();
    }

    async validateCarrousel() {
        await (await this.firstScreenCarouselTitle).waitForDisplayed({ timeout: 5000 })
        await expect(this.parragraphFirstScreenCarousel).toBeDisplayed();
        await expect(this.siguienteCarouselBtn).toBeDisplayed();
    }



    async completeWelcomeOnboarding() {
        for (var i = 0; i < 5; i++) {
            if (await (await this.firstScreenCarouselTitle).isDisplayed()) {
                await expect(this.firstScreenCarouselTitle).toBeDisplayed();
                await expect(this.parragraphFirstScreenCarousel).toBeDisplayed();
                await expect(this.siguienteCarouselBtn).toBeDisplayed();
                await (await this.siguienteCarouselBtn).click();

                await expect(this.secondScreenCarouselTitle).toBeDisplayed();
                await expect(this.parragraphSecondScreenCarousel).toBeDisplayed();
                await expect(this.siguienteCarouselBtn).toBeDisplayed();
                await (await this.siguienteCarouselBtn).click();

                await expect(this.thirdScreenCarouselTitle).toBeDisplayed();
                await expect(this.parragraphThridScreenCarousel).toBeDisplayed();
                await expect(this.siguienteCarouselBtn).toBeDisplayed();
                await (await this.siguienteCarouselBtn).click();

                await expect(this.fourthScreenCarouselTitle).toBeDisplayed();
                await expect(this.parragraphFourthScreenCarousel).toBeDisplayed();
                await expect(this.iniciarCarouselBtn).toBeDisplayed();
                await (await this.iniciarCarouselBtn).click();
                break;
            }
        }
    }



    // async completeWelcomeOnboarding() {

    //     await expect(this.firstScreenCarouselTitle).toBeDisplayed();
    //     await expect(this.parragraphFirstScreenCarousel).toBeDisplayed();
    //     await expect(this.siguienteCarouselBtn).toBeDisplayed();
    //     await (await this.siguienteCarouselBtn).click();

    //     await expect(this.secondScreenCarouselTitle).toBeDisplayed();
    //     await expect(this.parragraphSecondScreenCarousel).toBeDisplayed();
    //     await expect(this.siguienteCarouselBtn).toBeDisplayed();
    //     await (await this.siguienteCarouselBtn).click();

    //     await expect(this.thirdScreenCarouselTitle).toBeDisplayed();
    //     await expect(this.parragraphThridScreenCarousel).toBeDisplayed();
    //     await expect(this.siguienteCarouselBtn).toBeDisplayed();
    //     await (await this.siguienteCarouselBtn).click();

    //     await expect(this.fourthScreenCarouselTitle).toBeDisplayed();
    //     await expect(this.parragraphFourthScreenCarousel).toBeDisplayed();
    //     await expect(this.iniciarCarouselBtn).toBeDisplayed();
    //     await (await this.iniciarCarouselBtn).click();
    // }

    async validatePreLoginScreen() {
        await expect(this.burgerMenuPreLoginBtn).toBeDisplayed();
        await expect(this.preLoginAccederBtn).toBeDisplayed();
        // await expect(this.preLoginHazteClienteBtn).toBeDisplayed();
        await expect(this.btnAunNoTeHasRegistrado).toBeDisplayed();
        await expect(this.contactosTurnosYcitasBtn).toBeDisplayed();
        await expect(this.preLoginTokenPopularBtn).toBeDisplayed();
        //  await expect(this.btnMasTransacciones).toBeDisplayed()
    }

    async openPreLoginBurgerMenu() {
        await expect(this.burgerMenuPreLoginBtn).toBeDisplayed();
        await (await this.burgerMenuPreLoginBtn).click();

        await expect(this.bmQueDeseasHacerTxt).toBeDisplayed();
    }

    async openPreLoginBurgerMenuAfterLogout() {
        await browser.pause(3000);
        (await this.burgerMenuPreLoginBtnAfterLogout).click();

        await expect(this.bmQueDeseasHacerTxt).toBeDisplayed();
    }

    async validateQueDeseasHacerBurgerMenuScreen() {
        await expect(this.bmQueDeseasHacerTxt).toBeDisplayed();
        await expect(this.bmOficinasCajerosSABTxt).toBeDisplayed();
        await expect(this.bmTasaDeCambioTxt).toBeDisplayed();
        await expect(this.bmVozDelClienteTxt).toBeDisplayed();
        await expect(this.bmPopularEnLineaTxt).toBeDisplayed();
        // await expect(this.bmProteccionAlUsuarioTxt).toBeDisplayed();
        await (await this.bmQueDeseasHacerTxt).click();
    }

    async selectContactosTurnosYcitasButton() {
        (await this.contactosTurnosYcitasBtn).click();
    }

    async validateContactosTurnosYcitasScreen() {
        await expect(this.txtAQuienDeseasContactar).toBeDisplayed();
        await expect(this.aQuienContactarTelebancoPopularTxt).toBeDisplayed();
        await expect(this.aQuienContactarReportarFracudeTxt).toBeDisplayed();
        await expect(this.aQuienContactarReportarTarjetaPerdidaTxt).toBeDisplayed();
        await expect(this.aQuienContactarChatEnLineaTxt).toBeDisplayed();
        await expect(this.aQuienContactarTurnosYCitasTxt).toBeDisplayed();
        await (await this.contactosTurnosYcitasBtn).click()
    }

    async selectTokenPopularPreLoginButton() {
        await (await this.preLoginTokenPopularBtn).click();
    }

    async validateInstalarTokenPopular() {
        await expect(this.preLoginTokenPopularBtn).toBeDisplayed();
        await expect(this.parragraph1CodigoSeguridad).toBeDisplayed();
        await expect(this.btnInstalarTokenPopular).toBeDisplayed();
    }

    async selectMasTransaccionesPreLoginButton() {
        await (await this.btnMasTransacciones).click();
    }

    async validateMasTransaccionesPreLoginScreen() {
        await expect(this.masTransaccionesQueDeseasHacerTxt).toBeDisplayed();
        await expect(this.mtQueDeseasHacerWalletPopularTxt).toBeDisplayed();
        await expect(this.mtQueDeseasHacerPagosQRTxt).toBeDisplayed();
        await expect(this.mtQueDeseasHacerRemesasPopularTxt).toBeDisplayed();
    }


    async selectAccederButtonPreLogin() {
        for (let i = 0; i < 60; i++) {
            if (await this.preLoginAccederBtn.isEnabled() || await (await this.preLoginAccederBtn).isDisplayed()) {
                await this.preLoginAccederBtn.waitForEnabled();
                await this.preLoginAccederBtn.click();
                break;
            } else {
                console.log("Acceder button is disabled.");
            }
            await browser.pause(500);
        }
    }


    async selectVolverBurgerMenu() {
        // await expect(this.bmQueDeseasHacerTxt).toBeDisplayed()
        // await expect(this.volverBurgerMenu).toBeDisplayed();
        // await (await this.volverBurgerMenu).click();
        await expect(this.closenaviagationmenu).toBeDisplayed();
        await (await this.closenaviagationmenu).click();

    }

    async validateEstadoCuentaModal() {
        await expect(this.msgInformativoModal).toBeDisplayed()
        await expect(this.msgInformativoModal2).toBeDisplayed();
        // await expect(this.btnCerrar).toBeDisplayed();
    }

    async selectCerrarBtn() {
        for (var i = 0; i < 40; i++) {
            if (await (await this.btnCerrar).isDisplayed()) {
                await (await this.btnCerrar).click();
                break;
            }
        }
    }

    async selectOptBurgerMenu(option: string) {
        const element = $('//android.widget.TextView[@text="' + option + '"]');

        await (await element).waitForDisplayed();
        await (await element).click();
    }

    async validateModalTasaCambio() {
        await expect(this.titleTasaCambio).toBeDisplayed();
        await expect(this.dolarTxt).toBeDisplayed();
        await expect(this.compraUSD).toBeDisplayed();
        await expect(this.ventaUSD).toBeDisplayed();
        await expect(this.euroTxt).toBeDisplayed();
        await expect(this.compraEuro).toBeDisplayed();
        await expect(this.ventaEuro).toBeDisplayed();
        await expect(this.btnCerrarTasaCambio).toBeDisplayed();
    }

    async selectCoreLibBackend() {
        await (await this.corelibBackendOpt).waitForDisplayed();
        await (await this.corelibBackendOpt).click();
    }


}
export default new PreLoginPage();