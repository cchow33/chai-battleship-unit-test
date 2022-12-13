// import expect from chai
var expect = require('chai').expect;

// Set up new suite:
// Spec #1: Test to check when a ship is not located at the given coordinates:
describe('checkForShip', function(){
  // import 'checkForShip so all our tests in the suite can access it. Code will break because we haven't made this file yet:
  var checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report NO SHIP at a given players coordinate', function(){

    // Represent player as object
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };

    // There should be no ships at this given coordinate
    expect(checkForShip(player, [9, 9])).to.be.false;
    
  });
});


// Spec #2 Test to check when a ship is located at the given coordinates:
it('should correctly report A SHIP located at the given coordinates', function(){

  player = {
    ships: [
      {
        locations: [[0, 0]]
      }
    ]
  };

  expect(checkForShip(player, [0, 0])).to.be.true;
  
});


// Spec #3: Test to handle ships at more than one coordinate
it('should handle ships located at more than one coordinate', function(){

  player = {
    ships: [
      {
        locations: [[0, 0], [0, 1]]
      }
    ]
  };

  expect(checkForShip(player, [0, 0])).to.be.true;
  expect(checkForShip(player, [0, 1])).to.be.true;
  expect(checkForShip(player, [9, 9])).to.be.false;
  
});

// Spec #4: It should check for locations of MULTIPLE ships
it('should handle checking MULTIPLE ships', function(){

  // Represent player as object
  player = {
    ships: [
      {
        locations: [[0, 0], [0, 0]]
      },
      {
        locations: [[1, 0], [1, 1]]
      }
    ]
  };

  // There should be no ships at this given coordinate
  expect(checkForShip(player, [0, 1])).to.be.true;
  expect(checkForShip(player, [0, 0])).to.be.true;  
  expect(checkForShip(player, [1, 0])).to.be.true;  
  expect(checkForShip(player, [1, 1])).to.be.true;  
  expect(checkForShip(player, [9, 9])).to.be.false;
  
});

