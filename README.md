# Ecommerce-API

## 📜 Description:
This is an E-commerce API that allow to create, delete & update a product which is made using Node.Js & MongoDB. 

### 🔗 Link of Our CSV-Upload website: 

### 🔗 Video link of Our CSV-Upload explanation: 


## 💥 STEPS TO USE THE API:
1) Download and Set Mongoose Connection
2) Run `npm install` to install required dependencies
4) Add `"scripts": {"start": "node app.js"}` in your package.json
3) Type `npm start` in terminal
4) Open postman
5) Make a GET request on localhost:3000/products
6) The products should be visible

## 💥 STEPS TO CREATE A NEW PRODUCT: 
1) start the server using `npm start`
2) Open postman
3) put localhost:3000/products/create as the url. 
4) Select Body tab below the url textarea and then select x-www-form-urlencoded
5) Add name & quantity as the keys and set the desired values for the keys.
6) Make a POST request.
7) If you recieve the message saying new product added successfully then you have done everything correct.
8) The product is created. Check it out by making a GET request at localhost:3000/products

## 💥 STEPS TO DELETE A PRODUCT:
1) copy the object id of the product you want to delete.
2) add the id after localhost:3000/products/
3) Make a DELETE request.
4) You will recieve a message saying deleted successfully.

## 💥 STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
1) Copy the object id of the product whose quantity you want to update
2) Put the id after localhost:3000/products/
3) After putting the id add /update_quantity/?number={x} in the url where x is the number by which you want to increase or decrease the quantity.
4) the url should be looking like localhost:3000/products/{id}/update_quantity/?number={x}
5) Make a POST request and you should get a message containing the update product


### 🔗 TECHSTACK
Node.Js, MongoDB


## 👦 Developed By:
<h2 align="center">Yusufulla Qureshi</h2>
<p align="center">
<a href="https://github.com/QureshiYousuf">QureshiYousuf</a> 
<p align="center">(Git Profile)</p>
<p align="center">
  <a href="mailto:yousuf337692qureshi@gmail.com?subject=Hello%20Qureshi,%20From%20Github"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
  ☎️ PH:+91 6363821097
</p>
