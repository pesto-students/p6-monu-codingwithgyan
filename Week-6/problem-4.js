let arr =  [7,1,5,3,6,4];
let N = arr.length;
let maxProfit = 0;

for(let i=0;i<N;i++)
{
    for(let j=i+1;j<N;j++)
    {
        if(arr[j]>arr[i])
        {
            let profit = arr[j]-arr[i];
            if(profit>maxProfit)
            {
                maxProfit = profit;
            }
        }
    }
}
console.log(maxProfit);