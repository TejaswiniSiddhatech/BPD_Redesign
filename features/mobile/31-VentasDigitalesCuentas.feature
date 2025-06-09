@HappyPath @RegressionMAM @VentasDigitales
Feature: VentasDigitales_Cuentas

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed


    @Happypath @VentasDigitalesCuentas
    Scenario: I want to request digital sales accounts from the Burger Menu solicitud de productos.
        When the user tap the burger menu
        And user select Solicitar Productos from burguer menu
        And user select Solicitar Productos from Solicitud De Productos Submenu
        And user Select the digital account option from Solicitud De Productos
        And on the benefits screen select one of the orange buttons Abrir Cuenta.
        And On the T&C screen, select the T&C checkbox.
        And Select the Acepto button.
        And The user authentication screen is displayed,Enter the token number and then select the Continuar button.
        And On the receipt screen select the option Ir a mis productos.



    @Happypath @VentasDigitalesCuentas
    Scenario: I want to request digital sales accounts from the Dashboard Menu solicitud de productos.
        When user select Solicitar Productos from dashboard
        And user Select the digital account option from Solicitud De Productos
        And on the benefits screen select one of the orange buttons Abrir Cuenta.
        And On the T&C screen, select the T&C checkbox.
        And Select the Acepto button.
        And The user authentication screen is displayed,Enter the token number and then select the Continuar button.
        And On the receipt screen select the option Ir a mis productos.