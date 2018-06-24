var jwt = require('jsonwebtoken');

module.exports = {

    sign: function(obj, secret){
        return jwt.sign(obj, secret);
    },

    verify: function(event){
        return new Promise((resolve, reject) => {
            if (event.headers.Authorization && event.headers) {
                const bearerHeader = event.headers.Authorization;
                const bearer = bearerHeader.split(' ');
                const bearerToken = bearer[1];
                jwt.verify(bearerToken, 'secretkey', (err, authdata) => {
                    if (err) {
                        var err = {
                            'message': 'Invalid Token'
                        };
                        reject (err);
                    } else {
                        var param = {
                            status: 200,
                            authdata
                        };
                        resolve(param);
                    }
                });
            } else {
                var err = {
                    'message': 'Missing Authorization'
                };
                reject(err);
            };
        });
    },
};