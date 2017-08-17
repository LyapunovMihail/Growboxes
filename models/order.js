var crypto = require('crypto');
var async = require('async');
var util = require('util');
var HttpError = require('../error/index').HttpError;

var mongoose = require('../libs/mongoose');
  Schema = mongoose.Schema;

var schema = new Schema({
  email: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  surname: {
    type: String,
    required: false
  },
  patronymic: {
    type: String,
    required: false
  },
  telephone: {
    type: String,
    required: false
  },
  region: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  index: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  products: {
    type: Object,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});


schema.statics.saveOrder = function(orderData, callback) {
  var Order = this;

  if (orderData.region == '' || orderData.city == '' || orderData.index == '' || 
      orderData.adress == '') {
    callback(new HttpError(403, "some of required fields are empty"));
  }

  order = new Order({email: orderData.personalData.email, 
                     name: orderData.personalData.name,
                     surname: orderData.personalData.surname, 
                     patronymic: orderData.personalData.patronymic, 
                     telephone: orderData.personalData.telephone, 
                     region: orderData.personalData.region,
                     city: orderData.personalData.city, 
                     index: orderData.personalData.index,
                     adress: orderData.personalData.adress,
                     products: orderData.productsInBucket});
  order.save(function(err) {
    if (err) return callback(err);
    callback(null, order);
  }); 


};

schema.statics.getAllOrders = function(callback) {
  var Order = this;
  Order.find(function(err, orders) {
    if (err) return callback(err);

    if (!orders) {
      return callback(null, null);
    }
    callback(null, orders);
  });
};

schema.statics.getOrderByEmail = function(email, callback) {
  var Order = this;
  Order.find({email: email}, function(err, orders) {
    if (err) return callback(err);

    if (!orders) {
      return callback(null, null);
    }
    callback(null, orders);
  });
};

exports.Order = mongoose.model('Order', schema);


