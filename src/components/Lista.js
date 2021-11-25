import React, { Fragment, useState } from 'react';

const Lista = () => {

    const[arrayNumero, setArrayNumero] = useState([1,2,3,4,5]);
    const [numero, setNumero] = useState(6);

    const agregarNumero =()=>{
        setNumero(numero + 1)
        setArrayNumero([
            ...arrayNumero,
            numero
        ])
    }

    return ( 
        <Fragment>
            <h2>Lista</h2>
            {
                arrayNumero.map((item, index) => 
                    <p key={index}>{index} = {item}</p>
                )
            }
            <button onClick = {agregarNumero}>Agregar número</button>
        </Fragment>
    );
}

export default Lista;