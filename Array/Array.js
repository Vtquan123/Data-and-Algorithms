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

  // Duplicate Zero in-place - not use extra array
  duplicateZero_in_place_1(arr) {
    let zeroes = 0
    let length = arr.length -1
    for(let i = 0; i <= length - zeroes; i++) {
        if(arr[i] === 0) {
            if(i === length - zeroes) {
                arr[length] = 0
                length--
                break;
            }
            zeroes++
        }
    }
    let last = length - zeroes
    for(let i = last; i >= 0; i--){
      if(arr[i] === 0){
        arr[i + zeroes] = 0
        zeroes--
        arr[i + zeroes] = 0
      } else {
        arr[i + zeroes] = arr[i]
        console.log(arr)
      }
    }
    return arr
  }

  duplicateZero_in_place_2(arr) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 0) {
        for (let j = arr.length - 1; j > i; j--){
          arr[j] = arr[j-1]
        }
        i++
      } 
    }
    return arr
  }

  duplicateZero_not_in_place(arr) {
    let newArr = new Array(arr.length)
    for (let i = 0, j = i; i < arr.length, j < arr.length; i++, j++) {
      if (arr[i] === 0) {
        console.log(j)
        newArr[j] = 0
        j++
        if(j < arr.length)
          newArr[j] = 0
      } else {
        newArr[j] = arr[i]
      }
    }
    return newArr
  }

  duplicateZero(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 0) {
        newArr.push(0)
        newArr.push(0)
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr.slice(0,arr.length)
  }

  // Merge sorted array


  // Remove element
  removeElement(arr,val) {
    let i = 0
    let length = arr.length
    while (i < length) {
      if (arr[i] === val) {
        arr[i] = arr[length - 1]
        length--
      } else {
        i++
      }
    }
    return arr
  }
}
