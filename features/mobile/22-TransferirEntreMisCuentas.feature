
Feature: Transferencias

    #    Background: User log into the app
    #        Given the PreLogin is displayed
    #        And the user tap the button Acceder in Prelogin screen
    #        And user login with username "michellebrown" and "321321"
    #        Then the screen of Dashboard should displayed

    @Transferencias @TransferirEntreCuentas @RegressionCL_UAT
    Scenario Outline: Shortcut dashboard - Transferir Entre mis cuentas  - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of Transferir entre mis cuentas from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of accounts Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "1" to transfer to a DOP account on Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        Then the screen of Comprobante for Transferir a mis cuentas should displayed

    @Transferencias @TransferirEntreCuentas @RegressionCL_UAT
    Scenario Outline: Shortcut cuentas - Transferir Entre mis cuentas  - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        When user select a "Ahorros o Corriente" account
        When the user open the option Transferir in the snackbar
        And user select the option of Transferir entre mis cuentas from the snackbar of transfers
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "1" to transfer to a DOP account on Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        Then the screen of Comprobante for Transferir a mis cuentas should displayed

    @Transferencias @TransferirEntreCuentas @RegressionCL_UAT
    Scenario: Burger menu - Transferir Entre mis cuentas - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Entre mis cuentas" from burguer menu
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of accounts Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "1" to transfer to a DOP account on Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        And user select Ir a mis productos button on Transferir a mis cuentas screen
        Then the screen of Dashboard should displayed


    @Transferencias @TransferirEntreCuentas @RegressionCL_UAT
    Scenario: Burger menu - Transferir Entre mis cuentas - Realizar otra transferencia - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Entre mis cuentas" from burguer menu
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of accounts Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "1" to transfer to a DOP account on Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        And user select Realizar otra transferencia button on Transferir a mis cuentas screen
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of accounts Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "1" to transfer to a DOP account on Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        Then the screen of Comprobante for Transferir a mis cuentas should displayed



    # @Happypath @RegressionCL_UAT
    # Scenario Outline: Shortcut dashboard - Entre mis cuentas  - Migrado
    #     Given the PreLogin is displayed
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with username "yaya" and "Banco321"
    #     Then the screen of Dashboard should displaye
    #     When the user open the option Transferir in the snackbar
    #     And user select the option of Transferir entre mis cuentas from the snackbar of transfers
    #     And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
    #     And user select the account "RD$" from list of accounts Transferir a mis cuentas screen
    #     And user select option Hasta cuenta from Transferir a mis cuentas screen
    #     And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
    #     And user enter amount "1" to transfer to a DOP account on Transferir a mis cuentas
    #     And user continue with Transferir a mis cuentas
    #     And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
    #     And user type token popular code for Transferir a mis cuentas
    #     And user select continuar on Token Popular screen for Transferir a mis cuentas
    #     Then the screen of Comprobante for Transferir a mis cuentas should displayed

    # Scenario: As a BPD user, I want to transfer funds from Account A with DOP currency to Account B with USD currency, which are both owned by me
    #     When the user open the option Transferir in the snackbar
    #     And user select the option of Transferir entre mis cuentas from the snackbar of transfers
    #     And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
    #     And user select the account "828600361" from list of accounts Transferir a mis cuentas screen
    #     And user select option Hasta cuenta from Transferir a mis cuentas screen
    #     And user select the account "835735671" from list of Cuenta destino Transferir a mis cuentas screen
    #     And user enter amount "1" to transfer to a USD account on Transferir a mis cuentas
    #     And user continue with Transferir a mis cuentas
    #     And the user select the button Si, Transferir on the USD multicurrency transfer flow for Transferir a mis cuentas
    #     And user type token popular code for Transferir a mis cuentas
    #     And user select continuar on Token Popular screen for Transferir a mis cuentas
    #     Then the screen of Comprobante USD Multicurrency should displayed for Transferir a mis cuentas flow

    # @BUG
    # Scenario: As a BPD user, I want to transfer funds from Account A with USD currency to Account B with DOP currency, which are both owned by me
    # When the user open the option Transferir in the snackbar
    # And user select the option of Transferir entre mis cuentas from the snackbar of transfers
    # And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
    # And user select the account "835735671" from list of Cuenta destino Transferir a mis cuentas screen
    # And user select option Hasta cuenta from Transferir a mis cuentas screen
    # And user select the account "828600361" from list of accounts Transferir a mis cuentas screen
    # And user enter amount "1" to transfer to a DOP account on Transferir a mis cuentas
    # And user continue with Transferir a mis cuentas
    # And the user select the button Si, Transferir on the DOP multicurrency transfer flow for Transferir a mis cuentas
    # And user type token popular code for Transferir a mis cuentas
    # And user select continuar on Token Popular screen for Transferir a mis cuentas
    # Then the screen of Comprobante DOP Multicurrency should displayed for Transferir a mis cuentas flow


    Scenario: As a BPD user, I want to transfer funds from Account C to Account D, both owned by me, but I have insufficient funds in Account C
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of Transferir entre mis cuentas from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of accounts Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "1000000000" to transfer to a DOP account on Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        Then the modal with the title "Cuenta con fondos insuficientes" should displayed on Transferir a mis cuentas screen
        And the message "La cuenta origen no tiene balance disponible suficiente para realizar esta transacción, revisa el monto o selecciona otra cuenta." should be displayed on Transferir a mis cuentas screen


    Scenario: As a user, I want to verify that attempting a transaction exceeding the minimum limit from a DOP currency account to a DOP currency account prevents successful transfer between accounts, ensuring compliance with the minimum transaction limit.
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Entre mis cuentas" from burguer menu
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of accounts Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "0" to transfer to a DOP account on Transferir a mis cuentas
        Then the error message "El monto para transferir debe ser mayor a RD$0.01" should be displayed on Transferir a mis cuentas screen

# Scenario: As a user, I want to verify that attempting a transaction exceeding the minimum limit from a USD currency account to a DOP currency account prevents successful transfer between accounts, ensuring compliance with the minimum transaction limit.
# When the user tap the burger menu
# And user select "Transferir" from burguer menu
# And user select "Entre mis cuentas" from burguer menu
# And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
# And user select the account "837527159" from list of accounts Transferir a mis cuentas screen
# And user select option Hasta cuenta from Transferir a mis cuentas screen
# And user select the account "823259858" from list of Cuenta destino Transferir a mis cuentas screen
# And user enter amount "1" to transfer to a DOP account on Transferir a mis cuentas
# And user continue with Transferir a mis cuentas
# Then the message "Tu requerimiento no pudo ser completado. Por favor intenta más tarde." should be displayed on Transferir a mis cuentas screen
