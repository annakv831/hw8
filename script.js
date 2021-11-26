const countTrue =(arr)=>{

let counter=0;
for(let item of arr){
  if(item){
      counter++;
  }

}
return counter;
}
//const a= countTrue([true,false,false,true,false]);
//const a = countTrue([false, false, false, false]);
const a = countTrue([]); // -> 0
console.log(`a`,a);