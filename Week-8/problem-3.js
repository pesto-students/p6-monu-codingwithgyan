let arr = [3,9,20,null,null,15,7];

function levelOrderTraversal()
{
    let pointer = 0;
    let left = null;
    let right = null;
    let node = null;
    let result = [];
    if(arr[0])
    {
        result.push([arr[0]]);
    }

    for(let i=0;i<arr.length;i++)
    {
        let arr2 = [];
        node = arr[i];
        if(arr[pointer+1])
        {
            left = arr[pointer+1];
            arr2.push(left);
        }
        if(arr[pointer+2])
        {
            right = arr[pointer+2];
            arr2.push(right);
        }
        if(arr2.length>0)
            result.push(arr2);
            
        pointer +=2;
    }
    console.log(result)
}

levelOrderTraversal();