let A = [5, 10, 3, 2, 50, 80];
let B = 78;
let N = A.length;

function pairWithGivenDifference()
{
    for(let i=0;i<N;i++)
    {
        for(let j=i+1;j<N;j++)
        {
            
            let diff1 = A[i]-A[j];
            let diff2 = A[j]-A[i];
            if(diff1 === B || diff2 === B)
            {
                return 1;
            }
        }
    }
    return 0;
}
let result = pairWithGivenDifference();
console.log(result);