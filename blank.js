// create function to determine the given expression is correct or not
// expression will be string of open bracket nor close bracket e.g ({[[()]]})
// your function should determine the expression is it correct or not
// examples:
// ({[]}) => true
// ([][]{})=> true
// ({)(]){[} => false
// [)()] => false


function bracket (str){
    let obj = {}
    for (let i = 0 ; i <  str.length ; i ++){
        obj[str[i]] = obj[str[i]]+1 || 1
    }
    if(obj["("] != obj[")"]) return false
    if(obj["{"] != obj["}"]) return false
    if(obj["["] != obj["]"]) return false
    return true
}

function anagram (str , str2){
    let obj ={}
    for(let i = 0 ; i < str.length ; i++){
        obj[str[i]] = obj[str[i]]+1|| 1
    }
    for(let i = 0 ; i < str2.length ; i++){
        obj[str2[i]] = obj[str2[i]] ? obj[str2[i]] -1 : -1
    }
    for(let i in obj ){
        if(obj[i]< 0 || obj[i]> 0 ) return false
    }
    return true
}

console.log(anagram("aaz","zaa"))



console.log(test("([][]{})"))