
var CLIENT_ID = '571495112460-8ds913hb2lg3kgkj4a22aue2puppgu0o.apps.googleusercontent.com'

const soup1 = document.querySelector("#soup1");
const soup2 = document.querySelector("#soup2");
const soup3 = document.querySelector("#soup3");
const soup4 = document.querySelector("#soup4");
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
db.doc("menu/soups").get().then(function(doc) {
  if (doc && doc.exists) {
    const myData = doc.data();
    soup1.innerText = myData.items[0].name;
    soup2.innerText = myData.items[1].name;
    soup3.innerText = myData.items[2].name;
    soup4.innerText = myData.items[3].name;
  }
}).catch(function (error) {
  console.log("Got an error: ", error);
});


//const docRef = firestore.doc("menu/shawarma");

//This should appear in an accordion or something. 
//docRef.get().then(function (doc) {
//  if (doc && doc.exists) {
//    const myData = doc.data();
//    outputHeader.innerText = myData.name;
//  }
//});