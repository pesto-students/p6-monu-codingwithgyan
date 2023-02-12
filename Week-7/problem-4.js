let str = "{([])}";
function parenthesisChecker(){
    let arr = []; // stack

    for(let i=0;i<str.length;i++)
    {
        if(str[i] === "{" || str[i] === "(" || str[i] === "[")
        {
            arr.push(str[i]);
        }
        else
        {
            if(arr.length>0)
            {
                let top = arr.length-1;
                if((arr[top] === '{' && str[i] === '}') ||
                    (arr[top] === '(' && str[i] === ')') ||
                    (arr[top] === '[' && str[i] === ']'))
                    {
                        arr.pop();
                    }
                    else
                    {
                        return false;
                    }
                
            }
            
        }
       
    }
    if(arr.length==0)
     return true;
    else
    return false; 
}
let result = parenthesisChecker();
console.log(result);