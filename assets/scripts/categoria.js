document.getElementById("botonMostrarAlfa").addEventListener("click", function(){
    fetchMostrarAlfa()
})
document.getElementById("categoria").addEventListener("click", function(){
   
    fetchMostrarCate(document.getElementById("categoria").value )
})

//buscador
document.getElementById("txtNombre").addEventListener("input",function(){
    filtrarPorNombre(musicas,document.getElementById("txtNombre").value.toLowerCase());
  });



/*------*/

fetchMostrarTodos()
document.addEventListener("DOMContentLoaded", () => {
    const botones = document.getElementsByClassName("bottonCanciones");
   
    // Convertimos la colección a un array
    Array.from(botones).forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('data-id');
            alert(`Botón clickeado con ID: ${id}`);
            // Aquí puedes manejar la lógica para mostrar la información del cantante
        });
    });
});

//funciones

function fetchMostrarTodos(){
    fetch('musica.json') 
     .then(response => {
         if (!response.ok) {
             throw new Error('Error al cargar el JSON');
         }
         return response.json(); 
     })
     .then(musicas => {
         mostrarTodos(musicas);
 
     })
     .catch(error => {
         console.error('Hubo un problema con la solicitud:', error);
     }); 
 
 }

  //funciones logicas

  function mostrarTodos(musicas){
    mostrarEnHTML(musicas)

}



/*-----------*/
//funciones
function fetchMostrarAlfa(){
    fetch('musica.json') 
     .then(response => {
         if (!response.ok) {
             throw new Error('Error al cargar el JSON');
         }
         return response.json(); 
     })
     .then(musicas => {
         mostrarAlfa(musicas);
 
     })
     .catch(error => {
         console.error('Hubo un problema con la solicitud:', error);
     }); 
 
 }




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
 function mostrarAlfa(musicas){
    musicas.sort(function (a, b){return a.nombre.localeCompare(b.nombre)})

    mostrarEnHTML(musicas)
}

function mostrarCate(musicas, categoriaSeleccionada){
    var nuevo = musicas.filter(function(musica){return musica.categoría == categoriaSeleccionada})
    console.log(nuevo)
    mostrarEnHTML(nuevo)
}

//buscador 


//funcion mostrar en html 
function mostrarEnHTML(musicas){

    document.getElementById("padre").innerHTML= ""  //LIMPIAMOS LA

  for (var i = 0; i< musicas.length; i = i + 1){
    document.getElementById("padre").innerHTML += `
    <div class="hijo">
            <img src="${musicas[i].imagen}">
            <p>${musicas[i].nombre}</p>
            <p>${musicas[i].categoría}</p>
            <p>${musicas[i].oyentes}</p>
            
           <a> reproducir </a> 

        </div>
    `
  }

}

 



