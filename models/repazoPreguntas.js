import { objectoPreguntas } from "./Preguntas.js";
 import {data} from "../data/data.js";

export class Repazo{

    constructor(objetoPreguntas) {
    this.preguntas = objetoPreguntas;
    }


    renderizarPreguntas(){
        const opcionesContenedor = document.getElementById('opciones')
        opcionesContenedor.innerHTML = ""
        // const contenedor = document.createElement('div')
        // contenedor.className = "contenedor-preguntas";
        // opcionesContenedor.append(contenedor);
        for (let i = 0; i < this.preguntas.length; i++){
            let number = Number(this.preguntas[i]['answer'])
            console.log(this.preguntas[i]['question'])
            console.log(number)
            console.log(this.preguntas[i]['choice'])
            // const cont = document.createElement('div')
            // cont.className = 'contenedor-cont'
            //
            // const pregunta = document.createElement('h3')
            //
            // pregunta.innerText = this.preguntas[i][i]+'';
            //
            // const respuesta = document.createElement('span');
            // respuesta.innerText = 'respuesta...';
            //
            // cont.append(pregunta);
            // cont.append(respuesta);
            // opcionesContenedor.append(cont)
        }





    }
}

const L = new Repazo(data);
L.renderizarPreguntas();