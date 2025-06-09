@HappyPath @RegressionMAM @SquadVentasDigitales
Feature: SquadVentasDigitales_ISITarjetas


  Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "derek" and "321321"
        Then the screen of Dashboard should displayed


        
    # @Happypath @SquadVentasDigitalesISITarjetas
    # Scenario: I want to cancel the Deeplink ISI credit card flow.
    #     Given In order to enter the Deeplink ISI Credit card flow screen, first click on the Tarjeta ISI link
    #   And the user tap the button Acceder in Prelogin screen
    #     And user login with password "321321"
    #     When Select Solicitar tarjeta Button from ISI Tarjetas
    #     And Press option Cancelar or Ir a mis productos when MCR flag is true or fail to go to dashboard and cancel flow




    @Happypath @SquadVentasDigitalesISITarjetas@SquadVentasDigitales
    Scenario: I want to check deep link ISI credit card flow for office branch
        Given In order to enter the Deeplink ISI Credit card flow screen, first click on the Tarjeta ISI link
         And the user tap the button Acceder in Prelogin screen
        And user login with password "321321"
        When Select Solicitar tarjeta Button from ISI Tarjetas
        # And Press Button Continuar to go to forword
    #     And On the province selection screen, select one of the options shown
    #     And In the pop-up that appears, select the Seleccionar sucursal option
    #     And On the form screen, select the province field and select the Distrito
    #     And On Seleccionar una sucursal page select a branch
    #     #And User enter employee code on verification
    #     # And Press hyperlink to open terms and condition pop up
    #     And Select and check the Terms and condition on Verification page
    #     And Select the Solicitar button form verification page
    #     Then Select the Ir a mis productos button



    # @Happypath @SquadVentasDigitalesISITarjetas
    # Scenario: I want to check deep link ISI credit card flow for Delivery Form
    #     Given In order to enter the Deeplink ISI Credit card flow screen, first click on the Tarjeta ISI link
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with password "321321"
    #     When Select Solicitar tarjeta Button from ISI Tarjetas
    #     And On the form screen, select the province field and select the Distrito Nacional
    #     And On the form screen, select the Municipio field and A value must be selected from a displayed list
    #     And On the form screen, select the Dist Municipar field and A value must be selected from a displayed list
    #     And On the form screen, select the Sector field and A value must be selected from a displayed list
    #     And In the field Calle must be filled with "<Calle>" information
    #     And In the field edificio must be filled with "<edificio>" information
    #     And In the field empresa must be filled with "<empresa>" information
    #     And In the field tel Contacto must enter "<contacto>" to be able to continue with the flow
    #     And Select the Siguiente button to continue with the flow
    #     And In the checkboxes select days and times
    #     And Select the Siguiente button
       
    #     And Select and check the Terms and condition on Verification page
    #     And Select the Solicitar button form verification page
    #     Then Select the Ir a mis productos button

    #          Examples:
    #         | EmailID | Code | Calle |edificio|empresa|contacto|
    #         | juanalmonte@gmail.com  | 1234567891 | Calle la bella damma  | La querida damma|La otra querida|987654321924|
