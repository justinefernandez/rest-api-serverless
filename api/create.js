'use strict';

var User = require('./models/Users.js');
var JWT = require('./lib/sign.js');
var Post = require('./models/Posts.js');
var Tag = require('./models/Tags.js');

module.exports.createUser = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(data);
  const timestamp = new Date().getTime();
  const params = {
    username: data.username,
    password: data.password,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
  var resultMessage = "";
    const result = await User.findOrCreate({
        where:{
            'username': params.username
        },
        defaults: params
        }).spread(function(user, created){
            return created;

        }).catch(function(err){
            console.log('Error occured', err);
            return err;
        });
    console.log(result);
    if (result) {
        resultMessage = "User has been created";
    } else {
        resultMessage = "User already exist!";
    }
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: resultMessage,
            input: event,
        }),
    };
    return response;    
};


module.exports.createPost = (event, context, callback) => {
    JWT.verify(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false;
            const timestamp = new Date().getTime();
            var data = JSON.parse(event.body);

            const params = {
                username: response.username,
                post: data.post,
                tag: data.tag,
                createdAt: timestamp,
                updatedAt: timestamp,
            };

            Post.create(params).then( 
                post => {
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify(post),
                    };
                    callback(null, response);
                });
        })
        .catch((err) => {
            context.callbackWaitsForEmptyEventLoop = false;
            console.log(err);
            const response = {
                statusCode: 400,
                headers: { 'Content-Type': 'text/plain' },
                body: err.message?err.message: 'Invalid Token',
            };
            console.log(response);
            callback(null, response);
        });
};

module.exports.createTag = (event, context, callback) => {
    JWT.verify(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false;
            const timestamp = new Date().getTime();
            var data = JSON.parse(event.body);
            
            console.log(data.tag)
            if (typeof data.tag === 'undefined'){
                context.callbackWaitsForEmptyEventLoop = false;
                const response = {
                    statusCode: 400,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Missing Parameters',
                }
                console.log(response);
                callback(null, response);
            } else {
                const params = {
                    tag: data.tag,
                    createdAt: timestamp,
                    updatedAt: timestamp,
                };
                Tag.findOrCreate({
                    where:{
                        'tag': params.tag
                    },
                        defaults: params
                    }).spread(function(tag, created){
                        var response = {};
                        if (created) {
                            response = {
                                statusCode: 200,
                                body: "Created new tag",
                            };
                        } else {
                            response = {
                                statusCode: 200,
                                body: "Tag already exist",
                            };
                        }
                        callback(null, response);
            
                    }).catch(function(err){
                        console.log('Error occured', err);
                        const response = {
                            statusCode: 200,
                            body: JSON.stringify(err),
                        };
                        callback(null, response);
                    });
                // Tag.create(params).then( 
                //     tag => {
                //         const response = {
                //             statusCode: 200,
                //             body: JSON.stringify(tag),
                //         };
                //         callback(null, response);
                //     });
            }


        })
        .catch((err) => {
            context.callbackWaitsForEmptyEventLoop = false;
            const response = {
                statusCode: 400,
                headers: { 'Content-Type': 'text/plain' },
                body: err.message?err.message: 'Invalid Token',
            }
            console.log(response);
            callback(null, response);
        });
};