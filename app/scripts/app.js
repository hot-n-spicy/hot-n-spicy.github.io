// Initialize Firebase
var config = {
  apiKey: "AIzaSyB6nvvS6_d0L5vFyK4sIoCVmPfQJ7XPB44",
  authDomain: "hotandspicy-manipal.firebaseapp.com",
  databaseURL: "https://hotandspicy-manipal.firebaseio.com",
  projectId: "hotandspicy-manipal",
  storageBucket: "hotandspicy-manipal.appspot.com",
  messagingSenderId: "571495112460"
};
firebase.initializeApp(config);

var CLIENT_ID = '571495112460-8ds913hb2lg3kgkj4a22aue2puppgu0o.apps.googleusercontent.com'
//var firestore = firebase.firestore();
//const docRef = firestore.doc("menu/shawarma");

//This should appear in an accordion or something. 
//docRef.get().then(function (doc) {
//  if (doc && doc.exists) {
//    const myData = doc.data();
//    outputHeader.innerText = myData.name;
//  }
//});