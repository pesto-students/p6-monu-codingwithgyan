let arr = [2,1,3];
function isBST()
{
    let pointer = 0;
    let left = null;
    let right = null;
    let node = null;
    for(let i=0;i<arr.length;i++)
    {
        node = arr[i];
        if(arr[pointer+1])
        {
            left = arr[pointer+1];
        }
        if(arr[pointer+2])
        {
            right = arr[pointer+2];
        }
        if(left>node || right<node)
        {
            console.log(left,node,right);
            return false;
        }
        pointer +=2;
    }
    return true;
}

let result = isBST();
console.log(result);