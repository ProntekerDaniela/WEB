function time(){
    let res = document.getElementById("result");
 
    for (let j = 0; j <= 23; j++) { 
        document.write(" ");
        for (let k = 12; k > j; k--) {
           document.write(" ");
        } 
        for (let k = 12; k > j; k--) {
            document.write(" ");
         }
        for (let i = 1; i < j +1; i++) {
               document.write(`${i}`); 
        }
        
        document.write(`<br/>`);

    } 
}   




