// n1 = 5, n2 = 10;
document.getElementById("a5a").innerHTML = `Before swap<br>n1=${n1}<br>n2=${n2}`;
n1 = n1 + n2;
n2 = n1 - n2;
n1 = n1 - n2;
document.getElementById("a5b").innerHTML = `After swap<br>n1=${n1}<br>n2=${n2}`;

//back to original value
n1 = n1 + n2;
n2 = n1 - n2;
n1 = n1 - n2;