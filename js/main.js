//Selectores
const menuInterface = document.getElementById("menu_chucherias-interface");
const solicitarInterface = document.getElementById("solicitar_chucherias-interface");
const editarInterface = document.getElementById("editar_chucherias-interface");
const helpInterface = document.getElementById("help-interface");
const apagarInterface = document.getElementById("apagar_maquina-interface");
const terminalText = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("cli_output-container");
const mensajeApagar = document.getElementById("mensaje_apagar_container");
const generalContainer = document.getElementById("general-container");

//clase
class Chucheria {
    constructor(nombre, precio, cantidadDisponible) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidadDisponible = cantidadDisponible;
    }

    editarNombre(nombre) {
      this.nombre = nombre; 
    }
    editarPrecio(precio) {
        this.precio = precio;
    }
    editarCantidad(cantidadDisponible) {
        this.cantidadDisponible = cantidadDisponible
    }
    solicitarChucheria(){
        this.cantidadDisponible--;
    }
}
  
//variables

let ReferenciaPwd = 0;
let ReferenciaItem = 0;
let ReferenciaCase = 0;
let contadorClave = 0;
let historyIndex = 0;
let countdownBlock = 60;

//string
let lineasTerminal = [];
let lineasHistory = [];
let stock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let i = 0;
stock.forEach(()=> {
    stock[i] = new Chucheria(`Chucheria-${i+1}`,1,10 )
    i++;
})
//Eventos
terminalText.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        e.preventDefault();
        lineasTerminal = [...lineasTerminal, terminalText.value];
        lineasHistory = [...lineasHistory, terminalText.value];
        crearHTML(lineasTerminal);
        let lineaReturn = Navigation(terminalText.value);
        if(lineaReturn){
            lineasTerminal = [...lineasTerminal,lineaReturn];
        }
        crearHTML(lineasTerminal);
        terminalText.value ='';
        historyIndex = 0;
    }
    if(e.key === 'ArrowUp' && ReferenciaPwd != 4){
        e.preventDefault();
        if((lineasHistory.length - historyIndex) > 0){
            console.log((lineasHistory.length -1) - historyIndex)
            terminalText.value = lineasHistory[(lineasHistory.length -1) - historyIndex];
            historyIndex = historyIndex + 1;
        }
    }
    if(e.key === 'ArrowDown'){
        e.preventDefault();
        if(historyIndex > 0){
            historyIndex = historyIndex - 1;
            console.log('o',(lineasHistory.length -1) - historyIndex)
            terminalText.value = lineasHistory[(lineasHistory.length -1) - historyIndex];   
        }
        
    }
});
document.addEventListener("mousedown", event => {
    
    if (event.button === 0) {
      event.preventDefault();
    }
    if (event.button === 2) {
        // Prevent the default action of the right mouse button
        event.preventDefault();
    
        // Set the focus back to the <input> element
        terminalText.focus();
    }
  });
//funcion principal
function Navigation(string){
    switch (string){
        case "clear":
            lineasTerminal = [];
            break;
    }
    if(ReferenciaPwd === 0){
        switch (string){

            case "Solicitar Chucherias":
            case "1":
                ReferenciaPwd = 1;
                solicitarInterface.style.display = 'grid';
                menuInterface.style.display = 'none';
                mostrarChucheria();
                return "Ingrese el numero o el nombre de la chucheria que desea seleccionar:";

            case "Editar Chucherias":
            case "2":
                ReferenciaPwd = 2;
                editarInterface.style.display = 'grid';
                menuInterface.style.display = 'none';
                mostrarChucheria();
                return "Ingrese la clave de mantenimiento:";

            case "Help":
            case "3":
                ReferenciaPwd = 3;
                helpInterface.style.display = 'grid';
                menuInterface.style.display = 'none';
                return;
            case "Apagar Maquina":
            case "4":
                ReferenciaPwd = 4;
                apagarInterface.style.display = 'flex';
                menuInterface.style.display = 'none';
                break;
        }
    }
    if(ReferenciaPwd === 1){ //Solicitar Chucherias
        switch (string){
            case "1":
            case stock[0].nombre:
                stock[0].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[0].cantidadDisponible + " " + stock[0].nombre + " disponibles.";

            case "2":
            case stock[1].nombre:
                stock[1].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[1].cantidadDisponible + " " + stock[1].nombre + " disponibles.";

            case "3":
            case stock[2].nombre:
                stock[2].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[2].cantidadDisponible + " " + stock[2].nombre + " disponibles.";

            case "4":
            case stock[3].nombre:
                stock[3].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[3].cantidadDisponible + " " + stock[3].nombre + " disponibles.";

            case "5":
            case stock[4].nombre:
                stock[4].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[4].cantidadDisponible + " " + stock[4].nombre + " disponibles.";

            case "6":
            case stock[5].nombre:
                stock[5].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[5].cantidadDisponible + " " + stock[5].nombre + " disponibles.";

            case "7":
            case stock[6].nombre:
                stock[6].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[6].cantidadDisponible + " " + stock[6].nombre + " disponibles.";

            case "8":
            case stock[7].nombre:
                stock[7].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[7].cantidadDisponible + " " + stock[7].nombre + " disponibles.";

            case "9":
            case stock[8].nombre:
                stock[8].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[8].cantidadDisponible + " " + stock[8].nombre + " disponibles.";

            case "10":
            case stock[9].nombre:
                stock[9].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[9].cantidadDisponible + " " + stock[9].nombre + " disponibles.";

            case "11":
            case stock[10].nombre:
                stock[10].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[10].cantidadDisponible + " " + stock[10].nombre + " disponibles.";

            case "12":
            case stock[11].nombre:
                stock[11].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[11].cantidadDisponible + " " + stock[11].nombre + " disponibles.";

            case "13":
            case stock[12].nombre:
                stock[12].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[12].cantidadDisponible + " " + stock[12].nombre + " disponibles."

            case "14":
            case stock[13].nombre:
                stock[13].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[13].cantidadDisponible + " " + stock[13].nombre + " disponibles.";

            case "15":
            case stock[14].nombre:
                stock[14].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[14].cantidadDisponible + " " + stock[14].nombre + " disponibles.";

            case "16":
            case stock[15].nombre:
                stock[15].solicitarChucheria();
                mostrarChucheria();
                return "Quedan " + stock[15].cantidadDisponible + " " + stock[15].nombre + " disponibles.";
            
            case "..":
                ReferenciaPwd = 0;
                solicitarInterface.style.display = 'none';
                menuInterface.style.display = 'grid';
                break;
        }
    }
    if(ReferenciaPwd === 2){
        if( string === "TecChu2022" && contadorClave < 2){
            ReferenciaPwd = 2.1;
            contadorClave = 0;
            return "Ingrese el numero o el nombre de la chucheria que desea editar:";
        }else if(string == ".." && contadorClave < 2){
        ReferenciaPwd = 0;
        editarInterface.style.display = 'none';
        menuInterface.style.display = 'grid';
        }else if( string != "TecChu2022" && contadorClave < 2){
            contadorClave++;
            if(3- contadorClave != 1){
                return `Le quedan ${3 - contadorClave} intentos: `
            }
            if(3 - contadorClave == 1){
                return `Le queda ${3 - contadorClave} intento: `
            }
        
        }else if(contadorClave >= 2 && countdownBlock == 60){
            ReferenciaPwd = 0;
            bloquearInterfaz();
            editarInterface.style.display = 'none';
            menuInterface.style.display = 'grid';
            countdownBlock = 60;
        }

    } //Editar Chucherias
    if(ReferenciaPwd === 2.1){
        switch (string){
            case "1":
            case stock[0].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 1;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";
    
            case "2":
            case stock[1].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 2;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "3":
            case stock[2].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 3;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "4":
            case stock[3].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 4;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "5":
            case stock[4].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 5;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "6":
            case stock[5].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 6;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "7":
            case stock[6].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 7;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "8":
            case stock[7].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 8;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "9":
            case stock[8].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 9;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "10":
            case stock[9].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 10;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "11":
            case stock[10].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 11;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "12":
            case stock[11].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 12;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "13":
            case stock[12].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 13;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "14":
            case stock[13].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 14;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "15":
            case stock[14].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 15;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";

            case "16":
            case stock[15].nombre:
                ReferenciaPwd = 2.2;  
                ReferenciaItem = 16;              
                return "Ingrese el campo a editar (1-Nombre, 2-Precio, 3-Cantidad):";
            
            case "..":
                ReferenciaPwd = 0;
                editarInterface.style.display = 'none';
                menuInterface.style.display = 'grid';
                break;
        }
    }
    if(ReferenciaPwd === 2.2){
        switch (string){
            case "1":
            case "Nombre":
                ReferenciaPwd = 2.3;
                ReferenciaCase = 1;
                return "Ingrese el nuevo nombre:"

            case "2":
            case "Precio":
                ReferenciaPwd = 2.3;
                ReferenciaCase = 2;
                return "Ingrese el nuevo precio:"

            case "3":
            case "Cantidad":
                ReferenciaPwd = 2.3;
                ReferenciaCase = 3;
                return "Ingrese la nueva cantidad:"
            case "..":
                ReferenciaPwd = 2.1;
                return "Ingrese el numero o el nombre de la chucheria que desea editar:";
        }
    }
    if(ReferenciaPwd === 2.3){
        switch (ReferenciaCase){
            case 1:
                ReferenciaPwd = 2.1;
                stock[ReferenciaItem - 1].editarNombre(string);
                mostrarChucheria();
                return "Ingrese el numero o el nombre de la chucheria que desea editar:"

            case 2:
                ReferenciaPwd = 2.1;
                stock[ReferenciaItem - 1].editarPrecio(string);
                mostrarChucheria();
                return "Ingrese el numero o el nombre de la chucheria que desea editar:"

            case 3:
                ReferenciaPwd = 2.1;
                stock[ReferenciaItem - 1].editarCantidad(string);
                mostrarChucheria();
                return "Ingrese el numero o el nombre de la chucheria que desea editar:"
            case "..":
                ReferenciaPwd = 2.1;
                return "Ingrese el numero o el nombre de la chucheria que desea editar:";
        }
    }

    if(ReferenciaPwd === 3){ //Rellenar Chucheria
        
            if(string === ".."){
                ReferenciaPwd = 0;
                helpInterface.style.display = 'none';
                menuInterface.style.display = 'grid';
            }    
    }
    if(ReferenciaPwd === 4){ //Apagar Maquina
        apagarMaquina();
    }
}

//Funcion que muestra chucherias
function mostrarChucheria(){
    let n = 1;
    let productoItemSelector = new Array(stock.length);
    let productoItemHTML = new Array(stock.length);
    let productoItemHTML2 = new Array(stock.length)
    stock.forEach(item =>{
        productoItemSelector[n-1] = document.querySelectorAll(`.producto_item-${n}`);
        productoItemSelector[n-1].forEach(selector =>{
            limpiarHTML(selector);
            productoItemHTML[n-1]= document.createElement('span');
            productoItemHTML2[n-1]= document.createElement('span');
            productoItemHTML[n-1].innerText= `${item.nombre}`;
            productoItemHTML2[n-1].innerText= `${item.precio}$ - ${item.cantidadDisponible}`;
            selector.appendChild(productoItemHTML[n-1]);
            selector.appendChild(productoItemHTML2[n-1]);
        })
        n++;
    })
}
//Funcion que agarra el input y lo agrega al output del terminal
function crearHTML(terminal) {
    limpiarHTML(terminalOutput);
  
    if (terminal.length > 0) {
      terminal.forEach(linea => {
        const li = document.createElement('li');
  
        li.innerHTML = `<span>>></span><span>${linea}</span>`;
        terminalOutput.appendChild(li);
      });
    }
}

//funcion que borra el output del terminal
function limpiarHTML(selector){
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
}

function limpiarHTMLLoop(selectores){
    selectores.forEach(selector => {
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    })
}

//funcion bloquear interfaz
function bloquearInterfaz(){
    countdownBlock = 60;
    const interval = setInterval(() => {
        countdownBlock--;
        lineasTerminal=[...lineasTerminal,`Ha sobrepasado su numero de intentos intente en ${countdownBlock}s.` ]
        crearHTML(lineasTerminal);
        lineasTerminal.pop();
        console.log(countdownBlock)
        if (countdownBlock == 0){
            contadorClave = 0;
            clearInterval(interval);
            return;
        }
    }, 1000);
    crearHTML(lineasTerminal);
}
//funcion que apaga la maquina
function apagarMaquina(){
    limpiarHTML(mensajeApagar);
    terminalText.setAttribute("readonly", true);
    const span = document.createElement('span');
    let countdown = 10;
    setInterval(() => {
        span.textContent = `La maquina se apagara en ${countdown} segundos`;
        mensajeApagar.appendChild(span);
        countdown--;
        if (countdown === -1) {
            generalContainer.style.display = "none";
        }
    }, 1000);
}