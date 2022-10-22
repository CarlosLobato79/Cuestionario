
export class Intefaz {

    mostrarPreguntas(textPregunta){
       const questionTitle = document.getElementById('contenido__pregunta');
       questionTitle.innerText = textPregunta;
    }

    mostrarOpciones(choices,callback){
        const opcionesContenedor = document.getElementById('opciones')
        opcionesContenedor.innerHTML = ""
        for (let i = 0; i < choices.length;i++){
            const button = document.createElement('button');
            button.innerText = choices[i]
            button.className = 'contenido__opcion';
            button.value = i;
            button.id = "contenido__opcion"
            button.addEventListener("click",()=>{
                callback(button.value)
            } );

            opcionesContenedor.append(button)
        }
    }

    avanceTest(cantPreguntas,actual){
        const pieDePagina = document.getElementById('pie__progreso')
        pieDePagina.innerText = `Pregunta ${cantPreguntas+1} de ${actual}`
    }

    testTerminado(puntaje, cantPreguntas){
        Swal.fire({
            title: 'Test Terminado',
            text: `Puntaje Total ${puntaje} de ${cantPreguntas} `,
            icon: 'info',
            confirmButtonText: 'Volver Intentarlo'
        })
    }

}