angular.module('docsTemplateUrlDirective', [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Himanshu',
            address: 'whitye house appt'
        };
    }])
    .directive('myCustomer', function() {
        return {
            templateUrl: function(elem, attr){
                return 'customer-'+attr.type+'.html';
            }
        };
    });
