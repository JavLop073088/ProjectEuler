//-------------------------------------
//PROBLEMA Nº 3
//-------------------------------------
/*Los factores primos de 13195 son 5, 7, 13 y 29.
¿Cuál es el mayor factor primo del número 600851475143? */
function esPrimo(num){
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}
//Versión simple (fuerza bruta)
function mayorFactorPrimo(num){
    let mayor = 0;
    for(let i = num-1; i >= 2; i--) {
        if(esPrimo(i) && num%i == 0){
            mayor = i;
            break;
        }
    }
    return mayor;
}
//Versión larga (fuerza bruta)
function mayorFactorPrimo(num){
    let factoresPrimos = [];
    let mayor = 0;
    for(let i = 2; i < num; i++) {
        if(esPrimo(i) && num%i == 0){
            factoresPrimos.push(i);
        }
    }
    mayor = factoresPrimos[factoresPrimos.length-1];
    return mayor;
}

let rta = mayorFactorPrimo(13195);
console.log(rta);                        

//-------------------------------------
//PROBLEMA Nº 4
//-------------------------------------
/*Un número palindrómico se lee igual en ambos sentidos. 
El palíndromo más grande hecho del producto de dos números de 2 dígitos es 9009 = 91 × 99.
Encuentra el palíndromo más grande hecho del producto de dos números de 3 dígitos.*/

let numCadena = [];
let numEntero = [];

for(let i = 100; i <= 999; i++){
    for(let j = 100; j <= 999; j++){
        let producto = i * j;
        let str1 = producto.toString();
        let str2 = invertir(str1);
        
        if(str1 == str2){
            numCadena.push(str1);
        }        

    }
}
toInts(numCadena);

let n = Math.max(...numEntero); 

console.log(n);

//FUNCTIONS----------------------------------
function toInts(array){
    for(item of array){
        let n = 0;
        n = parseInt(item, 10);
        numEntero.push(n);
    }
}
//-------------------------------------------
function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
          
    while (x>=0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    return cadenaInvertida;
}

//-------------------------------------
//PROBLEMA Nº 5
//-------------------------------------
/*2520 es el número más pequeño que se puede dividir por cada uno de los números del 1 al 10 sin resto.
¿Cuál es el número positivo más pequeño que es divisible por todos los números del 1 al 20?*/
function smallestMult(n){
    let inc = 2;
    let step = 2;
    let smallestNum = 2;

    while(smallestNum <= Number.MAX_SAFE_INTEGER){
        for(let i = 1; i <= n; i++){
            const divisible = smallestNum % i === 0;
            if(!divisible){
                break;
            }
            if(i === inc){
                step = smallestNum;
                inc++;
            }
            if(i === n){
                return smallestNum;
            }
        }
        smallestNum += step;
    }
}

n = smallestMult(20);
console.log(n); //232792560

//-------------------------------------
//PROBLEMA Nº 6
//-------------------------------------
/*Encuentra la diferencia entre la suma de los cuadrados de los primeros 
cien números naturales y el cuadrado de la suma.*/
function sumaDeCuadrados(n){
    let suma = 0;
    for(let i=1; i<=n; i++){
        suma += Math.pow(i, 2);
    }
    return suma;
}
function cuadradoDeSumas(n){
    let suma = 0;
    let cuadrado = 0;
    for(let i=1; i<=n; i++){
        suma += i;
    }
    cuadrado = Math.pow(suma, 2); 
    return cuadrado;
}

let rts = cuadradoDeSumas(100) - sumaDeCuadrados(100);

console.log(rta); //25164150 

//-------------------------------------
//PROBLEMA Nº 7
//-------------------------------------
/*Al enumerar los primeros seis números primos: 2, 3, 5, 7, 11 y 13,
podemos ver que el sexto primo es 13. ¿Cuál es el número primo 10 001? */
function esPrimo(num){
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}

function obtenerNumeroPrimo(num){
    let arrayPrimos = [];
    let rta = 0;
    for(let i = 2; i < Number.MAX_SAFE_INTEGER; i++) {
        if(esPrimo(i)){
            arrayPrimos.push(i);
        }
        if(arrayPrimos.length == num){
            rta = arrayPrimos[num - 1];
            break;
        }
    }
    return rta;
}

console.log(obtenerNumeroPrimo(10001)); //104743


//-------------------------------------//
//-----------PROBLEMA Nº 8-------------//
//-------------------------------------//

/*Los cuatro dígitos adyacentes en el número de 1000 dígitos que tienen el mayor producto son 9 × 9 × 8 × 9 = 5832.
Encuentra los trece dígitos adyacentes en el número de 1000 dígitos que tienen el mayor producto. 
¿Cuál es el valor de este producto?*/

let cadenon = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

function prodMasGrandeSerie(serie, cantidad){

    let inicio = 0;
    let multiplos = [];
    let n = cantidad; 
    let numeros = [];
    let enteroMayor = 0;
    //Dividir cadena de a fragmentos de tamaño "cantidad" en un array
    for(let i = 0; i < (serie.length); i++) {
        multiplos.push((serie.slice(inicio, cantidad))); 
        inicio ++;
        cantidad ++;
    }
    //Dividir cada elemento del array anterior en partes individuales 
    for(item of multiplos) {
        let num = 1;
        let arr = item.split(""); //split devuelve un array
        for(i = 0; i < n; i++ ){  //a cada parte individual irla multiplicando y almacenando en otro array         
            num *= arr[i];        //en esta parte parecería que los string del array se hacen ints solos
        }
        numeros.push(num); //se obtiene array con los productos de las partes individuales de cada elemento
    }

    enteroMayor = biggestInt(numeros);  //busca el mayor de un array de enteros
    return enteroMayor;    
}

function biggestInt(array){
    let mayor = 0;
    for(item of array) if(item > mayor) mayor = item;   
    return mayor;
}

console.log(prodMasGrandeSerie(cadenon, 13)); //23514624000



