
Feature: Transferencias

  #  Background: User log into the app
  #    Given the PreLogin is displayed
  #    And the user tap the button Acceder in Prelogin screen
  #    And user login with username "michellebrown" and "321321"
  #    Then the screen of Dashboard should displayed


  @Transferencias @TransferirAOtrosBancos @RegressionCL_UAT
  Scenario Outline: Burger menu - Otros bancos - "<checkbox>" - No migrado
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
    And the user tap the burger menu
    And user tap on Transferir from burger menu
    And user choose the option "Otros bancos"
    When user select account "RD$", beneficiary "cta prima Manuela" on Transferir a otros bancos screen
    And user input "5" on Transferir a otros bancos screen
    And user select checkbox "<checkbox>" on Transferir a otros bancos screen
    And user add a description "descripcion" on Transferir a otros bancos screen
    And user continue with Transferir a otros bancos
    And user select Si, Transferir from Verificacion - Transferir a otros bancos screen
    And user type token popular code for Transfer other banks
    And user select continuar on Token Popular screen for Transfer other banks
    Then the screen of Comprobante for Transferir a otros bancos should displayed

    Examples:
      | checkbox               |
      | ACH                    |
      | Pagos al instante BCRD |


  @Transferencias @TransferirAOtrosBancos @RegressionCL_UAT
  Scenario Outline: Shortcut dashboard - Otros bancos - "<checkbox>" - No migrado
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
    When the user open the option Transferir in the snackbar
    And user choose the option "Otros bancos"
    When user select account "RD$", beneficiary "cta prima Manuela" on Transferir a otros bancos screen
    And user input "5" on Transferir a otros bancos screen
    And user select checkbox "<checkbox>" on Transferir a otros bancos screen
    And user add a description "descripcion" on Transferir a otros bancos screen
    And user continue with Transferir a otros bancos
    And user select Si, Transferir from Verificacion - Transferir a otros bancos screen
    And user type token popular code for Transfer other banks
    And user select continuar on Token Popular screen for Transfer other banks
    Then the screen of Comprobante for Transferir a otros bancos should displayed

    Examples:
      | checkbox               |
      | ACH                    |
      | Pagos al instante BCRD |


  @Transferencias @TransferirAOtrosBancos @RegressionCL_UAT
  Scenario Outline: Shortcut cuentas - Otros bancos - "<checkbox>" - No migrado
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    When user select a "Ahorros o Corriente" account
    When the user open the option Transferir in the snackbar
    And user choose the option "Otros bancos"
    When beneficiary "cta prima Manuela" on Transferir a otros bancos screen
    And user input "5" on Transferir a otros bancos screen
    And user select checkbox "<checkbox>" on Transferir a otros bancos screen
    And user add a description "descripcion" on Transferir a otros bancos screen
    And user continue with Transferir a otros bancos
    And user select Si, Transferir from Verificacion - Transferir a otros bancos screen
    And user type token popular code for Transfer other banks
    And user select continuar on Token Popular screen for Transfer other banks
    Then the screen of Comprobante for Transferir a otros bancos should displayed

    Examples:
      | checkbox               |
      | ACH                    |
      | Pagos al instante BCRD |


  @Transferencias @TransferirAOtrosBancos @RegressionCL_UAT
  Scenario Outline: Burger menu - Otros bancos - "<checkbox>" Realizar otra transferencia - No migrado
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
    And the user tap the burger menu
    And user tap on Transferir from burger menu
    And user choose the option "Otros bancos"
    When user select account "RD$", beneficiary "cta prima Manuela" on Transferir a otros bancos screen
    And user input "5" on Transferir a otros bancos screen
    And user select checkbox "<checkbox>" on Transferir a otros bancos screen
    And user add a description "descripcion" on Transferir a otros bancos screen
    And user continue with Transferir a otros bancos
    And user select Si, Transferir from Verificacion - Transferir a otros bancos screen
    And user type token popular code for Transfer other banks
    And user select continuar on Token Popular screen for Transfer other banks
    And user select Realizar otra transferencia button on Transferir a otros bancos screen
    When user select account "RD$", beneficiary "cta prima Manuela" on Transferir a otros bancos screen
    And user input "5" on Transferir a otros bancos screen
    And user select checkbox "<checkbox>" on Transferir a otros bancos screen
    And user add a description "descripcion" on Transferir a otros bancos screen
    And user continue with Transferir a otros bancos
    And user select Si, Transferir from Verificacion - Transferir a otros bancos screen
    And user type token popular code for Transfer other banks
    And user select continuar on Token Popular screen for Transfer other banks
    Then the screen of Comprobante for Transferir a otros bancos should displayed

    Examples:
      | checkbox               |
      | ACH                    |
      | Pagos al instante BCRD |


  #Escenario migrado.
  #  @RegressionCL_UAT
  #  Scenario Outline: Burger menu - Otros bancos - "<checkbox>" - Migrado
  #   Given the PreLogin is displayed
  #   And the user tap the button Acceder in Prelogin screen
  #   And user login with username "yaya" and "Banco321"
  #   Then the screen of Dashboard should displayed
  #   And the user tap the burger menu
  #   And user tap on Transferir from burger menu
  #   And user choose the option "Otros bancos"
  #   When user select account "RD$", beneficiary "cta prima Manuela" on Transferir a otros bancos screen
  #   And user input "5" on Transferir a otros bancos screen
  #   And user select checkbox "<checkbox>" on Transferir a otros bancos screen
  #   And user add a description "descripcion" on Transferir a otros bancos screen
  #   And user continue with Transferir a otros bancos
  #   And user select Si, Transferir from Verificacion - Transferir a otros bancos screen
  #   And user type token popular code for Transfer other banks
  #   And user select continuar on Token Popular screen for Transfer other banks
  #   Then the screen of Comprobante for Transferir a otros bancos should displayed

  #    Examples:
  #      | checkbox               |
  #      | ACH                    |
  #      | Pagos al instante BCRD |

  Scenario: I can make transferer by a otros bancos via "ACH" without description
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
    And the user tap the burger menu
    And user tap on Transferir from burger menu
    And user choose the option "Otros bancos"
    When user select account "RD$", beneficiary "cta prima Manuela" on Transferir a otros bancos screen
    And user input "5" on Transferir a otros bancos screen
    And user select checkbox "ACH" on Transferir a otros bancos screen
    And user continue with Transferir a otros bancos
    And user select Si, Transferir from Verificacion - Transferir a otros bancos screen
    And user type token popular code for Transfer other banks
    And user select continuar on Token Popular screen for Transfer other banks
    Then the screen of Comprobante for Transferir a otros bancos should displayed


  Scenario: I can make transferer by a otros bancos via "ACH", but I have insufficient funds
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
    And the user tap the burger menu
    And user tap on Transferir from burger menu
    And user choose the option "Otros bancos"
    When user select account "RD$", beneficiary "cta prima Manuela" on Transferir a otros bancos screen
    And user input "10000000000000" on Transferir a otros bancos screen
    And user select checkbox "ACH" on Transferir a otros bancos screen
    And user continue with Transferir a otros bancos
    Then user should see a message that written there isn't sufficient funds

  Scenario: I want to make a transfer to other banks less than RD$0.01 to see a message of the minimum possible amount
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed
    And the user tap the burger menu
    And user tap on Transferir from burger menu
    And user choose the option "Otros bancos"
    When user select account "RD$", beneficiary "cta prima Manuela" on Transferir a otros bancos screen
    And user input "0.001" on Transferir a otros bancos screen
    Then user should see a message that says the amount must be greater than RD$0.01

# PENDIENTE PARA DESARROLLO
# Scenario: I want to make transfer to otros bancos of an account of type RD$ to a beneficiary of type $ to see a message that the account and beneficiary should be the same coin
# And the user tap the burger menu
# And user tap on Transferir from burger menu
# And user choose the option "Otros bancos"
# When user select account "822298212", beneficiary "BHD USD" on Transferir a otros bancos screen
# And user input "50" on Transferir a otros bancos screen
# And user select checkbox "ACH" on Transferir a otros bancos screen
# And user continue with Transferir a otros bancos
# Then user should see a message that written there isn't sufficient funds


