Feature: Ventas Digitales Estatus de tu solicitud

Background:User login into the app
Given the PreLogin is displayed
And the user tap the button Acceder in Prelogin screen
And user login with username "michellebrown" and "321321"
Then the screen of Dashboard should displayed

Scenario: Check the Digital Sales Status for your "Cerradas" request
   When the user tap the burger menu
    And user select Solicitar Productos from burguer menu
    And user select Solicitar Productos from Solicitud De Productos Submenu
    And user select the "Estatus de tu solicitud" Option from Solicitud De Productos
    And user select the "Cerradas" Option from Solicitud De Productos
    And Select one of the requests displayed on the screen
   Then the user should see the Application Status Check screen
   Then the user Select "Volver atrás" to check the list of other requests

   
   
    Scenario: Check the Digital Sales Status for your "Abiertas" request
   When the user tap the burger menu
    And user select Solicitar Productos from burguer menu
    And user select Solicitar Productos from Solicitud De Productos Submenu
    And user select the "Estatus de tu solicitud" Option from Solicitud De Productos
    And user select the "Abiertas" Option from Solicitud De Productos
    And Select one of the requests displayed on the screen
   Then the user should see the Application Status Check screen
   Then the user Select "Volver atrás" to check the list of other request