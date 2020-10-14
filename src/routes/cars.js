const { Router } = require('express')
const router = new Router()

const cars = require('../sample.json')

router.get('/', (req, res) => res.json(cars))

router.post('/', (req, res) => {
    const car = { id: (cars.length + 1).toString(), ...req.body }
    if (car.id && car.make && car.model && car.colour && car.year) {
        cars.push(car)
        res.json(car)
    } else {
        res.status(400).json({ error: 'Missing information' })
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    if (id) {
        cars.forEach((car, index) => {
            if (car.id === id) {
                cars.splice(index, 1)
            }
        })
        res.json(cars)
    }
})

module.exports = router
