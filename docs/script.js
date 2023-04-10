




function Votor(id, candidato, quantidadeVoto, eleitor) {
  this.id = id;
  this.candidato = candidato;
  this.quantidadeVoto = quantidadeVoto;  
  this.eleitor = eleitor;
}



let voto1 = new Votor();


var eleitoresArray = [];
var candidatosArray = [];

var objcandidatos = [

 {   
    id: 1, 
    nome: 'Alessandra Custódio',
    quantidadeVoto: 0
  },
   {  
    id: 2,
    nome: 'Ana Menani',
    quantidadeVoto: 0
  },
   {  
    id: 3,
    nome: 'Anna Marcos',
    quantidadeVoto: 0
  },  
   {  
    id: 4,
    nome: 'Elaine Silva',
    quantidadeVoto: 0
  },
  {  
    id: 5,
    nome: 'Fabio Pantoni',
    quantidadeVoto: 0
  },
  {  
    id: 6,
    nome: 'Fabio Pereira',
    quantidadeVoto: 0
  },
  {  
    id: 7,
    nome: 'Fabiola Rodrigues',
    quantidadeVoto: 0
  },
  {  
    id: 8,
    nome: 'Fernanda Machado',
    quantidadeVoto: 0
  },
  {  
    id: 9,
    nome: 'Jean Ananias',
    quantidadeVoto: 0
  },
  {  
    id: 10,
    nome: 'Jefferson Felix',
    quantidadeVoto: 0
  },
  {  
    id: 11,
    nome: 'Lidiane Lunardelo',
    quantidadeVoto: 0
  },
  {  
    id: 12,
    nome: 'Tania Sawasaki',
    quantidadeVoto: 0
  },
  {  
    id: 13,
    nome: 'Thiago',
    quantidadeVoto: 0
  },
  {  
    id: 14,
    nome: 'Vinicius Furquim',
    quantidadeVoto: 0
  },
  {  
    id: 15,
    nome: 'Isabela Oliveira',
    quantidadeVoto: 0
  },
  {  
    id: 16,
    nome: 'Maria de Lourdes',
    quantidadeVoto: 0      // alterar
  }
];


console.log(objcandidatos);

//objcandidatos.find(objcandidatos => objcandidatos.nome === 'diego');    procura o objeto no array pelo nome diego
//objcandidatos.findIndex(objcandidatos => objcandidatos.id === 3);       procura em qual posicao o id 3 esta
//objcandidatos[2].nome = "Ana";  altera o valor do nome baseado na posicao index

var AlessandraCustódio =   {   
  id: 1, 
  quantidadeVoto: 0
};

var AnaMenani = {  
  id: 2,
  quantidadeVoto: 0
};

var AnnaMarcos = {  
  id: 3,
  quantidadeVoto: 0
};

var ElaineSilva = {  
  id: 4,
  quantidadeVoto: 0
};

var FabioPantoni = {  
  id: 5,
  quantidadeVoto: 0       
};

var FabioPereira= {  
  id: 6,
  quantidadeVoto: 0
};

var FabiolaRodrigues = {  
  id: 7,
  quantidadeVoto: 0
};

var FernandaMachado= {  
  id: 8,
  quantidadeVoto: 0
};

var  JeanAnanias= {  
  id: 9,
  quantidadeVoto: 0
};

var JeffersonFelix = {  
  id: 10,
  quantidadeVoto: 0
};

var LidianeLunardelo = {  
  id: 11,
  quantidadeVoto: 0
};

var TaniaSawasaki = {  
  id: 12,
  quantidadeVoto: 0
};

var Thiago= {  
  id: 13,
  quantidadeVoto: 0
};

var ViniciusFurquim= {  
  id: 14,
  quantidadeVoto: 0
};

var IsabelaOliveira= {  
  id: 15,
  quantidadeVoto: 0
};

var MariadeLourdes= {  
  id: 16,
  quantidadeVoto: 0
};

//coleta os valores do nome e voto
function minhaFuncao(num){
  let numero = document.getElementById('voto').innerHTML;
  document.getElementById('voto').innerHTML = numero + num;
}

function votar(){
  lerdados();
  clean(); 
    
}

function clean(){
  document.getElementById('nome').value = "";      
  document.getElementById('voto').innerHTML = "";      
}

//atualiza a pagina
function reload(){
  document.getElementById('btTable').innerHTML;
  window.location.reload(); 
}


function lerdados() {

  
  voto1.eleitor = document.getElementById('nome').value;
  voto1.id = document.getElementById('voto').innerHTML;
  var nomeEleitor = voto1.eleitor;
  var valorvoto = voto1.id;    

  
    

  var indice;
    switch (valorvoto) {
      
      case '1' :
        AlessandraCustódio.quantidadeVoto = (AlessandraCustódio.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 1); 
          objcandidatos[indice].quantidadeVoto = AlessandraCustódio.quantidadeVoto;
          indice = 0;
                
        break;

      case '2' :
        AnaMenani.quantidadeVoto = (AnaMenani.quantidadeVoto + 1);
        indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 2); 
        objcandidatos[indice].quantidadeVoto = AnaMenani.quantidadeVoto;
        indice = 0;
        break;     

        case '3' :
          AnnaMarcos.quantidadeVoto = (AnnaMarcos.quantidadeVoto + 1);
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 3); 
          objcandidatos[indice].quantidadeVoto = AnnaMarcos.quantidadeVoto;
          indice = 0;
        break;

        case '4' :
          ElaineSilva.quantidadeVoto = (ElaineSilva.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 4); 
          objcandidatos[indice].quantidadeVoto = ElaineSilva.quantidadeVoto;
          indice = 0;
        break;

        case '5' :
          FabioPantoni.quantidadeVoto = (FabioPantoni.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 5);     
          objcandidatos[indice].quantidadeVoto = FabioPantoni.quantidadeVoto;
          indice = 0;
        break;

        case '6' :
          FabioPereira.quantidadeVoto = (FabioPereira.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 6);     
          objcandidatos[indice].quantidadeVoto = FabioPereira.quantidadeVoto;
          indice = 0;
        break;

        case '7' :
          FabiolaRodrigues.quantidadeVoto = (FabiolaRodrigues.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 7);     
          objcandidatos[indice].quantidadeVoto = FabiolaRodrigues.quantidadeVoto;
          indice = 0;
        break;

        case '8' :
          FernandaMachado.quantidadeVoto = (FernandaMachado.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 8);     
          objcandidatos[indice].quantidadeVoto = FernandaMachado.quantidadeVoto;
          indice = 0;
        break;

        case '9' :
          JeanAnanias.quantidadeVoto = (JeanAnanias.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 9);     
          objcandidatos[indice].quantidadeVoto = JeanAnanias.quantidadeVoto;
          indice = 0;
        break;

        case '10' :
          JeffersonFelix.quantidadeVoto = (JeffersonFelix.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 10);     
          objcandidatos[indice].quantidadeVoto = JeffersonFelix.quantidadeVoto;
          indice = 0;
        break;

        case '11' :
          LidianeLunardelo.quantidadeVoto = (LidianeLunardelo.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 11);     
          objcandidatos[indice].quantidadeVoto = LidianeLunardelo.quantidadeVoto;
          indice = 0;
        break;

        case '12' :
          TaniaSawasaki.quantidadeVoto = (TaniaSawasaki.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 12);     
          objcandidatos[indice].quantidadeVoto = TaniaSawasaki.quantidadeVoto;
          indice = 0;
        break;

        case '13' :
          Thiago.quantidadeVoto = (Thiago.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 13);     
          objcandidatos[indice].quantidadeVoto = Thiago.quantidadeVoto;
          indice = 0;
        break;

        case '14' :
          ViniciusFurquim.quantidadeVoto = (ViniciusFurquim.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 14);     
          objcandidatos[indice].quantidadeVoto = ViniciusFurquim.quantidadeVoto;
          indice = 0;
        break;

        case '15' :
          IsabelaOliveira.quantidadeVoto = (IsabelaOliveira.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 15);     
          objcandidatos[indice].quantidadeVoto = IsabelaOliveira.quantidadeVoto;
          indice = 0;
        break;

        case '16' :
          MariadeLourdes.quantidadeVoto = (MariadeLourdes.quantidadeVoto + 1); 
          indice = objcandidatos.findIndex(objcandidatos => objcandidatos.id === 16);     
          objcandidatos[indice].quantidadeVoto = MariadeLourdes.quantidadeVoto;
          indice = 0;
        break;


        
    
      default:
        confirm("Digite um num valido");
        break;
    }
    //console.log("==================================");
    //console.log("Alessandra possue " + AlessandraCustódio.quantidadeVoto + " voto!");
    //console.log("diego possue " + diego.quantidadeVoto + " voto!");
    //console.log("alex possue " + alex.quantidadeVoto + " voto!");
    //console.log("alan possue " + alan.quantidadeVoto + " voto!");
    //console.log("jonata possue " + jonata.quantidadeVoto + " voto!");

    //console.log("==================================\n");

  // Imprime os valores na tabela de resultado
    var meuElemento = document.getElementById('1');
   meuElemento.innerHTML = AlessandraCustódio.quantidadeVoto;

   var meuElemento1 = document.getElementById('2');
   meuElemento1.innerHTML =  AnaMenani.quantidadeVoto;

   var meuElemento2 = document.getElementById('3');     // alterar
   meuElemento2.innerHTML = AnnaMarcos.quantidadeVoto;

   var meuElemento3 = document.getElementById('4');
   meuElemento3.innerHTML = ElaineSilva.quantidadeVoto;

   var meuElemento4 = document.getElementById('5');
   meuElemento4.innerHTML = FabioPantoni.quantidadeVoto;

   var meuElemento5 = document.getElementById('6');
   meuElemento5.innerHTML = FabioPereira.quantidadeVoto;

   var meuElemento6 = document.getElementById('7');
   meuElemento6.innerHTML = FabiolaRodrigues.quantidadeVoto;

   var meuElemento7 = document.getElementById('8');
   meuElemento7.innerHTML = FernandaMachado.quantidadeVoto;

   var meuElemento8 = document.getElementById('9');
   meuElemento8.innerHTML = JeanAnanias.quantidadeVoto;

   var meuElemento9 = document.getElementById('10');
   meuElemento9.innerHTML = JeffersonFelix.quantidadeVoto;

   var meuElemento10 = document.getElementById('11');
   meuElemento10.innerHTML = LidianeLunardelo.quantidadeVoto;

   var meuElemento11 = document.getElementById('12');
   meuElemento11.innerHTML = TaniaSawasaki.quantidadeVoto;

   var meuElemento12 = document.getElementById('13');
   meuElemento12.innerHTML = Thiago.quantidadeVoto;

   var meuElemento13 = document.getElementById('14');
   meuElemento13.innerHTML = ViniciusFurquim.quantidadeVoto;

   var meuElemento14 = document.getElementById('15');
   meuElemento14.innerHTML = IsabelaOliveira.quantidadeVoto;

   var meuElemento15 = document.getElementById('16');
   meuElemento15.innerHTML =  MariadeLourdes.quantidadeVoto;
   

    eleitoresArray.push(nomeEleitor);
    candidatosArray.push(valorvoto);

    
    console.log(eleitoresArray);
    console.log(candidatosArray);

    //candidatosArray.forEach(function(jesica.id ){

    //})

    console.log(objcandidatos);




    window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
  });




  




  let imprimenomes = document.getElementById('listanome');
  let contenteudo = "";
      for (var i = 0; i < eleitoresArray.length; i++) {
        contenteudo += eleitoresArray[i] + "<br>";
      }

    imprimenomes.innerHTML = contenteudo ;


  

  }

    
  
  function resultado(){
    var resultado = document.getElementById('block');
    resultado.style.display = 'none';
    
    
    
  }
    
  
