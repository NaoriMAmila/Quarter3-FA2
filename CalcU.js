    var num1;
    var num2
        
function add(num1, num2) { 
    num1 =parseFloat(document.getElementById('num1').value); num2 =parseFloat(document.getElementById('num2').value);
    const s =num1+num2; 
    document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + s;
}
function difference(num1, num2) { 
    num1 =parseFloat(document.getElementById('num1').value); num2 =parseFloat(document.getElementById('num2').value);
    const d =num1-num2; 
    document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + d;
} 
function product(num1, num2) { 
    num1 =parseFloat(document.getElementById('num1').value); num2 =parseFloat(document.getElementById('num2').value);
    const p =num1*num2; 
    document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + p;
}
function quotient(num1, num2) { 
    num1 =parseFloat(document.getElementById('num1').value); num2 =parseFloat(document.getElementById('num2').value);
    const di =num1/num2; 
    document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + di;
}
function remainder(num1, num2) { 
    num1 =parseFloat(document.getElementById('num1').value); num2 =parseFloat(document.getElementById('num2').value);
    const r = num1%num2; 
    document.getElementById("result").innerHTML = "The remainder from the quotient of " + num1 + " and " + num2 + " is " + r; 
}