Feature: Ventas Digitales SaleRequestSeguros

    Background: User log into the app
    Given the PreLogin is displayed
    And the user tap the button Acceder in Prelogin screen
    And user login with username "michellebrown" and "321321"
    Then the screen of Dashboard should displayed

    # @Happypath @VentasDigitalesSaleRequestSeguros
    # Scenario: Automation of the Sales flow on demand Insurance through Dashboard
    # When user select Solicitar Productos from dashboard
    # And user select the Seguros Option from Solicitud De Productos
    # And user the accept the Terms and Condition screen
    #  And Enter the token code, and then select the Continuar button
        
        
    Scenario: Automation of the Sales flow on demand Insurance through Burger menu
    When the user tap the burger menu
    And user select Solicitar Productos from burguer menu
    And user select Solicitar Productos from Solicitud De Productos Submenu
    And user select the Seguros Option from Solicitud De Productos
    And user the accept the Terms and Condition screen
    And Enter the token code, and then select the Continuar button
        