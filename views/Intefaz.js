
export class Intefaz {

    mostrarPregunta(textPregunta){
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
            button.id = "contenido__opcion";
            //Al precionar el boton retorno el valor del boton
            button.addEventListener("click",()=>{
                callback(button.value)
            } );

            opcionesContenedor.append(button)
        }
    }

    numeroPregunta(cantPreguntas,actual){
        const pieDePagina = document.getElementById('pie__progreso')
        pieDePagina.innerText = `Pregunta ${cantPreguntas+1} de ${actual}`
    }

    testTerminado(puntaje, cantPreguntas,callback){
        //Revizamos el resultado para personalizar el mensaje
        function resultado() {
            if(puntaje === cantPreguntas){
                return ['success','Test Pasado']
            }else{
                return ['error','Test No Pasado']
            }

        }
        const [icono, texto] = resultado();
        //Mensaje de test Finalizado

        Swal.fire({
            title: texto,
            text: `Puntaje Total ${puntaje} de ${cantPreguntas} `,
            icon: icono,
            showCancelButton: true,
            confirmButtonColor: 'rgb(102, 189, 217)',
            cancelButtonColor: 'rgb(136, 145, 152)',
            confirmButtonText: 'Reiniciar el Test',
            cancelButtonText: 'Ir al Menu',
        }).then((result) => {
            if (!result.isConfirmed) {
                callback(true)
            }else{
                callback(false)
            }
        })
    }

}