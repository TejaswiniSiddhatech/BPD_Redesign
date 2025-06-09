import { Given, Then, When } from '@cucumber/cucumber';
import PagarPrestamosPage from '../../pages/mobile/PagarPrestamosPage';
import LimitTransactionPerDayPage from '../../pages/mobile/LimitTransactionPerDayPage';

When(/^user select Seleccione from desde cuenta option on Pago a Prestamos screen$/, async () => {
    await PagarPrestamosPage.selectSeleccioneDesdeCuentaOpt();
    await PagarPrestamosPage.validateListAccount();
});

When(/^user select the first account from account list on Pago a Prestamos screen$/, async () => {
    await PagarPrestamosPage.selectFirstAccount();
});

When(/^user select an account "(.*)" from account list on Pago a Prestamos screen$/, async (accountNro: string) => {
    await PagarPrestamosPage.selectAnAccount(accountNro);
});


When(/^user select Seleccione from Prestamo option on  Pago a Prestamos screen$/, async () => {
    await PagarPrestamosPage.selectSeleccionePrestamoOpt();
    await PagarPrestamosPage.validateListPrestamos();
});

When(/^user select the first loan from loan list on Pago a Prestamos screen$/, async () => {
    await PagarPrestamosPage.selectFirstPrestamo();
});

When(/^user select monto a pagar "(.*)" on Pago a Prestamos screen$/, async (montoPagar: string) => {
    await PagarPrestamosPage.selectMontoPagar(montoPagar);
    await PagarPrestamosPage.entermontopagar();

});

When(/^user select monto a pagar "(.*)" on Saldo total Pago a Prestamos screen$/, async (montoPagar: string) => {
    await PagarPrestamosPage.selectMontoPagar(montoPagar);
});

When(/^user select monto a pagar "(.*)" on Pago Cuota pendiente a Prestamos screen$/, async (montoPagar: string) => {
    await PagarPrestamosPage.selectMontoPagar(montoPagar);
});

When(/^user enter Abono a capital amount "(.*)" to pay on Pago a Prestamos screen$/, async (amountToTransfer: string) => {
    await PagarPrestamosPage.enterAmountToTransfer(amountToTransfer);
});


When(/^user continue the payment of loan$/, async () => {
    await PagarPrestamosPage.selectBtnContinuar();
});

When(/^user select Continuar on Verificacion - Pago a prestamos screen$/, async () => {
    await PagarPrestamosPage.validateVerificationScreen();
    await PagarPrestamosPage.selectBtnContinuarVerificacion();

});

When(/^user type code of token popular on Pago a prestamos - Token Popular screen$/, async () => {
    await PagarPrestamosPage.typeTokenPopular("321321");
});

When(/^user select button Continuar on Pago a prestamos - Token Popular screen$/, async () => {
    await PagarPrestamosPage.selectContinuarBtnOnTokenScreen();
});

When(/^user select Continuar on Pago a prestamos - Comprobante screen$/, async () => {
    await PagarPrestamosPage.selectBtnContinuarComprobante();
});

Then(/^the screen of Comprobante on Pago a prestamos should displayed$/, async () => {
    await PagarPrestamosPage.validateComprobanteScreen();

});

// Then(/^error message "(.*)" should displayed$/, async (expectedMessage: string) => {
//     // try {
//     //     const actualMessage = await PagarPrestamosPage.errorMessage;
//     //     ((actualMessage)).waitForDisplayed({ timeout: 20000 });
//     //     // await expect(actualMessage).toHaveAttribute('text', expectedMessage);
//     //     expect(actualMessage).toHaveTextContaining(expectedMessage);

//     // } catch (Exception) {
//     // const actualMessage = await PagarPrestamosPage.balancedisponibleErrortxt
//     // await (actualMessage).waitForDisplayed({ timeout: 50000 });
//     // }

//     await (PagarPrestamosPage.balancedisponibleErrortxt).waitForDisplayed({ timeout: 50000 });
//     expect(PagarPrestamosPage.balancedisponibleErrortxt).toHaveTextContaining(expectedMessage);

// });

Then(/^the screen of Pagar Prestamos should displayed$/, async () => {
    await PagarPrestamosPage.validate();

});


Then(/^Veirfy La cuenta origen no posee balance disponible para realizar esta transacción Screen$/, async () => {
    await (PagarPrestamosPage.balancedisponibleErrortxt).waitForDisplayed({ timeout: 50000 });
    expect(PagarPrestamosPage.balancedisponibleErrortxt).toHaveTextContaining("La cuenta origen no posee balance disponible para realizar esta transacción.");

});


Then(/^user select on desembolsar button$/, async () => {
    await PagarPrestamosPage.tapOndesembolsar();
});

Then(/^enter amount in desembolsar "(.*)" and verify plazo$/, async (amount: string) => {
    console.log(amount);
    await PagarPrestamosPage.setAmount(amount);
});

Then(/^user select Continuar on Confirmacion - Pago a prestamos screen$/, async () => {
    await PagarPrestamosPage.confirmationPageValidation();
})
