
import { Prueba } from "./models/Prueba.js";
import { objectoPreguntas } from "./models/Preguntas.js";
import { Intefaz} from "./views/Intefaz.js";




function renderizar(test,pregunta){

    if(!test.termine()){
        pregunta.testTerminado(test.puntaje,test.cantidadPregunta)
        test.reiniciarTest()
        renderizar(test,pregunta)

    } else {
        pregunta.mostrarPreguntas(test.obtenerPregunta().pregunta)
        pregunta.avanceTest(test.indiceDePregunta,test.cantidadPregunta)
        pregunta.mostrarOpciones(test.obtenerPregunta().opciones, (current)=>{
        test.comprobarRespuesta(current)
        renderizar(test,pregunta)
        });
    }
}

function main(){
    const quiz = new Prueba(objectoPreguntas)
    const pregunta = new Intefaz()
    renderizar(quiz,pregunta);
}


main();