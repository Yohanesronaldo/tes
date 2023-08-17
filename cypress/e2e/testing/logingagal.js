const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const apiURL = 'https://kasir-api.belajarqa.com';

const request = supertest(apiURL);

describe('login gagal', () => {
    it('post', (done) => {
        request
            post('/authentications')
            .send(
                {
                    "email": "",
                    "password": "",
                 })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    // Tambahkan pengujian lain sesuai kebutuhan Anda
});