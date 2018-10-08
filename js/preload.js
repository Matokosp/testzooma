// PRELOAD BY LOAD


// window.addEventListener("load", function(){
// 	var load_screen = document.getElementById("load_screen");
// 	document.body.removeChild(load_screen);
// });


// PRELOAD BY TIME


setTimeout(function(){        
    $('#load_screen').fadeOut();
    $('#load_screen').delay(150).fadeOut('slow'); 
}, 4000);