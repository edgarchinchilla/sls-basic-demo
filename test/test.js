var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = chai.assert;
    chai.should();

chai.use(chaiHttp);

describe('Test APIG', function() {
    this.slow(10000);
    it('/backupUsers', function(done) {
        //setTimeout(done, 5000);
        this.timeout(0);
        chai.request('http://localhost:1465')
            .get('/backupUsers')
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