const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
        enum: ['electronics', 'fashion', 'home', 'books' ]
    },

    price: {
        type: Number,
        required: true,
        min: 1,
    },

    inStock: {
        type: Boolean,
        default: true,
    },
    releaseDate: {
        type: Date,
        optional,
    },

    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    },
});

const reviewSchema = new mongoose.Schema({
    reviewerName: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },

    comment: {
        type: String,
        optional,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
});

const product = mongoose.model('product', productSchema);
const review = mongoose.model('review', reviewSchema);

module.exports = {product, review}