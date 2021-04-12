function Number1() {
    let res = document.getElementById("result1");
    let num1=parseInt(document.getElementById("centimeters").value);
    let num2=2.54;
    let num=num1*num2;
    res.innerText =` ${num}`;
}
function Number2() {
    let res = document.getElementById("result2");
    let num1=parseInt(document.getElementById("kilograms").value);
    let num2=2.2046;
    let num=num1*num2;
    res.innerText =` ${num}`;
}
function Number3() {
    let res = document.getElementById("result3");
    let num1=parseInt(document.getElementById("kilometers").value);
    let num2=0.62137;
    let num=num1*num2;
    res.innerText =` ${num}`;
}



  