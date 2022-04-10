# Game-Online-Store
The MERN Stack Project(MongoDB Express React Node)
FridayNight is an online store specialized in selling computer game virtual items.


### Iteration 1
**Division of labor**
In the first week, we will work on the initial setting up of our app.
- Frontend %Cuiting Huang
React components created to represent the functionality you will be building.
The overall structure of your website should be in place.
- Backend %Shi Shuai
Routing, links, and the basis of CRUD operations should be established.

## Update & Progress
### CuitingHuang
#### 22/3/30
1. Init react and implment homepage, view of login and register page
a.banner with search box
b.show all items of all eg. *and link to backend*
c.creat rating star for each items
d.click item link to products/:id   / click login to /login click shoppintcart to /cart

```
npx create-react-app frontend
cd frontend
npm start
```

2. init node.js for backend
- create *ROUTE* products.js
- Link to database mongodb atlas with functions
```
connectDB
saveItem
findItem or deleteItem by id
findAll
```
- authURI for development
"mongodb+srv://yellow:125512@cs5610.kgnh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

#### 22/3/31
1. update the data of eg. and put them in backend/data file
2. implment view of details page , login and register page
3. get all data from backend.(show all items on home and each item details)
4. to be completed
- update data, add parameters: tag, Highlights, Reviews, Customer Comments for each products
- in detais page add to cart need a function, comments part not implemented
- login and register page need to have the function of submit

#### 22/4/1
1. import redux to store the state of app, add products reducers, actions and constant
2. modify homepage and detailspage using reducer
3. create loading and message(error) components

#### 22/4/4
1. add cart reducers, actions, constant and cart Screen
2. modify message page
3. implement action of add to cart, remove cart.

#### 22/4/7
1. implement login in both backend and frontend
2. create error middleware
3. add register action and reducer to backend and implement it in frontend
4. add bcrypt when user register and login . 
5. add banner to homepage, and prepare for reviews part screen.
6. implent profilepage and update user info

#### 22/4/8
1. for each page import Custom title
2. create banner on homepage

### Shi Shuai
#### 22/3/31
1. set up server
2. connect frontend and backend to enable frontend to fetch hard coded products data from backend

#### 22/4/1
1. set up MongoDB
- connect MongoDB Atlas
2. populate database
- populate database with sample products and users data
```
node backend/database/populate.js 
```
- clear database
```
node backend/database/clear.js 
```
3. create basic routes and controllers to realize CRUD operationss, use postman to test

#### 22/4/4
**Sreach Feature**
1. frontend
- add event handler to search box and search button
- add search screen to show search results
- reuse product list reducers and contants, add actions to get search product list
2. backend
- add route and controller to get search result from database
3. modification
- handle edge cases where no search criteria is input or no result found

#### 22/4/5
**Review Feature**
1. frontend
- ajust detail page layout, four tabs to show description, hightlights, reviews and comments of a product seperately
- render reviews in detail page
2. backend
- create post route and controller to create new review (currently I make it public, need to make it private with login feature)

#### 22/4/7
**Checkout Feature**
1. frontend
- add checkout screen
2. backend
- create post route and controller to create new order (currently I make it public, need to make it private with login feature)

#### 22/4/8
1. complete checkout feature, only login users can place a new order
2. complete review feature, only login users can add a new review

## Structure of website
1. Homepage
2. Profile
3. Search function
4. Detailpage
5. Orders and Comments
6. Login and Register

## Environment Variable
Create a file name .env then add:
1. NODE_ENV = development
2. MONGO_URI =
3. PORT = 5000
4. PAYPAL_CLIENT_ID =

## Install dependencies
1. npm install
2. cd frontend
3. npm install

## RUN
frontend
- npm run client

backend
- npm run server
