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
/* tous les types*/
objects.exp07 = function () {
    console.clear();
    /*les methodes sont des methodes qui devrait fonctionner de meme facon sur les objets de meme type 
    et on definit jamais les methodes dans le constructeur mais il devrait definit e l'exterieur
    toutes les fonctions joue le role du constructeur 
    exp methode toString()
    function Point(x=0,y=0){//syntaxe ES-6 les parametres optionel :x=0,y=0
        this.x = x;
        this.y = y;
        this.toString = function () {
            return 'Point (' + this.name + ',' +this.x + ',' + this.y + ')';//l'usage du this en javascript est une necessite
        }
    }*/

    function Point(x=0,y=0){
        this.x = x;
        this.y = y;
    }
    //prototype pour etre prepare d'utiliser comme un type
    Point.prototype.toString = function () {
        return 'Point (' + this.name + ',' +this.x + ',' + this.y + ')';
    }
    Point.prototype.print = function () {
       
        console.log('Point (' + this.x + this.y + ')');
    }

    Point.prototype.name = 'Un Point';

    


    /*new Point(20,30) <=> let p1 =Object.create(Point.prototype);
                            +Appel a Point() sur p1=> this dans Point correspond a p1
    toute fois on fait new Point() on entrain de clonner prototype de Point   
    */
    let p1 = new Point(20,30);
    console.log('p1 = ' + p1);
    console.log('p1 = ', p1);

    //pour definir propriete static
    Point.MAX_X = 1000;//
    let p2= new Point(24);
    p2.print();

    console.log(Point.MAX_X);
    console.log(p1.MAX_X); //undefined

}

objects.exp08 = function () {
   
    console.clear();
    //Classes ES-6
    class Point{
        //propriete prive #
        #name = 'Point';
        //static
        static MAX_X = 1000;
        constructor(x=0,y=0){
            this.x = x;
            this.y = y;
        }

        toString () {
            return 'Point ('  +this.x + ',' + this.y + ')';
        }

        print () {
            console.log('Point (' + this.x + ',' + this.y + ')');
        }
        //getters et setters
        get name () {
            console.log('getter()');
            return this.#name;
        }
        set  name(value){
            console.log('setter()');
            this.#name = value;
        }

        //definir methode static
        static info(){
            console.log('type Point avec MAX_X : ' + this.MAX_X);
        }


    }

    let p1=new Point(20,30);
    console.log('p1 = ' + p1);// Affichage en tant que toString ()
    console.log('p1 = ', p1);// Affichage en tant qu'objet
    p1.print();

    p1.name= 'p1';
    console.log(p1.name);
    //console.log('p1.name = ' + p1.#name); //undefined

    Point.info();
    //p1.info(); //undefined

    //heritage prototypage
    class City extends Point{
        constructor(name,x,y){
            super(x,y);//appel du constructeur de la classe mere et il'est obligatoire
            this.name = name;
        }
        print () {
            console.log('Ville de ' + this.name + ':(' +this.x + ',' + this.y + ')');
        }
       
    }
    let c1=new City('Fes',3000,5000);
    c1.print();
}

