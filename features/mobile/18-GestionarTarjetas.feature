
Feature: Gestionar tarjetas

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        #  And user login with username "vero1148" and "321321"
        Then the screen of Dashboard should displayed



   
    Scenario: As a BPD user I manage the restriction of use of my credit card
        When the user tap the burger menu
        And user tap on "Gestionar tarjetas" from burger menu
        And user select first credit card to configure on Gestionar Tarjetas screen
        And user select an option to manage "Configurar restricciones de usos" on Gestionar Tarjetas screen
        And user Verify Configurar restricciones page

    
    # Scenario: As a BPD user I manage my adicionals credit cards
    #     When the user tap the burger menu
    #     And user tap on "Gestionar tarjetas" from burger menu
    #     And user select first credit card to configure on Gestionar Tarjetas screen
    #     And user select an option to manage "Gestionar tarjetas adicionales" on Gestionar Tarjetas screen

    
    Scenario: As a BPD user I see a modal when selecting the option Gestionar tarjetas adicionales and I don't have any aditional credit cards
        When the user tap the burger menu
        And user select "Gestionar tarjetas" from burguer menu
        And user select first credit card to configure on Gestionar Tarjetas screen
        And user select an option to manage "Consultar adicionales" on Gestionar Tarjetas screen
        Then the informative message should displayed on Gestionar Tarjetas screen

   
    Scenario: As a BPD user I change payment and cut-off date
        When the user tap the burger menu
        And user tap on "Gestionar tarjetas" from burger menu
        And user select first credit card to configure on Gestionar Tarjetas screen
        And user select an option to manage "Cambiar fecha de pago y corte" on Gestionar Tarjetas screen
        And user Verify Cambiar fecha de pago y corte page



