const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const userRoutes = require('./routes/userRoutes'); // Import userRoutes
// const productRoutes = require('./routes/productRoutes'); // Import productRoutes
const userRoutes =require('../routes/users') 
const productRoutes =require('../routes/products') 
const orderRoutes =require('../routes/orders') 
const port = 8000;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://plotey88:ecom2@ecom2.ef4x8co.mongodb.net/?retryWrites=true&w=majority');
  console.log("Database Connected");
}

// Use userRoutes as middleware for "/users" base path
app.use('/users', userRoutes);

// Use productRoutes as middleware for "/products" base path
app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
