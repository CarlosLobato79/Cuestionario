


//Manejador de la prueba

export class Prueba{
    indiceDePregunta = 0;
    puntaje = 0;
    cantidadPregunta
    constructor(objetoPreguntas) {
        this.preguntas = objetoPreguntas;
        this.cantidadPregunta = objetoPreguntas.length
    }

    termine(){
        return this.indiceDePregunta !==  this.preguntas.length;
    }

    obtenerPregunta(){
        return this.preguntas[this.indiceDePregunta]
    }

    comprobarRespuesta(value){
        console.log("Comprobando respuesta")
        console.log(this.preguntas[this.indiceDePregunta].getRespuesta() + "\t value: " + value)
        if(this.preguntas[this.indiceDePregunta].getRespuesta() === Number(value)){
            this.puntaje++;
            const respuestas = this.preguntas[this.indiceDePregunta].getOpciones();
            Swal.fire({
                title: 'Respuesta Correcta!',
                text: `Respuesta: ${respuestas[this.preguntas[this.indiceDePregunta].getRespuesta()]}`,
                icon: 'success',
                confirmButtonText: 'Siguiente'
            })

            console.log(`Este es tu puntaje: ${this.puntaje}`)

        }else{
            const respuestas = this.preguntas[this.indiceDePregunta].getOpciones();
            Swal.fire({
                title: 'Respuesta Incorrecta!',
                text: `Respuesta: ${respuestas[this.preguntas[this.indiceDePregunta].getRespuesta()]}`,
                icon: 'error',
                confirmButtonText: 'Siguiente'
            })
        }
        this.indiceDePregunta++;
    }

    reiniciarTest(){
        this.indiceDePregunta = 0
        this.puntaje = 0
    }


}