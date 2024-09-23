
import data from "./data.js";

const musicas = data;

console.log(musicas);

//EVENTOS
document.getElementById("mostrarTodo").addEventListener("click", function(){
mostrarTodo(musicas);
});
    
//alfabeto 
document.getElementById("ordenarAlfabeticamente").addEventListener("click", function(){
    mostrarAlfa(musicas);
    });
//por oyentes
document.getElementById("ordenarOyente").addEventListener("click", function(){
    mostrarOyente(musicas);
    });

//buscador

document.getElementById("txtNombre").addEventListener("input",function(){
  filtrarPorNombre(musicas,document.getElementById("txtNombre").value.toLowerCase());
});
 //grafico
document.getElementById("estadisticas").addEventListener("click",function(){
  mostarEstadisticas(musicas);
});
//categoría 
document.getElementById("categoria").addEventListener("click", function(){
   
    fetchMostrarCate(document.getElementById("categoria").value )
})

//fetch
function fetchMostrarCate(categoriaSeleccionada){
    fetch('musica.json') 
     .then(response => {
         if (!response.ok) {
             throw new Error('Error al cargar el JSON');
         }
         return response.json(); 
     })
     .then(musicas => {
        
         mostrarCate(musicas,categoriaSeleccionada );
 
     })
     .catch(error => {
         console.error('Hubo un problema con la solicitud:', error);
     }); 
 
 }


//funciones logicas

function mostrarTodo(musicas){
  mostrarEnHTML(musicas)
}

function mostrarAlfa(musicas){
    const musicasOrdenados = musicas.slice();
    musicasOrdenados.sort(function(a,b){return a.nombre.localeCompare(b.nombre)})
    mostrarEnHTML(musicasOrdenados);

}

function mostrarOyente(musicas){
    const musicasOrdenados = musicas.slice();
    musicasOrdenados.sort(function(a,b){return a.oyentes-b.oyentes})
    mostrarEnHTML(musicasOrdenados);

}

function filtrarPorNombre(musicas,txtNombre){
  const filtrarPorNombre =musicas.filter(function(musica){return musica.nombre.toLowerCase().includes(txtNombre)})
  mostrarEnHTML(filtrarPorNombre);
}

function mostrarCate(musicas, categoriaSeleccionada){
    var nuevo = musicas.filter(function(musica){return musica.categoría == categoriaSeleccionada})
    console.log(nuevo)
    mostrarEnHTML(nuevo)
}

function mostarEstadisticas(musicas){
 //parte logica

 var cantpop = musicas.filter(function(musica){return musica.categoría.includes("Pop")}).length;
 var cantRYB = musicas.filter(function(musica){return musica.categoría.includes("R&B")}).length;
 var cantKpop = musicas.filter(function(musica){return musica.categoría.includes("K-pop")}).length;



  document.getElementById("contenido").innerHTML =' <canvas id= "myPieChart"></canvas>'
// Obtén el contexto del canvas
const ctx = document.getElementById('myPieChart').getContext('2d');

// Crea una nueva instancia de Chart.js
const myPieChart = new Chart(ctx, {
    type: 'pie', // Tipo de gráfico: pastel
    data: {
        labels: ['Pop', 'R&B', 'K-pop'], // Etiquetas para cada sección
        datasets: [{
            data: [ cantpop , cantRYB, cantKpop], // Datos para cada sección
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Color de fondo para la primera sección
                'rgba(54, 162, 235, 0.2)', // Color de fondo para la segunda sección
                'rgba(147, 93, 202)',  // Color de fondo para la tercera sección
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Posición de la leyenda
            },
           
        }
    }
});



  

}
function mostrarEnHTML(musicas){
  document.getElementById("contenido").innerHTML="";
  for (let i=0; i<musicas.length; i ++ ){
    document.getElementById("contenido").innerHTML+=
     `
    <div>
        <img src="${musicas[i].imagen}"/>
       <p>${musicas[i].nombre}</p> 
       <p>${musicas[i].categoría}</p> 
       <p>${musicas[i].debut}</p> 
       <p>${musicas[i].oyentes}</p> 
    </div>
      `
    }
}




