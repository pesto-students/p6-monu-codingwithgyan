const {Node,getLinkList} = require('./Node');
let arr = [1,2,3,4,5,6];    
let head = getLinkList(arr);
function reverseLinkedList()
{
    let temp = null;
    let prev = null;
    while(head)
    {
        let node = new Node(head.data);
    
        if(prev)
            node.next = JSON.parse(JSON.stringify(prev));
        
        temp = node;
        prev = temp;
        head = head.next;
    } 
    console.log(temp);
}

reverseLinkedList();