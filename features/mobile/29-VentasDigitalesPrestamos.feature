@HappyPath, @RegressionMAM, @VentasDigitales
Feature: VentasDigitales_PrestamoPersonal

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed



    @Happypath @VentasDigitalesPrestamoPersonal
    Scenario: I want to request a digital sales loan request: with amount less than 100k from the product request in the Burger menu
        When the user tap the burger menu
        And user select Solicitar Productos from burguer menu
        And user select Solicitar Productos from Solicitud De Productos Submenu
        And user select the Prestamos Option from Solicitud De Productos
         And user select the Ver mas button,In the  Prestamo Personal box
        And User select the Solicitar Prestamo button, On the benefits screen
        And On the calculator screen, select the field and enter an amount "<Amount>"
        And In the plazo wheel, select a desired Plazo
        And Select the Solicitar button
        And Select an account number
        And Select the Siguiente button
        And Select the Codigo Referido field
        And User Enter a employee code
        And Select the Terms and Conditions check-box
        And select the Acepto button
        And Enter the token code, and then select the Continuar button
        Then On the receipt screen, select the Ir a mis productos button to end the flow
     Examples:
            | Amount  | button|
            | 50000  | PROCEDER |

    @Happypath @VentasDigitalesPrestamoPersonal
    Scenario: I want to request a digital sales loan request: with amount greater than 100k from the product request in the Burger menu
        When the user tap the burger menu
        And user select Solicitar Productos from burguer menu
        And user select Solicitar Productos from Solicitud De Productos Submenu
        And user select the Prestamos Option from Solicitud De Productos
        And user select the Ver mas button,In the  Prestamo Personal box
        And User select the Solicitar Prestamo button, On the benefits screen
        # And On the calculator screen, select the field and enter an amount
        And On the calculator screen, select the field and enter an amount "<Amount>"
       And handled Pop up Si deseas un monto mayor a
        And Select one of the displayed rates
         And In the plazo wheel, select a desired Plazo
        And Select the Solicitar button
        And Select an account number
        And Select the Siguiente button
        And Select the Codigo Referido field
        And User Enter a employee code
        And Select the Terms and Conditions check-box
        And select the Acepto button
        # And Enter the token code, and then select the Continuar button
        Then On the receipt screen, select the Ir a mis productos button to end the flow
        Examples:
            | Amount  | button|
            | 1000000  | PROCEDER |


    @Happypath @VentasDigitalesPrestamoPersonal
    Scenario: I want to request a digital sales loan request: with amount less than 100k from the product request in the dashboard menu
      When the user tap the burger menu
        And user select Solicitar Productos from burguer menu
        And user select Solicitar Productos from Solicitud De Productos Submenu
        And user select the Prestamos Option from Solicitud De Productos
        And user select the Ver mas button,In the  Prestamo Personal box
        And User select the Solicitar Prestamo button, On the benefits screen
        And On the calculator screen, select the field and enter an amount "<Amount>"
        And In the plazo wheel, select a desired Plazo
        And Select the Solicitar button
        And Select an account number
        And Select the Siguiente button
        And Select the Codigo Referido field
        And User Enter a employee code
        And Select the Terms and Conditions check-box
        And select the Acepto button
        And Enter the token code, and then select the Continuar button
        Then On the receipt screen, select the Ir a mis productos button to end the flow
     Examples:
            | Amount  | button|
            | 50000  | PROCEDER |

    @Happypath @VentasDigitalesPrestamoPersonal
    Scenario: I want to request a digital sales loan request: with amount greater than 100k from the product request in the dashboard menu
        When user select Solicitar Productos from dashboard
        And user select the Prestamos Option from Solicitud De Productos
        And user select the Ver mas button,In the  Prestamo Personal box
        And User select the Solicitar Prestamo button, On the benefits screen
        And On the calculator screen, select the field and enter an amount "<Amount>"
        And handled Pop up Si deseas un monto mayor a
        And Select one of the displayed rates
        And In the plazo wheel, select a desired Plazo
        And Select the Solicitar button
        And Select an account number
        And Select the Siguiente button
        And Select the Codigo Referido field
        And User Enter a employee code
        And Select the Terms and Conditions check-box
        And select the Acepto button
        # And Enter the token code, and then select the Continuar button
        Then On the receipt screen, select the Ir a mis productos button to end the flow
           Examples:
            | Amount  | button|
            | 50000  | PROCEDER |