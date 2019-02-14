import chai from "chai";
import chaiHttp from 'chai-http';
import app from '../../app'
import { expect } from 'chai';
import * as data from './mock'

chai.use(chaiHttp);

//create user
describe('POST api/v1/signUp', () => {
it('should sign up a user successfully', done => {
chai
.request(app)
.post('/api/v1/signUp')
.send(data.user)
.end((err,res) => {
    expect(res.body).to.be.an('object');
    expect(res.status).to.be.equal(201);
    expect(res.body.data).to.haveOwnProperty('name');
    expect(res.body.data).to.haveOwnProperty('username');
    expect(res.body.data).to.haveOwnProperty('email');
    expect(res.body.data).to.haveOwnProperty('password')
    done();
})
})
});

describe('POST api/v1/newBook', () => {
    it('should create a new book successfully', done => {
        chai
        .request(app)
        .post('/api/v1/newBook')
        .send(data.book)
        .end((err,res) => {
            expect (res.body).to.be.an('object');
            expect(res.status).to.be.equal(201);
            expect(res.body.data).to.haveOwnProperty('title');
            expect(res.body.data).to.haveOwnProperty('description');
            expect(res.body.data).to.haveOwnProperty('author');
            expect(res.body.data).to.haveOwnProperty('quantity')
    done();
        })
    })
})


