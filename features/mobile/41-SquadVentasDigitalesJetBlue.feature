@HappyPath @RegressionMAM @SquadVentasDigitales
Feature: SquadVentasDigitales_JetBlueTarjetas

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed

    # @Happypath @SquadVentasDigitalesJetBlueTarjetas
    # Scenario: I want to cancel the Deeplink JetBlue credit card flow.
    #     Given In order to enter the Deeplink JetBlue Credit card flow screen, first click on the Tarjeta JetBlue link
    #     # And the PreLogin is displayed
    #     And the user tap the button Acceder in Prelogin screen
    #       And user login with password "321321"
    #     When Select Ver Mas Detalle Button from JetBlue Tarjetas
    #     And Press option Cancelar or Ir a mis productos when MCR flag is true or fail to go to dashboard and cancel flow


    @Happypath @SquadVentasDigitalesJetBlueTarjetas@SquadVentasDigitales
    Scenario: I want to check deep link JetBlue credit card flow by selecting jetblue trublue cuenta "Si",for office branch
        Given In order to enter the Deeplink JetBlue Credit card flow screen, first click on the Tarjeta JetBlue link
       And the user tap the button Acceder in Prelogin screen
        And user login with password "321321"
        When Select Solicitar tarjeta Button from JetBlue Tarjetas
    #     # And Press Button Continuar to go to forword
    #     And Select Radio Button Si to verify email and trueblue code
    #    And Fill the textbox with email "<EmailID>" in Correo electrinico field
    #     # And Fill the textbox with email in Correo electrinico field
    #     And Fill the textbox with "<Code>" trueblue code
    #     And Press the siguente button for jetblue trublue cuenta page
    #     And On the province selection screen, select one of the options shown
    #     And In the pop-up that appears, select the Seleccionar sucursal option
    #     And On the form screen, select the province field and select the Distrito
    #     And On Seleccionar una sucursal page select a branch
    #     #And User enter employee code on verification
    #     # And Press hyperlink to open terms and condition pop up
    #     And Select and check the Terms and condition on Verification page
    #     And Select the Solicitar button form verification page
    #     Then Select the Ir a mis productos button
    #     Examples:
    #         | EmailID | Code |
    #         | juanalmonte@gmail.com  | 1234567891 | 


    # @Happypath @SquadVentasDigitalesJetBlueTarjetas
    # Scenario: I want to check deep link JetBlue credit card flow by selecting jetblue trublue cuenta "No",for office branch
    #     Given In order to enter the Deeplink JetBlue Credit card flow screen, first click on the Tarjeta JetBlue link
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with password "321321"
    #     # And user login with username "levandy" and "321321"
    #     When Select Ver Mas Detalle Button from JetBlue Tarjetas
    #     # And Press Button Continuar to go to forword
    #     And Select Radio Button No to verify only email
    #     And Fill the textbox with email "<EmailID>" in Correo electrinico field
    #     #  And Fill the textbox with "<Code>" trueblue code
    #     And Press the siguente button for jetblue trublue cuenta page
    #     And On the province selection screen, select one of the options shown
    #     And In the pop-up that appears, select the Seleccionar sucursal option
    #     And On the form screen, select the province field and select the Distrito
    #     And On Seleccionar una sucursal page select a branch
    #     #And User enter employee code on verification
    #     # And Press hyperlink to open terms and condition pop up
    #     And Select and check the Terms and condition on Verification page
    #     And Select the Solicitar button form verification page
    #     Then Select the Ir a mis productos button
    #   Examples:
    #         | EmailID | Code |
    #         | juanalmonte@gmail.com  | 1234567891 | 


    # @Happypath @SquadVentasDigitalesJetBlueTarjetas
    # Scenario: I want to check deep link JeBlue credit card flow by selecting jetblue trublue cuenta "Si", for Delivery Form
    #     Given In order to enter the Deeplink JetBlue Credit card flow screen, first click on the Tarjeta JetBlue link
    #        And the user tap the button Acceder in Prelogin screen
    #     And user login with password "321321"
    #     # And user login with username "levandy" and "321321"
    #     When Select Ver Mas Detalle Button from JetBlue Tarjetas
    #     And Select Radio Button Si to verify email and trueblue code
    #     And Fill the textbox with email "<EmailID>" in Correo electrinico field
    #     And Fill the textbox with "<Code>" trueblue code
    #     And Press the siguente button for jetblue trublue cuenta page
    #     And On the form screen, select the province field and select the Distrito Nacional
    #     And On the form screen, select the Municipio field and A value must be selected from a displayed list
    #     And On the form screen, select the Dist Municipar field and A value must be selected from a displayed list
    #     And On the form screen, select the Sector field and A value must be selected from a displayed list
    #     # And In the field Calle must be filled with information
    #     # And In the field Calle must be filled with "<calle>" information
    #     And In the field Calle must be filled with information
    #     #  And In the field edificio must be filled with "<Edificio>" information
    #     And In the field edificio must be filled with information
    #     # And In the field empresa must be filled with "<empressa>" information
    #     And In the field empresa must be filled with information
    #     # And In the field tel Contacto must enter "<Contacto>" to be able to continue with the flow
    #     And In the field tel Contacto must enter to be able to continue with the flow
    #     And Select the Siguiente button to continue with the flow
    #     And In the checkboxes select days and times
    #     # And select the Codigo referidor box and enter the employee code
    #     And Select the Siguiente button
    #     #And Press hyperlink to open terms and condition pop up
    #     And Select and check the Terms and condition on Verification page
    #     And Select the Solicitar button form verification page
    #     Then Select the Ir a mis productos button
    #   Examples:
    #         | EmailID | Code |empressa|Edificio | calle| Contacto|
    #         | juanalmonte@gmail.com  | 1234567891 | La otra querida|La queIn order to enter the Deeplink JetBlue Credit card flow screen, first click on the Tarjeta JetBlue linkida damma| Calle la bella damma|987654321924|
            




    # @Happypath @SquadVentasDigitalesJetBlueTarjetas
    # # Scenario: I want to check deep link JeBlue credit card flow by selecting jetblue trublue cuenta "No", for Delivery Form
    #      Scenario:  I want to check deep link JeBlue credit card flow by selecting jetblue trublue cuenta "No", for Delivery Form
    #     Given In order to enter the Deeplink JetBlue Credit card flow screen, first click on the Tarjeta JetBlue link
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with password "321321"
    #     When Select Solicitar tarjeta Button from JetBlue Tarjetas
    #     And Select Radio Button No to verify only email
    #     And Fill the textbox with email "<EmailID>" in Correo electrinico field
    #     And Press the siguente button for jetblue trublue cuenta page
    #     And On the form screen, select the province field and select the Distrito Nacional
    #     And On the form screen, select the Municipio field and A value must be selected from a displayed list
    #     And On the form screen, select the Dist Municipar field and A value must be selected from a displayed list
    #     And On the form screen, select the Sector field and A value must be selected from a displayed list
    #     # And In the field Calle must be filled with "<calle>" information
    #     And In the field Calle must be filled with information
    #     #  And In the field edificio must be filled with "<Edificio>" information
    #     And In the field edificio must be filled with information
    #     # And In the field empresa must be filled with "<empressa>" information
    #     And In the field empresa must be filled with information
    #     # And In the field tel Contacto must enter "<Contacto>" to be able to continue with the flow
    #     And In the field tel Contacto must enter to be able to continue with the flow
    #     And Select the Siguiente button to continue with the flow
    #     And In the checkboxes select days and times
    #     # And select the Codigo referidor box and enter the employee code
    #     And Select the Siguiente button
    #     #And Press hyperlink to open terms and condition pop up
    #     And Select and check the Terms and condition on Verification page
    #     And Select the Solicitar button form verification page
    #     Then Select the Ir a mis productos button

    #    Examples:
    #         | EmailID | Code |empressa|Edificio | calle| Contacto|
    #         | juanalmonte@gmail.com  | 1234567891 | La otra querida|La queIn order to enter the Deeplink JetBlue Credit card flow screen, first click on the Tarjeta JetBlue linkida damma| Calle la bella damma|987654321924|
            

