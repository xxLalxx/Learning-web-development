var ans;

function add(n1, n2) { 
    ans = n1 + n2;
    return ans;
}
function sub(n1, n2) {
    ans = n1 - n2;
    return ans;
 }
function mul(n1, n2) {
    ans = n1 * n2;
    return ans;
 }
function div(n1, n2) { 
    ans = n1 / n2;
    return ans;
}

function calculator() {
    let n1, n2,op,result;
    n1 = parseInt(document.getElementById("num1").value);
    n2 = parseInt(document.getElementById("num2").value);
    op = document.getElementById("operator").value;
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("ans").value = "Enter a valid value";
    }
    else if (op == '+') {
        result = add(n1, n2);
    }
    else if (op == '-') {
        result = sub(n1, n2);
    }
    else if (op == 'x') {
        result = mul(n1, n2);
    }
    else if (op == '/') {
        result = div(n1, n2);
    }
    else {
        result = 'Error';
    }
    document.getElementById("ans").innerHTML = result; 
    // console.log(result);
}

