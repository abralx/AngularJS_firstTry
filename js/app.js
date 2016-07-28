/**
 * Created by Admin on 26.07.2016.
 */

(function () {
    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [ ];

        $http.get('js/store-products.json').success(function (data) {
            store.products = data;
        })
    }]);

    app.controller("ReviewController", function(){
        this.review = {};
        this.review.createdOn = Date.now();
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();


