const nodo = require("../src/nodo.js");

const vacunacion = new nodo({
    fecha:"02/02", motivo: "Vacuna", veterinario: "Dra. Rios", costo: 85000
})

const controlPeso = new nodo({
    fecha:"15/03", motivo: "Control de peso", veterinario: "Dr. Gómez", costo: 40000
})

const limpiezaDental = new nodo({
    fecha:"20/05", motivo: "Limpieza dental", veterinario: "Dra. Rios", costo: 150000
})

vacunacion.siguiente = controlPeso;
controlPeso.siguiente = limpiezaDental;
limpiezaDental.siguiente = null;

const cabeza = vacunacion;

let actual = cabeza;

while (actual !== null) {
    console.log(actual.dato);
    actual = actual.siguiente;
}

actual = cabeza;
let total = 0;

while (actual !== null){
     total += actual.dato.costo;
     actual = actual.siguiente;

}

console.log("Total: " + total);

