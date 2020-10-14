const app = require('../index.js')
const request = require('supertest')

describe('Jest sample test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
})

describe('Cars API', () => {

    it('gets the cars endpoint', async () => {
        const res = await request(app)
        .get('/api/cars')
        console.log(res)
    })
})

module.exports = app