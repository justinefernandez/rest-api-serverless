'use strict';

var User = require('./models/Users.js');
var JWT = require('./lib/sign.js');
var Post = require('./models/Posts.js');
var Tag = require('./models/Tags.js');

module.exports.listUser = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        User.all().then( users => {
            if(users.length == 0) {
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'No Users data Found',
                });
                return;
            }
            const response = {
                statusCode: 200,
                body: JSON.stringify(users),
            };
            callback(null, response);
        }, function(err){
            console.error(err);
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not find Users',
            });
            return;
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

module.exports.listPost = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        Post.all().then( posts => {
            if(posts.length == 0) {
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'No Posts data Found',
                });
                return;
            }
            const response = {
                statusCode: 200,
                body: JSON.stringify(posts),
            };
            callback(null, response);
        }, function(err){
            console.error(err);
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Typpe': 'text/plain' },
                body: 'Could not find Posts',
            });
            return;
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

module.exports.listTag = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        Tag.all().then( tags => {
            if(tags.length == 0) {
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'No Tags data Found',
                });
                return;
            }
            const response = {
                statusCode: 200,
                body: JSON.stringify(tags),
            };
            callback(null, response);
        }, function(err){
            console.error(err);
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not find Tags',
            });
            return;
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