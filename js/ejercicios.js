//SUma de resistencias
const sumaResistencia = [-1,5,6,3]
const sumaResistencia2 = [14,3.5,6]
const sumaResistencia3 = [8,15,100]


function sumasResistencias (array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0 ){
            array[i] = Math.abs(array[i]);
        }let temporal = array[i];
         suma = suma + temporal;
    }
    console.log("La suma es:", suma)

}

sumasResistencias(sumaResistencia);
sumasResistencias(sumaResistencia2);
sumasResistencias(sumaResistencia3);

//Dividiendo Numeros

const numero1 = 4;
const numero2 = 10;

function numDiv (num){
    let resultado = num / 2;
    let numPartidos = [];
    for (let i=0; i <= 1; i++){
        numPartidos.push(resultado)
    }
    console.log(`Los numero partidos son ${numPartidos}`)
}
 numDiv(numero1);
 numDiv(numero2);



//Secret Name

const secretName = ["Esperanza", "Franco", "Nia"];
const secretName2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const secretName3 = ['Harry', 'Ron', 'Hermione'];

function  obtenerIniciales (array){
    let almacenIniciales = [];
    for (let i = 0; i < array.length; i++) {
        let nombre = array[i];
        const nombrePartido = nombre.split('');
        almacenIniciales.push(nombrePartido[0]);
    }
    console.log("Las iniciales son:", almacenIniciales);
}

obtenerIniciales(secretName);
obtenerIniciales(secretName2);
obtenerIniciales(secretName3);

//Online Status 

const onlineStatus =  ['mockIng99', 'J0eyPunch', 'glassedFer', 'nancy', 'paquito']
const usuarios = onlineStatus.slice(2);
console.log(`El usuario ${onlineStatus[0]} y el usuasrio ${onlineStatus[1]} y otro ${usuarios.length} estan conectados ` );


//Arreglos multiples 

const arreglo1 = [2,10];
const arreglo2 = [17,6];

//dfdsfgg
const positiveDom = [-1, -3, -5, 4, 6767];
function dominioArray (array){
    let positivo = [];
    let negativo = [];
    ;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0 ){
            negativo.push(array[i]);
        }else{
            positivo.push(array[i]);
        }
    }
    if (positivo.length < negativo.length){
        //Los negativos son los dominantes
        console.log("False")
    }else{
        //Los positivos son los dominantes
        console.log("True");
    }

}

dominioArray(positiveDom);
