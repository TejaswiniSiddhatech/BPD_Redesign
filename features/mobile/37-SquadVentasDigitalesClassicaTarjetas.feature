@HappyPath @RegressionMAM @SquadVentasDigitales
Feature: SquadVentasDigitales_ClásicaTarjetas

  Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "derek" and "321321"
        Then the screen of Dashboard should displayed


    # @Happypath @SquadVentasDigitalesClásicaTarjetas
    # Scenario: I want to cancel the Deeplink Classic credit card flow.
    #     Given In order to enter the Deeplink Tarjeta Clásica flow screen, first click on the Tarjeta Clásica link
    #  And the user tap the button Acceder in Prelogin screen
    #     And user login with password "321321"
    #     When Select Ver Mas Detalle Button
    #     And Press option Cancelar or Ir a mis productos when MCR flag is true or fail to go to dashboard and cancel flow
    # #Then the screen of Dashboard should displayed



    # @Happypath @SquadVentasDigitalesTarjetas
    # Scenario: As BPD User, I can Automatize Deeplink Classic Credit Card flow From Burger Menu
    #     When In order to enter the Deeplink Tarjeta Clásica flow screen, first click on the Tarjeta Clásica link
    #     And Press button Solicitar Tarjeta
    #     And Press Button Continuar to go to forword
    #     And Press option ir a mis productos to cancel flow and go to dashboard when MCR flag is System fail
    # Then the screen of Dashboard should displayed



    @Happypath @SquadVentasDigitalesClásicaTarjetas @SquadVentasDigitales
    Scenario: I want to check deep link classic credit card flow for office branch
        Given In order to enter the Deeplink Tarjeta Clásica flow screen, first click on the Tarjeta Clásica link
        And the user tap the button Acceder in Prelogin screen
        And user login with password "321321" 
        When Select Solicitar tarjeta Button from JetBlue Tarjetas Classica
        # And Press Button Continuar to go to forword
    #     And On the card selection screen, select one of the cards displayed on the screen
    #     And On the province selection screen, select one of the options shown
    #     And In the pop-up that appears, select the Seleccionar sucursal option
    #     And On the form screen, select the province field and select the Distrito
    #     And On Seleccionar una sucursal page select a branch
    #     And User enter employee code on verification page
    #     And Select and check the Terms and condition on Verification page
    #     And Select the Solicitar button form verification page
    #     Then Select the Ir a mis productos button



    #  @Happypath @SquadVentasDigitalesClásicaTarjetas
    # Scenario: I want to check deep link classic credit card flow for Delivery Form
    #     Given In order to enter the Deeplink Tarjeta Clásica flow screen, first click on the Tarjeta Clásica link
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with password "321321"
    #     When Select Solicitar tarjeta Button from JetBlue Tarjetas Classica
    #     And On the card selection screen, select one of the cards displayed on the screen
    #     And On the form screen, select the province field and select the Distrito Nacional
    #     And On the form screen, select the Municipio field and A value must be selected from a displayed list
    #     And On the form screen, select the Dist Municipar field and A value must be selected from a displayed list
    #     And On the form screen, select the Sector field and A value must be selected from a displayed list
    #     And In the field Calle must be filled with information
    #     And In the field edificio must be filled with information
    #     And In the field empresa must be filled with information
    #     And In the field tel Contacto must enter to be able to continue with the flow
    #     And Select the Siguiente button to continue with the flow
    #     And In the checkboxes select days and times
    #     And select the Codigo referidor box and enter the employee code
    #     And Select the Siguiente button
    #     And Select and check the Terms and condition on Verification page
    #     And Select the Solicitar button form verification page
    #     Then Select the Ir a mis productos button
