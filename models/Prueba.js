


//Manejador de la prueba

export class Prueba{
    indiceDePregunta = 0;
    puntaje = 0;
    cantidadPregunta
    constructor(objetoPreguntas) {
        this.objetoPreguntas = objetoPreguntas;
        this.cantidadPregunta = objetoPreguntas.length
    }

    esLaUltima(){
        return this.indiceDePregunta !==  this.objetoPreguntas.length;
    }

    obtenerPregunta(){
        return this.objetoPreguntas[this.indiceDePregunta]
    }

    comprobarRespuesta(value,callback){
        const respuestaCorrecta = this.objetoPreguntas[this.indiceDePregunta].getRespuesta();
        const respuestas = this.objetoPreguntas[this.indiceDePregunta].getOpciones();

        function mensaje(indiceCorrecta){
            if(indiceCorrecta === Number(value)){
                return ['Respuesta Correcta',`Respuesta: ${respuestas[respuestaCorrecta]}`,'success',true]
            }else{
                return ['Respuesta Incorrecta',`Respuesta:  ${respuestas[respuestaCorrecta]}`,'error',false]
            }
        }

        const [Titulo,texto,icono,pass] = mensaje(respuestaCorrecta);
        Swal.fire({
            title: Titulo,
            text: texto,
            icon: icono,
            confirmButtonText: 'Siguiente'
        }).then((result) => {
            if (result.isConfirmed) {
                callback(true)
            }
        })

        if(pass){
            this.puntaje++
        }
        this.indiceDePregunta++;
    }


    reiniciarTest(){
        this.indiceDePregunta = 0
        this.puntaje = 0
    }


}