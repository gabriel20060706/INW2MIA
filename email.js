function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInwitheEmailIandPassword(email,password).then(()=> {
        alert('usuario logado');
    })
    .cath(err =>{
        console.log('error', error)
    })
}