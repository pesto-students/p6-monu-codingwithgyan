
const state = {
  PENDING:'pending',
  RESOLVED:'resolved',
  REJECTED : 'reject',
}
class promise {
  data = null;
  currentState = state.PENDING;
  thenArr = [];
  catchArr = [];
  constructor(callback) {
    callback(this.resolve, this.reject);
  }
  resolve = (data) => {
    if(this.currentState !== state.PENDING) return;
    this.data = data;
    this.currentState = state.RESOLVED;
    this.runCallbacks();
  }
  reject = (data) => {
    if(this.currentState !== state.PENDING) return;
    this.data = data;
    this.currentState = state.REJECTED;
    this.runCallbacks();
  }
  runCallbacks = () => {
    if(this.currentState === state.RESOLVED)
    {
        this.thenArr.forEach(callback=>{
          callback(this.data);
        })
        this.thenArr = [];
    }
    if(this.currentState === state.REJECTED)
    {
        this.catchArr.forEach(callback=>{
          callback(this.data);
        })
        this.catchArr = [];
    }
  }
  then = (SuccessCallback,ErrorCallback) => {
    if(SuccessCallback)
      this.thenArr.push(SuccessCallback);
    if(ErrorCallback)
      this.catchArr.push(ErrorCallback);
  }
  catch = (callback) => {
    if(!callback) return;
      this.catchArr.push(callback);
  }
}

const getNumber = () => {
  return Math.floor(Math.random() * 100);
};
const fn = (delay) => {
  const p = new promise(function (resolve, reject) {
    setTimeout(() => {
      const num = getNumber();
      if (num % 5 === 0) reject(num);
      else resolve(num);
    }, delay);
  });
  p.then((data) => {
    console.log("success", data);
  })
  p.catch((data)=>console.log("error",data));
}

fn(100);
