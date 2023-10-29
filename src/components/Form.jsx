import { useState } from "react";
import Calculate from "./Calculate";
import imgExample from '../../public/unnamed.png';

const Form = () => {

    const [numero, setNumero] = useState('');

    const limpiarCampo = () => {
        document.getElementById('numbern').value = 0;
        setNumero(0)
    }
    return (
        <>
            <form className="space-y-12 border-b border-gray-900/10 pb-12">
                <div>
                    <div>
                        <p className="mt-1 text-sm leading-6 text-gray-600 text-xl py-2">Introduzca un número positivo y mayor a cero para calcular la función "serie(n)"</p>
                        <img src={imgExample} alt="serien" className="w-80 py-4"/>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="number" name="numbern" id="numbern"
                                            className="border block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="3"
                                            onChange={e => setNumero(e.target.value)}
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900 bg-gray-300 py-2 px-4 rounded-md"
                    onClick={limpiarCampo}
                    >Limpiar</button>
                </div>
            </form>
            {numero === '' || numero <= 0 ? (<p className="py-4 text-md">Introduzca un número válido</p>) : (
                    <Calculate 
                    numero={numero}
                    />
            )         
            }

        </>
    );
}

export default Form;
