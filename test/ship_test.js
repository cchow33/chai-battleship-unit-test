// import expect from chai
var expect = require('chai').expect;

// 1. Test to check where the ship is located
// Set up new suite:

describe('checkForShip', function(){
  // import 'checkForShip so all our tests in the suite can access it. Code will break because we haven't made this file yet:
  var checkForShip = require('../game_logic/ship_methods.js').checkForShip;

  it('should correctly report no ship at a given players coordinate', function(){

    // Represent player as object
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };

    // There should be no ships at this given coordinate
    expect(checkForShip(player, [9,9])).to.be.false;
    
  });
});