
Feature: Pagar recurrentes a tarjetas de cred.

  Background: User log into the app
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    # And user login with username "rnbichara" and "321321"
    # And user login with username "jordyaponte" and "321321"
    Then the screen of Dashboard should displayed



  Scenario: As a BPD user I schedule the payment of a credit card "Pago mínimo" as payment type and "Al corte" as payment date
    When the user tap the burger menu
    And user select "Pagar" from burguer menu
    And user select "Recurrente a tarjetas" from burguer menu
    And user select the first credit card from Selecciona las tarjetas on Pagos recurrentes a tarjetas screen
    And user select Tipo de pago "Pago mínimo" on Pagos recurrentes a tarjetas screen
    And user select Fecha de pago "Al corte" on Pagos recurrentes a tarjetas screen
    And user continue with Programar pago recurrente a tarjeta
    And user select Selecciona from Selecciona la cuenta option on Pagos recurrentes a tarjetas screen
    And user select the first account from account list on Pagos recurrentes a tarjetas screen
    And user select Siguiente on Selecciona Cuenta - Pagos recurrentes a tarjetas screen
    And user tap on checkbox from Terminos y condiciones on Verificacion - Pagos recurrentes a tarjetas screen
    And user select Acepto on Verificacion - Pagos recurrentes a tarjetas screen