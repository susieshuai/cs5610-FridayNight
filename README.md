# Game-Online-Store
The MERN Stack Project(MongoDB Express React Node)
FridayNight is an online store specialized in selling computer game virtual items.



### Iteration 1
**Division of labor**
In the first week, we will work on the initial setting up of our app.
- Frontend %Cuiting Huang
React components created to represent the functionality you will be building.
The overall structure of your website
- Backend %Shi Shuai
Routing, links, and the basis of CRUD operations should be established.

## Update & Progress
**CuitingHuang**
### 22/3/30
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

### 22/3/31
1. update the data of eg. and put them in backend/data file
2. implment view of details page , login and register page
3. get all data from backend.(show all items on home and each item details)
4. to be completed
- update data, add parameters: tag, Highlights, Reviews, Customer Comments for each products
- in detais page add to cart need a function, comments part not implemented
- login and register page need to have the function of submit



**Shi Shuai**



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
both front and back end
- npm run dev
only backend
-npm run server
