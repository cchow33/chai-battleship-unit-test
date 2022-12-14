// import expect from chai
var expect = require('chai').expect;

// SUITE #1: CHECKFORSHIPS
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

// SUITE #2: CHECKFORDAMAGES
describe('damageShip', function () {
  var damageShip = request('../game_logic/ship_methods').damageShip;

  it('should register damage on a given ship at a given location', function () { 
    var ship = {
      locations: [[0, 0]],
      damage: []
    };
    damageShip(ship, [0,0]);

    expect(ship.damage).to.not.be.empty;
    // check that first element of damage array is:
    expect(ship.damage[0]).to.deep.equal([0,0]);
  });
});

// SUITE #3 FIRE
describe('fire', function() {
  // import fire() so it's available to all specs
  var fire = require('../game_logic/ship_methods').fire;

  // spec to test fire's behavior, 
  it('should record damage on the given players ship at a given coordinate', function () {
    var player = {
      ship: [
        {
          locations: [[0, 0]],
          damage: []
        }
      ]
    };
    
    fire(player, [0, 0]);
  })
})

  expect(player.ship[0].damage[0]).to.deep.equal[(0,0)];

