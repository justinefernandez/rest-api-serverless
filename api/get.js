'use strict';

var User = require('./models/Users.js');
var JWT = require('./lib/sign.js');
var Post = require('./models/Posts.js');
var Tag = require('./models/Tags.js');

module.exports.getUser = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        User.findById(event.pathParameters.id).then(user => {
            if(user === null){
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not get User.',
                });
                return;
            }
            const response = {
                statusCode: 200,
                body: JSON.stringify(user),
            };
            callback(null, response);
        });  
    })
    .catch((err) => {
        context.callbackWaitsForEmptyEventLoop = false;
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: err.message?err.message: 'Invalid Token',
        });
    });
};

module.exports.getPost = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false; 
        Post.findById(event.pathParameters.id).then(user => {
            if(user === null){
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not get post data.',
                });
                return;
            }
            const response = {
                statusCode: 200,
                body: JSON.stringify(user),
            };
            callback(null, response);
        });
    })
    .catch((err) => {
        context.callbackWaitsForEmptyEventLoop = false;
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: err.message?err.message: 'Invalid Token',
        });
    });
};

module.exports.getTag = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false; 
            Tag.findById(event.pathParameters.id).then(user => {
                if(user === null){
                    callback(null, {
                        statusCode: 501,
                        headers: { 'Content-Type': 'text/plain' },
                        body: 'Could not get tag.',
                    });
                    return;
                }
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(user),
                };
                callback(null, response);
            });  
       
    })
    .catch((err) => {
        context.callbackWaitsForEmptyEventLoop = false;
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: err.message?err.message: 'Invalid Token',
        });
    });
};