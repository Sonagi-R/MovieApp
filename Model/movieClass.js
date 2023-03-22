const movies = require('../movies')

class Movie {

    constructor(movie) {
        this.title = movie.title;
        this.poster = movie.poster;
        this.description = movie.description;
        this.date = movie.date;
        this.cast = movie.cast;
        this.id = movie.id
    }

    static showAll() {
        return movies.map(m => new Movie(m))
    }

    static show(movieName) {
        const movie = movies.find(m => m.title === movieName)

        if (movie) {
            return new Movie(movie)
        } else {
            throw "movie not found"
        }
    }

    static create(newMovie) {
        newMovie['id'] = movies[movies.length - 1]['id'] + 1
        movies.push(newMovie)
        return new Movie(newMovie)
    }

    static destroy(idx) {
        const movie = movies.find(m => m.id === idx)
        movies.splice(movies.indexOf(movie), 1)
        return movies
    }

    static update(updateMovie, idx) {
        const movie = movies.find(m => m.id === idx)
        movie['title'] = updateMovie.title
        movie['description'] = updateMovie.description
        movie['cast'] = updateMovie.cast
        return new Movie(movie)
    }

}

module.exports = Movie