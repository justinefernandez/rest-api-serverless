'use strict';

var User = require('./models/Users.js');
var JWT = require('./lib/sign.js');

module.exports.login = async (event, context, callback) => {
    context.callbackWaitsFupdateV2orEmptyEventLoop = false; 
    var data = JSON.parse(event.body);
    console.log(data);
    const userFound = await User.findOne({
        'where': { 
            'username' : data.username,
            'password' : data.password
        } 
    }).then( result => {
        console.log("hi");
        console.log(result);
        return result;
    });
    console.log("hello");
    console.log(userFound);
    if (userFound) {
        const verifytoken = await JWT.sign(userFound.dataValues.id, 'secretkey');
        console.log(verifytoken);
        var response = {
            statusCode: 200,
            body: JSON.stringify({
                message: { access_token: verifytoken },
            }),
        };
        // callback(null, response);
        return response;
    } else {
        var response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Invalid Credentials",
            }),
        };
        return response;  
    }


};