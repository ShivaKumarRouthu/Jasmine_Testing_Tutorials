'use stric';

/*
* This file just do some angularjs test using jasmine framework
*/

// this describe will typically  tells what the tests are about ex: Login Module, User Form Submission module etc
// describe include number of individually test
describe('mainController is tested', function() {
  var scope,rootScope, hello, httpBackend, state;
  beforeEach(module('ui.router'));
  beforeEach(module('PetStore'));
  beforeEach(function() {
    inject(function($controller,_$rootScope_, _hello_, _$httpBackend_,$state){
      rootScope = _$rootScope_;
      state = $state;
      hello = _hello_;
      httpBackend = _$httpBackend_;
      httpBackend.when('GET','/service').respond(200,{});
      scope = rootScope.$new();
      mainController = $controller('mainController', {
        $scope: scope
      })
    })
  })
  // it('data is a valid array', function(){
  //   expect(scope.data).not.toBeNull();
  // });
  //
  // it('getData function should assign data to scope.pets variable', function(){
  //   var mockData = [
  //     {
  //   category : 'dog',
  //   breed :'hound',
  //   price : 4000
  // },
  // {
  //   category : 'dog',
  //   breed :'pitbull',
  //   price : 8000
  // },
  // {
  //   category : 'bird',
  //   breed :'parrot',
  //   price : 500
  // },
  // {
  //   category : 'turtle',
  //   breed :'sea turtle',
  //   price : 20000
  // }];
  //   expect(scope.pets).toBeNull();
  //   scope.getData();
  //   expect(scope.pets).toEqual(mockData);
  // });
  //
  // it('testing click on buying button should reduce the length of the data', function() {
  //    scope.getData();
  //    scope.pets.length = 5;
  //    scope.buy();
  //    expect(scope.pets.length).toBe(4);
  // });
  //
  // it('httpBackend service data', function() {
  //   httpBackend.expectGET('/service');
  //   var result;
  //   hello.getService().then(function(response){
  //     console.log(response);
  //     expect(response).toEqual('req');
  //     result = response;
  //   })
  //
  //
  // })

  it('current state', function(){
    state.go('home.app');
    rootScope.$apply();
    console.log(state.current.resolve.foo());
  })
});
