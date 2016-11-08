// Get a reference to the database service
var database = firebase.database();

function writeUserData(name, email, title, company) {
  // Get a key for a new Post.
  var newKey = firebase.database().ref().child('users').push().key;

  firebase.database().ref('users/' + newKey).set({
    username: name,
    email: email,
    title: title,
    company: company
  });
}