const Fibo = {
    n:7,
    [Symbol.iterator]:function() {
        let i=1;
        let num1=0;
        let num2=1;
        let temp = num2;
        return {
            next:()=>{
                if(i==1)
                {
                    i++;
                    return {value:num1,done:false}
                }
                if(i<=this.n)
                {
                    temp = num1;
                    num1 = num1+num2;
                    num2 = temp;
                    i++;
                    return {value:num1,done:false}
                }
                else
                {
                    return {done:true}
                }
            },
        }
    }
}

for(let num of Fibo)
{
    console.log(num);
}