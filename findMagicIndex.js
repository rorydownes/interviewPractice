/*
Magic Index: A magic index in an array A[1....n-1] is defined to be a n index such that A[i] = i.
Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
*/

/* Immediately brute force solution jumps out.
Loop through array once and at each step compare values to determine if A[i] = i

Time complexity O(n) */

function bruteMagicIndex(array) {
  let i, magicIndexes = [];
  for (i in array) {
    if (parseInt(array[i]) === parseInt(i)) {
      magicIndexes.push(i);
    }
  }
  return magicIndexes;
}

/* However that's way too simple, re-reading the question it specifies a sorted array of distinct integers,
This information is not used in the brute force solution. How does it help?

If the array is sorted then we can skip elements if their value is larger than their index,
Seems like a recursive algorithm (divide & conquer).

Approach:

  1. Check the middle of the array.
      - If middle value < index then all the values before must be less than their indexes too.
        - Check middle of array of the values > currentIndex
      - If middle value > index then all the values after must be more than their indexes too.
        - Check middle of array of the values < currentIndex
      - If middle value === index add Index to result.
        - Check both both left and right sides incase there are more magic indexes.
*/

// Sample Data

var sampleArray = [0, 1, 2, 3, 4, 5]; // All matches
var sampleArray2 = [0, 9, 50, 132, 5313, 132123]; // 1 match
var sampleArray3 = [-1, 1234, 1232412, 134134141, 1231213513435]; // 0 matches

// Implementation

function findMagicIndex (array) {
  var magicIndices = [];
  getMagicIndices(array, 0, array.length - 1);

  function getMagicIndices(array, start, end) {
    var middleIndex = Math.ceil((start + end)/2);

    if (parseInt(array[middleIndex]) === parseInt(middleIndex)) {
      magicIndices.push(middleIndex);
      getMagicIndices(array, start, middleIndex - 1);
      getMagicIndices(array, middleIndex + 1, end);
    } else if (parseInt(array[middleIndex]) < middleIndex) {
      getMagicIndices(array, middleIndex + 1, end);
    } else if (parseInt(array[middleIndex]) > parseInt(middleIndex)) {
      getMagicIndices(array, start, middleIndex - 1);
    }
  }
  return magicIndices;
}

/* Checking over - My solution visibly looked ok, except I did not notice
  that when start == end if we do middleIndex + 1 start is now start > end
  recursion should always end if start > end to avoid infinite recursion until max call stack
*/

// Fixing this issue:

function findMagicIndex (array) {
  var magicIndices = [];
  getMagicIndices(array, 0, array.length - 1);

  function getMagicIndices(array, start, end) {
    if (start > end) return;
    var middleIndex = Math.ceil((start + end)/2);

    if (parseInt(array[middleIndex]) === parseInt(middleIndex)) {
      magicIndices.push(middleIndex);
      getMagicIndices(array, start, middleIndex - 1);
      getMagicIndices(array, middleIndex + 1, end);
    } else if (parseInt(array[middleIndex]) < middleIndex) {
      getMagicIndices(array, middleIndex + 1, end);
    } else if (parseInt(array[middleIndex]) > parseInt(middleIndex)) {
      getMagicIndices(array, start, middleIndex - 1);
    }
  }
  return magicIndices;
}
/* Time complexity Analysis:
    Worst case time complexity remains unchanged: O(n)
    However average case complexity has improved to around O(logN)
*/
