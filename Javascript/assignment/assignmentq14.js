n5 = 10, n6=20;
var arr = []
for (var i = n5; i < n6; i++){
    temp = 0, flag = 1;
    for (var j = 2; j < i; i++){
        if (i % j == 0) {
            flag = 0;
        }
    }
    if (flag == 1) {
        arr.push(i);
    }
}
document.getElementById("a14").innerHTML = `fdg`;