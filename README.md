# serverless-rest-api
RESTFULAPI using Serverless and NodeJS with JWT

Tutorial Guide:

Create AWS User Account

Create a IAM User and get the user credentials

Set-up AWS Credentials on Local Machine

    $ export AWS_ACCESS_KEY_ID=<your-key-here>
  
    $ export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
  
Create a serverless template

    $ serverless create --template aws-nodejs --path <your-folder-name>
  
Create a package.json file

    $ npm init

Deploy serverless

    $ serverless deploy

Requirements:
  - Serverless
  - NodeJS 8
  - JSONWebtoken
  - Sequelize package
  - mysql2 & mysql
  - eslint 
  - VSCode
  - Serverless
  

Curl Commads:

Create User:
curl -X POST https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/create/user --data '{ "username": "test", "password": "test1"}'

Login:
curl -X POST https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/login --data '{ "username": "test", "password": "test1"}'

Create Post:
curl -X POST https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/create/post -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" --data '{ "username": "Justine1", "post": "Lorem ipsum dolor sit amet.", "tag": "General"}'

Create Tags:
curl -X POST https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/create/tag -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" --data '{ "tag": "General2"}'

Delete User:
curl -X "DELETE" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/delete/user/1

Delete Post
curl -X "DELETE" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/delete/post/1

Delete Tag
curl -X "DELETE" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/delete/tag/1

List User
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/list/user

List Post
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/list/post

List Tag
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/list/tag

Get User
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/get/user/{id)

Get Post
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/get/post/{id}

Get Tag
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/dev/get/tag/{id}

Update User
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" --data '{ "username": "Justine23", "password": "Justine1234"}' -X PUT https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/update/user/{id}

Update Post
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" --data '{ "username": "Justine23", "post": "Lorem ipsum dolor sit amet.", "tag": "General23"}' -X PUT https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/update/post/{id}

Update Tag
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Mg.fxEGMuYoOxcxGw0TM_wbvbSWsb7zZ_saZRqdVSRihTk" --data '{ "tag": "General10"}' -X PUT https://rldnzgeoj3.execute-api.us-east-1.amazonaws.com/dev/update/tag/{id}
