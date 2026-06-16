// Excuse Generator - A simple JavaScript project to generate random excuses
// Run with: node excuse-generator.js

const who = [
    "Mi abuela",
    "Mi jefe",
    "Mi mamá",
    "Mi hermano",
    "Mi mejor amigo",
    "Mi perro"
];

const action = [
    "se quedó dormido",
    "olvidó la tarea",
    "se rompió el transporte",
    "se perdió el reloj",
    "perdió las llaves",
    "se enfermó de repente"
];

const what = [
    "el proyecto",
    "la presentación",
    "la comida",
    "el auto",
    "el examen",
    "el correo electrónico"
];

const when = [
    "hoy",
    "ayer",
    "esta mañana",
    "anoche",
    "la semana pasada",
    "hace un momento"
];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

console.log(excuse);
