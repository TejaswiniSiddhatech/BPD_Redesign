import Page from "./page";


class PagarRecurrentesTCPage extends Page {

    get title() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/lblTitle"]') }
    get backBtn() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/imgcuenta"]') }

    get txtProgramarTab() { return $('//android.widget.TextView[@text="Programar"]') }
    get txtPagosProgramadosTab() { return $('//android.widget.TextView[@text="Pagos programados"]') }
    get txtFirstPoint() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_tarjeta_title"]') }

    get chkTarjeta() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout[1]/android.widget.ImageView') }
    get itemTarjeta() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtaccType"]') }
    get btnVerDetalles() { return $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/lnr_ver_detalles"]') }
    get txtSecondPoint() { return $('//android.widget.TextView[@text="2- Selecciona el tipo de pago:"]') }
    get chkPagoMinimo() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/img_radio_pago_minimo"]') }
    get txtPagoMinimo() { return $('//android.widget.TextView[@text="Pago mínimo"]') }
    get chkBalanceCorte() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/img_radio_pago_total"]') }
    get txtBalanceCorte() { return $('//android.widget.TextView[@text="Balance al corte"]') }
    get txtThirdPoint() { return $('//android.widget.TextView[@text="3- Selecciona la fecha de pago:"]') }
    get chkAlCorte() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/img_radio_fecha_de_corte"]') }
    get txtAlCorte() { return $('//android.widget.TextView[@text="Al corte"]') }
    get chkAlVencimiento() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/img_radio_fecha_de_vencimiento"]') }
    get txtAlVencimiento() { return $('//android.widget.TextView[@text="Al vencimiento"]') }
    get btnAtras() { return $('//android.widget.TextView[@text="Atrás"]') }
    get btnSiguiente() { return $('//android.widget.TextView[@text="Siguiente"]') }
    // get btnSiguiente() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_continuar"]') }
    // get btnSiguiente() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_siguiente"]') }
    get descripSeleccionaCuenta() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_info"]') }
    get txtSelecciona() { return $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/rel_seleccioneDesde"]') }
    get txtImportante() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_important"]') }

    get firstAccount() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout/android.widget.RelativeLayout') }
    get itemAccountList() { return $$('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtaccType"]') }

    get verificacionTitle() { return $('//android.widget.TextView[@text="VERIFICACIÓN"]') }
    get txtTarjeta() { return $('//android.widget.TextView[@text="Tarjetas:"]') }
    get descripcionTarjetaVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txtaccType"]') }
    get txtTipoPagoVerificacion() { return $('//android.widget.TextView[@text="Tipo de pago:"]') }
    get tooltipTipoPagoVerificacion() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/img_info_tipo_de_pago"]') }
    get descripcionTipoPagoVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_tipo_de_pago"]') }
    get txtFechaPagoVerificacion() { return $('//android.widget.TextView[@text="Fecha de pago:"]') }
    get tooltipFechaPagoVerificacion() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/img_info_fecha_de_pago"]') }
    get descripcionFechaPagoVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_forma_de_pago"]') }
    get txtDesdeCuentaVerificacion() { return $('//android.widget.TextView[@text="Desde la cuenta:"]') }
    get descripDesdeCuentaVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_cuenta_a_debitar"]') }
    get txtFechaVerificacion() { return $('//android.widget.TextView[@text="Fecha:"]') }
    get descripcionFechaVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_fetcha"]') }
    get chkTerminosCondiciones() { return $('//android.widget.ImageView[@resource-id="com.popular.app.android:id/img_chk"]') }
    get txtTerminosCondiciones() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_terms"]') }
    //get btnAtrasVerificacion() { return $('//android.widget.Button[@text="Atrás"]') }
    // get btnAceptoVerificacion() { return $('//android.widget.Button[@text="Acepto"]') }
    get btnAtrasVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_atras"]') }
    get btnAceptoVerificacion() { return $('//android.widget.TextView[@resource-id="com.popular.app.android:id/txt_continuar"]') }


    get lnr_no_records_found() { return $("//*[@class = 'android.widget.LinearLayout' and @resource-id = 'com.popular.app.android:id/lnr_no_records_found' and (@text = '' or . = '')]") }
    get lnr_no_records_foundTxt() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Aún no tienes tarjetas con pagos recurrentes.' or . = 'Aún no tienes tarjetas con pagos recurrentes.')]") }

    get reuirementerrormsg() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get requirementecontinuarbtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }

    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}
    // get (){ return $('')}




    async validate(): Promise<void> {
        await (await this.title).waitForDisplayed({ timeout: 30000 });
        await expect(this.title).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.txtProgramarTab).toBeDisplayed();
        await expect(this.txtPagosProgramadosTab).toBeDisplayed();
        await (await this.txtFirstPoint).waitForDisplayed({ timeout: 30000 });
        await expect(this.txtFirstPoint).toBeDisplayed();
        await expect(this.chkTarjeta).toBeDisplayed();
        await expect(this.itemTarjeta).toBeDisplayed();
        await expect(this.btnVerDetalles).toBeDisplayed();
        await expect(this.txtSecondPoint).toBeDisplayed();
        await expect(this.chkPagoMinimo).toBeDisplayed();
        await expect(this.chkBalanceCorte).toBeDisplayed();
        await expect(this.txtBalanceCorte).toBeDisplayed();
        await expect(this.txtThirdPoint).toBeDisplayed();
        await expect(this.chkAlCorte).toBeDisplayed();
        await expect(this.txtAlCorte).toBeDisplayed();
        await expect(this.chkAlVencimiento).toBeDisplayed();
        await expect(this.txtAlVencimiento).toBeDisplayed();
        await expect(this.btnAtras).toBeDisplayed();
        await expect(this.btnSiguiente).toBeDisabled();
    }

    async selectFirstCreditCard() {
        await (await this.title).waitForDisplayed({ timeout: 30000 });

        (await this.chkTarjeta).click();
    }

    async VerifyNoRecordsFound() {
        await (await this.lnr_no_records_found).waitForDisplayed({ timeout: 30000 });

        await (await this.lnr_no_records_foundTxt).waitForDisplayed({ timeout: 10000 });
    }

    async selectTipoPago(tipoPago: string) {
        // if(tipoPago == "Pago mínimo"){
        if (tipoPago == "Pago minimo") {
            (await this.chkPagoMinimo).click();
        } else if (tipoPago == "Balance al corte") {

            (await this.chkBalanceCorte).click();
        }
        else {
            await (await this.title).waitForDisplayed({ timeout: 30000 });

            (await this.chkPagoMinimo).click();
        }
    }

    async selectFechaPago(fechaPago: string) {
        if (fechaPago == "Al corte") {
            (await this.chkAlCorte).click();
        } else if (fechaPago == "Al vencimiento") {
            (await this.chkAlVencimiento).click();
        }
    }

    async selectSiguienteBtn() {
        await expect(this.btnSiguiente).toBeEnabled(); //
        (await this.btnSiguiente).click();
    }

    async validateSeleccionaCuenta() {
        await expect(this.descripSeleccionaCuenta).toBeDisplayed();
        await expect(this.txtSelecciona).toBeDisplayed();
        await expect(this.txtImportante).toBeDisplayed();
        await expect(this.btnAtras).toBeDisplayed();
        await expect(this.btnSiguiente).toBeDisabled();//
    }

    async selectSelecciona() {
        await expect(this.txtSelecciona).toBeEnabled();
        (await this.txtSelecciona).click();
    }

    async selectFirstAccount() {
        await expect(this.firstAccount).toBeDisplayed();
        (await this.firstAccount).click();
    }

    async validateVerificationScreen() {
        await expect(this.verificacionTitle).toBeDisplayed();
        await expect(this.txtTarjeta).toBeDisplayed();
        await expect(this.descripcionTarjetaVerificacion).toBeDisplayed();//
        await expect(this.txtTipoPagoVerificacion).toBeDisplayed();
        await expect(this.tooltipTipoPagoVerificacion).toBeDisplayed();//
        await expect(this.descripcionTipoPagoVerificacion).toBeDisplayed();//
        await expect(this.txtFechaPagoVerificacion).toBeDisplayed();
        await expect(this.tooltipFechaPagoVerificacion).toBeDisplayed();//
        await expect(this.descripcionFechaPagoVerificacion).toBeDisplayed();//
        await expect(this.txtDesdeCuentaVerificacion).toBeDisplayed();
        await expect(this.descripDesdeCuentaVerificacion).toBeDisplayed();//
        await expect(this.txtFechaVerificacion).toBeDisplayed();
        await expect(this.descripcionFechaVerificacion).toBeDisplayed();//
        await expect(this.chkTerminosCondiciones).toBeDisplayed();
        await expect(this.txtTerminosCondiciones).toBeDisplayed();
        await expect(this.btnAtrasVerificacion).toBeDisplayed();//
        await expect(this.btnAceptoVerificacion).toBeDisabled();//
    }

    async selectChkTerminosCondiciones() {
        await expect(this.chkTerminosCondiciones).toBeDisplayed();
        (await this.chkTerminosCondiciones).click();
    }

    async selectAceptoBtn() {
        await expect(this.btnAceptoVerificacion).toBeEnabled(); //
        (await this.btnAceptoVerificacion).click();
    }

    async selectBtnContinuarVerificacion() {
        await expect(this.btnAceptoVerificacion).toBeEnabled(); //

        (await this.btnAceptoVerificacion).click();
    }


    async verifyrequirementerror() {
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 50000 });
        const msg = await (await this.reuirementerrormsg).getText();
        console.log('Verifying Requirement Error : ' + msg)
        await this.reuirementerrormsg.waitForDisplayed({ timeout: 60000 });
        // (await this.requirementecontinuarbtn).click();

    }
}
export default new PagarRecurrentesTCPage();