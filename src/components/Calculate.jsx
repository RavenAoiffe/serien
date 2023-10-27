import { useState, useEffect } from "react";
import Result from './Result';
const Calculate = ({numero}) => {
    
    const[respuesta,setRespuesta] = useState(0);

    const fibonacci = n => {
        let a = 0, b = 1, c = n;
      
        for(let i = 2; i <= n; i++) {
          c = a + b;
          a = b;
          b = c;
        }
        return c;
      }
      
       // console.log(fibonacci(0))
      
       const triangular = n => {
          return(n*(n+1)/2);
        }
      
      //console.log(triangular(1))
      
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
