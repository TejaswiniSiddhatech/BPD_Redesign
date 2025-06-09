
Feature: Quick balance

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed

    Scenario: I want to see my quick balance in the pre login, so that I can visualize the balance of my selected accounts
        Given user select on profile avatar
        And user select "Configurar" from user menu
        And user select Quick Balance from Configurar screen
        And user enable quick balance on Configurar vista rapida screen
        # And user choose the accounts "822298212" "799685086" to include in the quick balance
        And user choose the accounts "RD$" to include in the quick balance
        And user choose to save changes on Quick balance screen
        And user choose Ir a mis productos on Quick Balance screen
        And user select on profile avatar
        And user select "Salir" from user menu
        And user close the informative modal of pre login screen
        Then the view of Quick Balance should displayed on Pre login screen
        # And the accounts "822298212" "799685086" should displayed at Quick Balance view on Pre login screen
        And the account "RD$" should displayed at Quick Balance view on Pre login screen

    Scenario: I want to see my quick balance in the pre login, so that I can visualize the balance of one account
        Given user select on profile avatar
        And user select "Configurar" from user menu
        And user select Quick Balance from Configurar screen
        And user enable quick balance on Configurar vista rapida screen
        # And user choose the account "822298212" to include in the quick balance
        And user choose the account "RD$" to include in the quick balance
        And user choose to save changes on Quick balance screen
        And user choose Ir a mis productos on Quick Balance screen
        And user select on profile avatar
        And user select "Salir" from user menu
        And user close the informative modal of pre login screen
        Then the view of Quick Balance should displayed on Pre login screen
        # And the account "822298212" should displayed at Quick Balance view on Pre login screen
        And the account "RD$" should displayed at Quick Balance view on Pre login screen
