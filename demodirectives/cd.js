/**
 * Created by tanvirsaini32 on 9/04/2016.
 */
var module1=angular.module("Custom",[]);
module1.controller('ctrl1',function($scope)
{
  $scope.cd={
      name:'himanshu_saini',
      add:'white_house_apptment'
  };
    console.log($scope);
});
//create my own directive
module1.directive("customDirective",function()

{
    console.log("before return");
    /*return{ this is for custom directive for Attribute
        restrict:'A',//it is only matches attribute name
        //template:'ajgcashc' this is for simple test of template
        templateUrl:"../../project/demodirectives/createdResult.html"

    };*/
    /*return{// this is for custom directive for element name
        restrict:'E',
        template:"Main hoon don"
    };*/
    /*return{//this is for custom directive for class name
        restrict:'C',
        template:'problem are same attitude make a difference'
    }*/
    return{
        restrict:'M',
        replace:true,
        template:'<h1>Jennifer Winget</h1>'
    }
    console.log("after return");
});

