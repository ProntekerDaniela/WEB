let A = [];
function Random(min,max){
    return Math.floor((max-min)*Math.random()+min);
}
function Array_(){
    let a = parseInt(document.getElementById("num").value);
    let li= "";
    let A=[];
    let s = 0
    for(let i = 0;i<a;i++){
        A.push(Random(1,5));
    }
    for (let i = 0;i<a;i++){
        if(A[i]==1){
            A[i] = "Андрій";           
        }
        else if(A[i]==2){
            A[i] = "Олександра";
        }
        else if(A[i]==3){
            A[i] = "Іван";
            s++;
        }
        else if(A[i]==4){
            A[i] = "Ольга";
        }
        else if(A[i]==5){
            A[i] = "Тамара";
        }
        
    }
document.getElementById("result").innerText = `Ім'я Іван зустрічається ${s} раз`
for(let i = 0;i<a;i++){
    li +=`<li>${A[i]}</li>`
}
document.getElementById("list").innerHTML = li;
}