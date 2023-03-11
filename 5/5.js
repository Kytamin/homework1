function handle(){
    let a=document.getElementById("entera").value
    let b=document.getElementById("enterb").value
    let c=document.getElementById("enterc").value
    let delta=(b*b)-(4*a*c)
    if(delta>0){
        x=((-b+Math.sqrt(delta))/2*a)
        z=((-b-Math.sqrt(delta))/2*a)
        document.getElementById("result").innerHTML=`Phương trình có 2 nghiệm x1=${x} và x2=${z} `
    }else if(delta===0){
        n=-(b/(2*a))
        document.getElementById("result").innerHTML=`Phương trình có nghiệm kép x1=x2=${n}`
    }else {
        document.getElementById("result").innerHTML=`Phương trình vô nghiệm`
    }
}