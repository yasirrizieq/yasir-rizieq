/* bubbele sort */
function bubbleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
      for (let i = 0; i < arr.length - 1; i++) {
        let a = arr[i];
        let b = arr[i + 1];
  
        if (b < a) {
          let temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
        }
      }
    }
  
    return arr;
  }
  console.log(bubbleSort([12, 98, 23, 47, 65, 32, 49, 87, 71, 23, 12, 35]));