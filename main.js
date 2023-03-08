function soma() {
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var soma = parseInt(num1) + parseInt(num2);
    
    var res = document.getElementById('resultado');
    if(soma >= 10) {
        res.style.color = 'green';
    }else{
        res.style.color = 'red';
    }
    res.innerHTML = "A soma entre " + num1 + " e " + num2 + " é " + soma;
}
