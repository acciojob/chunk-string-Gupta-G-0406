function stringChop(str, size) {
  if (str === null) {
    return [];
  }
  const result = [];
  let i = 0;

  while (i < str.length) {
    
    result.push(str.substring(i, i + len));
    i += len;
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
