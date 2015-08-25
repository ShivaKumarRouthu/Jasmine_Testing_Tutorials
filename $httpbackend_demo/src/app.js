angular.module('PetStore',['ui.router'])
.config(function($stateProvider){
  $stateProvider
  .state('home',{
    url:'/',
    template:'<section ui-view></section>'
  })
  .state('home.app',{
    url:'/home/app',
    template:'home application',
    resolve : {
      foo : function(){
        return true;
      }
    }
  })
})
.service('hello', function($http){
    this.getService = function(){
      return $http.get('/service').then(function(response){
         return response.data;
      });
    }
})
.controller('mainController', function($scope, hello, $state) {
  $state.go('home.app');
  $scope.pets=null;
  var data = [{
    category : 'dog',
    breed :'hound',
    price : 4000
  },
  {
    category : 'dog',
    breed :'pitbull',
    price : 8000
  },
  {
    category : 'bird',
    breed :'parrot',
    price : 500
  },
  {
    category : 'turtle',
    breed :'sea turtle',
    price : 20000
  }];


  $scope.getData = function() {
    $scope.pets = data;
  }
  $scope.buy = function(pet) {
    $scope.pets.splice(pet,1);
  }
})
