
Feature: Consultar Cuentas

    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"

    Scenario: I want to check my savings account balance, so that I can keep track of my financial savings
        When user select a "Ahorro" account
        Then the basic screen of saving account balance should displayed
        And the balance of the account should be the same as displayed at the dashboard


    Scenario:  I want to check my "Cuenta Corriente" balance, so that I can monitor my financial transactions
        When user select a "Ahorros o Corriente" account
        Then the basic screen of cuenta corriente balance should displayed
        And the balance of the account should be the same as displayed at the dashboard

    Scenario: I want to consult my loan details, so that I can access information about my current loan status and repayment terms
        When user select a "Préstamo" loan account
        Then the detail screen of loan account balance should displayed
        And the balance of the loan account should be the same as displayed at the dashboard

# Scenario: I want to check my "Certificado" balance, so that I can monitor my financial transactions
# When user select a "CERTIFICADO" account
# Then the basic screen of certificado account balance should displayed
#And the balance of the account should be the same as displayed at the dashboard

# Scenario Outline: I check my account when I didn't make any transaction balance, so that I can see a message displayed
# When user select an account number "<numberAccount>"
# Then the message "message" should displayed on detail account screen

# Examples:
# |   numberAccount   |
# |   201210201021    |