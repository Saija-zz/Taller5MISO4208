var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {



  try{

    /*
    cuando pase a usar tabla de datos en la segunda pasada de las pruebas, 
    cuando toma los valores de  miso@gmail.com para el usuario y password con el valor 
    1234 molestaba la feature de  "I open the login screen", asi que lo meti dentro de este try-catch
    porque me imagine que al pasar por segunda vez por ahi el dialogo de login ya estaba mostrado y el click
    sobre ese elemento no funcionada y al parecer eso era! YEAH!
    */
    browser.click('div.modal-body'); //ok

  }catch(err){
    console.log('FYB !');
  }

    browser.click('button.botonIngresar');


  

});


  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });



//########################################################################################################


When('Then I expect to see user profile button', error => {
    browser.waitForVisible('button#cuenta', 5000);
    //var alertText = browser.element('.aviso.alert.alert-danger').getText();
});





When(/^I fill with (.*) and (.*)$/ , (email, password) => {
     var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
});

When(/^I sign up with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and(.*)$/ , (name, lastname, email, universidad, maestria, password, pregrado, estudia_maestria) => {

    browser.waitForVisible('.cajaSignUp', 10000);

    var cajaLogIn = browser.element('.cajaSignUp');

    var nombreInput = cajaLogIn.element('input[name="nombre"]');
    nombreInput.click();
    nombreInput.keys(name);

    var apellidoInput = cajaLogIn.element('input[name="apellido"]');
    apellidoInput.click();
    apellidoInput.keys(lastname);

    var correoInput = cajaLogIn.element('input[name="correo"]');
    correoInput.click();
    correoInput.keys(email);

    var universidadInput = cajaLogIn.element('select[name="idUniversidad"]');
    universidadInput.selectByVisibleText(universidad);

    if(estudia_maestria === 'true'){
    

      var maestriaInput = cajaLogIn.element('input[type="checkbox"].jsx-527058112');
      maestriaInput.click();


      var programaInput = cajaLogIn.element('select[name="idPrograma"]');
      programaInput.selectByVisibleText(maestria);

    }else if(estudia_maestria === 'false'){
      var programaInput = cajaLogIn.element('select[name="idPrograma"]');
      programaInput.selectByVisibleText(pregrado);
    }

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);


    var aceptoInput = cajaLogIn.element('input[type="checkbox"].jsx-520551651');
    aceptoInput.click();


    var submitInput = cajaLogIn.element('button[type="submit"].jsx-527058112');
    submitInput.click();




});

Then('I expect to see {string}', error => {
    try{

      browser.waitForVisible('.aviso.alert.alert-danger', 5000);
      var alertText = browser.element('.aviso.alert.alert-danger').getText();
      expect(alertText).to.include(error);

    }catch(err){

    }

    try{

      browser.waitForVisible('div[role=alert]', 5000);
      var alertText = browser.element('div[role=alert]').getText();
      expect(alertText).to.include(error);

    }catch(err){

    }
   
});


Then('I expect to see Registro exitoso', () => {

   browser.waitForVisible('div.sweet-alert h2', 20000);
   var alertText = browser.element('div.sweet-alert h2').getText();
   expect(alertText).to.include('Registro exitoso!');

     
});


Then('I logout {email} and {password}', (email, password)=> {

    if(browser.isVisible('button#cuenta')) {
      browser.click('button#cuenta');


      browser.waitForVisible('a[role=menuitem]', 5000);

      browser.click('a[role=menuitem]');

    }

});




//########################################################################################################




  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 10000);
  });
});

