function scan(freightItems) {
    let contrabandCount = 0;
    let strln= freightItems.length;
    for(let i=0;i<strln;i++)
    {
        if(freightItems[i]=="contraband")
        {
            contrabandCount++;
        }
    }
    
  
   return contrabandCount;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
 console.log('Number of "contraband": ' + numItems); // should be 2