import React, { Fragment } from 'react';
import Avatar from './Avatar';

const Comentario = (props) => {
    console.log(props)
    return ( 
        <Fragment>
            <h2>Comentarios</h2>
            <hr/>
            <div className="media">
                {/*<img src="https://via.placeholder.com/64" alt="" className="mr-3"/> => para evitar esto creo un subcomponente:*/}
                <Avatar urlImagen={props.sujeto.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{props.sujeto.nombre}</h5>
                    {props.sujeto.descripcion}
                </div>
            </div>

        </Fragment>
    );
}

export default Comentario;