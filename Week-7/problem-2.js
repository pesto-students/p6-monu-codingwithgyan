const {Node,getLinkList} = require('./Node');
let arr = [2, 4, 7, 8, 9];    
let N=arr.length;
let head = getLinkList(arr);
let k = 7;
k = k>N?k%N:k;

function rotateLinkedList()
{
    let left=null;
    let right = null;
    let count=1;
    let prev=null;
    while(head)
    {
        let node = new Node(head.data);
        if(count<=k)
        {
            if(left==null)
            {
                left = node;
                prev = node;
            }
            else
            {
                prev.next = node;
                prev = node;
            }
        }
        else
        {
            if(right==null)
            {
                right = node;
                prev = node;
            }
            else
            {
                prev.next = node;
                prev = node;
            }
        }
        count++;
        head = head.next;
    }
    prev.next = left;
    return right;
}

let result = rotateLinkedList();
console.log(result);