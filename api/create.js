'use strict';

var User = require('./models/Users.js');

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



