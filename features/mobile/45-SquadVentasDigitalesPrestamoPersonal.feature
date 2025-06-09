 
@HappyPath @RegressionMAM @SquadVentasDigitales
Feature: SquadVentasDigitales_Prestamo_Personal
 
  Background: User log into the app
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
 
  @Happypath @SquadVentasDigitalesPlusCCS@SquadVentasDigitales
  Scenario: I want to check deep link Prestamo Personal loan request flow : with amount less than 100k
    Given In order to enter the Deeplink Prestamo Personal loan request flow screen, first click on the Prestamo Personal link
    And the user tap the button Acceder in Prelogin screen
    And user login with password "321321"
    Then validate user is on Prestamos_Personales Page and Validate Solicitar tarjeta Button