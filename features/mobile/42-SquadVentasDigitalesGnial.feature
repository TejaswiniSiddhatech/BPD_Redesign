@HappyPath @RegressionMAM @SquadVentasDigitales
Feature: SquadVentasDigitales_GnialTarjetas
 
  Background: User log into the app
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
 
  @Happypath @SquadVentasDigitalesGnialTarjetas@SquadVentasDigitales
  Scenario: I want to check deep link Gnial credit card flow by selecting Ginial trublue cuenta "Si",for office branch
    Given In order to enter the Deeplink Gnial Credit card flow screen, first click on the Tarjeta Gnial link
    And the user tap the button Acceder in Prelogin screen
    And user login with password "321321"
    When Select Solicitar tarjeta Button from Gnial Tarjetas
        #   And On the form screen, select the province field and select the Distrito Nacional
        # And On the form screen, select the Municipio field and A value must be selected from a displayed list
        # And On the form screen, select the Dist Municipar field and A value must be selected from a displayed list
        # And On the form screen, select the Sector field and A value must be selected from a displayed list
        # And In the field Calle must be filled with "<Calle>" information
        # And In the field edificio must be filled with "<edificio>" information
        # And In the field empresa must be filled with "<empresa>" information
        # And In the field tel Contacto must enter "<contacto>" to be able to continue with the flow
        # And Select the Siguiente button to continue with the flow
        # And In the checkboxes select days and times
        # And Select the Siguiente button
        # And Select and check the Terms and condition on Verification page
        # And Select the Solicitar button form verification page
        # Then Select the Ir a mis productos button

        #      Examples:
        #     | EmailID | Code | Calle |edificio|empresa|contacto|
        #     | juanalmonte@gmail.com  | 1234567891 | Calle la bella damma  | La querida damma|La otra querida|987654321924|
