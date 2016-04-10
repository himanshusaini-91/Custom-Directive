/**
 * Created by tanvirsaini32 on 10/04/2016.
 */
var aap=angular.module('docsIsoFnBindExample', [])
   aap.controller('Controller', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.name = 'Naam';


    }
    ]);
    aap.directive('myDialog', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'trans1.html',
            link:function(scope)
            {
                scope.name='Himanshu';
            }
            ,

        };
    });
