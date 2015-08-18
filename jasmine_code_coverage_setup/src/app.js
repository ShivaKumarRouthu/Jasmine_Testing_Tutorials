angular.module('PetStore',[]).controller('mainController', function($scope) {
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
