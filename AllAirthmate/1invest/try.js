var arr = [1,2,3,4,3,2,1,4,3,3,2,2,5]
//var arr = [1, 2, 2, 3, 4, 4, 5];
var unique = []

for(var i =0; i<arr.length; i++){
    if(!unique.includes(arr[i])){
        unique.push(arr[i])
    }
}

console.log(unique);
