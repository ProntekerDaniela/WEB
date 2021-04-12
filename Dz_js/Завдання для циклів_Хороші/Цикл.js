function Number() {
    let res = document.getElementById("result");
    let n=parseInt(document.getElementById("startup").value);
    let p=parseInt(document.getElementById("per cent").value);
    let s=parseInt(document.getElementById("target").value);
    
   let i=0;
   do {
    n += p/100*n;
    i = i + 1;
  } while (n < s);
  
res.innerText =` ${i/12}`;
}




  