//Bind => Its returns a function which can be called at later point of time
function sum(a,b)
{
    return a+b;
}
const bindFn = sum.bind(null,2); /* Here 2 is bind with the function 
                                    and 2 will be the first parameter always*/
console.log(bindFn(3)); // 3 acts as the second argument


// Call => we use call method if we knew all the parameters before the code execution, It calls the method instantly
function subtract(a,b)
{
    return a-b;
}
console.log(subtract.call(null,5,2));

// Apply => we use apply method if we don't knew the parameters before the code execution
function multiply(a,b)
{
    return a*b;
}
console.log(multiply.apply(null,[2,3]));
