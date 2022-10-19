
  function memoize(fn) {
    let map = new Map();
    return function (...args) {
      const stringArgs = JSON.stringify(args);
      // checking the cache
      if(map.has(stringArgs))
      {
        return map.get(stringArgs)
      }
      // execeutes if value is not found in cache
      let result = args.length===1?args[0]:fn(...args);
      map.set(stringArgs,result);
      return result;
    };
  }
  
  // Reducer method:
  function add(a, b) {
    return a + b;
  }
  
  //Create a method called memoize such that:
  const memoizeAdd = memoize(add);
  memoizeAdd(100, 100);
  memoizeAdd(100); 
  memoizeAdd(100, 200); 
  memoizeAdd(100, 100); 
  

