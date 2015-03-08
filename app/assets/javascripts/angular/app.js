var app = angular.module('app', ['ngResource', 'templates']).config(
  ["$httpProivder", function($httpProivder){
    var defaults = $httpProivder.defaults.headers;
    defaults.patch = defaults || {}
    defaults.patch["Content-Type"] = "application/json";

}])
.directive("uploadImage", function () {
  return {
    restrict "A", 
    link: function (scope, elem, attrs)
    var reader = new FileReader()
    reader.onload = function (e) {
      scope.newPost.imageData = btoa(e.target.result);
      scope.$apply();
    };

    elem.on("change", function(){
      console.log("I'm about to change");
      var file = elem[0].files[0]
      console.log(file);
      scope.newPost.imageContent = file.type;
      scope.newPost.imagePath = file.name;
      scope.$apply();

      reader.readAsBinaryString(file);
    });
    }
  };
})
  
.factory('User', ['$resource', function ($resource) {

  return $resource('/api/users/:id'),
  {id: '@id'}
  {update: {method: 'Patch'}}

}])
.controller('userController', ['$scope', 'User', 
  function ($scope, User) {
    // $scope.users = {};
    User.query(function (json) {
      $scope.users = json; 
    });

    $scope.newUser = new User(); 

    this.add = function(){
      $scope.newUser.$save(function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = new User();
      });

    }

    this.destroy = function(user) {
      user.$delete(function(){
        var position = $scope.users.indexOf(user);
        $scope.users.splice(position, 1)
      });
    }

    this.modify = function(user){
      var change = this; 
      account.$change(function(){
        change.showEdit = null;
      }) 
    }

}]);