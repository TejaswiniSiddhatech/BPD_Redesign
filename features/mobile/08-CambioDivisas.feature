
Feature: Cambio de divisas


    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed



    Scenario: I want to exchange my currency so that I purchase the currency that I need
        When the user tap the burger menu
        And user tap the option Cambio de divisas
        And user tap the option Entre mis cuentas from Cambio de divisas dropdown list
        And user select an account from desde cuenta option
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        # And user select an account from CD list
        And user select a destination account from hasta cuenta option
        # And user select a destination account from CD list
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user type amount "10" to transfer
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        Then the screen of Comprobante for Transferir a mis cuentas should displayed


    Scenario: Validar Cambiar Divias Entre mis cuentas pantalla de Verificacion
        When the user tap the burger menu
        And user tap the option Cambio de divisas
        And user tap the option Entre mis cuentas from Cambio de divisas dropdown list
        And user select an account from desde cuenta option
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        # And user select an account from CD list
        And user select a destination account from hasta cuenta option
        # And user select a destination account from CD list
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        And user type amount "10" to transfer
        And user continue with Transferir a mis cuentas
        Then the screen Verificacion should displayed


    Scenario: Validar Cambiar Divias Entre mis cuentas pantalla de Token Popular
        When the user tap the burger menu
        And user tap the option Cambio de divisas
        And user tap the option Entre mis cuentas from Cambio de divisas dropdown list
        And user select an account from desde cuenta option
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        # And user select an account from CD list
        And user select a destination account from hasta cuenta option
        And user select the account "RD$" from list of Cuenta destino Transferir a mis cuentas screen
        # And user select a destination account from CD list
        And user type amount "10" to transfer
        And user continue with Transferir a mis cuentas
        And user select button Si, transferir on Verification screen
        Then the screen Token Popular should displayed



    Scenario: Validar Cambiar Divias Terceros pantalla de Comprobante
        When the user tap the burger menu
        And user tap the option Cambio de divisas
        And user tap the option Terceros from Cambio de divisas dropdown list
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



    Scenario: Validar Cambiar Divias Terceros pantalla de Token Popular
        When the user tap the burger menu
        And user tap the option Cambio de divisas
        And user tap the option Terceros from Cambio de divisas dropdown list
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        And user select the account "RD$" from account list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "RD" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "RD" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        Then the screen Token Popular should displayed