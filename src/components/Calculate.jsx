import Result from './Result';

export function fibonacci(n) {
    let a = 0, b = 1, c = n;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
export function triangular(n) {
    let suma = Number(n)+1;
    return (n * suma) / 2;
}

export function sum(a,b){
    return a+b;
}

export function primo(n) {
    let total = 1; 
	for (let i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}


export function serieN(numero) {
    let firtsO = 4 * primo(numero)
    let secO = triangular(numero-1)
    let tercero = fibonacci(numero+2)
    
    return firtsO-secO/tercero;
}

const Calculate = ({ numero }) => {

    let resultado = serieN(numero)

    console.log(serieN(numero))
    console.log(triangular(numero))
    console.log(fibonacci(numero))

    return (
        <Result
            resultado={resultado}
        />
    );
}



export default Calculate;