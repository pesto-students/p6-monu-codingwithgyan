let arr = [[1,3],[2,3],[3,1]];
function generateMap()
{
   let map = new Map();
   for(let i=0;i<arr.length;i++)
   {
       let arr2=[];
        if(map.has(arr[i][0]))
        {
            arr2 = map.get(arr[i][0]);
            arr2.push(arr[i][1]);
            map.set(arr[i][0],arr2);
        }
        else
        {
            map.set(arr[i][0],[arr[i][1]]);
        }
    }
   return map;
}

function getTownJudge(map)
{
    let found = -1;
    map.forEach((value,key) => {
        value.forEach(item => {
            if(!map.has(item))
            {
                found = item;
            }
        });
    });
    console.log(found);
}
let map2 = generateMap();
console.log(map2);
let result = getTownJudge(map2);