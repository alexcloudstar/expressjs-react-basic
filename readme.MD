# ExpressJS-ReactJS Endpoints
## Steps for setup & running project

1. Create & feed a **.env** file with the configuration from **.env.template**
2. run npm/yarn install and npm/yarn start in client and server folder
3. In order to run these cUrls API Endpoints in Postman follow the steps:
	- Open Postman and click on import
	- Click on Raw Text and paste the cURL request

## Endpoints

## @ PUT /auth/signup

    curl --location --request PUT 'http://localhost:8080/auth/signup'

    --header 'Content-Type: application/json'

    --data-raw '{

    "email": "your email",

    "name": "your name",

    "password": "your password"

    }'

## POST /auth/login

    curl --location --request POST 'http://localhost:8080/auth/login'

    --header 'Content-Type: application/json'

    --data-raw '{

    "email": "your email",

    "password": "your password"

    }'

### After login you will get a token, use that token for the bellow requests

### @ GET /feed/posts

    curl --location --request GET 'http://localhost:8080/feed/posts'

    --header 'Authorization: Bearer ** your token **

### @ GET /feed/post/:postId

    curl --location --request GET 'http://localhost:8080/feed/post/:postId'

    --header 'Authorization: Bearer ** your token **

    --data-raw ''

### @ POST /feed/post

    curl --location --request POST 'http://localhost:8080/feed/post'

    --header 'Authorization: Bearer ** your token **

    --header 'Content-Type: application/json'

    --data-raw '{

    "title": "Your title"

    "content": "Your description",

    "image": "images/image.jpg"
    }'

### @ PATCH /feed/post/:postId

    curl --location --request PATCH 'http://localhost:8080/feed/post/:postId'

    --header 'Authorization: Bearer ** your token **

    --header 'Content-Type: application/json'

    --data-raw '{

    "title": "Updated post!",

    "content": "I updated this post",

    "imageUrl": "images/boat.jpg"

    }'

### DELETE /feed/post/:postId

    curl --location --request DELETE 'http://localhost:8080/feed/post/:postId'

    --header 'Authorization: Bearer ** your token **

# Enjoy!