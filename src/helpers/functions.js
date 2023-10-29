//n term in fobonacci serie
export const fibonacci = n => {
    let a = 0, b = 1, c = n;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}


//n term triangular function
export const triangular = n =>{
    let suma = Number(n)+1;
    return (n * suma) / 2;
}

//test is or not primo
export const isPrimo = numero => {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
}

// n-ésimo primo
export const primo = n => {
    if (n < 1) return "El valor de n debe ser positivo.";
    let count = 0;
    let numero = 1;

    while (count < n) {
        numero++;
        if (isPrimo(numero)) {
            count++;
        }
    }

    return numero;
}