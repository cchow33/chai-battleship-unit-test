function checkForShip(player, coordinates){
  var shipPresent, ship;

  // Loop through ships in the array and check each of their coordinates against the one given in the function
  for (var i = 0; i < player.ships.length; i++) {
    // Save current ship in the loop
    ship = player.ships[i];
    // Filter ships location array by comparing values to given coordinates
    shipPresent = ship.locations.filter(function(actualCoordinate){
      // return an array with only coordainates that match
      return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
    })[0]; // The first member of an empty array is undefined

    if (shipPresent){
      return true;
    } 
  }
  return false;

  function damageShip(ship, coordinates){
    ship.damage.push(coordinates);
  }

}

// Export using module
module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;