
Feature: Pre login


  Scenario: I want to accept the permission required by the app, so that I can use the app
    When the user select Permitir on the Permission modal
    And user grant permissions
    Then the welcome carrousel should displayed


  Scenario: I want to have a welcome onboarding of the app, so that I can be aware of the features of the app
    Given the user select Permitir on the Permission modal
    And user grant permissions
    Then user complete the welcome onboarding of the app
  # Then the informative modal of Prelogin should displayed

  Scenario: I want to quickly access and check the latest exchange rates, so that I can efficiently manage and plan my international financial transactions with confidence
    Given the PreLogin is displayed
    When the user open the burger menu
    And the user tap on option "Tasa de cambio" from the burger menu
    Then the modal of Tasa de cambio should displayed


  Scenario: I can visualize the burger menu of Pre Login
    Given the PreLogin is displayed
    When the user open the burger menu
    Then the screen Qué deseas hacer is displayed

#   Scenario: I want to visualize the screen of A quien deseas contactar so that I am able to resolve any problems with a contact from the bank
#   Given the PreLogin is displayed
#   When the user tap the button Contactos, turnos y citas
#   Then the screen A quién deseas contactar is displayed

#  Scenario: I want to interact with the option Token Popular so that I can install my token popular
#   Given the PreLogin is displayed
#   When the user tap the button Token Popular
#   Then the screen Instalar Token Popular is displayed

#   Scenario: I want to interact with the option Más Transacciones so that I can visualize the extra transactions
#   Given the PreLogin is displayed
#   When the user tap the button Mas Transacciones
#   Then the screen with the text Qué deseas hacer is displayed