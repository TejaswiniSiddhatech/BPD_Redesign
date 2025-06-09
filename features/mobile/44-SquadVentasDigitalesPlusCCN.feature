@HappyPath @RegressionMAM @SquadVentasDigitales
Feature: SquadVentasDigitales_PlusCCN
 
  Background: User log into the app
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
 
  @Happypath @SquadVentasDigitalesPlusCCS@SquadVentasDigitales
  Scenario: I want to check deep link Plus CCN credit card flow by selecting PLUS CCN 
    Given In order to enter the Deeplink Plus CCN Credit card flow screen, first click on the Tarjeta Plus CCN link
    And the user tap the button Acceder in Prelogin screen
    And user login with password "321321"
    Then user is on PLUS CCN Page
    When Select Solicitar tarjeta Button from Plus CCN Tarjetas