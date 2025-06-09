
Feature: Beneficiarios


    #Background: User log into the app
    #Given the PreLogin is displayed
    #And the user tap the button Acceder in Prelogin screen
    #And user login with username "michellebrown" and "321321"
    #Then the screen of Dashboard should displayed

    @Beneficiarios @BeneficiariosDOP @RegressionCL_UAT
    Scenario: Agregar Beneficiarios en el Popular DOP - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Ver beneficiarios" from burguer menu
        And user select "En el Popular" from burguer menu
        And user select the button Adicionar
        And user select an account from Beneficiario search field
        And user select tipo de beneficiario "Cuentas de terceros"
        And user type the account number "765507868"
        And user type the alias "dario"
        And user type the email "dariotestbpd@gmail.com"
        And user continue with the adition of the beneficiario
        And user select the button Continuar on Beneficiario Confirm screen
        And user type code of token popular on Beneficiario Token Popular screen
        # And user select button Continuar on Beneficiario Token Popular screen
        Then the screen of Comprobante for Beneficiario should displayed


    @Beneficiarios @BeneficiariosDOP @RegressionCL_UAT
    Scenario Outline: Agregar Beneficiarios en Otros Bancos DOP - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Ver beneficiarios" from burguer menu
        And user select "En otros bancos" from burguer menu
        And user select the button Adicionar
        And user select Entidad Financiera option
        And user search for Entidad "<entidadFinanciera>"
        And user select Entidad Financiera "<entidadFinanciera>"
        And user select tipo de beneficiario option
        And user select tipo de beneficiario "<type>" from Otros Bancos List
        And user enter numero de cuenta "1101371835" from Otros Bancos
        And user enter documento de identidad "02301169864"
        And user select tipo de documento de identidad "<typeDocIdeN>"
        And user enter alias "michelle" from Otros Bancos
        And user enter correo "michelletestbpd@gmail.com" from Otros bancos
        And user continue with the adition of the beneficiario de otros bancos
        And user select the checkbox of conditions and terms
        And user select button Continuar on Validacion de datos of Otros Bancos screen
        And user select button Continuar on Verificacion of Otros Bancos screen
        And user type code of token popular on Beneficiario otros bancos Token Popular screen
        # And user select button Continuar on Beneficiario otros bancos Token Popular screen
        Then the screen of Comprobante for Beneficiario Otros Bancos should displayed

        Examples:
            | entidadFinanciera               | type                            | typeDocIdeN |
            | BANCO  AHORRO Y CREDITO FEDERAL | Cuentas de ahorros en pesos RD$ | Cédula      |

    Scenario: As a BPD user I can add a beneficary from Internacionales
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Ver beneficiarios" from burguer menu
        And user select "Internacionales" from burguer menu
        Then the screen Beneficiarios Internacionales should displayed

    @Beneficiarios @BeneficiariosServiciosYFacturas @RegressionCL_UAT
    Scenario: Agregar Beneficiarios Servicios y Facturas - No Migrado
        Given the PreLogin is displayed
        And the user tap the button Acceder in Prelogin screen
        And user login with username "michellebrown" and "321321"
        Then the screen of Dashboard should displayed
        When the user tap the burger menu
        And user select "Ver beneficiarios" from burguer menu
        And user select "Servicios y facturas" from burguer menu
        And user select the button Adicionar on Beneficiario Servicios y Facturas screen
        And user select Seleccione from Categoria on Beneficiario Servicios y Facturas screen
        And user select a Categoria "Electricidad" from list
        And user select Seleccione el nombre de la empresa on Beneficiario Servicios y Facturas screen
        And user select Empresa "EDESUR"
        And user enter numero de contrato "5393995" on Beneficiario Servicios y Facturas screen
        And user enter alias "Gil Roma I" on Beneficiario Servicios y Facturas screen
        And user enter correo electronico "vero1148testbpd@gmail.com" on Beneficiario Servicios y Facturas screen
        And user continue with Beneficiario Servicios y Facturas
        And user select Continuar on Verificacion - Beneficiario Servicios y Facturas
        And user type code of token popular on Beneficiario Servicios y Facturas Token Popular screen
        # And user select button Continuar on Beneficiario Servicios y Facturas Token Popular screen
        Then the screen of Comprobante for Beneficiario Servicios y Facturas should displayed
