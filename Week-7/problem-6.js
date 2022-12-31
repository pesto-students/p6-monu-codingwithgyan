let N=5;
let str = "1 2 1 3 2 1 4 2";
let OP = str.split(" ");
let result = [];
let queue = [];
for(let i=0;i<OP.length;i++)
{
    if(OP[i] === '1')
    {
        queue.push(OP[i+1]);
        i++;
    }
    else
    {
        if(queue.length === 0)
            result.push(-1);
        else
        {
           let removed = removeAtStart(queue);
           result.push(removed[0]);
           queue = removed [1];
        }
    }
}

function removeAtStart(stack1)
{
    let stack2 = [];
    for(let i=stack1.length-1;i>=0;i--)
    {
        stack2.push(stack1[i]);
    }
    let removedElement = stack2.pop();
    stack1 = [];
    for(let i=stack2.length-1;i>=0;i--)
    {
        stack1.push(stack2[i])
    }
    return [removedElement,stack1];
}
console.log(result.join(" "));