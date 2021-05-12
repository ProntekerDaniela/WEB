function validate(){
  let text = document.getElementsByName("text")[0].value;
  if (!isTextValid(text)){
      document.getElementsByClassName("error")[0].innerText = "Введіть посаду в подвійних лапках";
  } else{
      document.getElementsByClassName("error")[0].innerText = "";
  }

  let number1 = document.getElementsByName("number1")[0].value;
  if (!isNumber1Valid(number1)){
      document.getElementsByClassName("error")[1].innerText = "Введіть додатнє число";
  } else{
      document.getElementsByClassName("error")[1].innerText = "";
  }

  let number2 = document.getElementsByName("number2")[0].value;
  if (!isNumber2Valid(number2)){
      document.getElementsByClassName("error")[2].innerText = "Введіть додатнє ціле число";
  } else{
      document.getElementsByClassName("error")[2].innerText = "";
  }


  let number3 = document.getElementsByName("number3")[0].value;
  if (!isNumber3Valid(number3)){
      document.getElementsByClassName("error")[3].innerText = "Введіть додатнє ціле число";
  } else{
      document.getElementsByClassName("error")[3].innerText = "";
  }
  
}

function isTextValid(text){
  return /"[^"]+"/g.test(text);
}

function  isNumber1Valid(number1){
  return /^\d+(?:\.\d{0})?$/g.test(number1);
}


function  isNumber2Valid(number2){
  return /^\d+(?:\.\d{0})?$/g.test(number2);
}


function  isNumber3Valid(number3){
  return /^\d+(?:\.\d{0})?$/g.test(number3);
}