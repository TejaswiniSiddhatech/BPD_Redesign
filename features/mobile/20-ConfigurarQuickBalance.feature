
Feature: Configurar quick balance

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed


    # Done
    Scenario: I want to configure my quick balance, so that I can view the balance of my products before login
        When user select on profile avatar
        And user select "Configurar" from user menu
        And user select Quick Balance from Configurar screen
        And user enable quick balance on Configurar vista rapida screen
        And user choose the accounts "RD$" to include in the quick balance
        And user choose to save changes on Quick balance screen
        And user choose Ir a mis productos on Quick Balance screen
        And user select on profile avatar
        And user select "Salir" from user menu
        Then the view of Quick Balance should displayed on Pre login screen
        And the account "RD$" should displayed at Quick Balance view on Pre login screen

    # Done
    Scenario: I want to go to my products after configure my quick balance, so that I can continue with any other operation
        When user select on profile avatar
        And user select "Configurar" from user menu
        And user select Quick Balance from Configurar screen
        And user enable quick balance on Configurar vista rapida screen
        And user choose the accounts "RD$" to include in the quick balance
        And user choose to save changes on Quick balance screen
        And user choose Ir a mis productos on Quick Balance screen
        Then the screen of Dashboard should displayed

    ##nuevo escenario
    ## Pendiente a automatizar porque esta con issue, no aparece la vista donde indica que los cambios fueorn exitosos
    # Scenario: I want to disable my quick balance, so that I can choose not to see the balance of any account before log into the app
    # Given user select on profile avatar
    # And user select "Configurar" from user menu
    # And user select Quick Balance from Configurar screen
    # And user enable quick balance on Configurar vista rapida screen
    # And user choose the accounts "725580179" "726133333" to include in the quick balance
    # And user choose to save changes on Quick balance screen
    # And user choose Ir a mis productos on Quick Balance screen
    # When user select on profile avatar
    # And user select "Configurar" from user menu
    # And user select Quick Balance from Configurar screen
    # And user disable quick balance on Configurar vista rapida screen
    # And user choose to save changes on Quick balance screen
    # And user choose Ir a mis productos on Quick Balance screen
    # And user select on profile avatar
    # And user select Salir from menu
    # # Then the PreLogin is displayed

    # Done
    Scenario: I want to discard unsaved changes on my quick balance and exit, so that I can ensure that the modifications are not saved
        Given user select on profile avatar
        And user select "Configurar" from user menu
        And user select Quick Balance from Configurar screen
        And user enable quick balance on Configurar vista rapida screen
        And user choose the accounts "RD$" to include in the quick balance
        And user choose to save changes on Quick balance screen
        And user choose Ir a mis productos on Quick Balance screen
        Then the screen of Dashboard should displayed
        Given user select on profile avatar
        And user select "Configurar" from user menu
        And user select Quick Balance from Configurar screen
        And user should see that the accounts were not included in the quick balance

    # Done
    Scenario: I want to choose one account on my quick balance configuration, so that I can view the account on my quick balance view
        When user select on profile avatar
        And user select "Configurar" from user menu
        And user select Quick Balance from Configurar screen
        And user enable quick balance on Configurar vista rapida screen
        And user choose the accounts "RD$" to include in the quick balance
        And user choose to save changes on Quick balance screen
        And user choose Ir a mis productos on Quick Balance screen
        And user select on profile avatar
        And user select "Salir" from user menu
        Then the view of Quick Balance should displayed on Pre login screen
        And the account "RD$" should displayed at Quick Balance view on Pre login screen


    Scenario: I want to validate that I only choose accounts for my quick balance
        Given user select on profile avatar
        And user select "Configurar" from user menu
        And user select Quick Balance from Configurar screen
        And user enable quick balance on Configurar vista rapida screen
        And user choose the accounts "RD$" to include in the quick balance
        # Then the other accounts are deactivated
        Then the account should be selected

