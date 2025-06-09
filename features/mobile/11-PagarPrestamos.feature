
Feature: Pagos

    #   Background: User log into the app
    #       Given the PreLogin is displayed
    #       And the user tap the button Acceder in Prelogin screen
    #       And user login with username "michellebrown" and "321321"
    #       Then the screen of Dashboard should displayed


    @Pagos @PagosProductos @PagarPrestamo @RegressionCL_UAT
    Scenario: Burger menu - Prestamos - No migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "jordyaponte" and "321321"
        # And user login with username "Ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Préstamos" from burguer menu
        And user select Seleccione from desde cuenta option on Pago a Prestamos screen
        And user select the first account from account list on Pago a Prestamos screen
        And user select Seleccione from Prestamo option on  Pago a Prestamos screen
        And user select the first loan from loan list on Pago a Prestamos screen
        And user select monto a pagar "Cuota (s) pendiente (s)" on Pago Cuota pendiente a Prestamos screen
        And user continue the payment of loan
        And user select Continuar on Verificacion - Pago a prestamos screen
        And user type code of token popular on Pago a prestamos - Token Popular screen
        And user select button Continuar on Pago a prestamos - Token Popular screen
        Then the screen of Comprobante on Pago a prestamos should displayed


    @Pagos @PagosProductos @PagarPrestamo @RegressionCL_UAT
    Scenario: Shorcut dashboard - Prestamos - No migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "jordyaponte" and "321321"
        # And user login with username "Ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Pagar in the snackbar
        And user select the option of "Préstamos" from the snackbar of payments
        And user select Seleccione from desde cuenta option on Pago a Prestamos screen
        And user select the first account from account list on Pago a Prestamos screen
        And user select Seleccione from Prestamo option on  Pago a Prestamos screen
        And user select the first loan from loan list on Pago a Prestamos screen
        And user select monto a pagar "Cuota (s) pendiente (s)" on Pago Cuota pendiente a Prestamos screen
        And user continue the payment of loan
        And user select Continuar on Verificacion - Pago a prestamos screen
        And user type code of token popular on Pago a prestamos - Token Popular screen
        And user select button Continuar on Pago a prestamos - Token Popular screen
        Then the screen of Comprobante on Pago a prestamos should displayed


    @Pagos @PagosProductos @PagarPrestamo @RegressionCL_UAT
    Scenario: Shorcut Cuenta - Prestamos - No migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "jordyaponte" and "321321"
        # And user login with username "Ambiorixparra" and "321321"
        When user select a "Ahorros o Corriente" account
        When the user open the option Pagar in the snackbar
        And user select the option of "Préstamos" from the snackbar of payments
        And user select Seleccione from desde cuenta option on Pago a Prestamos screen
        And user select the first account from account list on Pago a Prestamos screen
        And user select Seleccione from Prestamo option on  Pago a Prestamos screen
        And user select the first loan from loan list on Pago a Prestamos screen
        And user select monto a pagar "Cuota (s) pendiente (s)" on Pago Cuota pendiente a Prestamos screen
        And user continue the payment of loan
        And user select Continuar on Verificacion - Pago a prestamos screen
        And user type code of token popular on Pago a prestamos - Token Popular screen
        And user select button Continuar on Pago a prestamos - Token Popular screen
        Then the screen of Comprobante on Pago a prestamos should displayed


    @Pagos @PagosProductos @PagarPrestamo @RegressionCL_UAT
    Scenario: Shorcut Prestamo - Prestamos - No migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "jordyaponte" and "321321"
        # And user login with username "Ambiorixparra" and "321321"
        When user select a "Préstamo" account
        When the user open the option Pagar in the snackbar
        And user select the option of "Préstamos" from the snackbar of payments
        And user select Seleccione from desde cuenta option on Pago a Prestamos screen
        And user select the first account from account list on Pago a Prestamos screen
        And user select Seleccione from Prestamo option on  Pago a Prestamos screen
        And user select the first loan from loan list on Pago a Prestamos screen
        And user select monto a pagar "Cuota (s) pendiente (s)" on Pago Cuota pendiente a Prestamos screen
        And user continue the payment of loan
        And user select Continuar on Verificacion - Pago a prestamos screen
        And user type code of token popular on Pago a prestamos - Token Popular screen
        And user select button Continuar on Pago a prestamos - Token Popular screen
        Then the screen of Comprobante on Pago a prestamos should displayed

    #
    # Scenario: As a BPD user I pay my loan through Saldo Total option
    #     When the user tap the burger menu
    #     And user tap on Pagar from burger menu
    #     And user select "Préstamos" from burguer menu
    #     And user select Seleccione from desde cuenta option on Pago a Prestamos screen
    #     And user select the first account from account list on Pago a Prestamos screen
    #     And user select Seleccione from Prestamo option on  Pago a Prestamos screen
    #     And user select the first loan from loan list on Pago a Prestamos screen
    #     And user select monto a pagar "Saldo total" on Pago a Prestamos screen
    #     And user continue the payment of loan
    #     And user select Continuar on Verificacion - Pago a prestamos screen
    #     And user type code of token popular on Pago a prestamos - Token Popular screen
    #     And user select button Continuar on Pago a prestamos - Token Popular screen
    #     Then the screen of Comprobante on Pago a prestamos should displayed


    Scenario: As a BPD user I pay my loan with an account with insufficient funds
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "jordyaponte" and "321321"
        # And user login with username "Ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Préstamos" from burguer menu
        And user select Seleccione from desde cuenta option on Pago a Prestamos screen
        # And user select an account "811793116" from account list on Pago a Prestamos screen
        And user select the first account from account list on Pago a Prestamos screen
        And user select Seleccione from Prestamo option on  Pago a Prestamos screen
        And user select the first loan from loan list on Pago a Prestamos screen
        And user select monto a pagar "Saldo total" on Saldo total Pago a Prestamos screen
        # And user select monto a pagar "Cuota (s) pendiente (s)" on Pago Cuota pendiente a Prestamos screen
        And user continue the payment of loan
        Then Veirfy La cuenta origen no posee balance disponible para realizar esta transacción Screen
    # Then error message "La cuenta origen no posee balance disponible para realizar esta transacción." should displayed


    Scenario: As a BPD user I enter the amount for payment to pay my loan through a source account with USD currency
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "jordyaponte" and "321321"
        # And user login with username "Ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on Pagar from burger menu
        And user select "Préstamos" from burguer menu
        And user select Seleccione from desde cuenta option on Pago a Prestamos screen
        # And user select an account "756669016" from account list on Pago a Prestamos screen
        And user select the first account from account list on Pago a Prestamos screen
        And user select Seleccione from Prestamo option on  Pago a Prestamos screen
        And user select the first loan from loan list on Pago a Prestamos screen
        And user select monto a pagar "Abono a capital:" on Pago a Prestamos screen
        And user continue the payment of loan
        And user select Continuar on Verificacion - Pago a prestamos screen
        And user type code of token popular on Pago a prestamos - Token Popular screen
        And user select button Continuar on Pago a prestamos - Token Popular screen
        Then the screen of Comprobante on Pago a prestamos should displayed



    # Scenario: As a BPD user I pay my loan through desembolsar
    #     When user select a "Préstamo" loan account
    #     And user select on desembolsar button
    #     And enter amount in desembolsar "10500" and verify plazo
    #     And user select Continuar on Confirmacion - Pago a prestamos screen
    #     And user type code of token popular on Pago a prestamos - Token Popular screen
    #     And user select button Continuar on Pago a prestamos - Token Popular screen
    #     Then the screen of Comprobante on Pago a prestamos should displayed


    Scenario: As a BPD user I pay my loan through Abono a capital option
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "jordyaponte" and "321321"
        # And user login with username "Ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Préstamos" from burguer menu
        And user select Seleccione from desde cuenta option on Pago a Prestamos screen
        And user select the first account from account list on Pago a Prestamos screen
        And user select Seleccione from Prestamo option on  Pago a Prestamos screen
        And user select the first loan from loan list on Pago a Prestamos screen
        And user select monto a pagar "Abono a capital" on Pago a Prestamos screen
        And user continue the payment of loan
        And user select Continuar on Verificacion - Pago a prestamos screen
        And user type code of token popular on Pago a prestamos - Token Popular screen
        And user select button Continuar on Pago a prestamos - Token Popular screen
        Then the screen of Comprobante on Pago a prestamos should displayed
