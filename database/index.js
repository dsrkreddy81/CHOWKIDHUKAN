const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = mongoose.connection;
const app = express();
const port = process.env.port || 3000;

mongoose.connect('mongodb+srv://dsrkreddy81:sudha1116@e-commerce.h9xlx.mongodb.net/E-commerce?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

connection.once('open', () => console.log("connected to the mongodb"));


const UserRoute=require('./routes/userRoute');
const ContactusRoute=require('./routes/contactusRoute');
const CartRoute=require('./routes/cartRoute');
const OrderRoute=require('./routes/orderRoute');

app.use(cors());
app.use(bodyParser.json());
app.use('/user',UserRoute);
app.use('/contactus',ContactusRoute);
app.use('/cart',CartRoute);
app.use('/order',OrderRoute);

app.listen(port, () => console.log(`running on the server ${port}`));