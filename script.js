
var email;
var senha;
var log;


function login(){

email = document.form.email.value;
senha = document.form.senha.value;


// LOG- e-mail - senha  armazenado... 

/*
log = email + '\n' + senha 
*/

window.alert('Login Aceito, Parabens!\n'+ '\n' + 'E-mail: '+email+ '\n'+ 'Senha: '+senha);



}