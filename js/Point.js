function Point(x=0,y=0){//syntaxe ES-6 les parametres optionel :x=0,y=0
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
        return 'Point ('  +this.x + ',' + this.y + ')';//l'usage du this en javascript est une necessite
}
Point.prototype.name = 'Un Point';
   