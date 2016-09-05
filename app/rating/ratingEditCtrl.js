(function () {
    "use strict";
    angular
        .module("ratingsModule")
        .controller("RatingEditCtrl", RatingEditCtrl);

    function RatingEditCtrl(ratingResource) {
        var vm = this;
        vm.rating = {};
        vm.message = '';

        ratingResource.get({ id: 2 }, function (data) {
            vm.rating = data;
            vm.originalRating = angular.copy(data);
        });

        if (vm.rating && vm.rating.id) {
            vm.title = "Edit: " + vm.rating.Name;
        }
        else {
            vm.title = "New Rating";
        }

        vm.submit = function () {
            //ratingResource.save({ name: vm.rating.ratingName, value: vm.rating.ratingValue }, function (response) {
            //    vm.message = response.message;
            //});
        };

        vm.cancel = function (editForm) {
            editForm.$setPristine();
            vm.rating = angular.copy(vm.originalRating);
            vm.message = "";
        };
    }
}());