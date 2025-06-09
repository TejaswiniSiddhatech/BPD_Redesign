import Gestures from "../../commons/gestures";
import commonsPage from "./commonsPage";
import Page from "./page";
let accountBalance = 0;
let transactionAmountInitial = "";

let txtUntilData = ""
let txtFromData = ""



class ConsultarCuentaPage extends Page {



    get accounSavingTitle() { return $('//android.widget.TextView[@text="Cuenta de ahorros"]') }

    get copyImg() { return $('//android.widget.ImageView[@content-desc="image resource"]') }

    get txtDetalle() { return $('//android.widget.TextView[@text="Detalles"]') }
    get txtBalanceDisponible() { return $('//android.widget.TextView[@text="Balance disponible:"]') }
    get lblBalanceDisponible() { return $('//android.widget.TextView[@text="Balance disponible:"]/following-sibling::android.widget.TextView[1]') }
    get txtEnTransito() { return $('//android.widget.TextView[@text="Balance en tránsito:"]') }
    get lblEnTransito() { return $('//android.widget.TextView[@text="Balance en tránsito:"]/following-sibling::android.widget.TextView[1]') }
    get txtTotal() { return $('//android.widget.TextView[@text="Balance total:"]') }
    get lblTotal() { return $('//android.widget.TextView[@text="Balance total:"]/following-sibling::android.widget.TextView[1]') }
    get txtLastTransactions() { return $('//android.widget.TextView[@text="Últimas transacciones"]') }
    get imgDragHistory() { return $('//android.widget.TextView[@text="Últimas transacciones"]/preceding-sibling::android.view.View') }

    get imgSearch() { return $('//android.widget.TextView[@text="Últimas transacciones"]/../../android.view.View[2]') }
    get imgFiltros() { return $('//android.widget.TextView[@text="Últimas transacciones"]/../../android.view.View[3]') }
    get imgMovement() { return $('(//android.view.View[@content-desc="image resource"])[1]') }
    get imgTransaction() { return $('(//android.view.View[@content-desc="image resource"])[1]') }

    get iconFilter() { return $('//android.widget.TextView[@text="Últimas transacciones"]/..//following-sibling::android.view.View[2]') }
    get iconFilterAfterAppliedFilter() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]/android.view.View') }

    get msgNoTransaction() { return $('//android.widget.TextView[@text="Últimas transacciones"]/..//following-sibling::android.view.View[2]') }

    get labelFromDate() { return $('//android.widget.ScrollView/android.view.View[3]/android.view.View/android.widget.TextView') }
    get labelUntilDate() { return $('//android.widget.ScrollView/android.view.View[4]/android.view.View/android.widget.TextView') }
    get iconGoPreviousMonth() { return $('(//android.widget.ImageView[@content-desc="back icon"])[1]') }
    get iconGoNextMonth() { return $('(//android.widget.ImageView[@content-desc="back icon"])[2]') }
    get labelSinceAmount() { return $('//android.widget.ScrollView/android.widget.EditText[1]') }
    get labelUntilAmount() { return $('//android.widget.ScrollView/android.widget.EditText[2]') }


    get firstElementFiltered() { return $("//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.widget.TextView/following-sibling::android.view.View") }

    async validate(): Promise<void> {

    }

    async validateSavingAccountDetailScreen() {
        //  await expect(this.accounSavingTitle).toBeDisplayed();
        await expect(this.copyImg).toBeDisplayed();
        await expect(this.txtDetalle).toBeDisplayed();
        await expect(this.txtBalanceDisponible).toBeDisplayed();
        await expect(this.lblBalanceDisponible).toBeDisplayed();
        await expect(this.txtEnTransito).toBeDisplayed();
        await expect(this.lblEnTransito).toBeDisplayed();
        await expect(this.txtTotal).toBeDisplayed();
        await expect(this.lblTotal).toBeDisplayed();
        await expect(this.txtLastTransactions).toBeDisplayed();
        await expect(this.imgDragHistory).toBeDisplayed();
    }

    async validateCuentaCorrienteDetailScreen() {
        //  await expect(this.accounSavingTitle).toBeDisplayed();
        await expect(this.copyImg).toBeDisplayed();
        await expect(this.txtDetalle).toBeDisplayed();
        await expect(this.txtBalanceDisponible).toBeDisplayed();
        await expect(this.lblBalanceDisponible).toBeDisplayed();
        await expect(this.txtEnTransito).toBeDisplayed();
        await expect(this.lblEnTransito).toBeDisplayed();
        await expect(this.txtTotal).toBeDisplayed();
        await expect(this.lblTotal).toBeDisplayed();
        await expect(this.txtLastTransactions).toBeDisplayed();
        await expect(this.imgDragHistory).toBeDisplayed();
    }

    async validateCuentaCertificadoDetailScreen() {

    }

    async selectAnAccount4(nroCuenta: string) {
        const element = $('//android.widget.TextView[contains(@text, "Disponible: RD$")]');
        await element.isDisplayed();

        let balanceText = await element.getText();
        console.log('print amount:' + balanceText);

        /*let amountMatch = balanceText.match(/Disponible: RD\$( [\d,.]+)/);
         if (amountMatch) {
             let amount = parseFloat(amountMatch[1].replace(/,/g, ''));
             console.log('print amount:' + amount);
       
             // Check if the balance is zero or NA and look for another account
             while ((balanceText.includes('zero') || balanceText.includes('NA')) && await element.isDisplayed()) {
                 Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                 // Fetch the new balance text
                 const newBalanceText = await element.getText();
                 if (!newBalanceText.match(/Disponible: RD\$( [\d,.]+)/)) {
                     console.log("Amount not found in balance text.");
                    // break; // Break out of the loop if balance text doesn't match
                 }
                 balanceText = newBalanceText;
                 amountMatch = balanceText.match(/Disponible: RD\$( [\d,.]+)/);
                 if (amountMatch) {
                     amount = parseFloat(amountMatch[1].replace(/,/g, ''));
                 }
             }*/

        // If the balance is greater than zero and not NA, click on the element
        if (!balanceText.includes('zero') && !balanceText.includes('NA')) {
            await element.click();
        } else {
            console.log("No account with balance greater than zero and NA found.");
        }
    } /*else {
      console.log("Amount not found in balance text.");
      Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
      // And click on next account where the amount is greater than 100
  }*/
    //}






    async dragHistory() {
        await browser.pause(8000);
        await (await this.imgDragHistory).click();
    }

    async validateLastMovements() {
        await expect(this.txtLastTransactions).toBeDisplayed();
        await expect(this.imgSearch).toBeDisplayed();
        await expect(this.imgFiltros).toBeDisplayed();
        await expect(this.imgMovement).toBeDisplayed();
    }

    async setTransactionAmount() {
        const transactionAmount = await $('(//android.view.View[@content-desc="image resource"])[1]/following-sibling::android.widget.TextView[3]');
        let balanceAttr = "";
        let elementIsDisplayed = false;

        while (elementIsDisplayed == false) {
            if (await transactionAmount.isDisplayed()) {
                elementIsDisplayed = true;
                balanceAttr = await transactionAmount.getAttribute('text');
                transactionAmountInitial = balanceAttr.replace(/ /g, '');
            } else {
                Gestures.swipe({ x: 400, y: 1772 }, { x: 364, y: 600 });
                await browser.pause(2000);
            }
        }
    }

    async getTransactionAmount() {
        return transactionAmountInitial;
    }

    async selectTransaction() {
        await (await this.imgTransaction).waitForDisplayed();
        await (await this.imgTransaction).click();
    }

    async applyOneFilter(option: string) {
        await commonsPage.tapContainsText(option)
        txtUntilData = await this.labelFromDate.getText()
        txtFromData = await this.labelUntilDate.getText()

        await commonsPage.tapContainsText("Aplicar")
    }

    async tapIconFilter() {
        await driver.pause(10000)
        await (await this.iconFilter).click()
    }

    async validateFilterApplied(expectedMessage: string) {
        await commonsPage.validateElement("Restaurar")
        switch (expectedMessage) {
            case "Últimos 30 días":
            case "Últimos 60 días":
            case "Últimos 90 días":
                await commonsPage.validateElement(`${txtUntilData}-${txtFromData}`)
                break;
            case "Entradas":
            case "Salidas ":
                await commonsPage.validateElement(expectedMessage)
                break;
            default:
                console.log("No hay una opción valida");
        }

        await expect(this.firstElementFiltered).toBeExisting()
        await expect(this.firstElementFiltered).toBeDisplayed()
        await driver.pause(5000)
    }

    async validateThereAreNotTransaction() {
        await commonsPage.validateElement("Restaurar")
        await commonsPage.validateElement(`${txtUntilData}-${txtFromData}`)
        await commonsPage.validateElement("No encontramos transacciones para esta búsqueda.")
        await driver.pause(500)
    }

    async applyDateFilter(dayBefore: string, condition: string) {
        const fechaActual: Date = new Date();
        // Obtener el día de la fecha actual
        const dayActual = fechaActual.getDate();

        await (await this.labelFromDate).isDisplayed()
        await (await this.labelFromDate).click()
        await (await this.iconGoPreviousMonth).click()

        if (condition == "2 months ago") {
            await (await this.iconGoPreviousMonth).click()
        }
        await commonsPage.tapBytext(dayBefore)
        await (await this.labelFromDate).click()

        await (await this.labelUntilDate).click()
        await (await this.iconGoNextMonth).click()
        if (condition == "2 months ago") {
            await (await this.iconGoNextMonth).click()
        }
        await commonsPage.tapBytext(`${dayActual}`)
        await (await this.labelUntilDate).click()

        txtUntilData = await this.labelFromDate.getText()
        txtFromData = await this.labelUntilDate.getText()
        await driver.pause(10000)
        await commonsPage.tapContainsText("Aplicar")

    }

    async inputAmountFilter(sinceAmount: string, fromAmount: string) {
        const parsedSinceAmount = parseFloat(sinceAmount);
        const parsedFromAmount = parseFloat(fromAmount);
        await (await this.labelSinceAmount).setValue(sinceAmount)
        await (await this.labelUntilAmount).setValue(fromAmount)
        if (parsedFromAmount >= parsedSinceAmount) {
            await commonsPage.tapContainsText("Aplicar")
        }
    }

    async rangeInvalid() {
        await commonsPage.validateElement("Revisa el rango ingresado")
    }

    async noTransactionRangeAmount(valueSinceAmout: string, valueUntilAmout: string) {
        await commonsPage.validateElement("Restaurar")
        await commonsPage.validateElement(`Desde RD$${valueSinceAmout}.00`)
        await commonsPage.validateElement(`Hasta RD$${valueUntilAmout}.00`)
        await commonsPage.validateElement("No encontramos transacciones para esta búsqueda.")
    }

    async appliedAnyFilter() {
        await commonsPage.tapBytext("Últimos 30 días")
        await commonsPage.tapBytext("Entradas (+)")
        await commonsPage.tapBytext("Salidas (-)")
        await (await this.labelSinceAmount).setValue("100")
        await (await this.labelUntilAmount).setValue("500")

    }

    async restartFilter(applyFilter: string) {
        const valueSinceAmout = await (await this.labelSinceAmount).getText()
        const valueUntilAmout = await (await this.labelUntilAmount).getText()
        const valueUntil = await (await this.labelUntilDate).getText()
        const valueFromDate = await (await this.labelFromDate).getText()
        if (applyFilter == "after applied") {
            await commonsPage.tapContainsText("Aplicar")
            await commonsPage.validateElement("Restaurar")
            await commonsPage.validateElement(`${valueFromDate}-${valueUntil}`)
            await commonsPage.validateElement("Entradas (+)")
            await Gestures.swipe({ x: 800, y: 718 }, { x: 300, y: 718 });
            await commonsPage.validateElement("Salidas (-)")
            await Gestures.swipe({ x: 800, y: 718 }, { x: 300, y: 718 });
            await commonsPage.validateElement(`Desde RD$${valueSinceAmout}`)
            await Gestures.swipe({ x: 800, y: 718 }, { x: 300, y: 718 });
            await commonsPage.validateElement(`Hasta RD$${valueUntilAmout}`)
        }
        await commonsPage.tapBytext("Restaurar")
        if (applyFilter == "after applied") {
            const lblDesdeValue = await commonsPage.createXpath(`Desde RD$${valueSinceAmout}`)
            const lblHastaValue = await commonsPage.createXpath(`Hasta RD$${valueUntilAmout}.`)
            const lblDaysApplied = await commonsPage.createXpath(`${valueUntil} - ${valueFromDate}`)
            const lblEntradaApplied = await commonsPage.createXpath("Entradas (+)")
            const lblSalidaApplied = await commonsPage.createXpath("Salidas (-)")
            await expect(lblDesdeValue).not.toBePresent()
            await expect(lblHastaValue).not.toBePresent()
            await expect(lblDaysApplied).not.toBePresent()
            await expect(lblEntradaApplied).not.toBePresent()
            await expect(lblSalidaApplied).not.toBePresent()
            await (await this.iconFilterAfterAppliedFilter).click()
        }
    }

    async withoutFiltersApplied() {
        expect(await (await this.labelSinceAmount).getText()).toEqual("")
        expect(await (await this.labelUntilAmount).getText()).toEqual("")
    }

    async validateFilterRangeAmount(sinceAmount: string, untilAmount: string) {
        await commonsPage.validateElement("Restaurar")
        await commonsPage.validateElement(`Desde RD$${sinceAmount}.00`)
        await commonsPage.swipe({ fromX: 840, fromY: 755 }, { toX: 100, toY: 755 })
        await commonsPage.validateElement(`Hasta RD$${untilAmount}.00`)
        await expect(this.firstElementFiltered).toBeExisting()
        await expect(this.firstElementFiltered).toBeDisplayed()
    }

    async tapOption(option: string) {
        await commonsPage.tapBytext(option)
    }

}
export default new ConsultarCuentaPage();