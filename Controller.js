
import { Prueba } from "./models/Prueba.js";
import { objectoPreguntas } from "./models/Preguntas.js";
import { Intefaz} from "./views/Intefaz.js";




function renderizar(quiz,pregunta){

    if(!quiz.termine()){
        if(pregunta.testTerminado(quiz.puntaje,quiz.cantidadPregunta)){
            quiz.reiniciarTest()
            renderizar(quiz,pregunta)
        }

    } else {
        pregunta.mostrarPreguntas(quiz.obtenerPregunta().pregunta);
        pregunta.avanceTest(quiz.indiceDePregunta,quiz.cantidadPregunta);
        pregunta.mostrarOpciones(quiz.obtenerPregunta().opciones, (current)=>{
        quiz.comprobarRespuesta(current);
        renderizar(quiz,pregunta);
        });
    }
}

function main(){
    const quizInfo = new Prueba(objectoPreguntas)
    const pregunta = new Intefaz();
    renderizar(quizInfo,pregunta);
}

main();