// The initial numbers that must be verified.
const n1 = 18;
const n2 = 7;
const n3 = 17;
const n4 = 8;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

const divFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) <1

console.log(divFive)

const isLarger = n1 > n4

console.log(isLarger)

const findSum = ((n1-n2) * (n3)) %n4

console.log(findSum)

let gasMileage = 30
const totalGallons = 175 /3
const totalMiles = 1500

const driveFiftyfive = 
console.log(`At 55 miles per hour, it will take you ${totalMiles/55} hours to reach your destination.  If you get ${gasMileage} miles per gallon, you will need ${totalMiles/gasMileage} gallons to complete the trip.`)

let gasMileage = 28
const driveSixty
console.log(`At 60 miles per hour, it will take you ${totalMiles/55} hours to reach your destination.  If you get ${gasMileage} miles per gallon, you will need ${totalMiles/gasMileage} gallons to complete the trip.`)