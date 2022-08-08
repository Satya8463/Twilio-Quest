function calculatePower(powerSettings) {
    let totalPower = 0;
      for(i =0;i<powerSettings.length;i++)
      {
          totalPower=totalPower+2*powerSettings[i];
      }
    return totalPower;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const laserPower = calculatePower([1, 3, 8]);
  console.log("Required laser power is " + laserPower); // should be 24