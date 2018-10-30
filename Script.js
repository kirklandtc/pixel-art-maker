
document.addEventListener("DOMContentLoaded",function(){
  //console.log("Hello World");

  //declaring variable named "board" and assigning the first div with class board
var board= document.querySelector(".board");
  //declaring variable name "palette" and assigining the first div with class palette
let palette= document.querySelector(".palette");
console.log("this is palette" , palette);

//globally declare selectedColor default variable
let selectedColor = "red";

//get colors
// addEventListener to each div
// inside the addEventListener if clicked change value of selectedcolor to background color of div clicked
let color = document.querySelectorAll(".color");
//console.log(color);

//document.querySelectorAll("container").addEventListener("click");
//for (let i = 0; color.length, i++);

palette.addEventListener("click",function(event){
//console.log("event.target", event.target.style.backgroundColor);
selectedColor = event.target.style.backgroundColor
})

//create the grid - with event listener on each div to apply color
for (let i = 0; i < 513; i++){
  let cell = document.createElement("div");
  cell.style.width = "16.5px";
  cell.style.height = "16px";
  cell.style.float = "right";
  cell.style.backgroundColor = "white";
  cell.style.border = "solid black .5px";
  board.appendChild(cell);
  cell.addEventListener("click",function(event){
  cell.style.backgroundColor = selectedColor;

//Added this code not sure if it will work
  const init = function() {

      // Build the grid event listener.
  //document.getElementById("sizePicker").addEventListener("submit", makeGrid, false);

      // Set the grid's color listener.
  //elements.gridCanvas.addEventListener("click", setGridColor);
  };
  //console.log("click");
  })
}
//cell.style.backGroundColor=selectedColor};= selectedColor;

})
