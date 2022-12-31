function isVowel(char)
{
    char  = char.toLowerCase();
    return "aeiou".includes(char);
}

function vowelCount(str)
{
    const map = new Map();
    for(const char of str)
    {
        if(isVowel(char))
        {
            if(map.has(char))
            {
                map.set(char,map.get(char)+1);
            }
            else
            {
                map.set(char,1);
            }
        }
    }
    return map;
}
const result = vowelCount("gyaneshwar");
console.log(result);