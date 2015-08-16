'use stric';

/*
* This file just do some simple javascript test using jasmine framework
* here we are not testing any external code but we under how the test works
*/

// this describe will typically  tells what the tests are about ex: Login Module, User Form Submission module etc
// describe include number of individually test
describe('Simple Tests using Jasmine', function() {
  it('Sample test 1 - toBeFalsy $ toBeTruthy', function(){
    var foo = true;
    /*
     * expect is the assertion function in jasmine
     * toBeFalsy & toBeTruthy are the matcher function which match our data with others
    */
    expect(foo).not.toBeFalsy();
    expect(foo).toBeTruthy();
  });

  it('Sample test 2 - which test for null value', function(){
    var inputData = null;
    expect(inputData).toBeNull();

    inputData = 'fao';
    expect(inputData).not.toBeNull();

  });


  it('Sample test 1 - toBeFalsy $ toBeTruthy', function(){
    var foo = true;
    /*
     * expect is the assertion function in jasmine
     * toBeFalsy & toBeTruthy are the matcher function which match our data with others
    */
    expect(foo).not.toBeFalsy();
    expect(foo).toBeTruthy();
  });

  it("The 'toBe' matcher compares with ===", function() {
    var a = 12;
    var b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });

  it('toEqual Matcher function', function() {

    var obj1 = {a: 20, b: 30};
    var obj2 = {a: 30, b: 20};
    //to equal is used for literals and variables
    expect(obj1).not.toEqual(obj2);
    var obj1 = {a: 20, b: 30};
    var obj2 = {a: 20, b: 30};
    //to equal is used for literals and variables
    expect(obj1).toEqual(obj2);
  });

  it('toMatch is for regular expressions', function() {

    var foo = 'you are doing unit test';
    //checks for the regular express in your input
    expect(foo).toMatch(/unit/);
  });

  it('toBeDefined and toBeUndefined matcher functions', function() {

    var foo = '';
    // check wheather foo is defined or not
    expect(foo).toBeDefined();

    var foo = undefined;
    // tests foo is undefined
    expect(foo).toBeUndefined();
  });

  it('toContain matcher function ', function() {

    var foo = ['jas', 'mas', 'huy'];

    // to check element is in the array
    expect(foo).toContain('mas');

  })

});
