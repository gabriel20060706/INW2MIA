const firebaseConfig = {
  apiKey: "AIzaSyD8nhHlDON6jmnuYvJ6DpMpbzVmRcyR0ww",
  authDomain: "projeto2miateste-8c09c.firebaseapp.com",
  projectId: "projeto2miateste-8c09c",
  storageBucket: "projeto2miateste-8c09c.appspot.com",
  messagingSenderId: "1072755501077",
  appId: "1:1072755501077:web:6d15f3f06a8703df44861c"
};

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log("Usuário logado : ", user)
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.error("Erro de autenticação : ", errorMessage)
    });
  });



  