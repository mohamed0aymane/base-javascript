const objects = {}; // new Object ();
let z=40;
objects.exp01 = function () {
    console.clear;
    let p1 = {
        x : 20,
        y : 30,
        z,
        //Redéfinition de la méthode toString ()
        toString : function(){
            return 'Point (' + this.x + this.y + this.z + ')';
        },
        //Raccourci/Possibilité es6
        print (message){
            if(message == undefined){
                message = 'Point'; 
            }
            console.log(message + '(' + this.x + this.y + this.z + ')');
        }
    }
    
    console.log(' - p1 = ' + p1); // Affichage en tant que toString ()
    console.log(' - p1 = ' , p1); // Affichage en tant qu'objet

    printVar('p1',p1)

    p1.print();
    p1.print('p1')   
}
objects.exp02 = function () {
    console.clear;
    let p1 = {}
    p1.x = 20;
    p1.y = 30;
    p1.toString = function(){
        return 'Point (' + p1.x + p1.y + ')';
    }
    p1.print = function (message) {
        if(message == undefined){
            message = 'Point'; 
        }
        console.log(message + '(' + p1.x + p1.y + ')');
    }
    
    console.log(' - p1 = ' + p1); // Affichage en tant que toString ()
    console.log(' - p1 = ' , p1); // Affichage en tant qu'objet

    printVar('p1',p1)

    p1.print();
    p1.print('p1')   
}

objects.exp03 = function () {
    let prop = 'id';
    let value = 100;
    let p1 = {
        x : 20,
        y : 30,
        ['max - y'] : 1000,
        [prop] : value
    }
    p1.name = 'p1';
    console.log(' - p1 = ' , p1); // Affichage en tant qu'objet
    console.log(' - p1.x = ' , p1.x); // Affichage en tant qu'objet

    console.log("p1['x'] :", p1['x']);
    p1 ['max-x'] = 30;
    
    let keys = Object.keys(p1);
    console.log(' keys : ', keys);
    prop = 'y';
    console.log('p1.' + prop + ' = ' + p1[prop]);

    for (let key in p1) {
        console.log('p1.' + key + ' = ' + p1 [key]);
    }
}

objects.exp04 = function () {
    let t1 = [];
    let a1 = {};

    console.log('t1 : ' + typeof t1)
    console.log('a1 : ' + typeof a1)
    console.log('t1.length ') + t1.length;
    
    t1[0] = 20
    a1[0]= 20
    console.log('a1.length ' + a1.length + '(Apdres affection)');
    console.log('t1 keys : ' + Object.keys(t1))
    console.log('t1 keys : ' + Object.keys(a1))

}


objects.exp05 = function (){
    //SpredOperator
    let p1 = {x: 30,y : 30}
    p1 = {...p1, x : 50 ,z : 80}

    //Destructuring
    let {x,z : a } = p1;
    console.log('x = ' + x);
    console.log('a = ' + a);
}


objects.exp06 = function () {
    let p1 = {
        name : 'p1',
        x : 20,
        y : 30,
        toString () {
            return 'Point (' + this.name + ',' + this.x + ',' + this.y +')';
        }
    }

    Object.prototype.id = 100; // On peut aussi rajouter des propriétés à la classe object

    let p2 = Object.create(p1);
    
    p2.x = 0;
    p2.name = 'p2';
    console.log('p2.x = ' + p2.x);
    
    console.log('p1 = ' + p1);
    console.log('p2 = ' + p2);
    
    console.log('p1 = ',p1);
    console.log('p2 = ',p2);

    let pp2 = Object.getPrototypeOf(p2);
    console.log('pp2 : ' + pp2 );
    
    let ppp2 = Object.getPrototypeOf(pp2);
    console.log('ppp2 : ' + ppp2 );
}