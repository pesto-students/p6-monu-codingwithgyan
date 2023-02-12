/* Point-1 : createStack function is returning an object and that 
   object does not have the item property that's why we are getting undefined 
   Point-2 : item is accessible inside the object but not outside the createStack function
*/
function createStack() {
    const item = []
    return {
        push(value){
            item.push(value)
        },
        pop()
        {
            return item.pop();
        }
    }
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined
