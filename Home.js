/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  



	var firebaseConfig = {
    apiKey: "AIzaSyAN_hZwjs6nprEfL7dN5vN0xTTJGyN-eYo",
    authDomain: "grocery-5a4ef.firebaseapp.com",
    databaseURL: "https://grocery-5a4ef-default-rtdb.firebaseio.com",
    projectId: "grocery-5a4ef",
    storageBucket: "grocery-5a4ef.appspot.com",
    messagingSenderId: "107231341618",
    appId: "1:107231341618:web:6ae138fed374929d4f602b",
    measurementId: "G-7QCPF69ZHJ"
  };
  // Initialize Firebase
   
  
  firebase.initializeApp(firebaseConfig);

	
var name;
var id1;
var idd;
let i=0;
var leadsRef = firebase.database().ref();
leadsRef.on('value', function(snapshot) {
	
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
	  console.log("hgfth=="+childData);
	    name =childSnapshot.child("aname").val();
	    id1 =childSnapshot.child("sname").val();
            
	    console.log("shop name==="+name);
            
            i++;
		 $("#tid").append("<a><div style='margin-top:-10px;margin-bottom:-10px;><div class='menu-item-name'>" 
		 +name+"</div><div style='margin_top:350px; position:relative; top:-40px'><button class='button1'  onClick='list(this.id)' id='shop"+i+"'><i>&gt</i></button></div></div></a>");
    
    });
});


    
function list(id)
{
var queryString = "?para1=" + id;
window.location.href = "List.html" + queryString;


}
  
    

