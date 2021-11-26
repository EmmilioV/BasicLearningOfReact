import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'

const Nosotros = () => {
    
    const [civilizations, setCivilizations] = React.useState([])

    //En caso de no importarse este hook se hace React.useEffect
    useEffect(()=>{
        obtenerDatos()
    }, []) //Los corchetes indican que esto solo se ejecutara la primera vez al cargar la página, porque sino entra en un ciclo infinito


    //Llamado a la API

    const obtenerDatos = async () =>{
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        //Para transformar eso a un JSON
        const jsonCivilizations = await data.json()
        setCivilizations(jsonCivilizations.civilizations)
    }

    return ( 
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    civilizations.map(item => (
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Nosotros;