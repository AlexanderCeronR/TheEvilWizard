import React from 'react';

function Juego(props){
    let [numeroUsuario, setNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random() * props.limite) + 1);
    
    function comprobarNumeroUsuario(evento){
        setNumeroUsuario(evento.target.value);
    }

    function comprobarNumeroMaquina(evento){
        if(numeroUsuario == numeroMaquina){
            alert("Número adivinado!");
        }else{
            alert("Ese no es!, La respuesta era " + numeroMaquina);
        }
        setNumeroMaquina(Math.floor(Math.random() * props.limite) + 1);
    }

    return(
        <div>
            <p>Elige un número del 01 al 10</p>
            <input type="number" placeholder='Ingresa tu apuesta' min={1} max={10} onChange={comprobarNumeroUsuario}></input>
            <br/>
            <button onClick={comprobarNumeroMaquina}>Adivinar</button>
        </div>
    )
}

export default Juego;