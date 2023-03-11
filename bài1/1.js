let n=prompt("Dân số")
let m=prompt("Diện tích")
    p=n/m
if(p>1000){
    alert("Dân số quá đông đúc")
}else if(p>=0&&p<=1000){
    alert("Dân số không quá đông đúc")
}else {
    alert("dữ liệu không thực tế")
}