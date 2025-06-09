
Feature: Pagos

    # Background: User log into the app
    #     Given the PreLogin is displayed
    #    And the user tap the button Acceder in Prelogin screen
    #     And user login with username "michellebrown" and "321321"
    #     Then the screen of Dashboard should displayed

    @Pagos @PagarServiciosyFacturas @RegressionCL_UAT
    Scenario: Burger menu - Pagar expreso Servicios y Facturas con TC - No migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Servicios y facturas" from burguer menu
        And user select Seleccione from Pagos a servicios y facturas screen
        And user select the first account from account list of Pagos a servicios y facturas screen
        And user select checkbox "Pago expreso" from Pagos a servicios y facturas screen
        And user select Seleccione categoria from Pagos a servicios y facturas screen
        And user select categoria "Electricidad" from Pagos a servicios y facturas screen
        And user select Entidad o beneficiario from Pagos a servicios y facturas screen
        And user select Entidad "EDESUR" from Pagos a servicios y facturas screen
        And user enter contract number "5831616" from Pagos a servicios y facturas screen
        And user select Verificar from Pagos a servicios y facturas screen
        And user select Continuar on Pagos a servicios y facturas screen
        And user select Continuar on Verificacion of Pagos a servicios y facturas screen
        And user type code of token popular on Pagar a servicios y facturas Token Popular screen
        And user select button Continuar on Pagar a servicios y facturas Token Popular screen
        Then the screen of Comprobante for Pagar a servicios y facturas should displayed

    # @RegressionCL_UAT
    # Scenario: Shorcut dashboard - Pagar expreso Servicios y Facturas con TC - No migrado
    #     Given the PreLogin is displayed
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with username "michellebrown" and "321321"
    #     Then the screen of Dashboard should displayed
    #     When the user open the option Pagar in the snackbar
    #     And user select the option of Servicios y facturas from the snackbar of payments
    #     And user select Seleccione from Pagos a servicios y facturas screen
    #     And user select the first account from account list of Pagos a servicios y facturas screen
    #     And user select checkbox "Pago expreso" from Pagos a servicios y facturas screen
    #     And user select Seleccione categoria from Pagos a servicios y facturas screen
    #     And user select categoria "Electricidad" from Pagos a servicios y facturas screen
    #     And user select Entidad o beneficiario from Pagos a servicios y facturas screen
    #     And user select Entidad "EDESUR" from Pagos a servicios y facturas screen
    #     And user enter contract number "5831616" from Pagos a servicios y facturas screen
    #     And user select Verificar from Pagos a servicios y facturas screen
    #     And user select Continuar on Pagos a servicios y facturas screen
    #     And user select Continuar on Verificacion of Pagos a servicios y facturas screen
    #     And user type code of token popular on Pagar a servicios y facturas Token Popular screen
    #     And user select button Continuar on Pagar a servicios y facturas Token Popular screen
    #     Then the screen of Comprobante for Pagar a servicios y facturas should displayed


    # Scenario: As a BPD user I pay my services through Beneficiario option
    # When the user tap the burger menu
    # And user tap on Pagar from burger menu
    # And user tap the option "Servicios y facturas" from Pagar dropdown list
    # And user select Seleccione from Pagos a servicios y facturas screen
    # And user select the first account from account list of Pagos a servicios y facturas screen
    # And user select checkbox "Beneficiario" from Pagos a servicios y facturas screen
    # And user select dropdown list

   
    Scenario: As a BPD user I cancel the flow of payment of services through Pago expreso option
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Servicios y facturas" from burguer menu
        And user select Seleccione from Pagos a servicios y facturas screen
        And user select the first account from account list of Pagos a servicios y facturas screen
        And user select checkbox "Pago expreso" from Pagos a servicios y facturas screen
        And user select Seleccione categoria from Pagos a servicios y facturas screen
        And user select categoria "Electricidad" from Pagos a servicios y facturas screen
        And user select Entidad o beneficiario from Pagos a servicios y facturas screen
        And user select Entidad "EDESUR" from Pagos a servicios y facturas screen
        And user enter contract number "5831616" from Pagos a servicios y facturas screen
        And user select Verificar from Pagos a servicios y facturas screen
        And user select Cancelar on Pagos a servicios y facturas screen
        Then the screen of Dashboard should displayed


    Scenario: As a BPD user I cancel the flow of payment of services on Verification screen
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Servicios y facturas" from burguer menu
        And user select Seleccione from Pagos a servicios y facturas screen
        And user select the first account from account list of Pagos a servicios y facturas screen
        And user select checkbox "Pago expreso" from Pagos a servicios y facturas screen
        And user select Seleccione categoria from Pagos a servicios y facturas screen
        And user select categoria "Electricidad" from Pagos a servicios y facturas screen
        And user select Entidad o beneficiario from Pagos a servicios y facturas screen
        And user select Entidad "EDESUR" from Pagos a servicios y facturas screen
        And user enter contract number "5831616" from Pagos a servicios y facturas screen
        And user select Verificar from Pagos a servicios y facturas screen
        And user select Continuar on Pagos a servicios y facturas screen
        And user select Cancelar on Verificacion of Pagos a servicios y facturas screen
        Then the screen of Pagos a servicios y facturas should displayed

    
    Scenario: As a BPD user I cancel the flow of payment of services on Token Popular screen
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Servicios y facturas" from burguer menu
        And user select Seleccione from Pagos a servicios y facturas screen
        And user select the first account from account list of Pagos a servicios y facturas screen
        And user select checkbox "Pago expreso" from Pagos a servicios y facturas screen
        And user select Seleccione categoria from Pagos a servicios y facturas screen
        And user select categoria "Electricidad" from Pagos a servicios y facturas screen
        And user select Entidad o beneficiario from Pagos a servicios y facturas screen
        And user select Entidad "EDESUR" from Pagos a servicios y facturas screen
        And user enter contract number "5831616" from Pagos a servicios y facturas screen
        And user select Verificar from Pagos a servicios y facturas screen
        And user select Continuar on Pagos a servicios y facturas screen
        And user select Continuar on Verificacion of Pagos a servicios y facturas screen
        And user type code of token popular on Pagar a servicios y facturas Token Popular screen
        And user select button Cancelar on Pagar a servicios y facturas Token Popular screen
        Then the screen of Pagos a servicios y facturas should displayed


    Scenario: As a BPD user I select Continuar on Comprobante screen of Pagos a servicios y facturas
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Pagar" from burguer menu
        And user select "Servicios y facturas" from burguer menu
        And user select Seleccione from Pagos a servicios y facturas screen
        And user select the first account from account list of Pagos a servicios y facturas screen
        And user select checkbox "Pago expreso" from Pagos a servicios y facturas screen
        And user select Seleccione categoria from Pagos a servicios y facturas screen
        And user select categoria "Electricidad" from Pagos a servicios y facturas screen
        And user select Entidad o beneficiario from Pagos a servicios y facturas screen
        And user select Entidad "EDESUR" from Pagos a servicios y facturas screen
        And user enter contract number "5831616" from Pagos a servicios y facturas screen
        And user select Verificar from Pagos a servicios y facturas screen
        And user select Continuar on Pagos a servicios y facturas screen
        And user select Continuar on Verificacion of Pagos a servicios y facturas screen
        And user type code of token popular on Pagar a servicios y facturas Token Popular screen
        And user select button Continuar on Pagar a servicios y facturas Token Popular screen
        And user select button Continuar on Pagar a servicios y facturas Comprobante screen
        Then the screen of Dashboard should displayed

# @bugPagarServiciosFactura
# Scenario: As a BPD user I pay my services through Pago expreso option with not enough money on account
# When the user tap the burger menu
# And user tap on Pagar from burger menu
# And user tap the option "Servicios y facturas" from Pagar dropdown list
# And user select Seleccione from Pagos a servicios y facturas screen
# And user select an account "1955" from account list of Pagos a servicios y facturas screen
# And user select checkbox "Pago expreso" from Pagos a servicios y facturas screen
# And user select Seleccione categoria from Pagos a servicios y facturas screen
# And user select categoria "Electricidad" from Pagos a servicios y facturas screen
# And user select Entidad o beneficiario from Pagos a servicios y facturas screen
# And user select Entidad "EDESUR" from Pagos a servicios y facturas screen
# And user enter contract number "5831616" from Pagos a servicios y facturas screen
# And user select Verificar from Pagos a servicios y facturas screen
# And user select Continuar on Pagos a servicios y facturas screen
# Then

#Falta data de servicio con monto a pagar mayor a 20,000
# Scenario: Limit x transaction
# When the user tap the burger menu
# And user select "Pagar" from burguer menu
# And user select "Servicios y facturas" from burguer menu
# And user select Seleccione from Pagos a servicios y facturas screen
# And user select the first account from account list of Pagos a servicios y facturas screen
# And user select checkbox "Pago expreso" from Pagos a servicios y facturas screen
# And user select Seleccione categoria from Pagos a servicios y facturas screen
# And user select categoria "Electricidad" from Pagos a servicios y facturas screen
# And user select Entidad o beneficiario from Pagos a servicios y facturas screen
# And user select Entidad "EDESUR" from Pagos a servicios y facturas screen
# And user enter contract number "5831616" from Pagos a servicios y facturas screen
# And user select Verificar from Pagos a servicios y facturas screen
# And user select Continuar on Pagos a servicios y facturas screen
# And user select Continuar on Verificacion of Pagos a servicios y facturas screen
# And user type code of token popular on Pagar a servicios y facturas Token Popular screen
# And user select button Continuar on Pagar a servicios y facturas Token Popular screen
# Then

