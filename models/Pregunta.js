
//Objeto pregunta

export class Pregunta {
    constructor(pregunta,opciones,respuesta) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    getPregunta(){
        return this.pregunta;
    }

    getRespuesta(){
        return this.respuesta;
    }

    getOpciones(){
        return this.opciones;
    }
}