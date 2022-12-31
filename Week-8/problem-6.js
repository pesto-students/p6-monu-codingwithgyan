let arr =  [[4,3,1],[3,2,4],[3],[4],[]];

function generateMap()
{
    let map = new Map();
    for(let i=0;i<arr.length;i++)
    {
        map.set(i, arr[i]);
    }
    return map;
}
let result = [];
let temp = [];
function findPath(map,source,dest,arr)
{
    temp.push(source);
    arr.forEach(item => {
        if(dest === item)
        {
            temp.push(item);
            result.push([...temp]);
            temp.pop();
        }
        else
        {
            findPath(map,item,dest,map.get(item));
            temp.pop();
        }
    });
}
let map2 = new generateMap();
findPath(map2,0,arr.length-1,map2.get(0));
console.log(result);