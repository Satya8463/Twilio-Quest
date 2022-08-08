function calculateMass(freightItems) {
    // This is a placeholder for the total length in characters of all strings
    // in the freightItems array
    let totalMass = 0;
    let strln = freightItems.length;
    for(let i = 0;i<strln;i++)
    {
      totalMass=totalMass + freightItems[i].length;
    }
  
    return totalMass;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const mass = calculateMass(['dog', 'donkey', 'cat']);
  console.log('Total mass of items is ' + mass); // should be 12