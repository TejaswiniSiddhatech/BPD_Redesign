import { Given, Then, When } from '@cucumber/cucumber';
import MiPerfilPage from '../../pages/mobile/MiPerfilPage';

When(/^user select Actualizar datos from alert modal on Mi perfil screen$/, async () => {
    await MiPerfilPage.selectActualizarBtn();
});

When(/^user select Cerrar on Actualizar tus datos modal on Mi perfil screen$/, async () => {
    await MiPerfilPage.selectGoBackActualizarDatos();
});

When(/^user enter Numero de contacto "(.*)" on Mi perfil screen$/, async (nroContacto: string) => {
    await MiPerfilPage.updateNroContacto(nroContacto);
});

When(/^user select Guardar cambios on Mi perfil screen$/, async () => {
    await MiPerfilPage.selectGuardarCambiosBtn();
});

When(/^user select Guardar cambios on Confirmar cambios modal$/, async () => {
    await MiPerfilPage.selectGuardarCambiosBtnOnConfirmarModal();
});

When(/^user type code of token popular on Mi perfil - Token Popular screen$/, async () => {
    await MiPerfilPage.typeTokenPopular("321321");
});

When(/^user select button Continuar on Mi perfil - Token Popular screen$/, async () => {
    await MiPerfilPage.selectContinuarBtnOnTokenScreen();
});

Then(/^the screen Mi perfil should displayed$/, async () => {
    await MiPerfilPage.validate();
});

Then(/^user Actualizar datos modal on Mi perfil screen$/, async () => {
    await MiPerfilPage.validateAcutalizarDatos();
});


Then(/^the user should Go Back From Mi perfil screen$/, async () => {
    await MiPerfilPage.GoBackMiPerfil();
});