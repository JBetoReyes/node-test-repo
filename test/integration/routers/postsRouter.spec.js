const expect = require('chai').expect;
const request = require('supertest');
const App = require('../../../lib/app');
const app = new App().buildApp();

describe('postRouter', () => {
    it('Should request a list of posts', () => {
        request(app)
            .get('/posts')
            .accept('application/json')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return console.log(err);
                }
            })
    })
});