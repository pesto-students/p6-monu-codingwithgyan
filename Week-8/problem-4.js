let edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
let source = 0;
let destination = 5;

function generateMap()
{
    let map = new Map();
   for(let i=0;i<edges.length;i++)
   {
        if(map.has(edges[i][0]))
        {
            let arr = map.get(edges[i][0]);
            arr.push(edges[i][1]);
            map.set(edges[i][0],arr);
        }
        if(!map.has(edges[i][0]))
        {
            map.set(edges[i][0],[edges[i][1]]);
        }

        if(map.has(edges[i][1]))
        {
            let arr = map.get(edges[i][1]);
            arr.push(edges[i][0]);
            map.set(edges[i][1],arr);
        }
        if(!map.has(edges[i][1]))
        {
            map.set(edges[i][1],[edges[i][0]]);
        }
   }
   return map;
}

function doesPathExists(map)
{
    let flag = false;
    let set = new Set();
    set.add(source);
   
    set.forEach(value1 => {
        if(value1 === destination)
        {
            flag = true;
            return;
        }
        if(map.has(value1))
        {
            let temp = map.get(value1);
            temp.forEach(value2=>{
                set.add(value2);  
            })
        }
    })
    return flag;
}

let map = generateMap();
let result = doesPathExists(map);
console.log(result);