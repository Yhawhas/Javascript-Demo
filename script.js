
function resetFunction(){
document.getElementById("txt").innerHTML="";
}
function addTextFunction(){
if(textInput.value == ""){
alert("No empty string");
}else{
var para = document.createElement("P");
var addText= document.createTextNode(textInput.value);
para.appendChild(addText);
document.getElementById("txt").appendChild(para);
document.getElementById("textInput").value = "";
}
}

