// theo quan niệm thì độ tuổi cách nhau mỗi 4 năm sẽ là tam hợp
//độ tuổi cách nhau 3 năm sẽ là tứ hành xung
function check(){
    let a=document.getElementById("yourage").value
    let b=document.getElementById("herage").value

    if (a===""||b===""){

    document.getElementById("result").innerHTML="Nhập năm sinh để kiểm tra"
       return
    }

    let c=a-b
    if (c%4===0){
        document.getElementById("result").innerHTML=`Kết luận:Hai bạn thuộc vàoTam hợp , Nghĩ đặt tên con là gì từ giờ là đẹp`
    }else if (c%3===0){
        document.getElementById("result").innerHTML=`Kết luận:Hai bạn thuộc Tứ hành xung , Không hợp , `
    }else {
        document.getElementById("result").innerHTML=`Kết luận:không hợp cũng không khắc , cưới hay không thì bác sĩ quyết định`
    }

}


