// theo quan niệm thì độ tuổi cách nhau mỗi 4 năm sẽ là tam hợp
//độ tuổi cách nhau 3 năm sẽ là tứ hành xung
function check(){
    let a=document.getElementById("yourage").value
    let b=document.getElementById("herage").value
    let c=a-b
    if (c%4===0){
        document.getElementById("result").innerHTML=`Kết luận:Tam hợp , chọn ngày sớm và vừa`
    }else if (c%3===0){
        document.getElementById("result").innerHTML=`Kết luận:Tứ hành xung , nên dứt sớm cho đỡ đau khổ`
    }else {
        document.getElementById("result").innerHTML=`Kết luận:không hợp cũng không khắc , cưới hay không thì bác sĩ quyết định`
    }
}


