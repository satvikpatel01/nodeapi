const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        trim: true,
        default: "",
    },
    productName: {
        type: String,
        trim: true,
        default: "",

    },
    price: {
        type: Number,
        trim: true,
        default: "",
    },
    clothSize: {
        type: String,
        trim: true,
        default: "",
    },
    inStock: {
        type: String,
        trim: true,
        default: "",
    },
    description: {
        type: String,
        trim: true,
        default: 0,
    }
},{
    timestamps:true
});

const Product = mongoose.model("product", ProductSchema)
module.exports = Product;