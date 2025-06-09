@LimitPerDay
Feature: Limit transaction per day

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        #And user login with username "lety18" and "321321"
        Then the screen of Dashboard should displayed



    Scenario: I want to verify that attempting multiple transactions exceeding the daily transaction limit prevents successful third party transfer, so that daily transaction limits are enforced effectively
        Given the user open the option Transferir in the snackbar
        And user select the option of "Terceros" from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        # And user select the account "799685086" from account list on Transferir a terceros screen
        And user select the account "678512294" from accounts list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        ##And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
        ##And user select the account "840588958" from account list on Transferir a terceros screen
        ##And user select option Selecciona un beneficiario from Transferir a terceros screen
        ##And user search the beneficiary "MELI" from beneficiary list on Transferir a terceros screen
        ##And user select the beneficiary "804500965" from beneficiary list on Transferir a terceros screen
        #And user enter an amount with DOP currency "100000" to transfer for Transferir a terceros
        And user enter an amount with DOP currency "1000" to transfers for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        And user select Realizar otra transferencia button on Transferir a terceros screen
        ###When user tap the option Cuentas de terceros from Transferir dropdown list
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        #And user select the account "822298212" from account list on Transferir a terceros screen
        ##And user select the account "840588958" from account list on Transferir a terceros screen
        ## And user select option Selecciona un beneficiario from Transferir a terceros screen
        ##And user search the beneficiary "MELI" from beneficiary list on Transferir a terceros screen
        ##And user select the beneficiary "804500965" from beneficiary list on Transferir a terceros screen
        ##And user enter an amount with DOP currency "1" to transfer for Transferir a terceros
        And user select the account "678512294" from accounts list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "1" to transfers for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        Then the message "Revisa el balance disponible de tu cuenta y tus últimas transacciones antes de reintentar esta transferencia. Para asistencia contáctanos vía Telebanco." should be display on a Transferir a terceros screen

    @exceedlimit
    Scenario: As a user, I want to verify that attempting a transaction exceeding the transaction limit prevents successful third party transfer, so that transaction limits are enforced effectively.
        When the user tap the burger menu
        And user tap on "Transferir" from burger menu
        And user tap the option Cuentas de terceros from Transferir dropdown list
        And user select option Selecciona tu cuenta from Transferir a terceros screen
        # And user select the account "765507868" from account list on Transferir a terceros screen
        ##And user select the account "840588958" from account list on Transferir a terceros screen
        ##And user select option Selecciona un beneficiario from Transferir a terceros screen
        ##And user search the beneficiary "MANU" from beneficiary list on Transferir a terceros screen
        ##And user select the beneficiary "MANU" from beneficiary list on Transferir a terceros screen
        And user select the account "678512294" from accounts list on Transferir a terceros screen
        And user select option Selecciona un beneficiario from Transferir a terceros screen
        And user search the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user select the beneficiary "ada karina" from beneficiary list on Transferir a terceros screen
        And user enter an amount with DOP currency "1000" to transfers for Transferir a terceros
        #And user enter an amount with DOP currency "1000001" to transfer for Transferir a terceros
        And user add a description "test" on Transferir a terceros screen
        And user continue with Transferir a terceros
        And user select Si, Transferir from Verificacion - Transferir a terceros screen
        And user type token popular code for Transferir a terceros
        And user select continuar on Token Popular screen for Transferir a terceros
        Then the message "Revisa el balance disponible de tu cuenta y tus últimas transacciones antes de reintentar esta transferencia. Para asistencia contáctanos vía Telebanco." should be display on a Transferir a terceros screen

    Scenario: As a BPD user, I want to verify that attempting multiple transactions exceeding the daily transaction limit prevents successful transfer between accounts, so that daily transaction limits are enforced effectively
        Given the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Entre mis cuentas" from burguer menu
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        ##And user select the account "Ahorros O Corriente - 822298212" from list of accounts Transferir a mis cuentas screen
        And user select the account "823259858" from list of account Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        ## And user select the account "Nómina - 840588958" from list of Cuenta destino Transferir a mis cuentas screen
        And user select the account "828600361" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "99999999" to transfer to a DOP accounts on a Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        And user select Ir a mis productos button on Transferir a mis cuentas screen
        When the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Entre mis cuentas" from burguer menu
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        ##And user select the account "Ahorros O Corriente - 822298212" from list of accounts Transferir a mis cuentas screen
        And user select the account "823259858" from list of account Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        ##And user select the account "Nómina - 799685086" from list of Cuenta destino Transferir a mis cuentas screen
        And user select the account "828600361" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "1" to transfer to a DOP accounts on a Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        Then the message "Revisa el balance disponible de tu cuenta y tus últimas transacciones antes de reintentar esta transferencia. Para asistencia contáctanos vía Telebanco." should be displayed on a Transferir a mis cuentas screen


    @exceedlimit
    Scenario: As a BPD user, I want to verify that attempting a transaction exceeding the transaction limit prevents successful transfer between accounts, so that transaction limits are enforced effectively.
        When the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Entre mis cuentas" from burguer menu
        And user select option Selecciona tu cuenta from Transferir a mis cuentas screen
        ##And user select the account "799685086" from list of accounts Transferir a mis cuentas screen
        And user select the account "823259858" from list of account Transferir a mis cuentas screen
        And user select option Hasta cuenta from Transferir a mis cuentas screen
        ##And user select the account "822298212" from list of Cuenta destino Transferir a mis cuentas screen
        And user select the account "828600361" from list of Cuenta destino Transferir a mis cuentas screen
        And user enter amount "100000000" to transfer to a DOP accounts on a Transferir a mis cuentas
        And user continue with Transferir a mis cuentas
        And user select Si, Transferir from Verificacion - Transferir a mis cuentas screen
        And user type token popular code for Transferir a mis cuentas
        And user select continuar on Token Popular screen for Transferir a mis cuentas
        Then the message "Revisa el balance disponible de tu cuenta y tus últimas transacciones antes de reintentar esta transferencia. Para asistencia contáctanos vía Telebanco." should be displayed on a Transferir a mis cuentas screen


    Scenario: As a BPD user, I want to verify that attempting multiple transactions exceeding the daily transaction limit prevents successful express transfer, so that daily transaction limits are enforced effectively
        Given the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Expresos" from burguer menu
        And user select option Selecciona tu cuenta from Transferir Expresos screen
        ##And user select the account "Ahorros O Corriente - 822298212" from account list on Transferir Expresos screen
        And user select the account "823259858" from accounts list on Transferir Expresos screen
        And user enter account number "837527159" of Beneficiario in Transferir Expresos screen
        And user enter an amount with DOP currency "20000" to transfers for a Transferir Expresos
        And user continue with Transferir Expresos
        And user select Si, Transferir from Verificacion without description - Transferir Expresos screen
        And user type token popular code for Transferir Expresos
        And user select validar token popular on Token Popular screen for Transferir Expresos
        And user select Realizar otra transferencia button on Transferir Expresos screen
        When user select option Selecciona tu cuenta from Transferir Expresos screen
        ##And user select the account "Ahorros O Corriente - 822298212" from account list on Transferir Expresos screen
        And user select the account "823259858" from accounts list on Transferir Expresos screen
        And user enter account number "837527159" of Beneficiario in Transferir Expresos screen
        And user enter an amount with DOP currency "1" to transfers for a Transferir Expresos
        And user enter a description "test" for Transferir Expresos
        And user continue with Transferir Expresos
        And user select Si, Transferir from Verificacion - Transferir Expresos screen
        And user type token popular code for Transferir Expresos
        And user select validar token popular on Token Popular screen for Transferir Expresos
        Then the body of the error message "Revisa el balance disponible de tu cuenta y tus últimas transacciones antes de reintentar esta transferencia. Para asistencia contáctanos vía Telebanco." should be displayed on Transferir Expresos screen

    @exceedlimit
    Scenario: As a BPD user, I want to verify that attempting a transaction exceeding the transaction limit prevents successful express transfer, so that transaction limits are enforced effectively.
        When the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Expresos" from burguer menu
        And user select option Selecciona tu cuenta from Transferir Expresos screen
        ## And user select the account "765507868" from account list on Transferir Expresos screen
        And user select the account "823259858" from accounts list on Transferir Expresos screen
        And user enter account number "837527159" of Beneficiario in Transferir Expresos screen
        And user enter an amount with DOP currency "21000" to transfers for a Transferir Expresos
        And user enter a description "test" for Transferir Expresos
        And user continue with Transferir Expresos
        And user select Si, Transferir from Verificacion - Transferir Expresos screen
        And user type token popular code for Transferir Expresos
        And user select validar token popular on Token Popular screen for Transferir Expresos
        Then the body of the error message "Revisa el balance disponible de tu cuenta y tus últimas transacciones antes de reintentar esta transferencia. Para asistencia contáctanos vía Telebanco." should be displayed on Transferir Expresos screen
