var mouseEvent="empty"
var lastPositionX,lastPositionY
var canvass=document.getElementById ("retrato")
color="red"
caneta=canvass.getContext("2d")
function desenhar (mouse_x,mouse_y) {
    caneta.beginPath()
    caneta.strokeStyle=color
    caneta.fillStyle=color
    caneta.arc(mouse_x,mouse_y,5,0,2*Math.PI)
    caneta.stroke()
    caneta.fill()
}
canvass.addEventListener("mouseDown",myMouseDown)
function myMouseDown(e){
    mouseEvent="mouseDown"
}
canvass.addEventListener("mousemove",myMouseMove)
  
function myMouseMove(e){
    PositionMouseX=e.clientX-canvass.offsetLeft
    PositionMouseY=e.clientY-canvass.offsetTop
    if (mouseEvent=="mouseDown")
     {desenhar(PositionMouseX,PositionMouseY)
    
}
}
canvass.addEventListener("mouseup", myMouseUp); 
function myMouseUp(e) 
{ mouseEvent = "mouseUP"; } canvass.addEventListener("mouseleave", myMouseLeave); 
function myMouseLeave(e) 
{ mouseEvent = "mouseleave"; }
