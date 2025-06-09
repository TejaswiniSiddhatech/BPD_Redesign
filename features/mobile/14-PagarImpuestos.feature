Feature: Pagar impuestos


    Background: User log into the app
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed

    #Ya no se encuentra la opcion de pagar impuestos
    Scenario: As a BPD user I pay my taxes through the Institución beneficiaria "<institucionBeneficiaria>"
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Impuestos" from burguer menu
        And user select Selecciona from Institución beneficiaria on Pagos de impuestos screen
        And user select Institución beneficiaria "<institucionBeneficiaria>" from list on Pagos de impuestos screen
        And user enter Numero de referencia "55555" on Pagos de impuestos screen
        And user continue with the payment of taxes
        And user select Selecciona from Desde cuenta option on Pagos de impuestos screen
        And user select first account from account list on Pagos de impuestos screen
        And user select Continuar on Detalle - Pagos de impuestos screen
        And user select Continuar on Confirmacion - Pagos de impuestos screen
        Then the screen of Comprobante on Pagos de impuestos should displayed

        Examples:
            | institucionBeneficiaria |
            | DGA                     |
            | DGII                    |
            | INFOTEP                 |
            | ISR                     |