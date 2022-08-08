function scanAndFilter(freightItems, forbiddenString) {
    // This is an array variable you can override with your filtered array
    //let filteredItems  = [];
  
        var res =freightItems.filter((val)=>{return val != forbiddenString})
    /*
    Replace this comment with your code.
    Use the array filter() function to replace filteredItems with a new array of
    strings that don't include the value of forbiddenString
    */
  //console.log(res);
    return res;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const filtered = scanAndFilter(
    ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
  );
  console.log('Filtered Items');
  console.log(filtered); // should be ['dog', 'cat', 'zippers']