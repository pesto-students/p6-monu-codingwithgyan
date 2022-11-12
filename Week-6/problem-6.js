let arr = [-1,2,1,-4];
let target = 1;
let N = arr.length;
let minDiff = 99999999;
let closestSum = 0;
for(let i=0;i<N;i++)
{
    for(let j=i+1;j<N;j++)
    {
        for(let k=j+1;k<N;k++)
        {
            sum = arr[i]+arr[j]+arr[k];
            diff =  Math.abs(target - sum);
            if(minDiff>diff)
            {
                minDiff = diff;
                closestSum = sum;
            }
        }
    }
}
console.log(closestSum);