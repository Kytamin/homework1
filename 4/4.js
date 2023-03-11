function tocheck(){
      let a=+document.getElementById("1").value
      let b=+document.getElementById("2").value
      let c=+document.getElementById("3").value
    if(a===0||b===0||c===0){
        document.getElementById("result").innerHTML=` không phải tam giác`
        return
    }


    if (a===b&&a===c&&b===c){
        document.getElementById("result").innerHTML=`tam giác đều`
    }else if (a*a+b*b===c*c||a*a+c*c===b*b||b*b+c*c===a*a){
        document.getElementById("result").innerHTML=` tam giác vuông`
    }else if (((a+b)<=c || (a+c)<=b || (b+c)<=a)){
        document.getElementById("result").innerHTML=`không phải là tam giác`
    }else if((a===b && (a+b)>c)||(a===c && (a+c)>b)||(b===c && (b+c)>a)){
        document.getElementById("result").innerHTML="tam giác cân"

    }else {
        document.getElementById("result").innerHTML="tam giác thường"
    }
}