const arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];
const row = arr.length;
const column = arr[0].length;
let m = row;
let n = column;
let count = 0;

let arr2 = [];
let i = 0;
let j = 0;
while (count < row * column) {
  // top travesal
  for (let k = 0; k < n; k++) {
    arr2.push(arr[i][j]);
    j++;
    count++;
  }
  if(count>=row*column)
  {
    break;
  }
  j--;
  i++;
  m--;
  // right  travesal
  for (let k = 0; k < m; k++) {
    arr2.push(arr[i][j]);
    i++;
    count++;
  }
  i--;
  j--;
  n--;
  if(count>=row*column)
  {
    break;
  }
  // bottom  travesal
  for (let k = 0; k < n; k++) {
    arr2.push(arr[i][j]);
    j--;
    count++;
  }
  j++;
  i--;
  m--;
  if(count>=row*column)
  {
    break;
  }
  // left  travesal
  for (let k = 0; k < m; k++) {
    arr2.push(arr[i][j]);
    i--;
    count++;
  }
  i++;
  j++;
  n--;
  if(count>=row*column)
  {
    break;
  }
}
console.log(arr2);
