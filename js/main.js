function init(){
   var main = document.getElementById('main');
   var table = document.getElementById('table');
   var tab1 = new Array(4);
   var clear = document.getElementById('clear');
   var b = 0;
   var a = 9;

   clear.addEventListener('click', function(){
      window.tabValeur = [];
      window.tabOperateur = [];
      window.nombre = '';
      window.result = 0;
      affichage.innerHTML = '';
   }, false);

   window.tabValeur = [];
   window.tabOperateur = [];
   window.nombre = '';
   window.result = 0;
   window.t = 1;
   window.affichage = document.getElementById('resultat');


   for (i=0; i<4; ++i){
      tab1[i] = new Array(4);
   }

   for (i=0; i<3; ++i){
      for (p=0; p<3; ++p){
         tab1[i][p] = a;
         --a;
      }
   }
   tab1[3][0] = ".";
   tab1[3][1] = 0;
   tab1[3][2] = "=";
   tab1[3][3] = "+";
   tab1[2][3] = "-";
   tab1[1][3] = "x";
   tab1[0][3] = "/";

   afficheCalculette(tab1);
}

function afficheCalculette(tab1){

   for(i=0;i<4;i++){
      var tr = document.createElement('tr');
      table.appendChild(tr);

      for(p=0;p<4;p++){
         var td = document.createElement('td');
         tr.appendChild(td);
         td.innerHTML = tab1[i][p];

         if (p == 3){
            td.addEventListener('click', function(){
               operateur(this.innerHTML);
            },false);
         } else if (p == 2 && i == 3) {
            td.addEventListener('click', function(){
               operateur(this.innerHTML);
               egal();
            },false);
         } else {
            td.addEventListener('click', function(){
               afficheOperation(this.innerHTML);
            },false);
         }
      }
   }
}

function afficheOperation(valeur){
   if(valeur != '.'){
      affichage.innerHTML += valeur;
      nombre += valeur;
      t = 0;
   } else if (valeur == '.' && t == 0){
      affichage.innerHTML += valeur;
      nombre += valeur;
      t = 1;
   }

}

function operateur(valeur){
   if(t == 0){
      tabValeur.push(parseFloat(nombre));
      nombre = '';
      if(valeur != '='){
         tabOperateur.push(valeur);
         affichage.innerHTML += valeur;
         t = 1;
      }
   }
}

function egal(){
   var tabTest = ["x","/","+","-"];
   console.log(tabValeur, tabOperateur);
   for(i=0; i<3; i=i+2){
      for(p=0; p<tabOperateur.length; ++p){
         if (tabOperateur[p] == tabTest[i] || tabOperateur[p] == tabTest[i+1]){
            switch (tabOperateur[p]) {
               case "x":
                  tabValeur[p] *= tabValeur[p+1];
                  break;
               case "/":
                  tabValeur[p] /= tabValeur[p+1];
                  break;
               case "+":
                  tabValeur[p] += tabValeur[p+1];
                  console.log('+', p,tabValeur[p], tabValeur[p+1]);
                  break;
               case "-":
                  tabValeur[p] -= tabValeur[p+1];
                  break;
            }
            supp(p+1);
         }
      }
   }
   if(tabValeur.length == 1){
      affichage.innerHTML = tabValeur[0];
      nombre = tabValeur[0];
      tabValeur = [];
      tabOperateur = [];
   }
}

function supp(index){
   for(i=0; i<tabValeur.length-1; i++){
      if(i>=index){
         tabValeur[i] = tabValeur[i+1];
      }
      if (i>=index-1) {
         console.log(tabOperateur);
         tabOperateur[i] = tabOperateur[i+1];
      }
   }
   tabValeur.pop();
   tabOperateur.pop();
   egal();
}
