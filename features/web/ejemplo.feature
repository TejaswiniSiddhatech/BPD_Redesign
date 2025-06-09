




        Given - Dado que ( precondiciones )
        When - La accion
        Then - Al resultado esperado
        And



--------- Introduccion a cucumber archivo transferencia.feature --------

Feature: Transferencias
    Esta es la pantalla de transferencia de dinero

    Background: El usuario hace login
        Given que el usuario ya tiene una cuenta
        And llena el campo email con "deyvid@hotmail.com"
        And llena el campo contraseña con "1234556"
        When el usuario hace click en el boton Login
        Then el usuario es redireccionado al dashboard

    Scenario: Transferencia exitosa de usuario con fondos
        Given que la cuenta del usuario esta activa
        And que el usuario tiene fondos sufucientes ( balance )
        When el usuario hace click en el boton transferir
        Then el usuario es redireccionado a una pantalla de transferencia exitosa
        And el monto es debitado de la cuenta

    Scenario: Transferencia fallida usuario sin fondos suficientes
        Given que la cuenta del usuario esta activa
        And que el usuario No tiene fondos suficientes
        When el usuario hace click en el boton transferir
        Then el usuario recibe un mensaje de error que indica que los fondos son insuficientes

    Scenario: Recepcion de transferencia
        Given el usuario "Deyvid Ferrer" realizo una transferencia a mi cuenta "Jean"
        And recibo la notificacion de transferencia recibida
        When hago click en la notificacion de transferencia
        Then soy redireccionado a la aplicacion
        And  me muestra el detalle de la transferencia recibida
        And el usuario recibe el monto en su balance


    -----------------------------------------------

    Este es un archivo nuevo para testear la funcionalidad de login
    --------------

    Scenario Outline: Loging - mensaje <message> de la pantalla login
        Given que el usuario ya tiene una cuenta
        And llena el campo email con "<username>"
        And llena el campo contraseña con "<password>"
        When el usuario hace click en el boton Login
        Then el usuario recibe el mensage "<message>"

        Examples:
            | username | password             | message                                  |
            | tomsmith | SuperSecretPassword! | You logged into a secure area!           |
            | foobar   | barfoo               | Your username is invalid!                |
            |          |                      | your username or password can´t be blank |

