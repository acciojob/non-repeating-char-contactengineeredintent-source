function firstNonRepeatedChar(str) {
 let count = 1;
  let map = new Map();
  let i = 0;
  while(i < str.length){
    let j = i+1;
    while(str.charAt(i) === str.charAt(j)){
        count++;
        j++;
    }
    map.set(count, str.charAt(i));
    if(count == 1){
        return str.charAt(i);
    }
    count = 1;
    i = j;
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
