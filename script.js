// Vista 1 - Home (buscador)

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';
  
    // solicitud a la API de 
    fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=663c975e`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          data.Search.forEach(movie => {
            const movieElement = createMovieElement(movie);
            resultsContainer.appendChild(movieElement);
          });
        } else {
          resultsContainer.innerHTML = 'No se encontraron resultados.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultsContainer.innerHTML = 'Se produjo un error al buscar películas.';
      });
  }
  
  function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
  
    const imgElement = document.createElement('img');
    imgElement.src = movie.Poster;
    movieElement.appendChild(imgElement);
  
    const detailsElement = document.createElement('div');
    detailsElement.classList.add('details');
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = movie.Title;
    detailsElement.appendChild(titleElement);
  
    const yearElement = document.createElement('p');
    yearElement.textContent = `Publicacion: ${movie.Year}`;
    detailsElement.appendChild(yearElement);
  
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Agregar a Peliculas a Mirar';
    addBtn.addEventListener('click', () => {
      addToWatchlist(movie);
    });
    detailsElement.appendChild(addBtn);
  
    movieElement.appendChild(detailsElement);
  
    return movieElement;
  }
  

  

// Renderizar la lista de películas a mirar cuando se carga la página
document.addEventListener('DOMContentLoaded', renderWatchlist);
