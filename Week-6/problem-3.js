let N=5;
let arr= [0,2,1,2,0];

for(let i=0;i<N;i++)
{
    for(let  j=0;j<N;j++)
    {
        if(arr[i]<arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr.join(" "));