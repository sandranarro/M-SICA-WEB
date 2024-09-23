
// eventos 
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

function fetchMostrarTodos() {
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

function mostrarTodos(musicas) {
    mostrarEnHTML(musicas)

}


//funcion mostrar en HTML

function mostrarEnHTML(musicas) {

    document.getElementById("padre").innerHTML = ""  //LIMPIAMOS LA

    for (var i = 0; i < musicas.length; i = i + 1) {
        document.getElementById("padre").innerHTML += `
    <div class="hijo">
            <img src="${musicas[i].imagen}">
            <p>${musicas[i].nombre}</p>
            <p>${musicas[i].categoría}</p>
            <p>${musicas[i].oyentes}</p>
            
           <button  class="bottonCanciones"  data-id="${musicas[i].nombre}"  data-bs-toggle="modal" data-bs-target="#modalito"> reproducir </button> 
           
        </div>
    `

    }



    const botones = document.getElementsByClassName("bottonCanciones");

    // Agregar evento a cada botón
    Array.from(botones).forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.getAttribute('data-id');
            document.getElementById("nombreArtista").innerHTML = nombre;

            var artista = musicas.find(art => art.nombre == nombre)
            document.getElementById("modalOyentes").innerHTML = "oyentes: " + artista.oyentes

            document.getElementById("listaCanciones").innerHTML='';

            
            artista.album.forEach(alb => {
                
                document.getElementById("listaCanciones").innerHTML +=  `
                <li>
                    <details>
                        <summary> <a target="_blank"  href="${alb.link}">${alb.nombre}</a></summary>
                        <ul>
                            ${alb.canciones.map(cancion => `<li>${cancion}</li>`).join('')}
                        </ul>
                    </details>

                    
                </li>
            `


            });

            // Aquí puedes manejar la lógica para reproducir la canción
        });
    });

}

