import chai from 'chai'
import chaiHttp from 'chai-http'
import 'chai/register-should'
import app from '../app'

// Configure chai
chai.use(chaiHttp);
chai.should();

const { expect } = chai

describe('Auction API tests', () => {
    it('It should get all dummy data', (done) => {
      chai.request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .end( (err, res) => {
          expect(res.status).to.equal(200)
          done()
        })
    })
})
