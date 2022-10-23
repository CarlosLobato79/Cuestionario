
import { Prueba } from "./models/Prueba.js";
import { objectoPreguntas } from "./models/Preguntas.js";
import { Intefaz} from "./views/Intefaz.js";


function renderizarQuiz(quiz,preguntaInterfaz){
    if(!quiz.esLaUltima()){
            preguntaInterfaz.testTerminado(quiz.puntaje,quiz.cantidadPregunta,(current)=>{
                if(!current){
                    quiz.reiniciarTest();
                    renderizarQuiz(quiz,preguntaInterfaz);
                }
            })

    } else {
        //Renderizo pregunta, botones, y seguimiento de preguntas
        preguntaInterfaz.mostrarPregunta(quiz.obtenerPregunta().getPregunta());
        preguntaInterfaz.numeroPregunta(quiz.indiceDePregunta,quiz.cantidadPregunta);
        preguntaInterfaz.mostrarOpciones(quiz.obtenerPregunta().opciones, (current)=>{
            //Recibo el valor del boton para comprobarlo con la respuesta correcta
            quiz.comprobarRespuesta(current,(cerrar)=>{
                renderizarQuiz(quiz,preguntaInterfaz);
            });
        });

    }
}

function main(){
    const quizInfo = new Prueba(objectoPreguntas)
    const preguntasUI = new Intefaz();
    renderizarQuiz(quizInfo,preguntasUI);
}

main();