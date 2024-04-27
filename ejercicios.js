///////////// ************* 1.- Suma de resistencias *************/////////
const sumaResistencia = [-1,5,6,3]
const sumaResistencia2 = [14,3.5,6]
const sumaResistencia3 = [8,15,100]

//Se declara la funcion que recibe como parametro un arreglo
function sumasResistencias (array){
    //en suma se guardara la suma del array
    let suma = 0;
    //el for es para ir recorriendo el arreglo
    for (let i = 0; i < array.length; i++) {
        //compara el numero para saber si es negativo.
        if(array[i] < 0 ){
            //convierte el numero en valor absoluto
            array[i] = Math.abs(array[i]);
        }let temporal = array[i]; //Se va guardando el numero para sumar con el que sigue.
        //realiza la suma del array
         suma = suma + temporal;
    }
    
    console.log("La suma es:", suma)

}
//Se manda a llamar la función
console.log(`/*** 1.- Suma de Resistencias ***/`)
sumasResistencias(sumaResistencia);
sumasResistencias(sumaResistencia2);
sumasResistencias(sumaResistencia3);

////////********** 2.-Número dividido en mitades ******************/////////////////

const numero1 = 4;
const numero2 = 10;
//Se declara la funcion que recibe como parametro un numero
function numDiv (num){    
    let resultado = num / 2;
    //Se declara un array vacio para guardar el resultado
    let numPartidos = [];
    for (let i=0; i <= 1; i++){
        numPartidos.push(resultado)
    }
    console.log(`Los numero partidos son ${numPartidos}`)
}
console.log("///**** 2.-Número dividido en mitades ****/////");
 numDiv(numero1);
 numDiv(numero2);



//////////////////////**************3.- Secret Society *****************//////////////////////

let secretName = ["Esperanza", "Franco", "Nia"];
let secretName2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
let secretName3 = ['Harry', 'Ron', 'Hermione'];

function  obtenerIniciales (array){
    let almacenIniciales = [];
    //Va recorriendo cada nombre en el array
    for (let i = 0; i < array.length; i++) {
        let nombre = array[i];
        //Se usa explit para dividir el nombre en caracteres
        const nombrePartido = nombre.split('');
        //Va guardado cada inicial en un array
        almacenIniciales.push(nombrePartido[0]);
    }
    //el sort(); ordena alfabeticamente cada letra
    console.log(`Las iniciales son ${almacenIniciales.sort()}` );
}
//manda a llamar la función
console.log("//////******* Secret Society *******///////");
obtenerIniciales(secretName);
obtenerIniciales(secretName2);
obtenerIniciales(secretName3);

////////////////****************4.- Online Status *********************////////////////////////////////////
//Se hace uso de slice para 
console.log("//////****** 4.- Online Status *******///////");
const onlineStatus =  ['mockIng99', 'J0eyPunch', 'glassedFer', 'nancy', 'paquito']
//Se hace uso de slice para determinar desde que posicion va a tomar para crearme una arreglo nuevo 
// ejemplo ['glassedFer', 'nancy', 'paquito']
const usuarios = onlineStatus.slice(2);
console.log(`El usuario ${onlineStatus[0]} y el usuasrio ${onlineStatus[1]} y otro ${usuarios.length} estan conectados ` );


//////////////////////////////******* 5.- Arreglos multiples***********////////////////////////
const arreglo1 = [2,10];
const arreglo2 = [17,6]; 

function  tablaMultiplicar (array) {
    // Reccorre la posicion 1 del arreglo 
    for( let i=1; i <=array[1]; i++){
        //realiza la operacion ejemplo i = 1 * 2 (la posicion 0)
         console.log(`El resulado seria: ${i * array[0]}`);
    }

}
console.log("//////****** 5.- Arreglos Multiples *******///////");
tablaMultiplicar(arreglo1);
tablaMultiplicar(arreglo2);


///////////////////////************** 6.- Positive dominance in Array *********************////////////////////////////
const positiveDom = [-1, -3, -5, 4, 6767];
function dominioArray (array){
    //Se declaran arrays vacios para guardar numero negativos y positivos
    let positivo = [];
    let negativo = [];
    //Recorre cada numero del arreglo
    for (let i = 0; i < array.length; i++) {
        //Se compara cada numero si es menor a 0 es negativo
        //Y se guarda envia al arrar negativo de lo contrario al array positivo
        if(array[i] < 0 ){
            negativo.push(array[i]);
        }else{
            positivo.push(array[i]);
        }
    }
    //compara el tamaño del arreglo 
    if (positivo.length < negativo.length){
        //Los negativos son los dominantes
        console.log("False")
    }else{
        //Los positivos son los dominantes
        console.log("True");
    }

}

console.log("//////****** 6.- Positive dominance in Array *******///////");
dominioArray(positiveDom);

////**** 7.-Antipodal Average  ******///////////////


const anipodo = [1,2,3,5,22,6]
const anipodo2 = [1,2,3,5,22,6,6]
function promedio (array){
    let matriz1 = [];
    let matriz2 = []
    //Valida si la logitud dividida / 2 da una numero par para poder dividir el arreglo
    if (array.length % 2 == 0) {
        matriz1 = array.slice(0,array.length / 2);
        matriz2 = array.slice(array.length / 2);
    //Valida si es un numero primo
    }if (array.length % 2 != 0){
        //devuelve el numero entero
        const indiceDelMedio = Math.floor(array.length / 2);
        //elimina del arreglo la posición de enmedio
        array.splice(indiceDelMedio, 1);
        //asigna la matriz en partes iguales 
        matriz1 = array.slice(0,array.length / 2);
        matriz2 = array.slice(array.length / 2);
        
    }
    let sumaResultado=[];
    //recorreo tanto de la posición inicial como la posición inicial, para que se recorran ambos arreglos 
    for(let i=0; i < matriz1.length; i++){
        //Realiza la suma de de las matrices y di
        sumaResultado.push((matriz1[i]+matriz2[matriz2.length -1 -i])/2);
        
    }
    console.log(sumaResultado);
}

console.log("//////****** 7.-Antipodal Averagey *******///////");
promedio(anipodo);
promedio(anipodo2);