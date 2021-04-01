class ArrayData {
  constructor() {
  }

  // Find max consecutive ones of array
  maxConsecutiveOnes(nums) {
    let max = 0;
    let count = 0;
    for (let num of nums) {
      if (num) {
        count++;
        if (max < count)
          max = count;
      } else {
        count = 0
      }
    }
    return max;
  }
  
  // Find numbers with even Number of digits
  findEvenNumberDigits(nums) {
    let count = 0;
    for (let num of nums) {
      num.toString().length % 2 && count++
    }
    return count
  }

  // Squares of a sorted Array
  sortedSquares(nums) {
    // return nums.map(num => num ** 2).sort((a,b)=>a-b)
    let squaredArr = nums.map(num => num ** 2)
    for (let i = 0; i < squaredArr.length; i++){
      for (let j = i; j < squaredArr.length; j++){
        if (squaredArr[j] < squaredArr[i]) {
          let temp = squaredArr[i]
          squaredArr[i] = squaredArr[j]
          squaredArr[j] = temp
        }
      }
    }
    return squaredArr
  }
}
