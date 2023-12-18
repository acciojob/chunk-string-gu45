function stringChop(str, size) {
  // your code here
	  let ans = []
  let i=0;
  if(str===null){
    return []
  }
  while(i<str.length){
    ans.push(str.slice(i,i+size))
    i = i+size;
  }
  return ans
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
