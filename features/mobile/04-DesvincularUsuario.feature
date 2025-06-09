
Feature: Desvincular usuario

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed


    Scenario Outline: I want to Desvincular my user so that I can login with another user
        When user select on profile avatar
        And user select "Salir" from user menu
        And the user open the burger menu after logout
        And user select the option Desvincular mi usuario
        And user select Desvincular from popup
        And user close the informative modal of pre login screen
        And the user tap the button Acceder in Prelogin screen
        And user login with username "peguero09" and "321321"
        Then the screen of Dashboard should displayed


    Scenario: I want to cancel the unlink of my user, so that I can login with the user link
        When user select on profile avatar
        And user select "Salir" from user menu
        And the user open the burger menu after logout
        And user select the option Desvincular mi usuario
        And user select Cancelar from popup
        And user tap the button Volver in Pre login burger menu
        And the user tap the button Acceder in Prelogin screen
        And user login with password "321321"
        Then the screen of Dashboard should displayed

