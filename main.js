function samFunct(el) {
var x = el.clientX;
var y = el.clientY;
var coo = "Coordinates are: (" + x + "," + y + ")";
document.getElementById("demo").innerHTML = coo;
}
function clearCoo() {
document.getElementById("demo").innerHTML = "Keep mouse pointer within";
}
