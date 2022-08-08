function scan(freightItems) {
    let contrabandIndexes = [];
  
    for(let i=0;i<freightItems.length;i++)
    {
          if(freightItems[i]=="contraband")
          {
              contrabandIndexes.push(i) ;
          }
         
    }
    return contrabandIndexes;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
  console.log('Contraband Indexes: ' + indexes); // should be [1, 4]