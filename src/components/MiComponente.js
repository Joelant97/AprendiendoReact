// import React from 'react'; 
import React, {Component} from 'react'; 

// class MiComponente extends React.Component {
    //Una manera mas limpia de hacer que extienda de React.Component
class MiComponente extends Component {

    render(){

        //Objeto JSON
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'], 
            calorias: 400

        }

        return (
            // <h1>Hola, soy el componente llamado: MiComponente</h1>

            //Fragment nos permite saltarnos la restricción de no poder usar varias 
            //etiquetas al retornar aqui. 
            // <React.Fragment>
            //     <h1>Hola, soy el componente llamado: MiComponente</h1>
            //     <hr/>
            //     <h2>Estoy Probando el componente</h2>
            // </React.Fragment>

            //Otra forma de encapsular
            // <div className="mi-componente">
            //     <h1>Hola, soy el componente llamado: MiComponente</h1>
            //     <hr/>
            //     <h2>Estoy Probando el componente</h2>
            // </div>

            //Madejando el Objeto JSON
            <div className="mi-componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <hr/>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <hr/>
                {/* Para recorrer el Array en una lista ordenada <ol> */}
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente); 
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                
            </div>
        );
    }
}

export default MiComponente; 