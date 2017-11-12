
  var config = {
    apiKey: "AIzaSyADlDfuQUMEmPIbCFI6WicHcnrcJn90VHw",
    authDomain: "byft-5696d.firebaseapp.com",
    databaseURL: "https://byft-5696d.firebaseio.com",
    projectId: "byft-5696d",
    storageBucket: "byft-5696d.appspot.com",
    messagingSenderId: "843201687842"
  };
  firebase.initializeApp(config);


//get elements
const email = Val('email');
const password = Val('pword');
const Login = Val('li1');
const Signup = Val('su1');

function Val(id){
  return document.getElementById(id);
}

//add login events

Login.addEventListener('click', e => {
  //get email and pass
  const em1 = email.value;
  const ps1 = password.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.signInWithEmailAndPassword(em1,
    ps1);
  promise.catch(e => console.log(e.message));
});

//add logout event

/*Lgt.addEventListener('click', e=>{
  firebase.auth().signOut();
});*/

//Add signup Event

/*Signup.addEventListener('click', e=> {
  const em1 = email.value;
  const ps1 = password.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.createUserWithEmailAndPassword(em1,
    ps1);
  promise.catch(e => console.log(e.message));
});
*/

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log("Worked");
    console.log(firebaseUser.uid);
  }
  else{
    console.log('not logged in');
  }
});