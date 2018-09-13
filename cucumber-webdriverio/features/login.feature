#ahora con tablas de datos:

Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Login failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email            | password | error                    |
      |                  |          | Ingresa una contraseña   |
      | miso@gmail.com   |    1234  | Upss! El correo y        |

Scenario Outline: Vamos a hacer un login exitoso, yeah!
  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>

    And I try to login
    And I expect to see user profile button
    Then I logout <email> and <password>

    Examples:
      | email               | password          |
      | julborre@gmail.com  | losEstudiantes12. |



Scenario Outline: voy a registrar un nuevo usuario de maestria
  Given I go to losestudiantes home screen
    When I open the login screen  

    And I sign up with <name> and <lastname> and <email> and <universidad> and <maestria> and <password> and <pregado> and <estudia_maestria>
  
    Then I expect to see Registro exitoso

   Examples:
      | name    | lastname    | email                      | universidad              | maestria                           | password        | pregrado           |  estudia_maestria |
      | miso    | 4208test1   | miso4208.test1@gmail.com   | Universidad de los Andes | Maestría en Ingeniería de Software | M1s04208!T3st;  |                    |  true             |
      | miso    | 4208test2   | miso4208.test2@gmail.com   | Universidad de los Andes |                                    | M1s04208!T3st;  | Arte               |  false            |
      

 
