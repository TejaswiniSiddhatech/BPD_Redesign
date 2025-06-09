@ServiciosReclamaciones @NoRediseñado
Feature: Servicios Reclamaciones

 Background: User log into the app
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "stheisis22 " and "321321"
 

    @ServiciosReclamaciones
    Scenario: As a BPD user, I want to verify the Solicitar cartas flow for Consular
    When the user tap the burger menu
    And user tap on "Servicios y reclamaciones" from burger menu
    And user tap on "Solicitar cartas" from burger menu
    And user tap on Solicitar cartas "Consular" option
    And user gets the popup to ensure Passport and email update
    And user enter "SR13434" Passport number on Solicitar cartas page for Consular flow
    And user select the city address"Consulado de Antigua y Barbuda"
    And user tapped on Checbox selected from Cambio fecha de pago Page
    And user verify los datos screen 

    Scenario: As a BPD user, I want to verify the Solicitar cartas flow for Referencia
    When the user tap the burger menu
    And user tap on "Servicios y reclamaciones" from burger menu
    And user tap on "Solicitar cartas" from burger menu
    And user tap on Solicitar cartas "Referencia" option
    And user enter "130156311" Passport number on Solicitar cartas page for Referencia flow
    And user tapped on Checbox selected from Cambio fecha de pago Page
    And user verify los datos screen 
   

   Scenario Outline: As a BPS user, I want to check the credit card balance and  paid information in details in Saldo de tarjeta de credito flow
   When the user tap the burger menu
   And user tap on "Servicios y reclamaciones" from burger menu
   And user tap on "Solicitar cartas" from burger menu
   And user tap on Solicitar cartas "Saldo de tarjeta de crédito" option
   And user gets Credit card paid and cancelled is required popups

   Scenario Outline: As a BPS user, I want to check the Loan information in details for Saldo de prestamo flow
   When the user tap the burger menu
   And user tap on "Servicios y reclamaciones" from burger menu
   And user tap on "Solicitar cartas" from burger menu
   And user tap on Solicitar cartas "Saldo de préstamo" option
   And user select account on Solicitar cartas page for Prestamo flow
   And user verify los datos screen 