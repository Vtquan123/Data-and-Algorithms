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

  // Merge sorted arrays
  mergeSortedArray(arr1, m, arr2, n) {
    let index1 = m - 1
    let index2 = n - 1
    let i = arr1.length - 1
    while (index1 >= 0 && index2 >= 0) {
      arr1[i--] = arr1[index1] > arr2[index2] ? arr1[index1--] : arr2[index2--] 
    }

    while (index2 >= 0) {
      arr1[i--] = arr2[index2--]
    }

    return arr1
}

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

  // Remove duplicated element
  removeDuplicate(arr) {
    if (!arr.length) {
      return 0;
    }
    let count = 0
    for (let j = 1; j < arr.length; j++) {
      if (arr[count] < arr[j]) {
        arr[++count] = arr[j]
      }
    }
    return arr.slice(0,count + 1)
  }

  // Check if N and its double value exist
  checkDoubleExist(arr) {
    if (arr === null || !arr.length) {
      return false
    }

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] * 2 === arr[j] || arr[i] * 2 === arr[j]) {
          return true
        }
      }
    }
    return false
  }

  // Valid mountain array
  validMountainArr(arr) {
    let length = arr.length
    let i = 0

    // Walk up
    while (i + 1 < length && arr[i] < arr[i + 1]) i++
    
    // Edge case
    if (i === 0 || i === length - 1) return false
    
    // Walk down
    while (i + 1 < length && arr[i] > arr[i + 1]) i++
    
    return i === length - 1
  }

  // Replace elements with greatest element on right side
  replaceElement(arr) {
    let length = arr.length
    let max, temp = 0
    for (let i = length - 1; i > 0; i--) {
      max = arr[i] > temp ? arr[i] : temp
      temp = arr[i - 1]
      arr[i-1] = max
    }
    arr[length - 1] = -1
    return arr
  }

  // Move Zeroes
  moveZeroes(arr) {
    if (!arr.length) return []
    let i = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== 0) {
        arr[i++] = arr[j]
      }
    }
    while(i < arr.length){ arr[i++] = 0}
    return arr
  }

  // Sort Array by Parity
  sortArrayByParity(arr) {
    if (!arr.length) return []
    let j = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        let temp = arr[j]
        arr[j++] = arr[i]
        arr[i] = temp
      }
    }
    return arr
  }

  // Height checker
  heightChecker(arr) {
    if (!arr.length) return 0
    let checked = 0
    const expected = [...arr].sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== expected[i]) {
        checked++
      }
    }
    return checked
  }

  // Third max
  thirdMax(nums) {
    const length = nums.length
    nums.sort((a, b) => a - b)
    if(length < 3) return nums[length-1]
    else {
      let count = 0
      let res = nums[length - 1]
      for(let i = length-1; i>0; i--) {
        if(nums[i-1] < nums[i] && count < 2) {
          res = nums[i-1]
          count++
        }
      }
      return count === 2 ? res : nums[length-1]
    }
};

  // Find all numbers disappear
  findDisappearedNumbers1(nums) {
    const orderedNums = nums.map((_, i) => i + 1)
    return orderedNums.filter(item=>!nums.includes(item))
  };
    
  findDisappearedNumbers2(nums) {
    let res = []
    let index = 0
    for (let i = 0; i < nums.length; i++) {
      index = Math.abs(nums[i]) - 1
      nums[index] = Math.abs(nums[index]) * -1
      console.log(nums)
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        res.push(i+1)
      }
    }
    return res
  }

  findDisappearedNumbers3(nums) {
    let res = [], arr = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
      arr[nums[i]-1] = 1
    }
    console.log(arr)
    for (let i = 0; i < nums.length; i++) {
      if(!arr[i]) res.push(i+1)
    }
    return res
  }

}
