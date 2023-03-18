const movies = require('../movies')

class Movie {

    constructor(title, description, date, cast) {
        this.description = description;
        this.title = title;
        this.date = date;
        this.cast = cast;
    }

    static showAll() {
        return movies.map(m => new Movie(m))
    }

    static show(idx) {
        const movie = movies.find(m => m.id === idx)

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

}

module.exports = Movie