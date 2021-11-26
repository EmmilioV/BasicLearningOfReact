import React, {useEffect} from 'react';
import { useParams } from 'react-router';

const Civilization = () => {

    //Este hook nos sirve para recibir el Id (que es el parametro en este ejmplo) que es enviado por la ruta
    const {id} = useParams() //el nombre de la variable dentro de las llaves debe de ser nombrada igual que como se indico por la ruta en App.js
    console.log(id)

    const [civilization, setCivilization] = React.useState([])

    //En caso de no importarse este hook se hace React.useEffect
    useEffect(()=>{
        //Llamado a la API

        const obtenerDatos = async () =>{
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            //Para transformar eso a un JSON
            const civilization = await data.json()
            setCivilization(civilization)
        }
        obtenerDatos()
    }, [id]) //Los corchetes indican que esto solo se ejecutara la primera vez al cargar la página, porque sino entra en un ciclo infinito y evita que se pierda el id


    return ( 
        <div>
            <h2>{civilization.name}</h2>
            <p>{civilization.civilization_bonus}</p>
        </div>
    );
}

export default Civilization;