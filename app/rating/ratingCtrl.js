(function () {
    "use strict";
    angular
        .module("ratingsModule")
        .controller("RatingCtrl", ["ratingResource", RatingCtrl]);

    function RatingCtrl(ratingResource) {
        var vm = this;

        ratingResource.query(function (data) {
            vm.ratings = data;
        });
    }
}());