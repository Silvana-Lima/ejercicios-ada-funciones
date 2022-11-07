//1 sumar(a, b)
// Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

// sumar(2, 3) // 5
// sumar(1.2, 3.4) // 4.6
// sumar(3, -5) // -2


// let sumar =(n1, n2)=>{
//     return n1 + n2;
// }

// console.log(sumar(2, 3));
// console.log(sumar(1.2, 3.4));
// console.log(sumar(3, -5));

//2 restar(a, b)
// Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos
// restar(3, 2) // 1
// restar(10, 5.5) // 4.5
// restar(3, 5) // -2

// let restar =(n1, n2)=>{
//     return n1 - n2;
// }

// console.log(restar(3, 2));
// console.log(restar(10, 5.5));
// console.log(restar(3, 5));


// multiplicar(a, b)
// Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos
// multiplicar(2, 3) // 6
// multiplicar(4, 0.5) // 2

// let multiplicar = (n1, n2)=>{
//     return n1 * n2;
// }

// console.log(multiplicar(2, 3));
// console.log(multiplicar(4, 0.5));



// dividir(a, b)
// Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos
// dividir(12, 3) // 4
// dividir(8, 4) // 2
// sumar(30, 6) // 5


// esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es
// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0
// esPar(2) // true
// esPar(3) // false

// let esPar = (numero) =>{
//    return numero % 2 == 0
// }
// console.log(esPar(2));
// console.log(esPar(3));

// esImpar(numero)
// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

// TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

// esImpar(2) // false
// esImpar(3) // true

// let esImpar = (numero)=>{
//     return numero % 2 != 0
// }

// console.log(esImpar(2));
// console.log(esImpar(3));

// calcularAreaTriangulo(base, altura)
// Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

// calcularAreaTriangulo(3, 4) // 6
// calcularAreaTriangulo(5, 6) // 40


// let calcularAreaTriangulo = (base, altura)=>{
//     return (base*altura)/2
// }

// console.log(calcularAreaTriangulo(3,4));
// console.log(calcularAreaTriangulo(5,6));

// gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!

let gritar = (string)=>{
    return `¡${string}!`;
}

console.log(gritar(`hola`));
// console.log(gritar(`aaaaaa`));

// obtenerNombreCompleto(nombre, apellido)
// Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

// obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'


let obtenerNombreCompleto = (nombre, apellido)=>{
    return `${nombre} ${apellido}`
}

console.log(obtenerNombreCompleto('Ada', 'Lovelace'))


// saludar(nombre)
// Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

// saludar('Ada') // 'Hola Ada, un gusto conocerte'


let saludar=(nombre)=>{
    return `Hola ${nombre}, un gusto en conocerte`;
}
console.log(saludar('Ada'));



// saludarGritando(nombre, apellido)
// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

// saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
// TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante

// const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
// const saludo = saludar(nombreCompleto)
// const grito = gritar(saludo)
//console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!

// let saludarGritando =(nombre, apellido)=>{
    
// const nombreCompleto = obtenerNombreCompleto(nombre, apellido)
// const saludo = saludar(nombreCompleto)
// const grito = gritar(saludo)

// return grito;
// };

// console.log(saludarGritando('Ada', 'Lovelace'));


// obtenerDatosDeCiudad(nombre, poblacion, pais)
// Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

// obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') // 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'

// let obtenerDatosDeCiudad = (nombre, poblacion, pais)=>{
//     return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`
// }

// console.log(obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina'));


// convertirHorasEnSegundos(horas)
// Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

// convertirHorasEnSegundos(1) // 3600
// convertirHorasEnSegundos(3) // 10800
// convertirHorasEnSegundos(4.5) // 16200

// let convertirHorasEnSegundos = (horas)=>{
//     return horas*60*60
// }

// console.log(convertirHorasEnSegundos(1));
// console.log(convertirHorasEnSegundos(3));
// console.log(convertirHorasEnSegundos(4.5));



// calcularPerimetroRectangulo(ancho, alto)
// Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

// calcularPerimetroRectangulo(3.2, 5) // 16.4
// calcularPerimetroRectangulo(10, 20) // 60

// let calcularPerimetroRectangulo = (ancho,alto)=>{
//     return ancho*2 + alto*2
// }

// console.log(calcularPerimetroRectangulo(3.2, 5));
// console.log(calcularPerimetroRectangulo(10, 20));

// calcularPorcentaje(numero, porcentaje)
// Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

// calcularPorcentaje(100, 15) // 15
// calcularPorcentaje(10, 50) // 5
// calcularPorcentaje(200, 10) // 20

// let calcularPorcentaje =(numero, porcentaje)=>{
//     return numero * porcentaje / 100
// }

// console.log(calcularPorcentaje(100, 15));
// console.log(calcularPorcentaje(10, 50));
// console.log(calcularPorcentaje(200, 10));


// sumarPorcentaje(numero, porcentaje)
// Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

// sumarPorcentaje(100, 15) // 115
// sumarPorcentaje(10, 50) // 15
// sumarPorcentaje(200, 10) // 220

// let sumarPorcentaje =(numero, porcentaje)=>{
//     return numero + (numero * porcentaje / 100)

// }

// console.log(sumarPorcentaje(100, 15));
// console.log(sumarPorcentaje(10, 50));
// console.log(sumarPorcentaje(200, 10));


// restarPorcentaje(numero, porcentaje)
// Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar

// restarPorcentaje(100, 15) // 85
// restarPorcentaje(10, 40) // 6
// restarPorcentaje(200, 10) // 180


// calcularFPS(fps, minutos)
// FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

// calcularFPS(1, 1) // 60
// calcularFPS(10, 2) // 1200
// calcularFPS(2, 3) // 360

// let calcularFPS = (fps, minutos)=>{
//     return fps * 60 * minutos
// }

// console.log(calcularFPS(1, 1));
// console.log(calcularFPS(10, 2));
// console.log(calcularFPS(2, 3));

// obtenerCompetencia(a, b)
// Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b

// obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
// obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
// obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`

// let obtenerCompetencia= (a, b)=>`'${a} vs. ${b}'`

// console.log(obtenerCompetencia('JavaScript', 'Python'));
// console.log(obtenerCompetencia('Coca', 'Pepsi'));
// console.log(obtenerCompetencia('Perros', 'Gatos'));



// generarEmail(usuario, dominio)
// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

// generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'

let generarEmail =(usuario, dominio)=>{
    return `'${usuario}@${dominio}.com'`
}

console.log(generarEmail('adalovelace', 'gmail'));


// esMayorDeEdad(edad)
// Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario

// esMayorDeEdad(15) // false
// esMayorDeEdad(18) // true
// esMayorDeEdad(27) // true

// let esMayorDeEdad = (edad)=>{
//     return edad >= 18;
// }

// console.log(esMayorDeEdad(15));
// console.log(esMayorDeEdad(18));
// console.log(esMayorDeEdad(27));


// haceCalor(temperatura)
// Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace calor (22 grados o más) o false de lo contrario

// haceCalor(12) // false
// haceCalor(22) // true
// haceCalor(32) // true


// haceFrio(temperatura)
// Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace frio (12 grados o menos) o false de lo contrario

// haceFrio(12) // true
// haceFrio(22) // false
// haceFrio(3) // true
// haceFrio(-2) // true

// let haceFrio =(temperatura)=>{
//     return temperatura <= 12;
// }

// console.log(haceFrio(12));
// console.log(haceFrio(22));
// console.log(haceFrio(3));
// console.log(haceFrio(-2));


// calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos
// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40

// let calcularPuntaje = (n1, n2, n3) =>{
//     let facil = n1 * 3;
//     let normal = n2 * 5;
//     let dificil = n3 * 10;
//     let resultado = facil + normal + dificil;
//     return resultado;

// }

// console.log(calcularPuntaje(3, 0, 0));
// console.log(calcularPuntaje(0, 2, 1));
// console.log(calcularPuntaje(5, 1, 2));


// aceptaDeposito(monto)
// Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es

// aceptaDeposito(440) // true
// aceptaDeposito(123) // false
// aceptaDeposito(500.50) // false
// aceptaDeposito(1000) // true

// let aceptaDeposito = (monto)=>{
//     return monto % 10 == 0
// }

// console.log(aceptaDeposito(440));
// console.log(aceptaDeposito(123));
// console.log(aceptaDeposito(500.50));
// console.log(aceptaDeposito(1000));