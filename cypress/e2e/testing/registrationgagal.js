const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const apiURL = 'https://kasir-api.belajarqa.com';

const request = supertest(apiURL);

describe('regis gagal', () => {
    it('post', (done) => {
        request
        .post('/registration')
        .send(
            {
                "name": "",
                "email": "",
                "password": ""
             }
             
        )
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    
});