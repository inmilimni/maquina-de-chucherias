//Selectores
const terminalText = document.getElementById("terminal-input");

//Eventos
terminalText.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        e.preventDefault();
        const valor= terminalText.value;
        console.log(valor);
        terminalText.value ='';
    }
})

//doble string

//Funcion que agarra el input y lo agrega al output del terminal

//funcion que borra el output del terminal

//funcion help

//Funcion que controla el menu 

//funcion que solicita chucherias

//funcion que edita las chucherias

//funcion que rellena las chucherias

//funcion que apaga la maquina






