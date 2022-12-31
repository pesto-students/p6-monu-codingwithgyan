let arr = [1, 3, 2, 4];
let N = arr.length;

function nextGreatestNum()
{
    let result = [];
    let stack = [];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]>arr[i])
            {
                stack.push(arr[j]);
                break;
            }
        }
        if(stack.length === 0)
        {
            result.push(-1);
        }
        else
        {
            result.push(stack[stack.length-1]);
            stack.pop();
        }
        
        
    }
    return result;
}

const result = nextGreatestNum();
console.log(result);