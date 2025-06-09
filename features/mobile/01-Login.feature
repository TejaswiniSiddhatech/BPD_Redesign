
Feature: Acceso Cliente 
  This is the main screen when the app is opened for the first time, or when user is not loged in.

  @AccesoCliente @Login @RegressionCL_UAT
  Scenario Outline: Login inicial (Usuario/Contraseña) - No migrado
    Given the PreLogin is displayed
    When the user tap the button Acceder in Prelogin screen
    And user login with username "<username>" and "<password>"
    Then the screen of Dashboard should displayed

    Examples:
      | username      | password |
      | michellebrown | 321321   |

  # @RegressionCL_UAT
  # Scenario Outline: Login inicial (Usuario/Contraseña) - Migrado
  #   Given the PreLogin is displayed
  #   When the user tap the button Acceder in Prelogin screen
  #   And user login with username "<username>" and "<password>"
  #   Then the screen of Dashboard should displayed

  #  Examples:
  #    | username      | password |
  #    | yaya | Banco321   |

  
  Scenario Outline: I don't want to login using invalid credentials <username> and <password> so I see a message that written that my incorrect credentials
    Given the PreLogin is displayed
    When the user tap the button Acceder in Prelogin screen
    And user login with invalid credentials username "<username>" and "<password>"
    Then user should see a message that written my credentials are incorrect

    Examples:
      | username      | password  |
      | wrongUser     | 321321    |
      | michellebrown | wrongPass |

  #falta probar y valdiar si son 3 o 4

  # Scenario: I want to block my user after I try 3 times log in with invalid credentials
  #   Given the PreLogin is displayed
  #   And the user tap the button Acceder in Prelogin screen
  #   When user login 3 times with invalid credentials username "mayobnx" and "wrongPass"
  #   # And user login with username "elsaserranovargas" and "321321"
  #   Then user's username has been blocked

  
  Scenario: I want to log in but my username is blocked
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    When user login with username "marvin" and "321321"
    Then user should a message that say username has been blocked

  Scenario: I want to log in after my current session has expired
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    When user does not interact with the application for 5 minutes
    And user login with expired session with password only "321321"
    Then the screen of Dashboard should displayed

