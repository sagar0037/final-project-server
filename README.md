# Project Structure

- **database (MongoDB Atlas)**
- **server (nodejs express)**
- **client (react web application)**

## Mongodb (Database)

- **Database: shop**
- **Database schema:**
  - products (\_id, description, image, pricing, shippingCost)
  - users (\_id, email, password, username, purchaseHistory, shippingAddress)
  - orders (\_id, products { product, quantity}, user )

## Nodejs Express (Back-end)

- **Framework: Express**
- **Other Dependencies: body-parser, mongoose, cors**
- **Port: 5000**
- **Folder Structure:**
  - models
    - product.js
    - user.js
    - order.js
  - routes
    - productRoutes.js
    - userRoutes.js
    - orderRoutes.js
  - api.js
  - mongodb.js
  - index.js

## React Application (Front-end)

- **Library: React**
- **Other Dependencies: react-router-dom, bootstrap, react-bootstrap**
- **Port: 3000**
- **Folder Structure:**
  - assets
  - components: navbar (jsx & css)
  - context: product-context.jsx
  - pages:
    - dashbaord
      - dashboard (jsx & css)
      - product (jsx & css)
    - cart
      - cart (jsx & css)
      - cartitem (jsx & css)
    - profile
      - profile (jsx & css)
  - App.js

│
