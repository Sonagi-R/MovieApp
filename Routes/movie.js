const express = require('express')
const router = express.Router()
const movies = require('../Controllers/movie')



router.get('/', movies.index)

router.get('/:name', movies.show)

router.post('/', movies.create)

router.delete('/:id', movies.destroy)

router.patch('/:id', movies.update)

module.exports = router