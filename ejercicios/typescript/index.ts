// Boolean
let muted: boolean = true;
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Zenil';
let saludo: string = `Me llamo ${nombre}`;

// Arreglo
let people: string[] = [];
people = ['Asimov', 'Dorian', 'Zack'];
people.push(nombre);
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Bukousky');
peopleAndNumbers.push(7001);

// Enum
enum Color {
    Rojo = 'rojo',
    Verde = 'verde',
    Azul = 'azul',
    Amarrillo = 'amarillo'
};
let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'WildCard' };

// Object
let someObject: Object = { type: 'Wildcard' };


// Funciones
function add(a: number, b: number): number {
    return a + b;
}
const sum = add(4, 6);

function createAdder(firstNum: number): (secondNum: number) => number {
    return function (secondNum: number) {
        return secondNum + firstNum;
    }
}
const addFour = createAdder(4);
const plusSeven = addFour(7);

function fullName(firtsName: string, lastName?: string, comodin: string = 'Smith'): string {
    return `${firtsName} ${lastName} ${comodin}`;
}
const wilde = fullName('Oscar');
console.log(wilde);