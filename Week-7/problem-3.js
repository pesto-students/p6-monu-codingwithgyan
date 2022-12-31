const { Node, getLinkList } = require("./Node");
let arr = [1, 3, 4];
let head = getLinkList(arr);
let x = 2;

function hasLoop() {
    let set = new Set();
    while(head)
    {
        if(set.has(head))
            return true;
        set.add(head);
        head = head.next;
    }
    return false;
}

function init() {
  let current = head;
  let item = null;
  let count = 1;
  while (current.next) {
    if (count === x) {
      item = current;
    }
    count++;
    current = current.next;
  }
  current.next = item;
}

init();
let result = hasLoop();
console.log(result);