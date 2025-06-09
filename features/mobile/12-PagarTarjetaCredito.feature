
Feature: Pagos

    #Background: User log into the app
    #Given the PreLogin is displayed
    #And the user tap the button Acceder in Prelogin screen
    #And user login with username "michellebrown" and "321321"
    # And user login with username "rnbichara" and "321321"
    # And user login with username "jordyaponte" and "321321"
    #Then the screen of Dashboard should displayed


    @Pagos @PagosTarjetas @PagarTarjetaUSD @RegressionCL_UAT
    Scenario: Burger menu- Pagar Tarjeta de Credito USD - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        # And user login with username "ambiorixparra" and "321321"
        # And user login with username "michellebrown" and "321321"
        And user login with username "levandy" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Tarjeta de crédito" from burguer menu
        And user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen
        And user select the first account from account list on Pago a Tarjetas de crédito screen
        And user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen
        And user select a US credit card "US$" from credit card list on Pago a Tarjetas de crédito screen
        And user select monto a pagar "Otro monto" on Pago a Tarjetas de crédito screen
        And user enter "Otro monto" amount "1" to pay on Pago a Tarjetas de crédito screen
        And user continue the payment of their credit card
        And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen
        And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
        # And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
        Then the screen of Comprobante on Pago a Tarjetas de crédito should displayed



    @Pagos @PagosTarjetas @PagarTarjetaDOP @RegressionCL_UAT
    Scenario: Burger menu- Pagar Tarjeta de Credito DOP - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        # And user login with username "ambiorixparra" and "321321"
        # And user login with username "michellebrown" and "321321"
        And user login with username "levandy" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Tarjeta de crédito" from burguer menu
        And user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen
        And user select the first account from account list on Pago a Tarjetas de crédito screen
        And user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen
        And user select a credit card "Balance a la fecha:" from credit card list on Pago a Tarjetas de crédito screen
        And user select monto a pagar "Otro monto" on Pago a Tarjetas de crédito screen
        And user enter "Otro monto" amount "1" to pay on Pago a Tarjetas de crédito screen
        And user continue the payment of their credit card
        And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen
        And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
        # And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
        Then the screen of Comprobante on Pago a Tarjetas de crédito should displayed




    @Pagos @PagosTarjetas @PagarTarjetaDOP @RegressionCL_UAT
    Scenario: Shortcut cuentas - Pagar Tarjeta de Credito DOP - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        # And user login with username "ambiorixparra" and "321321"
        # And user login with username "michellebrown" and "321321"
        And user login with username "levandy" and "321321"
        When user select a "Ahorros o Corriente" account
        When the user open the option Pagar in the snackbar
        And user select the option of Tarjeta de credito from the snackbar of payments
        And user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen
        And user select a credit card "Balance a la fecha:" from credit card list on Pago a Tarjetas de crédito screen
        And user select monto a pagar "Otro monto" on Pago a Tarjetas de crédito screen
        And user enter "Otro monto" amount "1" to pay on Pago a Tarjetas de crédito screen
        And user continue the payment of their credit card
        And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen
        And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
        # And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
        Then the screen of Comprobante on Pago a Tarjetas de crédito should displayed


    @Pagos @PagosTarjetas @PagarTarjetaDOP @RegressionCL_UAT
    Scenario: Shortcut tarjeta - Pagar Tarjeta de Credito DOP - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        # And user login with username "ambiorixparra" and "321321"
        # And user login with username "michellebrown" and "321321"
        And user login with username "levandy" and "321321"
        Then the screen of Dashboard should displayed
        When Select Tarjetas Account From Tarjetas Menu Dashboard
        And Select option Pagar From Tarjetas Menu Dashboard
        And user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen
        And user select the first account from account list on Pago a Tarjetas de crédito screen
        And user select monto a pagar "Otro monto" on Pago a Tarjetas de crédito screen
        And user enter "Otro monto" amount "1" to pay on Pago a Tarjetas de crédito screen
        And user continue the payment of their credit card
        And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen
        And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
        # And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
        Then the screen of Comprobante on Pago a Tarjetas de crédito should displayed


    @Pagos @PagosTarjetas @PagarTarjetaDOP @RegressionCL_UAT
    Scenario: Shorcut dashboard -  Pagar Tarjeta de Credito DOP - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "ambiorixparra" and "321321"
        # And user login with username "michellebrown" and "321321"
        # And user login with username "levandy" and "321321"
        # And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Pagar in the snackbar
        And user select the option of Tarjeta de credito from the snackbar of payments
        And user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen
        And user select the first account from account list on Pago a Tarjetas de crédito screen
        And user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen
        And user select a credit card "Balance a la fecha:" from credit card list on Pago a Tarjetas de crédito screen
        And user select monto a pagar "Otro monto" on Pago a Tarjetas de crédito screen
        And user enter "Otro monto" amount "1" to pay on Pago a Tarjetas de crédito screen
        And user continue the payment of their credit card
        And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen
        And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
        # And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
        Then the screen of Comprobante on Pago a Tarjetas de crédito should displayed



    # @OtroMontoPagarTC @Happypath @RegressionCL_UAT
    # Scenario: Shortcut Cuentas - Pagar Tarjeta de Credito USD - No Migrado
    #     Given the PreLogin is displayed
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with username "jordyaponte" and "321321"
    #     When user select a "Ahorros o Corriente" account
    #     When the user open the option Pagar in the snackbar
    #     And user select the option of Tarjeta de credito from the snackbar of payments
    #     # And user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen
    #     # And user select the first account from account list on Pago a Tarjetas de crédito screen
    #     And user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen
    #     And user select a credit card "US$" from credit card list on Pago a Tarjetas de crédito screen
    #     # And user select the first credit card from credit cards list on Pago a Tarjetas de crédito screen
    #     And user select monto a pagar "Otro monto" on Pago a Tarjetas de crédito screen
    #     #And user enter "Otro monto:" amount "10" to pay on Pago a Tarjetas de crédito screen
    #     And user enter "Otro monto" amount "1" to pay on Pago a Tarjetas de crédito screen
    #     And user continue the payment of their credit card
    #     And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen
    #     And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
    #     And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
    #     Then the screen of Comprobante on Pago a Tarjetas de crédito should displayed


    # @OtroMontoPagarTC @Happypath @RegressionCL_UAT
    # Scenario: Shorcut dashboard -  Pagar Tarjeta de Credito USD - No Migrado
    #     Given the PreLogin is displayed
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with username "jordyaponte" and "321321"
    #     Then the screen of Dashboard should displayed
    #     When the user open the option Pagar in the snackbar
    #     And user select the option of Tarjeta de credito from the snackbar of payments
    #     And user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen
    #     And user select the first account from account list on Pago a Tarjetas de crédito screen
    #     And user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen
    #     # And user select the first credit card from credit cards list on Pago a Tarjetas de crédito screen
    #     And user select a credit card "US$" from credit card list on Pago a Tarjetas de crédito screen
    #     And user select monto a pagar "Otro monto" on Pago a Tarjetas de crédito screen
    #     #And user enter "Otro monto:" amount "10" to pay on Pago a Tarjetas de crédito screen
    #     And user enter "Otro monto" amount "1" to pay on Pago a Tarjetas de crédito screen
    #     And user continue the payment of their credit card
    #     And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen
    #     And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
    #     And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
    #     Then the screen of Comprobante on Pago a Tarjetas de crédito should displayed


    Scenario Outline: As a BPD user I select the option "<montoPagar>" to pay my credit card with USD currency
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        # And user login with username "ambiorixparra" and "321321"
        #     # And user login with username "michellebrown" and "321321"
        And user login with username "levandy" and "321321"
        # And user login with username "jordyaponte" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Tarjeta de crédito" from burguer menu
        And user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen
        # And user select an account "828112359" from account list on Pago a Tarjetas de crédito screen
        And user select an account "RD$" from account list on Pago a Tarjetas de crédito screen
        And user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen
        # And user select a credit card "2922" from credit card list on Pago a Tarjetas de crédito screen
        And user select a US credit card "US$" from credit card list on Pago a Tarjetas de crédito screen
        And user select monto a pagar "<montoPagar>" on Pago a Tarjetas de crédito screen
        And user continue the payment of their credit card
        And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen
        And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
        # And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
        Then the screen of Comprobante on Pago a Tarjetas de crédito should displayed

        Examples:
            | montoPagar       |
            | Pago mínimo      |
            | Balance al corte |

# @PagarTC
# Scenario: As a BPD user I select the option "Balance a la fecha" to pay my credit card through a source account with DOP currency and a destination credit card with USD currency
# When the user tap the burger menu
# And user tap on Pagar from burger menu
# And user tap the option "Tarjeta de crédito" from Pagar dropdown list
# And user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen
# And user select the first account from account list on Pago a Tarjetas de crédito screen
# And user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen
# And user select a credit card "4521" from credit card list on Pago a Tarjetas de crédito screen
# And user select monto a pagar "Otro monto" on Pago a Tarjetas de crédito screen
# And user enter "Otro monto" amount "10" to pay on Pago a Tarjetas de crédito screen
# And user continue the payment of their credit card
# And user select Continuar on Verificacion - Pago a Tarjetas de crédito screen with multicurrency
# And user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen
# And user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen
# Then the screen of Comprobante on Pago a Tarjetas de crédito multicurrency should displayed

