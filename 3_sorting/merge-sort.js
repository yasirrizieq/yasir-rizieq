/* merge sort */
function mergeShort(arr) {
    var len = arr.length;
    if (len < 2) return arr;
  
    var mid = Math.floor(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);
  
    console.log("kiri " + left);
    console.log("kanan " + right);
    console.log("\n");
  
    return merge(mergeShort(left), mergeShort(right));
  }
  
  function merge(left, right) {
    var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  
    while (l < lLen && r < rLen) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
  
    result = result.concat(left.slice(l).concat(right.slice(r)));
    console.log(result);
    return result;
  }
  
  console.log(mergeShort([7, 5, 2, 4, 3, 9]));