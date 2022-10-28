function justme(){
    var y = document.forms["justtry"]["surname"].value;
    if( y===""){
        alert("Invalid Input");
    }
    var x = document.forms["justtry"]["firstname"].value;
    if( x===""){
        alert("Invalid Input");
    }else{
        alert("Message received. Thank you.");
    }
}

