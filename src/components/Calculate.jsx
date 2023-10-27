import Result from './Result';

export function sum(a,b){
    return a + b
}

export function fibonacci(n){
    let a = 0, b = 1, c = n;
  
    for(let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
  export function triangular(n){
    return(n*(n+1)/2);
  }
 
const Calculate = ({numero}) => {
      
      const primo = n =>{
        let raiz = Math.sqrt(n)
        let log = Math.log(n) * Math.LOG10E;
        return (raiz/log-1)
      }

      let resultado = (4*primo(numero) - triangular(numero))/fibonacci(numero + 2)

    return (
        <Result
            resultado={resultado}
        />
    );
}



export default Calculate;