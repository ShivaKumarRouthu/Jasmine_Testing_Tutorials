'use stric';

/*
* This file just do some angularjs test using jasmine framework
*/

// this describe will typically  tells what the tests are about ex: Login Module, User Form Submission module etc
// describe include number of individually test
describe('mainController is tested', function() {
  var scope,rootScope;
  beforeEach(module('PetStore'));
  beforeEach(function() {
    inject(function($controller,_$rootScope_){
      rootScope = _$rootScope_;
      scope = rootScope.$new();
      mainController = $controller('mainController', {
        $scope: scope
      })
    })
  })
  it('data is a valid array', function(){
    expect(scope.data).not.toBeNull();
  });
  
  it('getData function should assign data to scope.pets variable', function(){
    var mockData = [{
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
    expect(scope.pets).toBeNull();
    scope.getData();
    console.log(scope.pets);
    expect(scope.pets).toEqual(mockData);
  });
  
  it('testing click on buying button should reduce the length of the data', function() {
     scope.getData();
     scope.pets.length = 5;
     scope.buy();
     expect(scope.pets.length).toBe(4);
  });

  

});
