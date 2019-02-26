var btn = document.getElementById("btn")
var alles = document.getElementById("alles")
var dragged

/* events fired on the draggable target */
document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();

}, false);

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "#6AE368";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        // dragged.parentNode.removeChild( dragged );  
        // event.target.appendChild( dragged );

        var tgt = event.currentTarget.children;

        event.currentTarget.replaceChild(dragged, tgt);
        dragged.appendChild(tgt);

        console.log(event.currentTarget)

        // event.target.replaceChild(dragged, event)
        // console.log(dragged)
    }  
}, false);

btn.addEventListener("click", addSong);



function addSong(){
	if(input.value === "") {
		alert("Je moet wel iets invullen, knecht!");
	} 
	else { 
		var text = input.value;
        var item = `<div class="dropzone"><div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">${text}</div>`
		alles.insertAdjacentHTML('beforeend', item);
	}
}
