#Todavia no se finaliza debido a falla en el servicio

Feature: Pagos

    #Background: User log into the app
    #Given the PreLogin is displayed
    #And the user tap the button Acceder in Prelogin screen
    #And user login with username "michellebrown" and "321321"
    #Then the screen of Dashboard should displayed


    @Pagos @PagosProductos @CodigoCash @RegressionCL_UAT
    Scenario: Burger menu - Codigo Cash - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Código cash" from burger menu
        And user select Generar codigo on Codigo cash screen
        And user select Selecciona from Desde cuenta option on Codigo cash screen
        And user select first account from account list on Codigo cash screen
        And user enter Cedula del beneficiario "02500255712" on Generar codigo - Codigo cash screen
        And user select Continuar on Generar codigo - Codigo cash screen
        And user select Continuar on Verificacion - Codigo cash screen
        And user type code of token popular on Codigo cash - Token Popular screen
        And user select button Continuar on Codigo cash - Token Popular screen
        Then the screen of Comprobante for CodigoCash should displayed



    @Pagos @PagosProductos @CodigoCash @RegressionCL_UAT
    Scenario: Shortcut cuentas - Codigo Cash - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        When user select a "Ahorros o Corriente" account
        # When the user open the option CodigoCash in the snackbar
        And User Select Codigo cash from dashboard cuenta
        And user select Generar codigo on Codigo cash screen
        And user select Selecciona from Desde cuenta option on Codigo cash screen
        And user select first account from account list on Codigo cash screen
        And user enter Cedula del beneficiario "02500255712" on Generar codigo - Codigo cash screen
        And user select Continuar on Generar codigo - Codigo cash screen
        And user select Continuar on Verificacion - Codigo cash screen
        And user type code of token popular on Codigo cash - Token Popular screen
        And user select button Continuar on Codigo cash - Token Popular screen
        Then the screen of Comprobante for CodigoCash should displayed


   @Pagos @PagosProductos @CodigoCash @RegressionCL_UAT
    Scenario: Shortcut dashboard - Codigo Cash - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option CodigoCash in the snackbar
        And user select Generar codigo on Codigo cash screen
        And user select Selecciona from Desde cuenta option on Codigo cash screen
        And user select first account from account list on Codigo cash screen
        And user enter Cedula del beneficiario "02500255712" on Generar codigo - Codigo cash screen
        And user select Continuar on Generar codigo - Codigo cash screen
        And user select Continuar on Verificacion - Codigo cash screen
        And user type code of token popular on Codigo cash - Token Popular screen
        And user select button Continuar on Codigo cash - Token Popular screen
        Then the screen of Comprobante for CodigoCash should displayed