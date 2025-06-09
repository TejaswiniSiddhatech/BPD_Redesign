
Feature: Transferencias

    # Background: User log into the app
    #     Given the PreLogin is displayed
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with username "michellebrown" and "321321"
    #     Then the screen of Dashboard should displayed

    @Transferencias @TransferirExpresos @RegressionCL_UAT
    Scenario: Burger menu - Transferir Expresos - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Expresos" from burguer menu
        And user select option Selecciona tu cuenta from Transferir Expresos screen
        And user select the account "RD$" from account list on Transferir Expresos screen
        And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
        And user enter an amount with DOP currency "1" to transfer for Transferir Expresos
        And user enter a description "test" for Transferir Expresos
        And user continue with Transferir Expresos
        And user select Si, Transferir from Verificacion - Transferir Expresos screen
        And user type token popular code for Transferir Expresos
        And user select validar token popular on Token Popular screen for Transferir Expresos
        Then the screen of Comprobante for Transferir Expresos should displayed

    #    @RegressionCL_UAT
    #    Scenario: Burger menu - Expresos - Migrado
    #        Given the PreLogin is displayed
    #        And the user tap the button Acceder in Prelogin screen
    #        And user login with username "yaya" and "Banco321"
    #        Then the screen of Dashboard should displayed
    #        When the user tap the burger menu
    #        And user select "Transferir" from burguer menu
    #        And user select "Expresos" from burguer menu
    #        And user select option Selecciona tu cuenta from Transferir Expresos screen
    #        And user select the account "RD$" from account list on Transferir Expresos screen
    #        And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
    #        And user enter an amount with DOP currency "1" to transfer for Transferir Expresos
    #        And user enter a description "test" for Transferir Expresos
    #        And user continue with Transferir Expresos
    #        And user select Si, Transferir from Verificacion - Transferir Expresos screen
    #        And user type token popular code for Transferir Expresos
    #        And user select validar token popular on Token Popular screen for Transferir Expresos
    #        Then the screen of Comprobante for Transferir Expresos should displayed



    @Transferencias @TransferirExpresos @RegressionCL_UAT
    Scenario: Shortcut dashboard - Transferir Expresos - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Expresos" from the snackbar of transfers
        And user select option Selecciona tu cuenta from Transferir Expresos screen
        And user select the account "RD$" from account list on Transferir Expresos screen
        And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
        And user enter an amount with DOP currency "1" to transfer for Transferir Expresos
        And user enter a description "test" for Transferir Expresos
        And user continue with Transferir Expresos
        And user select Si, Transferir from Verificacion - Transferir Expresos screen
        And user type token popular code for Transferir Expresos
        And user select validar token popular on Token Popular screen for Transferir Expresos
        Then the screen of Comprobante for Transferir Expresos should displayed

    @Transferencias @TransferirExpresos @RegressionCL_UAT
    Scenario: Shortcut cuentas - Transferir Expresos - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        When user select a "Ahorros o Corriente" account
        When the user open the option Transferir in the snackbar
        And user select the option of "Expresos" from the snackbar of transfers
        And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
        And user enter an amount with DOP currency "1" to transfer for Transferir Expresos
        And user enter a description "test" for Transferir Expresos
        And user continue with Transferir Expresos
        And user select Si, Transferir from Verificacion - Transferir Expresos screen
        And user type token popular code for Transferir Expresos
        And user select validar token popular on Token Popular screen for Transferir Expresos
        Then the screen of Comprobante for Transferir Expresos should displayed
   
    @Transferencias @TransferirExpresos @RegressionCL_UAT
    Scenario: Burger menu - Transferir Expresos - Realizar otra transferencia - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Transferir" from burguer menu
        And user select "Expresos" from burguer menu
        And user select option Selecciona tu cuenta from Transferir Expresos screen
        And user select the account "RD$" from accounts list on Transferir Expresos screen
        And user enter account number "837527159" of Beneficiario in Transferir Expresos screen
        And user enter an amount with DOP currency "10" to transfers for a Transferir Expresos
        And user continue with Transferir Expresos
        And user select Si, Transferir from Verificacion without description - Transferir Expresos screen
        And user type token popular code for Transferir Expresos
        And user select validar token popular on Token Popular screen for Transferir Expresos
        And user select Realizar otra transferencia button on Transferir Expresos screen
        When user select option Selecciona tu cuenta from Transferir Expresos screen
        And user select the account "RD$" from accounts list on Transferir Expresos screen
        And user enter account number "837527159" of Beneficiario in Transferir Expresos screen
        And user enter an amount with DOP currency "1" to transfers for a Transferir Expresos
        And user enter a description "test" for Transferir Expresos
        And user continue with Transferir Expresos
        And user select Si, Transferir from Verificacion - Transferir Expresos screen
        And user type token popular code for Transferir Expresos
        And user select validar token popular on Token Popular screen for Transferir Expresos
        Then the screen of Comprobante for Transferir Expresos should displayed


#    @RegressionCL_UAT
#    Scenario: Shortcut dashboard - Expresos - Migrado
#        Given the PreLogin is displayed
#        And the user tap the button Acceder in Prelogin screen
#        And user login with username "yaya" and "Banco321"
#        Then the screen of Dashboard should displayed
#        When the user open the option Transferir in the snackbar
#        And user select the option of "Expresos" from the snackbar of transfers
#        And user select option Selecciona tu cuenta from Transferir Expresos screen
#        And user select the account "RD$" from account list on Transferir Expresos screen
#        And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
#        And user enter an amount with DOP currency "1" to transfer for Transferir Expresos
#        And user enter a description "test" for Transferir Expresos
#        And user continue with Transferir Expresos
#        And user select Si, Transferir from Verificacion - Transferir Expresos screen
#        And user type token popular code for Transferir Expresos
#        And user select validar token popular on Token Popular screen for Transferir Expresos
#        Then the screen of Comprobante for Transferir Expresos should displayed

# @Happypath
# Scenario: I want to express transfer funds to a beneficiary with USD currency from a DOP account
#     Given the PreLogin is displayed
#     And the user tap the button Acceder in Prelogin screen
#     And user login with username "yaya" and "Banco321"
#     Then the screen of Dashboard should displayed
#     When the user open the option Transferir in the snackbar
#     And user select the option of "Expresos" from the snackbar of transfers
#     And user select option Selecciona tu cuenta from Transferir Expresos screen
#     And user select the account "RD$" from account list on Transferir Expresos screen
#     And user enter account number "0767447592" of Beneficiario in Transferir Expresos screen
#     And user enter an amount with USD currency "2" to transfer for Transferir Expresos
#     And user enter a description "test" for Transferir Expresos
#     And user continue with Transferir Expresos
#     And the user select the button Si, Transferir on the USD multicurrency transfer flow for Transferir Expresos
#     And user type token popular code for Transferir Expresos
#     And user select validar token popular on Token Popular screen for Transferir Expresos
#     Then the screen of Comprobante USD Multicurrency should displayed for Transferir Expresos flow

# Scenario: I want to express transfer funds to a beneficiary with DOP currency from a USD account
# When the user open the option Transferir in the snackbar
# And user select the option of "Expresos" from the snackbar of transfers
# And user select option Selecciona tu cuenta from Transferir Expresos screen
# And user select the account "835735671" from account list on Transferir Expresos screen
# And user enter account number "765507868" of Beneficiario in Transferir Expresos screen
# And user enter an amount with DOP currency "100" to transfer for Transferir Expresos
# And user enter a description "test" for Transferir Expresos
# And user continue with Transferir Expresos
# And the user select the button Si, Transferir on the DOP multicurrency transfer flow for Transferir Expresos
# And user type token popular code for Transferir Expresos
# And user select validar token popular on Token Popular screen for Transferir Expresos
# Then the screen of Comprobante DOP Multicurrency should displayed for Transferir Expresos flow

# Scenario: I want to make an express transfer without description
#     Given the PreLogin is displayed
#     And the user tap the button Acceder in Prelogin screen
#     And user login with username "yaya" and "Banco321"
#     Then the screen of Dashboard should displayed
#     When the user open the option Transferir in the snackbar
#     And user select the option of "Expresos" from the snackbar of transfers
#     And user select option Selecciona tu cuenta from Transferir Expresos screen
#     And user select the account "RD$" from account list on Transferir Expresos screen
#     And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
#     And user enter an amount with DOP currency "1" to transfer for Transferir Expresos
#     And user continue with Transferir Expresos
#     And user select Si, Transferir from Verificacion without description - Transferir Expresos screen
#     And user type token popular code for Transferir Expresos
#     And user select validar token popular on Token Popular screen for Transferir Expresos
#     Then the screen of Comprobante without description for Transferir Expresos should displayed

#BUG, error porque no sale el mensaje esperado, sino sale otro
# Scenario: I want to make an express transfer with an invalid destination
# When the user open the option Transferir in the snackbar
# And user select the option of "Expresos" from the snackbar of transfers
# And user select option Selecciona tu cuenta from Transferir Expresos screen
# And user select the account "Ahorro" from account list on Transferir Expresos screen
# And user enter account number "765507111" of Beneficiario in Transferir Expresos screen
# Then the title of the error message "Este beneficiario no fue encontrado." should be displayed on Transferir Expresos screen
# And the message "Verifica que el número de cuenta digitado sea correcto e inténtalo de nuevo." should be displayed on Transferir Expresos screen

# Scenario: I want to make an express transfer, but I have insufficient funds
#     Given the PreLogin is displayed
#     And the user tap the button Acceder in Prelogin screen
#     And user login with username "yaya" and "Banco321"
#     Then the screen of Dashboard should displayed
#     When the user tap the burger menu
#     And user select "Transferir" from burguer menu
#     And user select "Expresos" from burguer menu
#     And user select option Selecciona tu cuenta from Transferir Expresos screen
#     And user select the account "RD$" from account list on Transferir Expresos screen
#     And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
#     And user enter an amount with DOP currency "1000000000" to transfer for Transferir Expresos
#     And user continue with Transferir Expresos
#     Then the modal with the title "Cuenta con fondos insuficientes" should displayed on Transferir a mis cuentas screen
#     And the message "La cuenta origen no tiene balance disponible suficiente para realizar esta transacción, revisa el monto o selecciona otra cuenta." should be displayed on Transferir Expresos screen

# Scenario: I want to go to my products after I made a successful express transfer
#     Given the PreLogin is displayed
#     And the user tap the button Acceder in Prelogin screen
#     And user login with username "yaya" and "Banco321"
#     Then the screen of Dashboard should displayed
#     When the user tap the burger menu
#     And user select "Transferir" from burguer menu
#     And user select "Expresos" from burguer menu
#     And user select option Selecciona tu cuenta from Transferir Expresos screen
#     And user select the account "RD$" from account list on Transferir Expresos screen
#     And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
#     And user enter an amount with DOP currency "1" to transfer for Transferir Expresos
#     And user continue with Transferir Expresos
#     And user select Si, Transferir from Verificacion without description - Transferir Expresos screen
#     And user type token popular code for Transferir Expresos
#     And user select validar token popular on Token Popular screen for Transferir Expresos
#     And user select Ir a mis productos button on Transferir Expresos screen
#     Then the screen of Dashboard should displayed

# Scenario: I want to verify that attempting a transaction exceeding the minimum limit from a USD currency account to a DOP currency beneficiary prevents successful express transfer, ensuring compliance with the minimum transaction limit.
# When the user open the option Transferir in the snackbar
# And user select the option of "Expresos" from the snackbar of transfers
# And user select option Selecciona tu cuenta from Transferir Expresos screen
# And user select the account "835735671" from account list on Transferir Expresos screen
# And user enter account number "765507868" of Beneficiario in Transferir Expresos screen
# And user enter an amount with DOP currency "10" to transfer for Transferir Expresos
# And user enter a description "test" for Transferir Expresos
# And user continue with Transferir Expresos
# Then the body of the error message "El monto mínimo para la compra o venta de divisas es US$1.00" should be displayed on Transferir Expresos screen

# Scenario: I want to verify that attempting a transaction exceeding the minimum limit from a DOP currency account to a DOP beneficiary account prevents successful express transfer, ensuring compliance with the minimum transaction limit.
#     Given the PreLogin is displayed
#     And the user tap the button Acceder in Prelogin screen
#     And user login with username "yaya" and "Banco321"
#     Then the screen of Dashboard should displayed
#     When the user open the option Transferir in the snackbar
#     And user select the option of "Expresos" from the snackbar of transfers
#     And user select option Selecciona tu cuenta from Transferir Expresos screen
#     And user select the account "RD$" from account list on Transferir Expresos screen
#     And user enter account number "0765507868" of Beneficiario in Transferir Expresos screen
#     And user enter an amount with DOP currency "0" to transfer for Transferir Expresos
#     Then the error message "El monto para transferir debe ser mayor a RD$0.01" should be displayed on Transferir Expresos screen
