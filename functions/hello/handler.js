'use strict';

var AWS = require('aws-sdk');
    AWS.config.region = process.env.SERVERLESS_REGION;
var slsMessage = process.env.MESSAGE;
var s3 = new AWS.S3();
var s3BucketName = process.env.BUCKET_NAME;

module.exports.handler = function(event, context, cb) {
    var params = { Bucket: s3BucketName + '/somefolder', Key: 'testFile', Body: JSON.stringify({ value: "testValue" }), ContentType: 'application/json' };
    // Upload the backup
    s3.upload(params, function (err, data) {
        if (err) {
            context.fail({ place: 's3UploadToBucket', error: err, status: 400 });
            //cb({ place: 's3UploadToBucket', error: err, status: err.statusCode });
        } else {
            context.succeed({ place: 's3UploadToBucket', message: slsMessage, status: 500 });
            //cb(null, { backup: ret.data, status: res.statusCode });
        }
    });
};
