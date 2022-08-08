class Materializer {
    constructor(target) {
      this.target=target;  
    }
    
      activated=false;
    activate()
    {  
        this.activated=true;
        return this.activated;
    }
    materialize()
    { 
      if(this.activated==true)
      {
        return this.target;
      }
      else
        return undefined;

    }
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const m = new Materializer('kevin');
  console.log(m.activated); // would print "false"
  
 m.activate();
 console.log(m.activated); // would print "true"
  
  console.log(m.materialize()); // would print "Kevin"