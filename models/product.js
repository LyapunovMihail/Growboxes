var crypto = require('crypto');
var async = require('async');
var util = require('util');
var HttpError = require('../error/index').HttpError;

var mongoose = require('../libs/mongoose');
  Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  properties: {
    type: Object,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: false
  },
  imgUrl1: {
    type: String,
    required: false
  },
  imgUrl2: {
    type: String,
    required: false
  },
  imgUrl3: {
    type: String,
    required: false
  },
  imgUrl4: {
    type: String,
    required: false
  },
  imgUrl5: {
    type: String,
    required: false
  },
  imgUrl6: {
    type: String,
    required: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});



schema.statics.saveProduct = function(name, category, properties, description, price, imgUrl, imgUrl1, imgUrl2, imgUrl3, 
  imgUrl4, imgUrl5, imgUrl6, callback) {
  var Product = this;

  if (name == '' || category == '' || description == '' || price == '') {
    callback(new HttpError(403, "some of required fields is empty"));
  }

  async.waterfall([
    function(callback) {
      Product.findOne({name: name}, callback);
    },
    function(product, callback) {
      if (product) {
        callback(new HttpError(403, "product already exist"));
      } else {
        product = new Product({name: name, category: category, properties: properties, 
          description: description, price: price, 
          imgUrl: imgUrl, imgUrl1: imgUrl1, imgUrl2: imgUrl2, imgUrl3: imgUrl3, imgUrl4: imgUrl4,
          imgUrl5: imgUrl5, imgUrl6: imgUrl6});
        product.save(function(err) {
          if (err) return callback(err);
          callback(null, product);
        });
      }
    }
  ], callback);

};

schema.statics.updateProduct = function(name, category, properties, description, price, imgUrl, imgUrl1, imgUrl2, imgUrl3, 
  imgUrl4, imgUrl5, imgUrl6, callback) {
  var Product = this;

  async.waterfall([
    function(callback) {
      Product.findOne({name: name}, callback);
    },
    function(product, callback) {
      if (product) {
        product.name = name;
        product.category = category;
        product.properties = properties;
        product.description = description;
        product.price = price;
        product.imgUrl = imgUrl;
        product.imgUrl1 = imgUrl1;
        product.imgUrl2 = imgUrl2;
        product.imgUrl3 = imgUrl3;
        product.imgUrl4 = imgUrl4;
        product.imgUrl5 = imgUrl5;
        product.imgUrl6 = imgUrl6;
        product.save(function(err) {
          if (err) return callback(err);
          callback(null, product);
        });
      } else {
        callback(new HttpError(404, "product not found"));
      }
    }
  ], callback);

};

schema.statics.deleteProduct = function(data, callback) {
  var Product = this;
  Product.remove(data, function(err, product) {
    if (err) return callback(err);

    if (!product) {
      return callback(null, null);
    }
    callback(null, product);
  });
};

schema.statics.getProduct = function(productId, callback) {
  var Product = this;
  Product.findById(productId, function(err, product) {
    if (err) return callback(err);

    if (!product) {
      return callback(null, null);
    }
    callback(null, product);
  });
};

schema.statics.getAllProducts = function(callback) {
  var Product = this;
  Product.find(function(err, products) {
    if (err) return callback(err);

    if (!products) {
      return callback(null, null);
    }
    callback(null, products);
  });
};

schema.statics.getCategoryProducts = function(category, callback) {
  var Product = this;
  Product.find({category: category}, function(err, products) {
    if (err) return callback(err);

    if (!products) {
      return callback(null, null);
    }
    callback(null, products);
  });
};

exports.Product = mongoose.model('Product', schema);


function AuthError(message) {
  Error.apply(this, arguments);
  Error.captureStackTrace(this, AuthError);

  this.message = message;
}

util.inherits(AuthError, Error);

AuthError.prototype.name = 'AuthError';

exports.AuthError = AuthError;


