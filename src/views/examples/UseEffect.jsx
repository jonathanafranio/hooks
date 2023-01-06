import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useEffect } from 'react';
import SectionTitle from '../../components/layout/SectionTitle';
// eslint-disable-next-line
function calcFatorial(num) {
    if(isNaN(num)) return -1;
    const n = parseInt(num);
    if(n < 0) return -1;
    if(n === 0) return 1;

    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState('impar')

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number]);

    useEffect(() =>{
        if(fatorial > 1000000) {
            document.title = 'Eita!!!'
        }
    }, [fatorial])

    useEffect(() => {
        const isEvenOrOdd = fatorial % 2 === 0 ? 'par' : 'ìmpar';
        setStatus(isEvenOrOdd)
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{ fatorial === -1 ? 'Não existe' : fatorial }</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{ status }</span>
            </div>
        </div>
    )
}

export default UseEffect
