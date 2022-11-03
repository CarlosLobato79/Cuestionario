
import { Prueba } from "./models/Prueba.js";
import { objectoPreguntas } from "./models/Preguntas.js";
import { Intefaz } from "./views/Intefaz.js";
import { Repazo} from "./models/repazoPreguntas.js";

const quizInfo = new Prueba(objectoPreguntas);
const preguntasUI = new Intefaz();
const RepazoQuiz = new Repazo(objectoPreguntas);



function renderizarQuiz(quiz,preguntaInterfaz,contenedor){

    if(!quiz.esLaUltima()){
            preguntaInterfaz.testTerminado(quiz.puntaje,quiz.cantidadPregunta,(current)=>{
                if(!current){
                    quiz.reiniciarTest();
                    renderizarQuiz(quiz,preguntaInterfaz,contenedor);
                }else{
                    console.log("regresando al menu");
                    quiz.reiniciarTest();
                    const remplazarPie = document.getElementById('pie__progreso');
                    remplazarPie.innerText  = 'Test Armas';
                    Menu(contenedor);
                }
            })

    } else {
        //Renderizo pregunta, botones, y seguimiento de preguntas
        preguntaInterfaz.mostrarPregunta(quiz.obtenerPregunta().getPregunta());
        preguntaInterfaz.numeroPregunta(quiz.indiceDePregunta,quiz.cantidadPregunta);
        preguntaInterfaz.mostrarOpciones(quiz.obtenerPregunta().opciones, (current)=>{
            //Recibo el valor del boton para comprobarlo con la respuesta correcta
            quiz.comprobarRespuesta(current,(cerrar)=>{
                renderizarQuiz(quiz,preguntaInterfaz,contenedor);
                console.log(cerrar)
            });
        });

    }
}



function Menu(contenedor){
    const limpiar = document.getElementById('contenido__pregunta').innerHTML  = '';
    const limpiarElementos = document.getElementById('opciones').innerHTML = '';
    const realizarTest = document.createElement('button');
    realizarTest.innerText = 'Realizar Test';
    realizarTest.className = 'contenido__opcion';
    realizarTest.value = 'hacerTest';
    realizarTest.id = "btn-test";
    realizarTest.addEventListener("click", ()=>{
        renderizarQuiz(quizInfo,preguntasUI,contenedor);
    })
    contenedor.append(realizarTest);

    // const realizarTestAleatorio = document.createElement('button');
    // realizarTestAleatorio.innerText = "Repasar Test";
    // realizarTestAleatorio.className ="contenido__opcion";
    // realizarTestAleatorio.value = 'hacerTestAlea';
    // realizarTest.id = "btn-test-aleatorio";
    // realizarTestAleatorio.addEventListener("click",()=>{
    //     RepazoQuiz.renderizarPreguntas();
    // })
    // contenedor.append(realizarTestAleatorio);

}


function main(){
    const contenedor = document.getElementById('opciones');
    Menu(contenedor);
}

main();