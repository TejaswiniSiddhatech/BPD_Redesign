

Feature: Dashboard screen
    This is the Dashboard screen when the app is open.

    # Background: User log into the app
    #     Given the PreLogin is displayed
    #     And the user tap the button Acceder in Prelogin screen
    #     And user login with username "michellebrown" and "321321"
    #     Then the screen of Dashboard should displayed


    Scenario: Filtro de cuentas - mas de 2 elementos de 3 distintos productos adquiridos
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"s
        Then the screen of Dashboard should displayed
        When the user have diferent types of products
        Then the filter of products is displayed


    Scenario: Filtro de cuentas - menos de 2 elementos de 3 distintos productos adquiridos
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "lety18" and "321321"
        When the user have one type of products
        Then the filter of products is not displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the options of transfers, so that I can initiate transfers efficiently
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        Then the Transferir menu is displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the Transferir Expreso functionality, so that I can initiate transfers efficiently
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Expresos" from the snackbar of transfers
        Then the screen of Transferir Expresos should displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the Transferir Cuentas de terceros functionality, so that I can initiate transfers efficiently
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Terceros" from the snackbar of transfers
        Then the screen of Transferir Cuentas de terceros should displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the Transferir Otros Bancos functionality, so that I can initiate transfers efficiently
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of "Otros bancos" from the snackbar of transfers
        Then the screen of Transferir Otros Bancos should displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the Transferir Entre mis cuentas functionality, so that I can initiate transfers efficiently
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Transferir in the snackbar
        And user select the option of Transferir entre mis cuentas from the snackbar of transfers
        Then the screen of Transferir Entre mis cuentas should displayed


    Scenario: As a BPD user, I want to access the snackbar for quicker access to the options of Pay functionality, so that I can conveniently and efficiently make payments
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Pagar in the snackbar
        Then the Pagar menu is displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the options of Pagar Tarjetas de credito functionality, so that I can conveniently and efficiently make the payment of my credit card
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Pagar in the snackbar
        And user select the option of Tarjeta de credito from the snackbar of payments
        Then the screen of Pagar Tarjetas de credito should displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the options of Pagar Prestamos functionality, so that I can conveniently and efficiently make the payment of my loan
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Pagar in the snackbar
        And user select the option of "Préstamos" from the snackbar of payments
        Then the screen of Pagar Prestamos should displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the options of Pagar Servicios y facturas functionality, so that I can conveniently and efficiently make the payment of my services
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Pagar in the snackbar
        And user select the option of Servicios y facturas from the snackbar of payments
        Then the screen of Pagos a servicios y facturas should displayed

    Scenario: As a BPD user, I want to access the snackbar for quicker access to the options of Pagar Impuestos functionality, so that I can conveniently and efficiently make the payment of my services
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Pagar in the snackbar
        And user select the option of "Impuestos" from the snackbar of payments
        Then the screen of Pagar Impuestos should displayed

    
    Scenario: As a BPD user, I want to access the snackbar for quicker access to the Codigo Cash functionality, so that I can conveniently and efficiently generate a Codigo Cash
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option CodigoCash in the snackbar
        Then the screen CodigoCash is displayed

    
    Scenario: As a BPD user, I want to access the snackbar for quicker access to the Solicitar Producto functionality, so that I can conveniently and efficiently request a product
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        # And user login with username "rnbichara" and "321321"
        Then the screen of Dashboard should displayed
        When the user open the option Solicitar productos in the snackbar
        Then the screen Solicitar productos is displayed


    @Dashboard @Filtros @RegressionCL_UAT
    Scenario: Filtro Dashboard - Todos, Cuentas, Tarjetas, Prestamos, Certificados - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        When the screen of Dashboard should displayed
        Then Validate filter for "Todos"
        Then Validate filter for "Cuentas"
        Then Validate filter for "Tarjetas"
        Then Validate filter for "Préstamos"
        Then Validate filter for "Depósitos a plazo"