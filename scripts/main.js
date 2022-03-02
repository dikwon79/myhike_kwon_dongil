function read_display_Quote(){

    //get into the right collection 
    db.collection("quotes").doc("tuesday")
    .onSnapshot(tuesdayDoc =>{
        console.log(tuesdayDoc.data());
        document.getElementById("quote-goes-here").innerHTML=tuesdayDoc.data().quote;
    })
}
read_display_Quote();

function insertName(){
    //to check if the user is logged in:
    firebase.auth().onAuthStateChanged(user =>{
        if (user){
            console.log(user.uid); //let me to know who is the user that logged in to get the UID
            currentUser = db.collection("users").doc(user.uid);// will to the firestore and go to the document
            currentUser.get().then(userDoc=>{
                //get the usre name;
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                $("#name-goes-here").text(user_Name);
                //document.getElementById("name-goes-here").innerHTML = user_Name;
            })
        }
    })    
}
insertName();