
//Importamos las preguntas
import { data } from "../data/data.js";

import {Pregunta} from "./Pregunta.js";
//Cree una lista de objetos de tipo lista
export const objectoPreguntas = data.map(data => new Pregunta(data.question,data.choice,data.answer))