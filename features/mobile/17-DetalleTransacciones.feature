
Feature: Detalle de transacciones


    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed

    
    Scenario Outline: I want to see the detail of my transaction on my "<typeAccount>" account
        When user select a "<typeAccount>" account
        And user drag the history on the detail of the account
        And user select the first transaction on the detail of the account
        Then the screen of Transacciones should displayed
        And the amount should be the same as displayed at the last trasactions of the account

        Examples:
            | typeAccount |
            | 823145776   |