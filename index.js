const bodyParser = require('body-parser')
const express = require('express');
const db = require('./mongo')
const Products = require('./models');

const app = express();

app.use(bodyParser.json());

app.get("/product", (req, res) => {
    Products.find({})
    .then(carros => {
        res.json(carros);
      })
      .catch(error => res.status(500).json(error));
})

app.post("/product", (req, res) => {
    const { name } = req.body

    const newProduct = new Products({
        name: name
    })
    
    newProduct.save()
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        res.status(500).json(error);
    });
})

app.put("/product/:id", (req, res) => {
    const { id } = req.params
    const { name } = req.body

    Products.findOneAndUpdate({ _id: id }, name, { new: true })
    .then(result => {
      res.json(result);
    })
    .catch(error => res.status(500).json(error));
});  

app.delete("/product/:id", (req, res) => {
    const {id} = req.params

    Products.findOneAndDelete({ _id: id })
    .then(result => {
      res.json(result);
    })
    .catch(error => res.status(500).json(error));
})


app.listen(3000, () => console.log("start"))