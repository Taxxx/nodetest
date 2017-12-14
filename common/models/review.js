'use strict';

module.exports = function(Review) {
  Review.getRatingAvg = function(restaurantId, cb) {
    Review.find({where: {restaurantId: restaurantId}}, function(err, reviews) {
      var sum = 0;
      var avg;
      var Restaurant = Review.app.models.Restaurant;
      if (restaurantId) {
        reviews.forEach(function(restaurant) {
          sum = sum + restaurant.rating;
        });
        avg = sum / reviews.length;
        Restaurant.findById(restaurantId, function(err, restaurant) {
          if (!err) {
            restaurant.updateAttributes({rating: avg});
            restaurant.save();
            cb(null, avg);
          } else {
            cb(null, {error: err});
          }
        });
      } else {
        cb(null, null);
      }
    });
  };

  Review.remoteMethod(
    'getRatingAvg', {
      http: {
        path: '/getRatingAvg',
        verb: 'get'
      },
      accepts: {
        arg: 'restaurantId',
        type: 'number',
        http: {
          source: 'query'
        }
      },
      returns: {
        arg: 'ratingAvg',
        type: 'Array'
      }
    }
  );
};
