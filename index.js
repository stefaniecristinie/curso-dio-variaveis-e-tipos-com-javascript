//hoisting:

//numberOne = 1; 

//console.log(numberOne + 2);

//var numberOne; --> funciona sem a declaração.

//Redeclaração:

//var firstName = 'João';

//if(firstName === 'João') {
//    var firstName = 'Pedro'; //redeclarado.
//}

//console.log(firstName);

//Reatribuição:

//var firstName = 'João';
//let lastName = 'Souza';

//if (firstName === 'João') {
//    let lastName = 'Rodrigues';
//    var firstName = 'Pedro';
//    lastName = 'Silva'; //Reatribuição: de Rodrigues para Silva.

//    console.log(lastName); //lastName = Silva
//}

//console.log(firstName, lastName);//lastName = Souza.

//Constante:

//const FIRST_NAME = 'Stefanie';

//console.log(FIRST_NAME);