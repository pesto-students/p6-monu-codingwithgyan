let depth = 0;
let node = null;
let arr = [1];
function calculateDepth(arr)
{
    if(arr[0])
    {
        depth++;
    }
    let pointer = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[pointer+1] || arr[pointer+2])
        {
            depth++;
        }
        pointer +=2;
    }
    return depth;
}

let result = calculateDepth(arr);
console.log(result);