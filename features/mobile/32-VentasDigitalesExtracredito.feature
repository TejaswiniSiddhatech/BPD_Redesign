@HappyPath, @RegressionMAM, @VentasDigitales
Feature: VentasDigitales_Extracredito

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed


    @Happypath @VentasDigitalesExtracredito
    Scenario: I want to request digital sales Request for extra credit From product request Burger Menu.
        When the user tap the burger menu
        And user select Solicitar Productos from burguer menu
        And user select Solicitar Productos from Solicitud De Productos Submenu
        And user select the Prestamos Option from Solicitud De Productos
        And user select the Ver mas button,In the Extracredito box
        # And User select the Solicitar Prestamo button, On the benefits screen
        And User select the Solicitar Extracredito button, On the benefits screen
        # And On the calculator screen, select the field and enter an amount
        And On the calculator screen, select the field and enter an amount "<amount1>"
        And User Select the second field and enter an amount "<amount2>"
        And In the plazo wheel, select a desired Plazo
        And Select the Solicitar button
        And Select an account number
        And Select the Siguiente button
        And Select the Codigo Referido field.
        And User Enter a employee code for extracredito
        # And Select the Terms and Conditions check-box.
        # And select the Acepto button.
        # # And Enter the token code, and then select the Continuar button
        # Then On the receipt screen, select the Ir a mis productos button to end the flow.
    Examples:
        | amount1| amount2 | Header 3 |
        | 100000  | 10000 | Value 3  |



    # @Happypath @VentasDigitalesExtracredito
    # Scenario: I want to request digital sales Request for extra credit From product request Dashboard Menu.
    #     When user select Solicitar Productos from dashboard
    #     And user select the Prestamos Option from Solicitud De Productos
    #     And user select the Ver mas button,In the Extracredito box
    #     And User select the Solicitar Prestamo button, On the benefits screen
    #     # And User select the Solicitar Extracredito button, On the benefits screen
    #     And On the calculator screen, select the first field and enter an amount
    #     # And User Select the second field and enter an amount
    #     And In the plazo wheel, select a desired Plazo
    #     And Select the Solicitar button.
    #     # And Select an account number
    #     And Select the Siguiente button
    #     And Select the Codigo Referido field.
    #     And User Enter a employee code for extracredito
    #     And Select the Terms and Conditions check-box.
    #     And select the Acepto button.
    #     # And Enter the token code, and then select the Continuar button
    #     Then On the receipt screen, select the Ir a mis productos button to end the flow.
