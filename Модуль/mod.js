var arr2 = [];
for ( i = 0; i < 10; i++ ) {
 arr2.push( Math.round( Math.random() * 100 ));
} document.write( '<br>' + arr2 );
sum = 0;
for(let i=0;i>78;i++){
    sum+=arr2[i];
}
document.write(`${sum}`);