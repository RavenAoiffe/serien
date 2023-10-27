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
    return (n * (n + 1) / 2);
}


export function primo(n) {
    let raiz = Math.sqrt(n)
    let log = Math.log(n) * Math.LOG10E;
    return (raiz / log - 1)
}

export function serieN(numero) {
    return (4 * primo(numero) - triangular(numero)) / fibonacci(numero + 2)
}

const Calculate = ({ numero }) => {

    let resultado = serieN(numero)
    return (
        <Result
            resultado={resultado}
        />
    );
}



export default Calculate;