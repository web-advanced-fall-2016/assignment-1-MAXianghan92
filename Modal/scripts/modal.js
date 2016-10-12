
var eventListeners = function() {
	var an = document.getElementById("an").addEventListener("click", function(){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("overlay_background").style.display = "inherit";
});

var exit = document.getElementById("exit").addEventListener("click", function(){
	console.log("this is working");
	document.getElementById("modal").style.display = "none";
	document.getElementById("overlay_background").style.display = "none";
});

var clickbackground = document.getElementById("overlay_background").addEventListener("click",function(){
	document.getElementById("modal").style.display = "none";
	document.getElementById("overlay_background").style.display = "none";
});

};

var myModal = function(modalContent) {
	document.write(modalContent);
	eventListeners();
};

var modalContent = "<div id=\"flex\"><button id=\"an\">DO NOT click me</button></div><div id=\"modal\"> <button id=\"exit\">You Idiot!</button></div><div id=\"overlay_background\"></div>";

myModal(modalContent);




document.addEventListener('keyup', (event) => {
  var keyName = event.key;

  // As the user release the Ctrl key, the key is no longer active.
  // So event.ctrlKey is false.
  if (keyName === 'Escape') {

  	document.getElementById("modal").style.display = "none";
	document.getElementById("overlay_background").style.display = "none";


  }
}, false);
