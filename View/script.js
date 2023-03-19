const apiKey = "a23e5fd8"
const searchForm = document.querySelector('#searchForm')
const movieTitle = document.querySelector('#movieTitle')
const movieImage = document.querySelector('#movieImage')
const moviePlot = document.querySelector('#moviePlot')
const movieCast = document.querySelector('#movieCast')
const content = document.querySelector('#content')
const details = document.querySelector('#details')


searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    getMovie(e.target.searchBar.value)
    e.target.reset()
    content.style.display = "flex"
    details.style.display = "block"

} )

const getMovie = function (movieName) {
    fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            movieTitle.textContent = data.Title
            movieImage.src = data.Poster
            moviePlot.textContent = data.Plot
            movieCast.textContent = data.Actors
        })
}


