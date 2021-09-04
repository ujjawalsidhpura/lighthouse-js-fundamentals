function MinWindowSubstring(strArr) {
  let targetString = strArr[1].split('');
  let len = targetString.length;
  let targetedString = strArr[0].split('');
  let list = [];
  let eachTest = []


  for (let i = 0; i < targetedString.length - len; i++) {

    for (let j = i; j <= (j + len); j++) {

    }
  }

  return test;
}

// keep this function call here 
console.log(MinWindowSubstring(["aabdccdbcacd", "aad"]));