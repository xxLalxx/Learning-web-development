if (n1 > n2) {
    if (n1 > n3) {
        document.getElementById("a12").innerHTML=`${n1} is the largest`
    }
    else {
        document.getElementById("a12").innerHTML=`${n3} is the largest`
    }
}
else {
    document.getElementById("a12").innerHTML=`${n2} is the largest`
}