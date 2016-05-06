var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = chai.assert;
    chai.should();

chai.use(chaiHttp);

describe('Test APIG', function() {
    this.slow(10000);
    it('/hello', function(done) {
        this.timeout(0);
        chai.request('http://localhost:1465')
            .get('/hello')
            .end(function(err, res){
                res.should.have.status(200);
                assert.isObject(res.body, 'Response is an object/json');
                assert.notDeepProperty(res.body, 'errorMessage.error');
                if (err)
                    done(err);
                else
                    done();
            });
    });
});