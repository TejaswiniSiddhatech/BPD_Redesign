
Feature: Pagos

    #Background: User log into the app
    #Given the PreLogin is displayed
    #And the user tap the button Acceder in Prelogin screen
    #And user login with username "michellebrown" and "321321"
    #Then the screen of Dashboard should displayed


    @Pagos @PagosTarjetas @AvanceEfectivo @RegressionCL_UAT
    Scenario: Burger menu - Avance de efectivo - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap the option Avance de efectivo
        And user tap desde tarjeta search
        And user select a credit card from list
        And user tap hasta cuenta search
        And user select an account from list
        And user type an amount "1"
        And user continue with avance de efectivo
        And user select Continuar on verificacion screen
        And user type token popular code
        And user select continuar on Token Popular screen
        Then the screen Comprobante should displayed


    @Pagos @PagosTarjetas @AvanceEfectivo @RegressionCL_UAT
    Scenario: Shortcut tarjeta - Avance de efectivo - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When Select Tarjetas Account From Tarjetas Menu Dashboard
        And user tap the option Avance de efectivo from dashboard Tarjeta
        # And user tap desde tarjeta search
        # And user select a credit card from list
        And user tap hasta cuenta search
        And user select an account from list
        And user type an amount "1"
        And user continue with avance de efectivo
        And user select Continuar on verificacion screen
        And user type token popular code
        And user select continuar on Token Popular screen
        Then the screen Comprobante should displayed