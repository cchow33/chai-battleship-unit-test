// import expect from chai library
var expect = require('chai').expect;


// Set up a test suite - a block of closely related unit tests that test the same function or similar parts of our code base.


// Sanity check to see if mocha's running:
describe('Mocha', function(){
  // Test spec (unit test)
  it('should run our tests using npm', function() {
    expect(true).to.be.ok;
  
  });
});