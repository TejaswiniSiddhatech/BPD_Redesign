
Feature: Mi Perfil

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "lety18" and "321321"
        Then the screen of Dashboard should displayed




    Scenario: I access into Mi Perfil
        When user select on profile avatar
        And user select "Mi Perfil" from user menu
        Then the screen Mi perfil should displayed
        And user Actualizar datos modal on Mi perfil screen
        And user select Cerrar on Actualizar tus datos modal on Mi perfil screen
        And the screen Mi perfil should displayed
        And the user should Go Back From Mi perfil screen
        Then the screen of Dashboard should displayed
