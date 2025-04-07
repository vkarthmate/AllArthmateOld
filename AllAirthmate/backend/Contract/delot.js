var arr = [2,2,6,2,5,7,1,4,4,15,4,12]

let duplicates = [];

for(var i =0; i<arr.length; i++){
    if(!duplicates.includes(arr[i])){
        duplicates.push(arr[i])
    }
}

console.log(duplicates);
