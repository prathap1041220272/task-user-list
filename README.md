# userList-server
## Simple Login Service Using NodeJs And MongoDB
## Overview :
Simple signup-login and crud app.. Which is using JWT login mechanism for authentication

## Technologies Used :
*	NodeJs – Server-side
*	MongoDB – Backend
*	Angular – Client-side

## Dependencies :
*	Express – Http/Rest API framework for NodeJs
*	CORS – To Enable Cross Origin Resource Sharing
*	Bcrypt – Bcrypt Module for Salting password
*	JWT – To generate JSON Web Tokens
*	BodyParser – To Parse the Data
*	Mongoose – ODM (Object Document Mapper) for MongoDB

## Front-End:
  frontend documention given there ,you can see https://github.com/prathap1041220272/task-userlist-client.git

## Back-End

### How To Start server...
Before starting node server.. Start your mongodb then install dependencies with `npm install` and
run `npm strat`, `node .`, `node index.js` to run the node server.

##### PORT:
 By default port is 4568

## API Docs :

## Signup API

### POST /signup

### Sample Input:

```json
{ 
  "name": "dhasarathan",
  "email":"pratha@gmail.com",
  "password": "123456",
  "mobile": "123456",
}
```

### Sample Output:

```json
{
    "_id": "5bcb4b1438812c23dc20a7b5",
    "name": "prathap",
    "email": "prathap@gmail.com",
    "password": "$2a$10$OTZtHlVQmJ9lkvyC3x1hw.b9RP6VyP5U27UBGxbKjIxzoyNnjJ6u2",
    "confirmPassword": "123456",
    "__v": "0"
}
```

## Login API

### POST /login

### Sample Input:

```json
{
  "email": "prathap@gmail.com",
  "password": "123456"
}
```

### Sample Output:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViY2I0YjE0Mzg4MTJjMjNkYzIwYTdiNSIsImlhdCI6MTU0MDA0OTkwMiwiZXhwIjoxNTQwMDUwMjAyfQ.x5jAMl2GTqCei97kVeI06QNkc60KZJgTJtFuunZQc5E"
}
```

## User Deatils API

### GET /usermenu/id 

### Sample Input:

```json
{
    "_id": "5bcb4b1438812c23dc20a7b5"
}
```

### Sample Output:

```json
{
     	"_id": "5bcb4b1438812c23dc20a7b5",
        "name": "prathap",
        "email": "prathap@gmail.com",
        "password": "$2a$10$OTZtHlVQmJ9lkvyC3x1hw.b9RP6VyP5U27UBGxbKjIxzoyNnjJ6u2",
        "mobile": "123456",
        "__v": 0
}
```

## GET /usermenu

### Sample Input:

```json
{
"null"
}
```

### Sample Output:

```json
{ 
        "_id": "5bcb4b1438812c23dc20a7b6",
        "name": "prathap",
        "email": "prathap@gmail.com",
        "password": "$2a$10$OTZtHlVQmfvi2vyC3x1hw.b9fhghgi6VyP5U27UBGxbKjIxzojJ6u2",
        "mobile": "123123",
        "__v": 0
}
```

## PUT /usermenu/id 

### Sample Input:

```json
{
 "_id": "5bcb4b1438812c23dc20a7b5",
}
```

### Sample Output:

```json
{
        "_id": "5bcb4b1438812c23dc20a7b5",
        "name": "prathap",
        "email": "prathap@gmail.com",
        "password": "$2a$10$OTZtHlVQmJ9lkvyC3x1hw.b9RP6VyP5U27UBGxbKjIxzoyNnjJ6u2",
        "mobile": "123456",
        "__v": 0
    }
 ```

## DELETE /usermenu/id

### Sample Input:

```json
{
"_id": "5bcb4b1438812c23dc20a7b5",
}
```

### Sample Output:

```json
{
        "_id": "5bcb4b1438812c23dc20a7b5",
        "name": "prathap",
        "email": "prathap@gmail.com",
        "password": "$2a$10$OTZtHlVQmJ9lkvyC3x1hw.b9RP6VyP5U27UBGxbKjIxzoyNnjJ6u2",
        "mobile": "123456",
        "__v": 0
    }
```

