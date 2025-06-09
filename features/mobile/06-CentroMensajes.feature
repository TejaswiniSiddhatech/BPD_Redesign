
Feature: Centro de mensajes

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        # And user login with username "michellebrown" and "321321"
        And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed


  
    Scenario: I want to visualize my message center
        When user select on profile avatar
        And user select "Centro de mensajes" from user menu
        Then the screen of centro de mensajes should displayed

    # Scenario: Visualizar mensajes recibidos
    # Given user select on profile avatar
    # And user select Centro de mensajes from menu
    # When user select "Recibidos" from toggle menu
    # Then

    # Scenario: Visualizar mensajes archivados
    # Given user select on profile avatar
    # And user select Centro de mensajes from menu
    # When user select "Archivados" from toggle menu
    # Then

  
    Scenario: I want to view my received messages when I don't have any message so that I can validate the information message
        Given user select on profile avatar
        And user select "Centro de mensajes" from user menu
        When user select the toggle menu
        And user select "Recibidos" from toggle menu
        Then screen with message "No tienes mensajes ni ofertas disponibles." should be displayed

 
    Scenario: I want to view my archived messages when I don't have any message so that I can validate the information message
        Given user select on profile avatar
        And user select "Centro de mensajes" from user menu
        When user select the toggle menu
        And user select "Archivados" from toggle menu
        Then screen with message "No tienes mensajes archivados" should be displayed
