//const arrays = new Object ();
const arrays  = {};

function printArray(name, t) {
    //   console.log('name (' + t.length + ')')
    console.log(`${name} (${t.length})`);
    for(let i = 0;i < t.length; i++){
        console.log(' - ' + i + ' : ' + t[i]);
    }
}

// Alimentation dynamique avec les méthodes de l'objet, dans ce cas là de type function.
arrays.exp01 = function () {
    let t1 = [];
    t1[0] = 20;
    t1[1] = 24;
    t1[2] = 17;
    t1[5] = 36;

    delete t1[1];
    printArray("t1" ,t1);
    console.log('t1 = ',t1); // On utilise l'affichage natif de l'objet 
    console.log('t1 = ' + t1); // On utilise la fonction d'affichage toString ()
}


arrays.exp02 = function () {
    let t1 = new Array(20,24,15,84,12);
    t1.push(84);
    t1.push(12);
    console.log('t1 = ' + t1 instanceof arrays)
}

arrays.exp03 = function () {
    let t1 = [20,24,15,57,34];
    t1[10] = 55;
    t1 ['clavier'] = 460;
    t1 ['ecran'] = 1800;

//  Parcours seulements les clés de types int (y compris les undefineds )
    printArray('t1' ,t1);

    console.log('- avec for .. in');
//  Parcours toutes les clés existantes seulement pour les éléments définis.
    for (const key in t1) {
        console.log(key + ' : ' + t1[key]);
        console.log(typeof key)
        // console.log(' - key type : ' +typeof key)
    }
//  Parcours seulement les clés de types int ( y compris les undefineds )
    console.log('-avec for .. of');
    for (const value of t1) {
        console.log(' - ' + value);
    }

//  Autre solution pour récupérer les clés d'un tableau
    let keys = Object.keys(t1);
    console.log(' - Keys : ' + keys);
}

arrays.exp04 = function () {
    let author = [];
    author['id'] = 101;
    author['name'] = 'Brendan Eich';
    author['yearBorn'] = 1961;
    let div = document.getElementById("author")
    if(div.innerHTML.trim() == '') {
        printInHTMLTable (author, 'author');
    } else {
        div.innerHTML = '';
    }

};

function printInHTMLTable (data, id){
    let content = `
        <table class ="data-table">
            <tr><th>Key</th><th>Data</th></tr>
    `
    let keys = Object.keys(data);
    for (let key in data){
        content += `
            <tr><td>${key}</td><td>${data[key]}</td></tr>
        `
    }
    content += '</table>';
    document.getElementById(id).innerHTML = content;
}

//Spread Operator = opérator d'étalement ou décomposition (Possibilité de ES6)
arrays.exp05 = function (){
    let t1 = [20, 45, 17];
    //Cas N1 : Insertion en tête;
    t1 = [30, ...t1];
    console.log('t1 : ',t1)
    //Cas N2 : Insertion en queue(la fin);
    t1 = [...t1, 10, 52]
    console.log('t1 : ',t1)
    //Cas N3 : Fusion de tableaux
    let t2 = [23, 24, 25];
    let t3 = [...t1, ...t2];
    console.log(' t3 : ' + t3);
    //Cas N4 : Copie d'un tableau
    let t4 = [...t2];
    t4.push(80);
    console.log(t2);
    console.log(t4);
}

//
arrays.exp06 = function () {
    console.clear();
    // ES-6 : Object Destructuring (Décomposition, Déstructuration, Déstruction)
    let t1 = [20,14,57,87,65]
    // La valeur de x1 sera automatiquement déclaré comme etant celle de t1[0] et pour sa valeur sera t1[1]
    let [x1, x2, x3] = t1;

    console.log(x1);
    console.log(x2);
    console.log(x3);
}