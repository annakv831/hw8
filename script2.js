const arr = ['a','v','a','b','b'];
const getOccurrencesCount = (arr) =>{
    const res = {};
       
    
    
    for (let item of arr) {
   
        if (!res[item] ) {
       
        res[item]=1;
        } else {
            res[item]+=1;
        }
 
    }
return res;

};
 const a = getOccurrencesCount(arr);
 console.log(`a`,a);
 const b = getOccurrencesCount(['apples','oranges', 'pears','pears','apples']);
 console.log(`b`,b);
