# Project Structure

final project
a. mongodb Atlas (database)
b. server (nodejs express)
c. client (react web application)

## Mongodb (Database)

Database: shop

Database schema:
products (\_id, description, image, pricing, shippingCost)
users (\_id, email, password, username, purchaseHistory, shippingAddress)
orders (\_id, products { product, quantity}, user )

## Nodejs Express (Back-end)

Framework: Express
Other Dependencies: body-parser, mongoose, cors
Folders: models, routes
Files: api.js, index.js, mongodb.js

## React Application (Front-end)

Library: React
Other Dependencies: react-router-dom, bootstrap, react-bootstrap
