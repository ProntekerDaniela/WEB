function time(){
    let res = document.getElementById("result");
    let n = parseInt(document.getElementById("second").value);

    let min = (n / 60)%60;
    let hours = (n/60)/60;
    
    res.innerText =`${ hours + ":" + min + ":"}`;
}


