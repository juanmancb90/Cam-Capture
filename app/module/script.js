
/*-------------------------------------js objects---------------------------------------------*/
var objetos2 = {
				id: 12,
				value: 'test',
				metodo: function() {
					return	this.id+' '+this.value;
				}
};

objetos2.metodo();


function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

var x = new myFunction("John","Doe");
x.firstName; 

    var saveData = {
                novedad: data[0],
                sistema: data[1],
            };

document.writeln(saveData.novedad);


/*-------------------------------------js prototypes---------------------------------------------*/

function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
person.prototype.nationality = "English";

person.prototype.name = function() {
	var srt = this.firstName+' '+this.lastName;
	return srt;
};

/*-------------------------------------js class---------------------------------------------*/
var Request = function() {

	this.__construct = function(){
		console.log('created');
		var self = this;
		load_data();
	};

	var id = '';

	var load_data = function (){
		id += 1
        return id
	}

    this.__construct(); 
}

/*-------------------------------------jQuery Events---------------------------------------------*/

$(document).ready(function(){

	Request = new Request();
	Request.load_data();
});


$(function(){

	obj = new objetos2();
});

/****************************************************************ejemplo de funciones, obejcts and prototypes*********************************************************/
/* Busca el mínimo común múltiplo (MCM) de dos números */
function LCMCalculator(x, y) { // función constructora
    var checkInt = function (x) { // función interior
        if (x % 1 !== 0) {
            throw new TypeError(x + " no es un entero"); // lanza una excepción
        }
        return x;
    };
    this.a = checkInt(x) // puntos y coma son opcionales
    this.b = checkInt(y);
}
// El prototipo de las instancias de objeto creados por el constructor es el de la propiedad “prototype” del constructor.
LCMCalculator.prototype = { // objeto definido como literal
    constructor: LCMCalculator, // cuando reasignamos un prototipo, establecemos correctamente su propiedad constructor
    gcd: function () { // método que calcula el máximo común divisor
        // Algoritmo de Euclides:
        var a = Math.abs(this.a), b = Math.abs(this.b), t;
        if (a < b) {
            // intercambiamos variables
            t = b;
            b = a;
            a = t;
        }
        while (b !== 0) {
            t = b;
            b = a % b;
            a = t;
        }
        // Solo necesitamos calcular el MCD una vez, por lo tanto 'redefinimos' este método.
        // (Realmente no es una redefinición—está definida en la propia instancia, por lo tanto
        // this.gcd se refiere a esta 'redefinición' en vez de a LCMCalculator.prototype.gcd).
        // Además, 'gcd' === "gcd", this['gcd'] === this.gcd
        this['gcd'] = function () {
            return a;
        };
        return a;
    },
    // Los nombres de las propiedades del objeto pueden ser especificados con cadenas delimitadas con comillas simples (') o dobles (“).
    "lcm" : function () {
        // Los nombres de las variables no colisionan con las propiedades del objeto. Por ejemplo: |lcm| no es |this.lcm|.
        // No usar |this.a * this.b| para evitar problemas con cálculos en coma flotante.
        var lcm = this.a / this.gcd() * this.b;
        // Sólo necesitamos calcular MCM una vez, por lo tanto "redefinimos" este método.
        this.lcm = function () {
            return lcm;
        };
        return lcm;
    },
    toString: function () {
        return "LCMCalculator: a = " + this.a + ", b = " + this.b;
    }
};
 
// Definimos una función genérica para imprimir un resultado; esta implementación solo funciona en los navegadores web
function output(x) {
    document.body.appendChild(document.createTextNode(x));
    document.body.appendChild(document.createElement('br'));
}
 
// Nota: Los métodos.map() y.forEach() del prototipo Array están definidos en JavaScript 1.6.
// Estos métodos son usados aquí para demostrar la naturaleza funcional inherente del lenguaje.
[[25, 55], [21, 56], [22, 58], [28, 56]].map(function (pair) { // contrucción literal de un Array + función de mapeo.
    return new LCMCalculator(pair[0], pair[1]);
}).sort(function (a, b) { // ordenamos la colección por medio de esta función
    return a.lcm() - b.lcm();
}).forEach(function (obj) {
    output(obj + ", gcd = " + obj.gcd() + ", lcm = " + obj.lcm());
});
