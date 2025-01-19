/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const params = {
  velocity: 10000, // Initial velocity (km/h)
  acceleration: 3, // Acceleration (m/s^2)
  time: 3600, // Time duration (seconds)
  distance: 0, // Initial distance (km)
  fuel: 5000, // Initial fuel (kg)
  fuelBurnRate: 0.5 // Fuel burn rate (kg/s)
};

// functions for unit conversion
const mpsToKmh = (mps) => mps * 3.6;
const kmhToMps = (kmh) => kmh / 3.6;

// function to calculate new velocity
function calcNewVelocity({ velocity, acceleration, time }) {
  const velocityMps = kmhToMps(velocity); // Convert km/h to m/s
  const newVelocityMps = velocityMps + acceleration * time; // Calculate new velocity in m/s
  return mpsToKmh(newVelocityMps); // Convert back to km/h
}


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






