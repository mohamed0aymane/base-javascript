//Mode Strict en javaScript ==> Elle est utilisé pour charger le mode strict
//"use strict";

//alert('Script externe')
afficher('Script externe')

// Pour imprimer la page en PDF par exemple ===>  print("Test")
function afficher (message) {
    //alert(message);
    console.log(message);
}


// Type de base de JavaSCript [int v1 stocké sur 8octet] [bigint v2 'ends with n'] [v3 String] [v4 boolean] [v5 Object] [v6 undefined] [Il y a aussi un type Symbol]
// For all these they have wrapper types
// un char est un String de taille 1 et donc il y a absence de notion de char, tout est considéré comme étant un String
// none, null, undefined
var v1 = 201.45, v2 = 25680n , v3 = 'String', v4 = 20 < 30, v5 = null, v6 ,v10 = Symbol ,v9 = Function ()
// Le typage en JavaScript est dynamique

v7 = 'Variable Globale implicite';

function printVar (name, variable){
    console.log(' - ' + name + ' : ' + typeof(variable) + ' = ' + variable )
}

function exp01 () {
    console.clear();
    printVar('v1', v1);
    printVar('v2', v2);
    printVar('v3', v3);
    printVar('v4', v4);
    printVar('v5', v5);
    printVar('v6', v6);
    printVar('v7', v7);
    printVar('v9', v9);
    console.log('v10',typeof v10,v10);
    if([] instanceof Array) console.log('Array');
}

function exp02 () {
//  Objet Global ==> toute variable global est défini comme étant attribut de l'objet window
    printVar('Window.v1', window.v1);
    window.v8 = 'Global Object';
    window.printVar('v8', v8);
    window.console.log('console est aussi propriété de window');
//  window.alert('Alert de la propriété window');
    // L'objet sera de type function
    window.test = function () {
        console.log('Ceci est la fonction test()')
    }

    printVar('function', test);
    test ();
}

function exp03 () {
    let x1 = 20;
    let x2 = new Number(20);
    let x3 = new Number(20);

    printVar('x1', x1);
    printVar('x2', x2);
    printVar('x3', x3);
    printVar('x1 + x2', x1 + x2)

    // Comparaison normale des valeurs seulement
    console.log('x1 == x2', x1 == x2); // True ==> Unboxing automatique entre Object et Number
    console.log('x1 == x3', x1 == x3); // True
    console.log('x2 == x3', x2 == x3); // False
    
    //  Comparaison strict
    console.log('x1 === x2', x1 === x2); // False ==> Compare les types et les valeurs
    
}

function falsyTruthy (name, value) {
    if(value) {
        console.log(' = ' + name + ' is true ')
    } else {
        console.log(' = ' + name + ' is false ')
    }
}

function exp04 () {
    // Les valeurs falsy (falsy values )
    let x1 = 0;
    let x2 = '';
    let x3 = false;
    let x6;
    let x7 = null;
    let x8 = NaN;

    falsyTruthy('x1',x1)
    falsyTruthy('x2',x2)
    falsyTruthy('x3',x3)
    falsyTruthy('x6',x6)
    falsyTruthy('x7',x7)
    falsyTruthy('x8',x8)

    printVar('x1', x1);
    printVar('x2', x2);
    printVar('x3', x3);

    if(!x1) console.log('x1 = false')
    if(!x2) console.log('x2 = false')
//  if(x4) console.log('x4 = true')// Affichera une erreur si on laisse cette ligne puisque la variable a été déclaré en tant que let
//  Quand on déclare x5 en tant que var, la déclaration se fait au début de la fonction en tant qu'undefined
    if(x5) console.log('x5 = true'); else console.log('x5 = false'); // true

    console.log('x1 == x2', x1 == x2); // True
    console.log('x1 == x3', x1 == x3); // True
    console.log('x2 == x3', x2 == x3); // True

    var x5 = 1;
    let x4 = [];  // Tableau vide
    if(x5) console.log('x5 = true'); else console.log('x5 = false');
    console.log('x1 === x4', x1 === x4) // False
    console.log('x2 === x4', x2 === x4) // False
    console.log('x3 === x4', x3 === x4) // False
}

function exp05 () {
    let x1 = '20.5';
    let x2 = 14.2;

    printVar('x1', x1);
    printVar('x2', x2);

    let x3 = parseFloat (x1) + x2;
    printVar('x3', x3);
    printVar('test ', 0.1 + 3 + 5 + '0.6') //  - test  : string = 8.10.6 (fait l'addition/concatenation nombre par nombre)
}
