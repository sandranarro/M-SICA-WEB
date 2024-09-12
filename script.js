
//EVENTOS
document.getElementById("botonMostrarTodos").addEventListener("click", function(){
    fetchMostrarTodos()
})

document.getElementById("botonMostrarAlfa").addEventListener("click", function(){
    fetchMostrarAlfa()
})



//FUNCIONES FETCH

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












//FUNCIONES LÓGICAS 


function mostrarTodos(musicas){
    mostrarEnHTML(musicas)

}

function mostrarAlfa(musicas){
    musicas.sort(function (a, b){return a.nombre.localeCompare(b.nombre)})

    mostrarEnHTML(musicas)
}





// FUNCIÓN MOSTRAR EN HTML

function mostrarEnHTML(musicas){

    document.getElementById("padre").innerHTML= ""  //LIMPIAMOS LA

  for (var i = 0; i< musicas.length; i = i + 1){
    document.getElementById("padre").innerHTML += `
    <div class="hijo">
            <img src="${musicas[i].imagen}">
            <p>${musicas[i].nombre}</p>
            <p>${musicas[i].categoría}</p>
            <p>${musicas[i].oyentes}</p>
            

        </div>
    `
  }

}

















//mostrar los nombres de los pokemon
function mostrarNombres(pokemones) {
    //Escribe tu codigo aqui
}


function pokemonesAtaqueMayorA120(pokemones) {
    //Escribe tu codigo aqui
}

function pokemonesDefensaMenorA100(pokemones) {
    //Escribe tu codigo aqui
}

function pokemonesTipoElectrico(pokemones) {
    //Escribe tu codigo aqui

}

function minimo2tipos(pokemones) {
    //Escribe tu codigo aqui
}

function ordenar(pokemones) {
    //escribe tu codigo aqui
}







