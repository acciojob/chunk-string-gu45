function stringChop(str, size) {
  // your code here
	  let ans = []
  let i=0;
  if(str===null){
    return []
  }
  while(i<str.length){
    ans.push(str.slice(i,size))
    i = i+5;
    size = size+5;
  }
  return ans
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
