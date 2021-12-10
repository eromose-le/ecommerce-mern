## `INSTRUCTIONS TO STARTUP PROJECT`

> clone develop branch

cd client folder (UI)

> run npm install
> run npm start

cd api folder (API)

> run npm install
> run npm start

cd admin folder (ADMIN DASHBOARD)

> run npm install
> run npm start

## `CONFIGURURATION`

> API
>
> - Locate .env.local file and rename to .env
> - Provide the necessary value such as MONGODB connection string, Stripe Key
>
> CLIENT
>
> - Locate .env.local file and rename to .env
> - Provide the necessary value such as Stripe Public_Key

## `ADMIN ROUTES`

- /
- /users
- /user/[id]
- /newUser
- /products
- /product/[id]
- /newProduct
- /login

## `CLIENT ROUTES`

- /
- /products/:category
- /product/:id
- /cart
- /success
- /login
- /register

## `API MODELS`

- Cart
- Order
- Product
- User

## `DESCRIPTON`

```
A fully blown MERN ecommerce application with REST API, has both the client side and Admin dashboard. React Redux-toolkit and Context-API was utilized for state management of this application

## API Documentation
- A restful api with CRUD functionality
- Ownership, User Roles and Access included
- JWT authorization and AES encryption


## Admin dashboard
- Built with few library such as React Material-UI icons and ChartJS

## Client Section
- Built with ReactJs, react styled component and Material-UI icons.
- Also implemented react redux-toolkit and context-API for state management.

```

## `REPO`

https://github.com/eromose-le/ecommerce-mern.git

git push origin develop

## `LINK TO DASHBOARD ON HEROKU`

NILL
