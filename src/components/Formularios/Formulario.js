import React, {Fragment, useState } from 'react';

const Formulario = () => {
    
    //creamos el state
    const[datos, setDatos] = useState({
        nombre: '', //por estandar deben llamarse como el name de los input
        apellido: '',
    })

    const handleInputChange = (event)=>{
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value //Por esto es necesario que las variables se llamen igual al name de los inputs, porque
            //así el sabe que valor va en que atributo.
        })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)
    }

    return (  
        <Fragment>
            <h1>Formulario</h1>
            <form className = "row" onSubmit={enviarDatos}>
                <div className = "col-md-3">
                    <input 
                        placeholder="Ingrese el nombre"
                        className = "form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                </div>
                <div className = "col-md-3">
                    <input
                        placeholder = "Ingrese el apellido"
                        className = "form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className = "col-md-3">
                    <button className = "btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;