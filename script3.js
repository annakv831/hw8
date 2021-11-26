const findExcess =(arr) =>{
    let firstArr = [];
    let secondArr =[];

    for (let i = 0; i<arr.length; i++){
        if(arr[i]%2===0){
            firstArr.push(arr[i]);
            
        } else{
            secondArr.push(arr[i]);
        }
    }
    if(firstArr.length>secondArr.length){
        return secondArr[0];
    } else {
        return firstArr[0];
    }
}
const a = findExcess([0,1,2]);
console.log(`a`,a);