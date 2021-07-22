const express = require('express');
require('./database.js');
const Product = require('./models.js');

const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    return resp.send("Online!");
});

app.get('/api/products', async (req, resp) => {
    try{
        const products = await Product.find();
        return resp.status(200).send(products);
    }catch(e){
        return resp.status(500).send(e);
    };
})

app.post('/api/products', async (req, resp) => {
    try{
        const product = new Product({
            id: 1,
            title: req.body.title,
            description: req.body.description
        });
        await product.save();
        //console.log(req.body.title);
        return resp.status(201).send(product);
    }catch(e){
        return resp.status(500).send("Server Error\n" + e);
    };
});

app.get('/api/products/:id', async (req, resp) => {
    const _id = req.params.id;
    try{
        const products = await Product.findById(_id);
        return resp.status(200).send(products);
    }catch(e){
        return resp.status(500).send(e);
    };
});

app.patch('/api/products/:id', async (req, resp) => {
    const _id = req.params.id;
    try{
        const products = await Product.findByIdAndUpdate(_id, req.body);
        if(products)
        {
            const productsUpdated = await Product.findById(_id);
            return resp.status(200).send(productsUpdated);
        }
        return resp.status(400).send("Updation failed. Please check your ID again.")
    }catch(e){
        return resp.status(500).send(e);
    }
});

app.delete('/api/products/:id', async (req, resp) => {
    const _id = req.params.id;
    try{
        const products = await Product.findByIdAndDelete(_id);
        if(products){
            return resp.status(400).send("Product successfully deleted");
        }
        return resp.send("Deletion failed. Please check your ID again.");
    }catch(e){
        return resp.status(500).send(e);
    };
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});