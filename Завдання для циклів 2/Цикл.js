function number() {
    let res = document.getElementById("result");
    let x=parseInt(document.getElementById("x").value);
    let y=parseInt(document.getElementById("y").value);
   
  while (x != 0 & y!=0)
  {
   let a = (x + y)/2;
   res.innerText = ` ${a}`;
  } 
 

}