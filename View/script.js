
const searchForm = document.querySelector('#searchForm')
const movieTitle = document.querySelector('#movieTitle')
const movieImage = document.querySelector('#movieImage')
const moviePlot = document.querySelector('#moviePlot')
const movieCast = document.querySelector('#movieCast')
const content = document.querySelector('#content')
const details = document.querySelector('#details')
const movieDate = document.querySelector('#movieDate')



searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    allMovies.innerHTML = ""
    getMovie(e.target.searchBar.value)
    e.target.reset()
    content.style.display = "flex"
    details.style.display = "block"

} )

const getMovie = function (movie) {
    movieName = movie.replace(/%20/g, " ");
    fetch(`http://localhost:7000/movies/${movieName}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            movieTitle.textContent = data.Title
            movieDate.textContent = data.date
            movieImage.src = data.poster
            moviePlot.textContent = data.description
            movieCast.textContent = data.cast
        })
}


const allMovies = document.querySelector('#allMovies')
const moviesButton = document.querySelector('#moviesButton')

const getMovies = function () {
    fetch('http://localhost:7000/movies')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                const li = document.createElement('li')
                li.innerText= data[i].title
                allMovies.appendChild(li)
            }
        })
}

moviesButton.addEventListener('click', () => {
    getMovies()
    content.style.display = "none"
    details.style.display = "none"
})

