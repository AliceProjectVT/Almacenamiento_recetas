//CONSIGNA SEGUNDA PRE-ENTREGA//


/*
incluir

-Variables y Constantes
-Funciones
-Arrays
-Objetos
-Una funcion de orden superior( Busqueda y Transformación)*/
/*
class Tarea {
    constructor(descripcion) {

        this.descripcion =descripcion
        this.completada = false

    }
}

// Array para añadir tareas//
const tareas = [];

//crear funciones:


function agregarTarea() {
    let descripcion = prompt("Ingrese la descripcion de la tarea: ");
    const tarea = new Tarea(descripcion);
    tareas.push(tarea);
    console.log(tareas);
    alert("La tarea ha sido agregada");
}

//funcion para marcar tarea completada

function completarTarea() {
    let indice = prompt("Ingrese el indice de la tarea a completar")
    tareas[indice].completada = true;
    alert("La tareaha sido marcada como completada")
}

//Buscar tarea por palabra clave

function buscarTareas() {
    let palabraClave = prompt("Ingrese la palabra clave para buscar tareas");
    let tareasEncontradas = tareas.filter(tarea => tarea.descripcion.includes(palabraClave));
    alert(`Se han encontrado ${tareasEncontradas.length} tareas que continen la palabra clave ${palabraClave}.`);

}

//transformar array de Tareas en uno que muestra solo descipcions

function obtenerDescripciomes() {
    const descripciones = tareas.map(tarea => tarea.descripcion);
    alert("las descripciones son: ");
    console.log(descripciones);

}


//crear funcion para mostrar descripción y estado de tareas

function mostrarTareas() {
    let listaTareas = "";
    tareas.forEach((tarea) => {
        listaTareas += `${tarea.descripcion} - Estado: ${tarea.completada} (t = completado, f = pendiente) `;
    });
    alert(`La lista de tareas es: ${listaTareas} `);
}

// crear menú con switch para interactuar cn user

let opcion;
do {
    opcion = prompt("Seleccione una opción: \n 1.Agregar Tarea\n 2.Completar Tarea\n 3.Buscar Tarea\n 4.Obtener Descripciones\n 5.Mostrar Listado de Tareas\n 6.Salir");
    switch (opcion) {
        case "1":
            agregarTarea();
            break;
        case "2":
            completarTarea();
            break;
        case "3":
            buscarTareas();
            break;
        case "4":
            obtenerDescripciomes();
            break;
        case "5":
            mostrarTareas();
            break;
        case "6":
            alert("Gracias, vuelva pronto")
            break;
        default:
            alert("opción invalida, intente nuevamente. ")
            break;

    }

} while (opcion !== "6");*/

class Receta {
    constructor(descripcion, ingredientes) {
      this.descripcion = descripcion;
      this.ingredientes = ingredientes;
      this.completada = false;
    }
  }
  
  const recetas = [];
  
  function agregarReceta() {
    let descripcion = prompt("Ingrese la descripción de la receta: ");
    let ingredientes = prompt("Ingrese la lista de ingredientes separados por comas: ").split(",");
    const receta = new Receta(descripcion, ingredientes);
    recetas.push(receta);
    console.log(recetas);
    alert("La receta ha sido agregada");
  }
  
  function completarReceta() {
    let indice = prompt("Ingrese el índice de la receta a completar: ");
    recetas[indice].completada = true;
    alert("La receta ha sido marcada como completada");
  }
  
  function buscarRecetas() {
    let palabraClave = prompt("Ingrese la palabra clave para buscar recetas: ");
    let recetasEncontradas = recetas.filter(receta => receta.descripcion.includes(palabraClave));
    alert(`Se han encontrado ${recetasEncontradas.length} recetas que contienen la palabra clave "${palabraClave}".`);
  }
  
  function obtenerDescripciones() {
    const descripciones = recetas.map(receta => receta.descripcion);
    alert("Las descripciones son: ");
    console.log(descripciones);
  }
  
  function mostrarRecetas() {
    let listaRecetas = "";
    recetas.forEach((receta) => {
      let ingredientes = receta.ingredientes.join(", ");
      listaRecetas += `${receta.descripcion} - Ingredientes: ${ingredientes} - Estado: ${receta.completada} (t = completado, f = pendiente)\n`;
    });
    alert(`La lista de recetas es:\n${listaRecetas}`);
  }
  
  let opcion;
  do {
    opcion = prompt("Seleccione una opción: \n 1.Agregar Receta\n 2.Completar Receta\n 3.Buscar Receta\n 4.Obtener Descripciones\n 5.Mostrar Listado de Recetas\n 6.Salir");
    switch (opcion) {
      case "1":
        agregarReceta();
        break;
      case "2":
        completarReceta();
        break;
      case "3":
        buscarRecetas();
        break;
      case "4":
        obtenerDescripciones();
        break;
      case "5":
        mostrarRecetas();
        break;
      case "6":
        alert("Gracias, vuelva pronto");
        break;
      default:
        alert("Opción inválida, intente nuevamente.");
        break;
    }
  } while (opcion !== "6");