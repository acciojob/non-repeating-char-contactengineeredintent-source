function firstNonRepeatedChar(str) {
  let count = 1;
  let map = new Map();
  let i = 0;
  while(i < str.length){
    // console.log(`i = ${i}`);
    let j = i+1;
    while(str.charAt(i) === str.charAt(j)){
        // console.log(`j = ${j}`);
        // console.log(`count = ${count}`);
        count++;
        j++;
    }
    // console.log(`chat at i = ${str.charAt(i)}`);
    map.set(str.charAt(i),count);
    count = 1;
    i = j;
  }
  for(let [key, value] of map){
    if(value === 1){
       return key;
    }
  }
  return null;
}
