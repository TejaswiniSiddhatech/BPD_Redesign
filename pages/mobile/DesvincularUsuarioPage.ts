import Page from "./page";

class DesvincularUsuarioPage extends Page {

    get bmDesvicularMiUsuarioTxt() { return $('//android.widget.TextView[@text="Desvincular mi usuario"]') }
    get messageModalTxt() { return $('//android.widget.TextView[@text="¿Estás seguro que deseas desvincular tu usuario?"]') }
    get desvincularBtn() { return $('//android.widget.TextView[@text="Desvincular"]/..') }
    get cancelarBtn() { return $('//android.widget.TextView[@text="Cancelar"]/..') }
    get closenaviagationmenu() { return $('//android.view.View[@content-desc="Close navigation menu"]') }



    async validate(): Promise<void> {

    }

    async selectDesvincularUsuario() {
        await expect(this.bmDesvicularMiUsuarioTxt).toBeDisplayed();
        (await (this.bmDesvicularMiUsuarioTxt)).click();

        await expect(this.messageModalTxt).toBeDisplayed();
        await expect(this.desvincularBtn).toBeDisplayed();
        await expect(this.cancelarBtn).toBeDisplayed();
    }

    async selectDesvincularBtn() {
        await (await this.desvincularBtn).click();
    }

    async selectCancelarBtn() {
        await (await this.cancelarBtn).click();
    }

}

export default new DesvincularUsuarioPage();
