/**
 * Debugging Guide
 * 1. Make the code more readable.
 * 2. Correct calculation errors.
 * 3. Ensure calculations are robust and handle unit mismatches effectively.
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

// function to calculate new distance
function calcNewDistance({ distance, velocity, time }) {
  const velocityMps = kmhToMps(velocity); // Convert km/h to m/s
  const distanceMeters = velocityMps * time; // Calculate distance in meters
  return distance + distanceMeters / 1000; // Convert meters to kilometers and add initial distance
}

// function to calculate remaining fuel
function calcRemainingFuel({ fuel, fuelBurnRate, time }) {
  const fuelUsed = fuelBurnRate * time; // Fuel used in kg
  if (fuelUsed > fuel) {
    throw new Error("The Fuel is Insufficient for the given burn rate and time.");
  }
  return fuel - fuelUsed; // Calculate remaining fuel
}

// Main computation with error handling
try {
  const newVelocity = calcNewVelocity(params);
  const newDistance = calcNewDistance(params);
  const remainingFuel = calcRemainingFuel(params);

  console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
