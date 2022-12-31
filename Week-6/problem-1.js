let arr = [1, 2, 3, 4, -10];
let N = arr.length;
let max=0;
for(let i=1;i<=N;i++)
{
    let x=0;
    let y=i-1;
    while(y<N)
    {
        let sum=0;
        for(let k=x;k<=y;k++)
        {
            sum+=arr[k];
        }
        if(max<sum)
        {
            max = sum;
        }
        x++;
        y++;
    }
}
console.log(max);



//-------------PRINTING ALL THE SUB - ARRAYS
// let arr = [1, 2, 3, 4, -10];
// let N = arr.length;
// let arr2 = [];
// for(let i=1;i<=N;i++)
// {
//     let temp = [];
//     let x=0;
//     let y=i-1;
//     while(y<N)
//     {
//         let temp2 = [];
//         for(let k=x;k<=y;k++)
//         {
//             temp2.push(arr[k]);
//         }
//         
//         x++;
//         y++;
//         temp.push(temp2);
//     }
//     arr2.push(temp);
// }
// console.log(arr2,max);