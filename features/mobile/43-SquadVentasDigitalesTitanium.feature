  @HappyPath @RegressionMAM @SquadVentasDigitales
Feature: SquadVentasDigitales_Titanium

  Background: User log into the app
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
 
  @Happypath @SquadVentasDigitales_Titanium@SquadVentasDigitales@SquadVentasDigitales
  Scenario: I want to check deep link Credit Card Titanium flow by selecting Titanium trublue cuenta
    Given In order to enter the Deeplink Credit Card Titanium flow screen, first click on the Titanium link
    And the user tap the button Acceder in Prelogin screen
    And user login with password "321321"
    When Validate Credit Card Titanium link is Open