import React from 'react';
//import Contador from './components/Contador'
import EjemploUno from './components/EjemploUno';
import Formulario from './components/Formularios/Formulario';
import FormularioHook from './components/Formularios/FormularioHook';
import Saludo from './components/components and props/Saludo';
import Comentario from './components/components and props/Comentario';
/*import Jsx from './components/Jsx';
import Lista from './components/Lista';*/


function App() {

  {/* este pedazo de còdigo va de la mano con los props: */}
    const sujeto1 = {
      nombre: "Pableto",
      urlImagen: "https://via.placeholder.com/64",
      descripcion: 'A pableto le gusta comer empanadas'
    }

    const sujeto2 = {
      nombre: "Rauleto",
      urlImagen: "https://via.placeholder.com/32",
      descripcion: 'A rauleto le gusta comer arepas'
    }

  return (
    <div className = "container mt-5">
      {/*<Formulario/>*/}
      {/*<FormularioHook/>*/}
      {/*<EjemploUno/>*/}

      {/*Esto se llama props, es la comunicación entre componentes y sus propiedades y ayuda a la reutilizacion de estos:*/}
        <Saludo persona="Pableto" edad={25}/>
        <Saludo persona="Rauleto"/>
        <Comentario sujeto={sujeto1}/>
        <Comentario sujeto={sujeto2}/>

    </div>
  );
}

export default App;
