'use strict';

var User = require('./models/Users.js');
var JWT = require('./lib/sign.js');
var Post = require('./models/Posts.js');
var Tag = require('./models/Tags.js');

module.exports.deleteUser = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        User.destroy({
            where: {
                id: event.pathParameters.id
            }
        })
        .then(function(rowsDeleted){
            if (rowsDeleted > 0) {
                const response = {
                    statusCode: 200,
                    body: "User has been deleted",
                };
   
                callback(null, response);
            } else {
                callback(null, {
                    statusCode: 401,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'User not found',
                });
            }
        }, function(err){
            console.error(err);
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not remove user',
            });
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

module.exports.deletePost = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        Post.destroy({
            where: {
                id: event.pathParameters.id
            }
        }).then(function(rowsDeleted){
            if (rowsDeleted > 0) {
                const response = {
                    statusCode: 200,
                    body: 'Post has been deleted',
                };
   
                callback(null, response);
            } else {
                callback(null, {
                    statusCode: 401,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Post not found',
                });
            }

        }, function(err){
            console.error(err);
            callback(null, {
                statusCode: err.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not remove post',
            });
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

module.exports.deleteTag = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        Tag.destroy({
            where: {
                id: event.pathParameters.id
            }
        }).then(function(rowsDeleted){
            if (rowsDeleted > 0) {
                const response = {
                    statusCode: 200,
                    body: 'Tag has been deleted',
                };
   
                callback(null, response);
            } else {
                callback(null, {
                    statusCode: 401,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Tag not found',
                });
            }

        }, function(err){
            console.error(err);
            callback(null, {
                statusCode: err.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not remove tag',
            });
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