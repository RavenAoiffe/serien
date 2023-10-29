import Result from './Result';
import { primo, triangular, fibonacci } from '../helpers/functions';

export function serieN(num) {
    let numberFormat = Number(num)
    let firtsOperation = 4 * primo(numberFormat)
    let secondOperation = triangular(numberFormat - 1)
    let thirdOperation = fibonacci(numberFormat + 2)
    let rest = firtsOperation - secondOperation;
    return Number((rest / thirdOperation).toFixed(2));
}

const Calculate = ({ numero }) => {

    let result = serieN(numero)
    let formatNumberToPrint = Number(numero)

    return (
        <>
            <div className="flex text-xl items-center py-4">
                <p>Serie(n) =</p>
                <div className="px-2 text-center flex-col items-center justify-center">
                    <p className='border-b-2'>(4 * {primo(formatNumberToPrint)} - ({triangular(formatNumberToPrint - 1)}))
                    </p>
                    <p className='text-center'>
                        {fibonacci(formatNumberToPrint + 2)}
                    </p>
                </div>
            </div>
            <Result
                result={result}
            />
        </>
    );
}



export default Calculate;