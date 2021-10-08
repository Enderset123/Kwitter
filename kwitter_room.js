
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCS4yfZh6q8Av3nLlUHqMsBhbL4OkgwEms",
      authDomain: "kwitter-83ad2.firebaseapp.com",
      databaseURL: "https://kwitter-83ad2-default-rtdb.firebaseio.com",
      projectId: "kwitter-83ad2",
      storageBucket: "kwitter-83ad2.appspot.com",
      messagingSenderId: "427149438814",
      appId: "1:427149438814:web:45da6a8d07b795b9c3a9cf"
    };
    

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!!";
    
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding roomname"
          });

          localStorage.setItem("room_name",room_name);

          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}