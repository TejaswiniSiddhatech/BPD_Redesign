@filterCalendar @allScenarios @RegressionMAM
Feature: Filtro de historial de transacciones con calendario

  Background: User log into the app
     Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed



  Scenario Outline: I want to see the transactions of <optionDate>
    And user login with username "michellebrown" and "321321"
    And user select a "Ahorro" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    When user apply filter of "<optionDate>"
    Then user should see the transactions of "<optionDate>"

    Examples:
      | optionDate      |
      | Últimos 30 días |
      | Últimos 60 días |
      | Últimos 90 días |

  Scenario: I want to see a message that I do not have transactions
    # And user login with username "peguero09" and "321321"
    And user login with username "michellebrown" and "321321"
    And user select a "Tarjeta de Crédito Local" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    When user apply filter of "Últimos 30 días"
    Then user should see that the account has no transactions

  Scenario: I want to see transactions from day 1 of 2 months ago to the actual day
    And user login with username "michellebrown" and "321321"
    And user select a "Ahorro" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    When user selects the date range from "1" 2 months ago to actual day
    Then user should see the transactions from "1" to actual day


  Scenario: I want to see a message that I do not have transactions from day 28 of 1 month ago to the actual day
    # And user login with username "peguero09" and "321321"
    And user login with username "michellebrown" and "321321"
    And user select a "Tarjeta de Crédito Local" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    When user selects the date range from "28" 1 month ago to actual day
    Then user should see that the account has no transactions



  Scenario Outline: I want to see the transactions of <optionTypeTransaction>
    And user login with username "michellebrown" and "321321"
    And user select a "Ahorro" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    And user select filter "Últimos 90 días"
    When user apply filter of "<optionTypeTransaction>"
    Then user should see the transactions of "<optionTypeTransaction>"

    Examples:
      | optionTypeTransaction |
      | Entradas              |
      | Salidas               |

  Scenario: I want to see the transactions that is in the range from 100 to 200
    And user login with username "michellebrown" and "321321"
    And user select a "Ahorro" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    And user select filter "Últimos 60 días"
    When user input "100" and "200"
    Then user should see the transactions from "100" to "200" pesos



  Scenario: I can't input in smaller amount in the field Hasta than in the field Desde
    And user login with username "michellebrown" and "321321"
    And user select a "Ahorro" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    When user input "300" and "100"
    Then user should see a message that the range is invalid

  Scenario: I want to see a message that I don't have transactions in a range of amount
    And user login with username "michellebrown" and "321321"
    And user select a "Ahorro" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    When user input "600" and "900"
    Then user should see that the account has no transactions in a range of amount

  Scenario Outline: I want to reset my filters <condition>
    And user login with username "michellebrown" and "321321"
    And user select a "Ahorro" account
    And user drag the history on the detail of the account
    And user tap on icon filter
    And user tap in any filter
    When user restart filters "<condition>"
    Then user should see that there isn't any filter applied
    Examples:
      | condition      |
      | before applied |
      | after applied  |

