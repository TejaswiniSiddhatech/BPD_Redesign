import Page from './page';
import Gestures from '../../commons/gestures';
import commonsPage from './commonsPage';
import LoginPage from '../../pages/mobile/LoginPage';



let accountBalanceInitial = "";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Dashboard extends Page {
    /**
     * define selectors using getter methods
     */

    get dashBurgerMenu() { return $('//android.widget.TextView[contains(@text,"Hola")]/preceding-sibling::android.view.View[1]') }
    get queDeseasHacerBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]') }
    get queDeseasHacerTxt() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.widget.TextView') }
    get transferirBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View') }
    get pagarBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View') }
    get splitBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[7]/android.view.View') }
    get cambioDivisasBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[9]/android.view.View') }
    get beneficiariosBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[10]/android.view.View') }
    get servYreclaBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[8]/android.view.View') }
    get solicitarProductosBtn() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[9]/android.view.View') }
    get cerraSesion1() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.widget.TextView') }

    get filterTodos() { return $('//android.widget.TextView[@text = "Todos"]') }
    get filterCuentas() { return $('//android.widget.TextView[@text = "Cuentas"]') }
    get filterTarjetas() { return $('//android.widget.TextView[@text = "Tarjetas"]') }
    get filterPrestamo() { return $('//android.widget.TextView[@text = "Préstamos"]') }
    get filterCertificados() { return $('') }
    get depositoaplazotxt() { return $('//android.widget.TextView[@text="Depósitos a plazo"]') }
    get depositoaplazoBtn() { return ('//android.widget.HorizontalScrollView/android.view.View[4]/android.widget.Button') }
    get depositoaplazorellayout() { return ('//android.widget.HorizontalScrollView/android.view.View[4]') }

    get aDondeDeseasTransferir() { return $('//android.widget.TextView[@text="¿A dónde deseas transferir?"]') }
    get snackBarTransferir() { return $('//android.view.View[@content-desc="Transferir"]') }
    get snackbarTransferirOtrosBancos() { return $('//android.widget.TextView[@text="Otros bancos"]') }
    get snackbarTransferirExpresos() { return $('//android.widget.TextView[@text="Expresos"]') }
    get snackbarTransferirTerceros() { return $('//android.widget.TextView[@text="Terceros"]') }
    get snackbarTransferirEntreMisCuentas() { return $('//android.widget.TextView[@text="Entre mis\ncuentas"]') }
    get imgTransferirEntreCuentasSnackbar() { return $('//android.widget.TextView[@text="Entre mis\ncuentas"]') }

    get queDeseasPagar() { return $('//android.widget.TextView[@text="¿Qué deseas pagar?"]') }
    get snackBarPagar() { return $('//android.view.View[@content-desc="Pagar"]') }
    get pagarTarjetaDeCredito() { return $('//android.widget.TextView[@text="Tarjeta de\ncrédito"]') }
    get imgPagarTCSnackbar() { return $('//android.widget.TextView[@text="Tarjeta de\ncrédito"]') }
    get pagarPrestamos() { return $('//android.widget.TextView[@text="Préstamos"]') }
    get pagarServiciosYfacturas() { return $('//android.widget.TextView[@text="Servicios y\nfacturas"]') }
    get imgPagarServiciosFacturasSnackbar() { return $('//android.widget.TextView[@text="Servicios y\nfacturas"]') }
    get pagarImpuestos() { return $('//android.widget.TextView[@text="Impuestos"]') }

    get snackBarCodigoCash() { return $('//android.view.View[@content-desc="Código\ncash"]') }
    get snackBarSolicitarProductos() { return $('//android.view.View[@content-desc="Solicitar\nproductos"]') }

    get bmAvanceEfectivoOption() { return $('//android.widget.TextView[@text="Avanzar efectivo"]') }

    get bmCambioDivisasOption() { return $('//android.widget.TextView[@text="Cambiar divisas"]') }
    get bmCDMisCuentasOption() { return $('//android.widget.TextView[@text="Entre mis cuentas"]') }
    get bmTransferir() { return $('//android.widget.TextView[@text="Transferir"]') }
    get bmTransferirExpresos() { return $('//android.widget.TextView[@text="Expresos"]') }
    get bmTransferirCuentasTerceros() { return $('//android.widget.TextView[@text="Terceros"]') }

    get accountItems() { return $$('') }
    get txtAccountBalance() { return $('') }

    get btnLoHareLuego() { return $('//android.widget.TextView[@text="Lo haré luego"]') }
    get bmPagar() { return $('//android.widget.TextView[@text="Pagar"]') }
    get bmPagarServiciosFacturas() { return $('//android.widget.TextView[@text="Servicios y facturas"]') }

    get profileAvatarIcon() { return $('//android.widget.TextView[contains(@text,"Hola")]/following-sibling::android.view.View[1]') }
    get txtEntreMisCuentas() { return $('//android.widget.TextView[@text="Entre mis cuentas"]') }

    get NotificationMastardebtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Más tarde' or . = 'Más tarde')]") }
    get NotificationVermasBtn() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Ver más' or . = 'Ver más')]") }

    get dashboardfilter() { return $("//*[@class = 'android.widget.HorizontalScrollView' and (@text = '' or . = '')]") }
    get depositobtn() { return $("//*[@class = 'android.widget.Button' and (@text = '' or . = '')]") }
    get certificadotxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Certificado' or . = 'Certificado')]") }

    async swipeUp() {
        Gestures.swipe({ x: 634, y: 1698 }, { x: 634, y: 1346 });
    }



    async selectNotificationmastardeBtn() {
        for (var i = 0; i < 20; i++) {
            if (await (await this.NotificationMastardebtn).isDisplayed()) {
                await (await this.NotificationMastardebtn).click();
                break;
            }
        }
    }


    async validate(): Promise<void> {
        await this.selectLoHareLuego()
        await this.selectNotificationmastardeBtn()
        await (await this.dashBurgerMenu).waitForDisplayed({ timeout: 50000 })
        await expect(this.snackBarCodigoCash).toBeDisplayed();
        await expect(await this.profileAvatarIcon).toBeDisplayed();

    }


    async selectLoHareLuego() {
        try {
            const isButtonDisplayed = await this.btnLoHareLuego.waitForDisplayed({ timeout: 40000 });

            if (isButtonDisplayed) {
                await this.btnLoHareLuego.click();
            } else {
                console.log('Button not displayed within the timeout.');
            }
        } catch (error) {
            console.log('Error waiting for pop-up:', error);

            for (let i = 0; i < 2; i++) {
                try {
                    const isButtonDisplayed = await this.btnLoHareLuego.waitForDisplayed({ timeout: 5000 });
                    if (isButtonDisplayed) {
                        await this.btnLoHareLuego.click();
                        break;
                    }
                } catch (retryError) {
                    console.log('Error waiting for pop-up:', error);
                }
            }
        }
    }



    async menuOption(option: string) {
        let optionElement = $('//android.widget.TextView[@text="' + option + '"]');
        let elementIsDisplayed = false;

        while (elementIsDisplayed == false) {
            if (await (await optionElement).isDisplayed()) {
                elementIsDisplayed = true;
            } else {
                Gestures.swipe({ x: 890, y: 415 }, { x: 370, y: 415 });
                // Gestures.swipe({ x: 719, y: 391 }, { x: 985, y: 430 });
                //  Gestures.swipe({ x: 719, y: 391 }, { x: 985, y: 430 });
                // Gestures.swipe({ x: 1046, y: 368 }, { x: 1080, y: 452 });
                //  Gestures.swipe({ x: 0, y: 273 }, { x: 1080, y: 396 });

            }
        }
        await (await optionElement).click();
    }

    async ValidatefilterPrestamo() {
        await expect(this.filterPrestamo).toBePresent();
        await (await (this.filterCuentas)).waitForEnabled();
        (await (this.filterCuentas)).click();
    }

    async ValidatefilterTarjetas() {
        await (this.filterTarjetas).isDisplayed();
        await (await (this.filterTarjetas)).waitForEnabled();
        (await (this.filterTarjetas)).click();
    }

    async ValidatefilterCuentas() {
        await expect(this.filterCuentas).toBePresent();
        await (await (this.filterCuentas)).waitForEnabled();
        (await (this.filterCuentas)).click();
    }

    async ValidatefilterTodos() {
        await expect(this.filterTodos).toBePresent();
        await (await this.filterTodos).click()
    }



    async filtroMasDeTresCuentas(): Promise<void> {
        await expect(this.filterTodos).toBePresent();
        await expect(this.filterCuentas).toBePresent();
        await (this.filterTarjetas).isDisplayed();
        await expect(this.filterPrestamo).toBePresent();
    }


    async filtroMasDeTresCuentasClick() {
        (await this.filterCuentas).click();
        (await this.filterTodos).click();
        (await this.filterPrestamo).click();

    }


    async filtroMasDeTresCuentas1() {
        await LoginPage.selectLoHareLuego1()
        await this.selectNotificationmastardeBtn()
        await expect(this.depositoaplazotxt).not.toBeDisplayed();
        await expect(this.filterTodos).not.toBeDisplayed();
        await expect(this.filterCuentas).not.toBeDisplayed();
        await expect(this.filterPrestamo).not.toBeDisplayed();



    }

    async filtroMasDeTresCuentasClick1() {
        await commonsPage.validateElement("No tienes productos disponibles.")
        await commonsPage.validateElement("Solicitar productos")

    }

    async validarSinFiltro(): Promise<void> {
        //
    }

    async selectSnackBarTransferirButton() {
        await expect(this.snackBarTransferir).toBeDisplayed();
        await (this.snackBarTransferir).waitForEnabled();
        await (await this.snackBarTransferir).click();
    }

    async validateTransferirOptionsSnackbar() {
        await expect(this.aDondeDeseasTransferir).toBeDisplayed();
        await expect(this.snackbarTransferirOtrosBancos).toBeDisplayed();
        await expect(this.snackbarTransferirExpresos).toBeDisplayed();
        await expect(this.snackbarTransferirTerceros).toBeDisplayed();
        await expect(this.snackbarTransferirEntreMisCuentas).toBeDisplayed();
    }

    async selectSnackBarPagarButton() {
        await expect(this.snackBarPagar).toBeDisplayed();
        await (this.snackBarPagar).waitForEnabled();
        await (await this.snackBarPagar).click()
    }

    async validatePagarOptionsSnackbar() {
        await expect(this.queDeseasPagar).toBePresent();
        await expect(this.pagarTarjetaDeCredito).toBePresent();
        await expect(this.pagarPrestamos).toBePresent();
        await expect(this.pagarServiciosYfacturas).toBePresent();
        await expect(this.pagarImpuestos).toBePresent();
    }

    async ClickonPrestamosMenu() {
        await expect(this.pagarPrestamos).toBePresent();
        await (this.pagarPrestamos).waitForEnabled();
        await (await this.pagarPrestamos).click()
    }


    async selectAvanceEfectivo() {
        await expect(this.bmAvanceEfectivoOption).toBeDisplayed();
        await (this.bmAvanceEfectivoOption).waitForEnabled();
        await (await this.bmAvanceEfectivoOption).click();
    }

    async selectCambioDivisasBM() {
        await expect(this.bmCambioDivisasOption).toBeDisplayed();
        await (this.bmCambioDivisasOption).waitForEnabled();
        await (await this.bmCambioDivisasOption).click();
    }

    async selectCDMisCuentasBM() {
        await expect(this.bmCDMisCuentasOption).toBeDisplayed();
        await (this.bmCDMisCuentasOption).waitForEnabled();
        await (await this.bmCDMisCuentasOption).click();
    }

    async selectPagarBM(): Promise<void> {
        await expect(this.bmPagar).toBeDisplayed();
        await (this.bmPagar).waitForEnabled();
        await (await this.bmPagar).click();
    }


    async selectOptionBM(optionBM: string) {
        const optionElement = $('//android.widget.TextView[@text="' + optionBM + '"]');
        await expect(optionElement).toBeDisplayed();
        await (optionElement).waitForEnabled();
        await (await optionElement).click();
    }

    async selectAnOptionUM(userMenuOption: string) {
        const optionElement = $('//android.widget.TextView[@text="' + userMenuOption + '"]');
        await expect(optionElement).toBeDisplayed();
        await (optionElement).waitForEnabled();
        await (await optionElement).click();
    }

    async selectTransferirBM() {
        await expect(this.bmTransferir).toBeDisplayed();
        await (this.bmTransferir).waitForEnabled();
        await (await this.bmTransferir).click();
    }

    async selectTransferirExpresosBM() {
        await expect(this.bmTransferirExpresos).toBeDisplayed();
        await (this.bmTransferirExpresos).waitForEnabled();
        await (await this.bmTransferirExpresos).click();
    }

    async selectTransferirCuentasTercerosBM() {
        await expect(this.bmTransferirCuentasTerceros).toBeDisplayed();
        await (this.bmTransferirCuentasTerceros).waitForEnabled();
        await (await this.bmTransferirCuentasTerceros).click();
    }

    async selectAccountNumber(nroCuenta: string) {
        await expect(this.accountItems).toBeDisplayed();
        (await this.accountItems).forEach(async (element) => {
            if ((await element.getAttribute('text')).includes(nroCuenta)) {
                await element.click();
            }
        });
    }

    async setDashboardBalance(nroAccount: string) {
        const balanceByAccountNumber = await $('//android.widget.TextView[@text="' + nroAccount + '"]/following-sibling::android.widget.TextView[2]');
        let balanceAttr = "";
        let elementIsDisplayed = false;
        console.log("cuenta", nroAccount)
        let intentosMax = 0
        while (elementIsDisplayed == false && intentosMax < 6) {
            if (await balanceByAccountNumber.isDisplayed()) {
                elementIsDisplayed = true;
                balanceAttr = await balanceByAccountNumber.getAttribute('text');
                accountBalanceInitial = balanceAttr;

                console.log("MONTO DEL DASHBOARD", accountBalanceInitial)
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++
            }
        }
    }

    async selectAccountbyAccountNumber(nroAccount: string) {
        const accountNumberByAccountName = await $('//android.widget.TextView[@text="' + nroAccount + '"]');
        let elementIsDisplayed = false;
        let intentosMax = 0

        while (elementIsDisplayed == false && intentosMax < 6) {
            if (await accountNumberByAccountName.isDisplayed()) {
                elementIsDisplayed = true;
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++
            }
        }
        await accountNumberByAccountName.click();
    }

    async getDashboardBalance() {
        return accountBalanceInitial;
    }

    async selectProfileAvatar() {
        await (await this.profileAvatarIcon).waitForDisplayed({ timeout: 50000 });
        await expect(this.profileAvatarIcon).toBeDisplayed();
        await (this.profileAvatarIcon).waitForEnabled();
        await (await this.profileAvatarIcon).click();
    }

    async selectSnackBarCodigoCashButton() {
        await expect(this.snackBarCodigoCash).toBeDisplayed();
        await (this.snackBarCodigoCash).waitForEnabled();
        await (await this.snackBarCodigoCash).click();
    }

    async selectSnackBarSolicitarProductosButton() {
        await expect(this.snackBarSolicitarProductos).toBeDisplayed();
        await (this.snackBarSolicitarProductos).waitForEnabled();
        await (await this.snackBarSolicitarProductos).click();
    }

    async selectTransferOption(transferOption: string) {
        const transferOptionElement = $('//android.widget.TextView[@text="' + transferOption + '"]');

        await expect(transferOptionElement).toBeDisplayed();
        await (transferOptionElement).waitForEnabled();

        await (await transferOptionElement).click();
    }

    async selectPaymentOption(paymentOption: string) {
        const transferOptionElement = $('//android.widget.TextView[@text="' + paymentOption + '"]');

        await expect(transferOptionElement).toBeDisplayed();
        await (transferOptionElement).waitForEnabled();
        await (await transferOptionElement).click();
    }

    async selectEntreMisCuentasOpt() {
        await expect(this.imgTransferirEntreCuentasSnackbar).toBeDisplayed();
        await (this.imgTransferirEntreCuentasSnackbar).waitForEnabled();
        await (await this.imgTransferirEntreCuentasSnackbar).click();
    }

    async selectPagarTCOpt() {
        await expect(this.imgPagarTCSnackbar).toBeDisplayed();
        await (this.imgPagarTCSnackbar).waitForEnabled();
        await (await this.imgPagarTCSnackbar).click();
    }

    async selectPagarServiciosFacturasOpt() {
        await expect(this.imgPagarServiciosFacturasSnackbar).toBeDisplayed();
        await (this.imgPagarServiciosFacturasSnackbar).waitForEnabled();
        await (await this.imgPagarServiciosFacturasSnackbar).click();
    }

    async selectBurgerMenu() {
        await expect(this.dashBurgerMenu).toBeDisplayed();
        await (this.dashBurgerMenu).waitForEnabled();
        await (await this.dashBurgerMenu).click();
    }

    async selectEntreMisCuentas(transferOption: string) {
        await expect(this.txtEntreMisCuentas).toBeDisplayed();
        await (this.txtEntreMisCuentas).waitForEnabled();
        await (await this.txtEntreMisCuentas).click();
    }

    async selectOptionBurguerMenu(option: string) {
        let optionElement = $('//android.widget.TextView[@text="' + option + '"]');
        let elementIsDisplayed = false;

        while (elementIsDisplayed == false) {
            if (await (await optionElement).isDisplayed()) {
                elementIsDisplayed = true;
            } else {
                Gestures.swipe({ x: 626, y: 1264 }, { x: 581, y: 773 });
            }
        }
        await (await optionElement).click();
    }

    // cuenta consultar Functions

    // async setDashboardBalance(nroAccount: string){
    async setDashboardBalance1() {
        // const balanceByAccountNumber = await $('//android.widget.TextView[@text="' + nroAccount + '"]/following-sibling::android.widget.TextView[2]');

        //const accno = (await $('//android.widget.TextView[@text="707697652"]')).getText()
        // const balanceByAccountNumber = await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[1]');

        const balanceByAccountNumber = $('//android.widget.TextView[contains(@text, "Balance disponible")]');
        await balanceByAccountNumber.isDisplayed();

        let balanceText = await balanceByAccountNumber.getText();
        console.log('print amount:' + balanceText);

        if (!balanceText.includes('zero') && !balanceText.includes('NA') && await balanceByAccountNumber.isDisplayed()) {
            await balanceByAccountNumber.click();
        } else {
            console.log("No account with balance greater than zero and NA found.");
        }

        let balanceAttr = "";
        let elementIsDisplayed = false;
        console.log("cuenta", balanceByAccountNumber)
        let intentosMax = 0
        while (elementIsDisplayed == false && intentosMax < 6) {
            if (await balanceByAccountNumber.isDisplayed()) {
                elementIsDisplayed = true;
                balanceAttr = await balanceByAccountNumber.getAttribute('text');
                accountBalanceInitial = balanceAttr;

                console.log("MONTO DEL DASHBOARD", accountBalanceInitial)
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++
            }
        }
    }

    async setDashboardBalance2(nroAccount: string) {
        // const balanceByAccountNumber = await $('//android.widget.TextView[@text="' + nroAccount + '"]/following-sibling::android.widget.TextView[2]');
        //const balanceByAccountNumber = await $('//android.widget.TextView[contains(@text, "Prestamo")]');
        // const balanceByAccountNumber = await $('//android.widget.TextView[contains(@text, "Préstamo")]');
        const balanceByAccountNumber = await $('//android.widget.TextView[@text="Préstamo"]');

        // await balanceByAccountNumber.waitForDisplayed({ timeout: 4000 });
        //await transactionElement.click();

        let balanceAttr = "";
        let elementIsDisplayed = false;
        console.log("cuenta", nroAccount)
        let intentosMax = 0
        while (elementIsDisplayed == false && intentosMax < 6) {
            if (await balanceByAccountNumber.isDisplayed()) {
                elementIsDisplayed = true;
                balanceAttr = await balanceByAccountNumber.getAttribute('text');
                accountBalanceInitial = balanceAttr;

                console.log("MONTO DEL DASHBOARD", accountBalanceInitial)
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++
            }
        }
    }

    async selectAccountbyAccountNumber2(nroAccount: string) {
        // const accountNumberByAccountName = await $('//android.widget.TextView[@text="' + nroAccount + '"]');
        // const accountNumberByAccountName = await $('//android.widget.TextView[contains(@text, "Prestamo")]');
        // const accountNumberByAccountName = await $('//android.widget.TextView[contains(@text, "Préstamo")]');
        const accountNumberByAccountName = await $('//android.widget.TextView[@text="Préstamo"]');

        let elementIsDisplayed = false;
        let intentosMax = 0

        while (elementIsDisplayed == false && intentosMax < 6) {
            if (await accountNumberByAccountName.isDisplayed()) {
                elementIsDisplayed = true;
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++
            }
        }
        await accountNumberByAccountName.click();
    }
    //async selectAccountbyAccountNumber(nroAccount: string) {
    async selectAccountbyAccountNumber1() {
        // const accountNumberByAccountName = await $('//android.widget.TextView[@text="' + nroAccount + '"]');
        //const accountNumberByAccountName = await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[1]');

        const accountNumberByAccountName = $('//android.widget.TextView[contains(@text, "Balance disponible")]');
        await accountNumberByAccountName.isDisplayed();

        let balanceText = await accountNumberByAccountName.getText();
        console.log('print amount:' + balanceText);

        let elementIsDisplayed = false;
        let intentosMax = 0

        while (elementIsDisplayed == false && intentosMax < 6) {
            if (await accountNumberByAccountName.isDisplayed()) {
                elementIsDisplayed = true;
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                intentosMax++
            }
        }
        await accountNumberByAccountName.click();
    }


    async getDashboardBalance1() {
        return accountBalanceInitial;
    }

























}

export default new Dashboard();
