/**
 * Created by Edgar Gerardo Chinchilla Mazate on 5/6/16.
 */

var https = require('https');
var aws4  = require('aws4');

var signer = new aws4.sign({
    service: 'execute-api',
    region: '<region>',
    path: '/<stage>/hello',
    host: '5aexamplebf.execute-api.us-east-1.amazonaws.com'
}, {
    accessKeyId: '<your-generated-iamUserAccessKeyId>',
    secretAccessKey: '<your-generated-iamUserSecretAccessKey>'
});

https.request(signer, function(res) { res.pipe(process.stdout) }).end();