const { mongo } = require("mongoose");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Till = new Schema({
    till_date: {
        type: Date
    },
    till_number: {
        type: Number
    },
    till_cash: {
        type: Number
    },
    till_card: {
        type: Number
    },
    till_payouts: {
        type: Number
    },
    till_food: {
        type: Number
    },
    till_drink: {
        type: Number
    },
    till_turnover: {
        type: Number
    },
    till_variance: {
        type: Number
    },
});

module.exports = mongoose.model('Till', Till);
