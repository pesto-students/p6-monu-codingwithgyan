const hasDuplicate = (arr) => {
    const set = new Set(arr);
    if(set.size===arr.length)
        return false;
    return true
    
}
console.log(hasDuplicate([1,5,-1,4])) 