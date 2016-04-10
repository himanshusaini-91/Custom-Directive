/**
 * Created by tanvirsaini32 on 10/04/2016.
 */
var app=angular.module('myapp',[]);
app.controller('ctrl1',['$scope',function($scope)
    {
        $scope.obj={
            name:'Himanshu saini',
            address:'white house apptt'

        };
    }




]);
app.controller('ctrl2',['$scope',function($scope)
{
    $scope.obj={
        name:'Parkash',
        address:'Andhera'

    };
}
]);
app.directive('kim',function()
{
    return{
        restrict:'E',
        templateUrl:"extra.html"
    };
}
);
