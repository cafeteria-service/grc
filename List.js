/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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

   
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("=")[1];
console.log("query===>"+queries);
 console.log("hwllo");
 var rootRef1 = firebase.database().ref().child(queries);
 

    rootRef1.once('value', function(snapshot) {
      
		  shopname=snapshot.child("aname").val();
		  $("#id1").append("<div><h1 style='text-align:center;color:white;' >"+shopname+"</h1></div>");   

});

    
var i=0;
var values1;
var item_id;
var list=[];
var list1;
// to display grocery
var rootRef11 = firebase.database().ref().child(queries).child("Grocery").child("tea and coffe");
var name;
var price;
    

rootRef11.on('value', function(snapshot) {
	
	 snapshot.forEach(function(childSnapshot) {
    name =childSnapshot.child("name").val();
	 item_id=childSnapshot.child("id").val();
   console.log(item_id);
 
    
    i++;
	
	
    $("#tid1").append("<div style='margin-top:30px;margin-bottom:30px;'><div class='menu-item-name'>" +name+"</div><div class='box'><select  onClick='selectqunt(this.id,item_id)'id='my_menu"+i+"'></select></div><div class='box1'><button class='button1' onClick='addToCart()'>Add</button></div></div>");
 

});
});


function selectqunt(dropdown_id,list)
{
	
		
	    var rootRef14 = firebase.database().ref().child(queries).child("Grocery").child("tea and coffe").child(list);
	    rootRef14.on('value', function(snapshot) {
      
	    var name1 =snapshot.child("quntity").val();
	
	    console.log("name=====" +name1);
	    var values1=Object.values(name1);
	    console.log("values1====" +values1);
	  
	

		
           select_default("HTML",values1, dropdown_id);
	
				  
			
		});
	

}
		

function select_default(my_option, all_options, dropdown_id){
				var temp = "";
				for(var i = 0; i < all_options.length; i++){
					if(my_option == all_options[i]){
						temp += "<option value='"+all_options[i]+"' selected>"+all_options[i]+"</option>";
					}else{
						temp += "<option value='"+all_options[i]+"'>"+all_options[i]+"</option>";
					}
				}
				document.getElementById(dropdown_id).innerHTML = temp;
}
			
				
		
		

// to display household
var rootRef12 = firebase.database().ref().child(queries).child("households");
var name;
var price;
    


    rootRef12.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    name =childSnapshot.child("name").val();
    price =childSnapshot.child("price").val();
    
    console.log("name="+name);
    console.log("price="+price);
    
    $("#tid2").append("<div style='margin-top:30px;margin-bottom:30px;'><div class='menu-item-name'>" +name+"</div><div class='menu-item-price'>" +price+"</div><div class='box'><input type='number' min='0'  value=0> </div><div class='box1'><button class='button1' onClick='addToCart()'>Add</button></div></div>");
});
});

// to display vegetables

var rootRef13 = firebase.database().ref().child(queries).child("vegetables");
var name;
var price;
    


    rootRef13.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    name =childSnapshot.child("name").val();
    price =childSnapshot.child("price").val();
    
    console.log("name="+name);
    console.log("price="+price);
    
    $("#tid3").append("<div style='margin-top:30px;margin-bottom:30px;'><div class='menu-item-name'>" +name+"</div><div class='menu-item-price'>" +price+"</div><div class='box'><input type='number' min='0'  value=0> </div><div class='box1'><button class='button1' onClick='addToCart()'>Add</button></div></div>");
});
});