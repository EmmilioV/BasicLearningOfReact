import React, { Fragment, useState } from "react";
import { useForm } from 'react-hook-form'


const EjemploUno = () => {

    const {register, formState:{errors}, handleSubmit} = useForm()

    const [entradas, setEntradas] = useState([])

    const onSubmit = (data, e) =>{
        console.log(data)
        setEntradas([
            ...entradas,
            data
        ])
        e.target.reset()
    }

    return ( 
        <Fragment>
            <h1> Ejemplo 1 </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="Titulo"
                    placeholder="Ingrese titulo"
                    className="form-control my-2"
                    {...register(
                            "Titulo",{ 
                                required: {value: true, message: 'Campo obligatorio'},
                                minLength: {value: 2, message: 'Minimo 2 letras'}
                            }
                        )
                    }
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.Titulo?.message}
                </span>
                <input
                    name="Descripcion"
                    placeholder="Ingrese descripcion"
                    className="form-control my-2"
                    {...register(
                            "Descripcion",{ 
                                required: {value: true, message: 'Campo obligatorio'},
                                minLength: {value: 2, message: 'Minimo 2 letras'}
                            }
                        )
                    }
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.Descripcion?.message}
                </span>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    entradas.map((item, index) =>
                        <li key={index}>{item.Titulo} : {item.Descripcion}</li>
                    )
                }
            </ul>
        </Fragment>
    );
}

export default EjemploUno;
