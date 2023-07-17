// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDzrqDkdzizk8Cc_jn2Asiz-E5UVFldfsE",
  authDomain: "first-project-5ceb8.firebaseapp.com",
  databaseURL: "https://first-project-5ceb8-default-rtdb.firebaseio.com",
  projectId: "first-project-5ceb8",
  storageBucket: "first-project-5ceb8.appspot.com",
  messagingSenderId: "391913665253",
  appId: "1:391913665253:web:beff7f0330df52ac815a0c",
  measurementId: "G-056JXYJ62Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var attendance = document.getElementById('attendance').value
    var character = document.getElementById('character').value
   
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      attendance : attendance,
      character : character
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
    
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()

      attendance = data.attendance;
      character = data.character;
      email = data.email;
      
      document.getElementById("studentDetails1").innerHTML = (`Attendance is : ${attendance}`); 
      document.getElementById("studentDetails2").innerHTML = (`Character is : ${character}`); 
      document.getElementById("studentDetails3").innerHTML = (`E-mail id is : ${email}`);
  
    })

    
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }

