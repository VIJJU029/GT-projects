console.log("object")

function clr(){
  document.getElementById("result").value ="";


}
function display(val){
 document.getElementById('result').value += val; //5 ,5+v

}
function equate(){
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value= y


}

