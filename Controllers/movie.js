const Movie = require('../Model/movieClass')

async function index(req, res) {
    try {
        const movies = await Movie.showAll();
        res.status(200).send(movies)
    } catch (error) {
        res.status(500).send({error:'Error with the movie database'})
    }
}

async function show(req, res) {
    const idx = parseInt(req.params.id)
    try {
        const movie = await Movie.show(idx)
        res.status(200).send(movie)
    } catch (error) {
        res.status(404).send({error:"Movie not found"})
    }
}

async function create(req, res) {
    try {
        const newMovie = await Movie.create(req.body)
        res.status(201).send(newMovie)
    } catch (error) {
        res.status(500).send({error: 'Error with the movie database'})
    }
}

async function destroy(req, res) {
    const idx = parseInt(req.params.id)
    try {
        const newMovies = await Movie.destroy(idx)
        res.status(200).send(newMovies)
    } catch (error) {
        res.status(500).send({error: "Error with the movie database"})
    }
}

async function update(req, res) {
    const idx = parseInt(req.params.id)
    try {
        const updatedMovie = await Movie.update(req.body, idx)
        res.status(200).send(updatedMovie)
    } catch (error) {
        res.status(500).send({error: "Error with the movie database"})
    }
}

module.exports = {index, show, create, destroy, update}