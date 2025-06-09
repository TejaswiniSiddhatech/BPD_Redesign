
Feature: Transferencias

    #    Background: User log into the app
    #        Given the PreLogin is displayed
    #        And the user tap the button Acceder in Prelogin screen
    #        And user login with username "michellebrown" and "321321"
    #        Then the screen of Dashboard should displayed


    @Transferencias @TransferirCuentasTerceros @RegressionCL_UAT
    Scenario: Burger menu - Transferir terceros - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Transferir" from burger menu
        And user tap the option Cuentas de terceros from Transferir dropdown list
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "RD" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "RD" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        Then the screen of Comprobante for Transferir a terceros should displayed

    @Transferencias @TransferirCuentasTerceros @RegressionCL_UAT
    Scenario: Shortcut Cuentas - Transferir terceros - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        When user select a "Ahorros o Corriente" account
        And user tap on "Transferir" from burger menu
        And user tap the option Cuentas de terceros from Transferir dropdown list
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "RD" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "RD" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        Then the screen of Comprobante for Transferir a terceros should displayed

    @Transferencias @TransferirCuentasTerceros @RegressionCL_UAT
    Scenario: Burger Menu - Transferir terceros - Realizar otra transferencia - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Terceros" from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "10" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        And user select Realizar otra transferencia button on Transferir a terceros screen
        Then the screen of Transferir Cuentas de terceros should displayed
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "10" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        Then the screen of Comprobante for Transferir a terceros should displayed

    #   @RegressionCL_UAT
    #    Scenario: Burger menu - Terceros - Migrado
    #    	Given the PreLogin is displayed
    #        And the user tap the button Acceder in Prelogin screen
    #        And user login with username "yaya" and "Banco321"
    #        Then the screen of Dashboard should displayed
    #        When the user tap the burger menu
    #       And user tap on "Transferir" from burger menu
    #        And user tap the option Cuentas de terceros from Transferir dropdown list
    #        And user select option Selecciona tu cuenta from Transferir a terceros screen
    #        And user select the account "RD$" from account list on Transferir a terceros screen
    #        And user select option Selecciona un beneficiario from Transferir a terceros screen
    #        And user search the beneficiary "RD" from beneficiary list on Transferir a terceros screen
    #        And user select the beneficiary "RD" from beneficiary list on Transferir a terceros screen
    #        And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
    #        And user add a description "test" on Transferir a terceros screen
    #        And user continue with Transferir a terceros
    #        And user select Si, Transferir from Verificacion - Transferir a terceros screen
    #        And user type token popular code for Transferir a terceros
    #        And user select continuar on Token Popular screen for Transferir a terceros
    #        Then the screen of Comprobante for Transferir a terceros should displayed


    @Transferencias @TransferirCuentasTerceros @RegressionCL_UAT
    Scenario: Shorcut dashboard - Transferir terceros - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Terceros" from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "RD" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "RD" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        Then the screen of Comprobante for Transferir a terceros should displayed

    #   @RegressionCL_UAT
    #    Scenario: Shortcut dashboard - Terceros - Migrado
    #    	Given the PreLogin is displayed
    #        And the user tap the button Acceder in Prelogin screen
    #        And user login with username "yaya" and "Banco321"
    #        Then the screen of Dashboard should displayed
    #        When the user open the option Transferir in the snackbar
    #        And user select the option of "Terceros" from the snackbar of transfers
    #        And user select option Selecciona tu cuenta from Transferir a terceros screen
    #        And user select the account "RD$" from account list on Transferir a terceros screen
    #        And user select option Selecciona un beneficiario from Transferir a terceros screen
    #        And user search the beneficiary "RD" from beneficiary list on Transferir a terceros screen
    #        And user select the beneficiary "RD" from beneficiary list on Transferir a terceros screen
    #        And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
    #        And user add a description "test" on Transferir a terceros screen
    #        And user continue with Transferir a terceros
    #        And user select Si, Transferir from Verificacion - Transferir a terceros screen
    #        And user type token popular code for Transferir a terceros
    #        And user select continuar on Token Popular screen for Transferir a terceros
    #        Then the screen of Comprobante for Transferir a terceros should displayed


    Scenario: I can make transferer by Cuentas de terceros without entering any description
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Terceros" from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
        And user continue with Transferir a terceros without description
        And user select Si, Transferir from Verificacion without description - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        Then the screen of Comprobante for Transferir a terceros without description should displayed

    # Scenario: I want to third party transfer to a beneficiary with USD currency from a DOP account
    # When the user open the option Transferir in the snackbar
    # And user select the option of "Terceros" from the snackbar of transfers
    # And user select option Selecciona tu cuenta from Transferir a terceros screen
    # And user select the account "RD$" from account list on Transferir a terceros screen
    # And user select option Selecciona un beneficiario from Transferir a terceros screen
    # And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
    # And user enter an amount with USD currency "1" to transfer for Transferir a terceros
    # And user enter a description "test" for Transferir a terceros
    # And user continue with Transferir a terceros
    # And the user select the button Si, Transferir on the USD multicurrency transfer flow for Transferir a terceros
    # And user type token popular code for Transferir a terceros
    # And user select continuar on Token Popular screen for Transferir a terceros
    # Then the screen of Comprobante USD Multicurrency should displayed for Transferir a terceros flow

    # Scenario: I want to third party transfer funds to a beneficiary with DOP currency from a USD account
    # When the user open the option Transferir in the snackbar
    # And user select the option of "Expresos" from the snackbar of transfers
    # And user select option Selecciona tu cuenta from Transferir a terceros screen
    # And user select the account "Savings - 835735671" from account list on Transferir a terceros screen
    # And user select option Selecciona un beneficiario from Transferir a terceros screen
    # And user select the beneficiary "111111" from beneficiary list on Transferir a terceros screen
    # And user enter an amount with DOP currency "10" to transfer for Transferir a terceros
    # And user enter a description "test" for Transferir a terceros
    # And user continue with Transferir a terceros
    # And the user select the button Si, Transferir on the DOP multicurrency transfer flow for Transferir a terceros
    # And user type token popular code for Transferir a terceros
    # And user select continuar on Token Popular screen for Transferir a terceros
    # Then the screen of Comprobante DOP Multicurrency should displayed for Transferir a terceros flow

    Scenario: I want to third party transfer funds, but I have insufficient funds
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Transferir" from burger menu
        And user tap the option Cuentas de terceros from Transferir dropdown list
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "2000000000" to transfer for Transferir a terceros
        And user continue with Transferir a terceros
        Then the modal with the title "Cuenta con fondos insuficientes" should displayed on Transferir a terceros screen
        And the message "La cuenta origen no tiene balance disponible suficiente para realizar esta transacción, revisa el monto o selecciona otra cuenta." should be displayed on Transferir a terceros screen

    Scenario: I want to have an option to add a new beneficiary when I'm searching for a beneficiary on my transaction
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Transferir" from burger menu
        And user tap the option Cuentas de terceros from Transferir dropdown list
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user select the button Agregar nuevo beneficiario on search beneficiary screen
        And user select the button Si, Salir on popup benificiary screen
        Then the screen of Beneficiarios should displayed

    Scenario: I want to stay on my third party transfer after selecting Add new beneficiary, so that I remain on the current transaction
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Transferir" from burger menu
        And user tap the option Cuentas de terceros from Transferir dropdown list
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user select the button Agregar nuevo beneficiario on search beneficiary screen
        And user select the button Volver on popup beneficiary screen
        Then the screen of select beneficiary should displayed

    Scenario: I want to go to my products after I made a successful third party transfer
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Terceros" from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        And user select Ir a mis productos button on Transferir a terceros screen
        Then the screen of Dashboard should displayed


    Scenario: I want to have an option to make another third party transfer after I made a successful third party transfer
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Terceros" from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "10" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        And user select Realizar otra transferencia button on Transferir a terceros screen
        Then the screen of Transferir Cuentas de terceros should displayed

    Scenario: I want to verify that attempting a transaction exceeding the minimum limit from a DOP currency account to a DOP currency beneficiary prevents successful third party transfer, ensuring compliance with the minimum transaction limit.
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "ambiorixparra" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Transferir" from burger menu
        And user tap the option Cuentas de terceros from Transferir dropdown list
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "0" to transfer for Transferir a terceros
        Then the error message "El monto para transferir debe ser mayor a RD$0.01" should displayed on Transferir a terceros screen
