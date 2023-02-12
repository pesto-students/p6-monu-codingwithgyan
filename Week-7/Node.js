class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

function insertNode(head,data)
{
   if(head==null)
   {
        head = new Node(data);
        return head;
   }
   let temp = head;
   while(temp.next)
   {
        temp = temp.next;
   }
   temp.next = new Node(data);
   return head;
}

function getLinkList(arr)
{
    let node = null;
    
    for(let i=0;i<arr.length;i++)
    {

        node = insertNode(node,arr[i]);
    }
    return node;
}

module.exports = {Node,getLinkList};
