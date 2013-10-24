/*Ancienne fonction adder*/
function adder(l, r){
  return function(v){
    return l(v) + r(v);
  }
}

/*Nouvelle fonction adder modifiée Question2 EX1*/
function adder(/*args*/){

  //On sauvegarde dans un tableau les arguments passés en paramêtre
  var args = Array.prototype.slice.call(arguments);
  return function(v){
     //On se sert du tableau crée par la fonction qui retourne la fonction anonyme
     var resu = 0; //var qui servira à stocker le resultat des additions succesives
     args.forEach(function(fonction){resu+= fonction(v);});
     return resu;
     //si args est un tableau vide alors le resu est de 0 (valeur initiale de la variable)
  }
}

function mult(v){
  return function(e){
    return v*e;
  }
}

/*Question 1 EX1*/
function sub(x){
    return function(y){
        return x - y;
    }
}

/*test*/ 

adder(mult(2), mult(4))(2);

sub(0)(0); // 0
sub(2)(1); // 1
sub(2)(2); // 0
sub(2)(4); // -2

adder()(0); // 0
adder()(1); // 0
adder(mult(2))(1); // 2
adder(mult(2), mult(2))(1); // 4
adder(mult(2), mult(2), mult(2))(1); // 6
adder(mult(2), sub(2), mult(2))(1); // 5

    
