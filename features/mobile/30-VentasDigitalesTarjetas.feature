@HappyPath @RegressionMAM @VentasDigitales
Feature: VentasDigitales_Tarjetas

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed



    @Happypath @VentasDigitalesTarjetas
    Scenario: I want to request digital sales Request for tarjeta From product request burger Menu.
        When the user tap the burger menu
        And user select Solicitar Productos from burguer menu
        And user select Solicitar Productos from Solicitud De Productos Submenu
        And user Select the Tarjeta option from Solicitud De Productos
        And On the income screen, select the income field and enter an amount
        And User Select the benefits field and radio Button presented on the screen.
        And User Select a name want to give to card
        And User Select the Siguiente button to continue with the flow
        And On the card selection screen, select one of the cards displayed and then press the La quiero button
        And On the form screen, select the province field and select the Distrito Nacional
        And On the form screen, select the Municipio field and A value must be selected from a displayed list
        And On the form screen, select the Dist Municipar field and A value must be selected from a displayed list
        And On the form screen, select the Sector field and A value must be selected from a displayed list
        And In the field Calle must be filled with information
        And In the field edificio must be filled with information
        And In the field empresa must be filled with information
        And In the field tel Contacto must enter to be able to continue with the flow
        And Select the Siguiente button to continue with the flow
        And In the checkboxes select days and times
        And select the Codigo referidor box and enter the employee code
        And Select the Siguiente button
        And Select and check the Terms and condition on Verification page
        And Select the Solicitar button
        Then Select the Ir a mis productos button



    @Happypath @VentasDigitalesTarjetas
    Scenario:I want to request digital sales Request for tarjeta From product request Dashboard Menu.
        When user select Solicitar Productos from dashboard
        And user Select the Tarjeta option from Solicitud De Productos
        And On the income screen, select the income field and enter an amount
        And User Select the benefits field and radio Button presented on the screen.
        And User Select a name want to give to card
        And User Select the Siguiente button to continue with the flow
        And On the card selection screen, select one of the cards displayed and then press the La quiero button
        And On the form screen, select the province field and select the Distrito Nacional
        And On the form screen, select the Municipio field and A value must be selected from a displayed list
        And On the form screen, select the Dist Municipar field and A value must be selected from a displayed list
        And On the form screen, select the Sector field and A value must be selected from a displayed list
        And In the field Calle must be filled with information
        And In the field edificio must be filled with information
        And In the field empresa must be filled with information
        And In the field tel Contacto must enter to be able to continue with the flow
        And Select the Siguiente button to continue with the flow
        And In the checkboxes select days and times
        And select the Codigo referidor box and enter the employee code
        And Select the Siguiente button
        And Select and check the Terms and condition on Verification page
        And Select the Solicitar button
        Then Select the Ir a mis productos button


      Scenario: I want to request digital sales Request for tarjeta From product request Burger Menu using province other than "Distrito nacional" 
        When the user tap the burger menu
        And user select Solicitar Productos from burguer menu
        And user select Solicitar Productos from Solicitud De Productos Submenu
        And user Select the Tarjeta option from Solicitud De Productos
        And On the income screen, select the income field and enter an amount
        And User Select the benefits field and radio Button presented on the screen.
        And User Select a name want to give to card
        And User Select the Siguiente button to continue with the flow
        And On the card selection screen, select one of the cards displayed and then press the La quiero button
        And In the displayed list select a province other than Distrito nacional "<province>"
        And In the pop-up that appears, select the "<option>" 
        And On the province selection screen, select a branch from options shown
        # And In the checkboxes select days and times
        And select the Codigo referidor box and enter the employee code
        And Select the Siguiente button
        And Select and check the Terms and condition on Verification page
        And Select the Solicitar button
        Then Select the Ir a mis productos button
  
        Examples:
            |  province | option |  |
            | BARAHONA  | Seleccionar sucursal  | Value 3  |

        Scenario: I want to request digital sales Request for tarjeta From product request Dashboard using province other than "Distrito nacional" 
        When user select Solicitar Productos from dashboard
        And user Select the Tarjeta option from Solicitud De Productos
        And On the income screen, select the income field and enter an amount
        And User Select the benefits field and radio Button presented on the screen.
        And User Select a name want to give to card
        And User Select the Siguiente button to continue with the flow
        And On the card selection screen, select one of the cards displayed and then press the La quiero button
        And In the displayed list select a province other than Distrito nacional "<province>"
        And In the pop-up that appears, select the "<option>" 
        And On the province selection screen, select a branch from options shown
        # And In the checkboxes select days and times
        And select the Codigo referidor box and enter the employee code
        And Select the Siguiente button
        And Select and check the Terms and condition on Verification page
        And Select the Solicitar button
        Then Select the Ir a mis productos button
    

        Examples:
            |  province | option |  |
            | BARAHONA  | Seleccionar sucursal  | Value 3  |