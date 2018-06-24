'use strict';

var User = require('./models/Users.js');
var JWT = require('./lib/sign.js');
var Post = require('./models/Posts.js');
var Tag = require('./models/Tags.js');

module.exports.updateUser = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        const timestamp = new Date().getTime();
            var data = event.body;
            if(typeof event.body !== 'object'){
                data = JSON.parse(event.body);
            }
            if (typeof data.username !== 'string' || typeof data.password !== 'string') {
                console.error('Validation Failed');
                callback(null, {
                    statusCode: 400,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Couldn\'t update the User data',
                });
                return;
            }
            const params = {
                username: data.username,
                password: data.password,
                updatedAt: timestamp,
            };
            User.update(
                params,
                { 'where': { 'id' : event.pathParameters.id } }
            ).then( result => {
                if(result){ 
                    User.findById(event.pathParameters.id).then( users => {
                        const response = {
                            statusCode: 200,
                            body: JSON.stringify(users),
                        };
                        callback(null, response);
                    });
                    return; 
                }
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not fetch User.',
                });
          
            }, function(err){
                console.error(err);
                callback(null, {
                    statusCode: err.statusCode || 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not update User. Error: '+err,
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


module.exports.updatePost = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        const timestamp = new Date().getTime();
            var data = event.body;
            if(typeof event.body !== 'object'){
                data = JSON.parse(event.body);
            }
            if (typeof data.username !== 'string' || typeof data.password !== 'string') {
                console.error('Validation Failed');
                callback(null, {
                    statusCode: 400,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Couldn\'t update the User data',
                });
                return;
            }
            const params = {
                username: data.username,
                post: data.post,
                tag: data.tag,
                updatedAt: timestamp,
            };
            Post.update(
                params,
                { 'where': { 'id' : event.pathParameters.id } }
            ).then( result => {
                if(result){ 
                    Post.findById(event.pathParameters.id).then( posts => {
                        const response = {
                            statusCode: 200,
                            body: JSON.stringify(posts),
                        };
                        callback(null, response);
                    });
                    return; 
                }
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not fetch Post.',
                });
  
            }, function(err){
                console.error(err);
                callback(null, {
                    statusCode: err.statusCode || 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not update Post. Error: '+err,
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


module.exports.updateTag = (event, context, callback) => {
    JWT.verify(event)
    .then((response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        context.callbackWaitsFupdateV2orEmptyEventLoop = false; 
            const timestamp = new Date().getTime();
            var data = event.body;
            if(typeof event.body !== 'object'){
                data = JSON.parse(event.body);
            }
            if (typeof data.username !== 'string' || typeof data.password !== 'string') {
                console.error('Validation Failed');
                callback(null, {
                    statusCode: 400,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Couldn\'t update the User data',
                });
                return;
            }
            const params = {
                tag: data.tag,
                updatedAt: timestamp,
            };
            Tag.update(
                params,
                { 'where': { 'id' : event.pathParameters.id } }
            ).then( result => {
                if(result){ 
                    Tag.findById(event.pathParameters.id).then( tags => {
                        const response = {
                            statusCode: 200,
                            body: JSON.stringify(tags),
                        };
                        callback(null, response);
                    });
                    return; 
                }
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not fetch Post.',
                });
  
            }, function(err){
                console.error(err);
                callback(null, {
                    statusCode: err.statusCode || 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not update Post. Error: '+err,
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