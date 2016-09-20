Please use this Google doc to code during your interview. To free your hands for coding, we recommend that you use a headset or a phone with speaker option.

// Question 1: Implement a simple function to check if a value exists in an array
function IsInArray(array, value) {
  let i;
  for (i in array) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
// Time complexity O(n)


// Question 2: Now imagine array.length does not exist, how would you find the value without knowing the length of the array?

function IsInArray(array, value) {
  let i = 0;
  while (array[i] != undefined || array[i] != null) {
    if (value === array[i]) {
      return true;
    }
    i++;
  }
  return false;
}
// Time complexity O(n)

// Question 3: Can we make this better? It's linear time.
// What if the array was sorted?

/* My approach: Divide and conquer.
    Check middle index, if array[index] < value then check left side of array
    if array[index] > value then check right side of array
*/

function IsInSortedArray(array, value) {
  findValInArray(array, 0, x); // How do I determine x? Hmm...
  function findValInArray(array, start, end) {
    //Static again
    if (start > end) return false;
    let middleIndex = Math.ceil((start + end)/2);
    if (array[middleIndex] == value) {
      return true;
    } else if (array[middleIndex] < value) {
      findValInArray(array, start, middleIndex - 1);
    } else if (array[middleIndex] > value) {
      findValInArray(array, middleIndex + 1, end);
    }
  }
}

/* if we have n elements, jump x elements at a time
Worst case scenario: (n/x) + (x - 1) jumps to find last element

Time complexity: (n/x + x-1) = O(n)
This is slightly better but still linear time, so we can't skip by a fixed number of elements each time.

Try multiplying number of steps by 2 each time we skip.

1, 2, 4, 8, 16 = logn steps required to reach n
O(logN) -- this is better!

Approach:
check first index, if index is defined check index * 2
repeat until index is not defined, then check every index since previous index

*/


function IsInSortedArray(array, value) {
  let lastIndex = findLastIndex(array, 1);
  function findLastIndex(array, indexSkippedTo) {
    let skippedToIndex = indexSkippedTo * 2;

    if (array[skippedToIndex] == undefined || array[skippedToIndex == null) {
      let i = indexSkippedTo;
      while (i < skippedToIndex) {
        if (array[i] == undefined) {
          return i - 1;
        }
      }
    } else {
      findLastIndex(array, skippedToIndex);
    }

  findValInArray(array, 0, lastIndex);
  function findValInArray(array, start, end) {
    //Static again
    if (start > end) return false;
    let middleIndex = Math.ceil((start + end)/2);
    if (array[middleIndex] == value) {
      return true;
    } else if (array[middleIndex] < value) {
      findValInArray(array, start, middleIndex - 1);
    } else if (array[middleIndex] > value) {
      findValInArray(array, middleIndex + 1, end);
    }
  }
}

// Time complexity analysis: O(logn) + O(logn)
// O(logn)
