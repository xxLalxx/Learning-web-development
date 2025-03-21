n1 = 10, n2 = 20, n3 = 5;
var a = n1, b = n2, c = n3;
var discriminant, root1, root2;
//b^2-4ac is called discriminant
discriminant = ((b ** 2) - (4 * a * c)) / (2 * a);

if (discriminant == 0) {
    root1 = root2= ((-b) / (2 * a));
}
else if (discriminant > 0) {
    root1 = (-b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
    root1 = (-b - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
}

document.getElementById("a6a").innerHTML = `a=${n1}, b=${n2}, c=${n3}, discriminant=${discriminant}, root1=${root1}, root2=${root2}`;