function isAvailable(args, map) {
    let found = {
      status: false,
      value: null,
    };
    map.entries((item) => {
      if (JSON.stringify(args) === JSON.stringify(item[1])) {
        found.status = true;
        found.value = item[0];
        return;
      }
    });
    return found;
  }
  function memoize(fn) {
    let map = new Map();
    return function (...args) {
      
      // Incase one argument is only passed
      if(args.length===1)
      return args[0];
  
      // checking the cache
      const { status, value } = isAvailable(args, map);
      if (status && value) {
        return value;
      }
  
      // execeutes if value is not found in cache
      let result = fn(...args);
      map.set(result, args);
      return result;
    };
  }
  
  // Reducer method:
  function add(a, b) {
    return a + b;
  }
  
  //Create a method called memoize such that:
  const memoizeAdd = memoize(add);
  console.log(memoizeAdd(100, 100));
  console.log(memoizeAdd(100)); 
  console.log(memoizeAdd(100, 200)); 
  console.log(memoizeAdd(100, 100)); 
  