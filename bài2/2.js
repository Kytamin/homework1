let n=prompt("số điện")
let totalprice

if(n>=0&&n<=50){
     totalprice=n*1678
}else if (n>=50&&n<=100){
    totalprice=(n-50)*1734+(50*1678)
}else if (n>=101&&n<=200){
    totalprice=(n-100)*2014+(50*1678)+(50*1734)
}else if(n>=201&&n<=300){
    totalprice=(n-200)*2536+(50*1678)+(50*1734)+(100*2014)
}else if (n>=301&&n<=400){
    totalprice=(n-300)*2834+(50*1678)+(50*1734)+(100*2014)+(100*2536)
}else if (n>=401){
    totalprice=(n-400)*2927+(50*1678)+(50*1734)+(100*2014)+(100*2536)+(100*2834)
}
alert(`giá tiền điện phải trả:${totalprice.toLocaleString()} VND`)