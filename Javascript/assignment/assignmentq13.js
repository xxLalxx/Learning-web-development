var flag = 1;
if (n4 == 0) {
    document.getElementById("a13").innerHTML=`${n4} is neither prime nor composite`
}
else {
  for (var i = 2; i < n4; i++){
    if (n4 % i == 0) {
        flag = 0;
    }
   }
   if (flag == 0) {
     document.getElementById("a13").innerHTML=`${n4} is not prime`
   }
   else {
    document.getElementById("a13").innerHTML=`${n4} is prime`
   }  
}
