const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Ganti dengan URL API yang ingin Anda uji
const apiURL = 'https://kasir-api.belajarqa.com';

// Inisialisasi Supertest dengan URL API
const request = supertest(apiURL);

describe('Login Success', () => {
    it('POST', async function() {
        request
            .post('/authentications')
            .send(
                {
                    "email": "sample@ex.com",
                    "password": "123adsfadf@",
                 }
                 
                 
            )
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    // Tambahkan pengujian lain sesuai kebutuhan Anda
});