
Feature: Pagos 

    #Background: User log into the app
        #Given the PreLogin is displayed
        #And the user tap the button Acceder in Prelogin screen
        #And user login with username "michellebrown" and "321321"
        #Then the screen of Dashboard should displayed
    # And user login with username "oisabel" and "321321"

	@Pagos @PagosTarjetas @PagarMultiplesTC @RegressionCL_UAT
    Scenario: Pagar Multiples TCs - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Multiples tarjetas de crédito" from burguer menu
        And user choose the source account "778245886" on Pagos a tarjetas de creditos
        And user select more than one credit card to pay
        And user continue with the payment of the credit cards
        And user select Continuar on Verificacion - Pagos a tarjetas de creditos screen
        And user type code of token popular on Pagos a tarjetas de creditos - Token Popular screen
        And user select button Continuar on Pagos a tarjetas de creditos - Token Popular screen
        Then the screen of Comprobante on Pagos a tarjetas de creditos should displayed

    Scenario: As a BPD user I shouldn't be able to continue with the payment if I don't select any credit card
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Pagar" from burger menu
        And user select "Multiples tarjetas de crédito" from burguer menu
        And user choose the source account "778245886" on Pagos a tarjetas de creditos
        Then I can't continue with the payment

    Scenario: As a BPD user I pay one credit card
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Pagar" from burger menu
        And user select "Multiples tarjetas de crédito" from burguer menu
        And user choose the source account "778245886" on Pagos a tarjetas de creditos
        And user select one credit card to pay
        And user continue with the payment of the credit cards
        And user select Continuar on Verificacion - Pagos a tarjetas de creditos screen
        And user type code of token popular on Pagos a tarjetas de creditos - Token Popular screen
        And user select button Continuar on Pagos a tarjetas de creditos - Token Popular screen
        Then the screen of Comprobante with one credit card payment on Pagos a tarjetas de creditos should displayed

    Scenario: As a BPD user I made the payment of all my credit cards
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user tap on "Pagar" from burger menu
        And user select "Multiples tarjetas de crédito" from burguer menu
        And user choose the source account "778245886" on Pagos a tarjetas de creditos
        And user select the option to select all credit cards
        And user continue with the payment of the credit cards
        And user select Continuar on Verificacion - Pagos a tarjetas de creditos screen
        And user type code of token popular on Pagos a tarjetas de creditos - Token Popular screen
        And user select button Continuar on Pagos a tarjetas de creditos - Token Popular screen
        Then the screen of Comprobante on Pagos a tarjetas de creditos should displayed




