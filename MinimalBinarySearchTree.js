// Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height

/*
Theory recall:
  Binary Search Tree is a tree where each node has at most 2 children, where for each node the left child is of lesser value than the right

  Question: What constraints do we need to impose to achieve minimal height for a binary search tree?
  Maybe root element must be the median of the array so that we have an equal number of nodes on left and right.

Note: all integer elements in the problem are unique therefore nodes with equal values are irrelevant.
*/

// Sample Data

var sortedArray = [1, 7, 9, 156, 208, 500, 900];

// Pseudocode based on sample data

/*
  Note to self: Root of the tree should be 156 so we have equal number of nodes on left and right

  Find middle element of array and remember this as desired root
  Pattern for insertion is for groups of elements in groups of 3, the 1st element is the left child of the 2nd, the 3rd element is the right child of the 2nd
  Increment by 2 where the first element is the new parent and the previous parent is now the left child

  Repeat until at root node then reverse pattern:

  current parent's right node is the next element

  Solution seems very convoluted. There must be a better approach.

  Questions:
  Can we create a perfectly balanced binary search tree during insertion?
  What if we created a tree that obeyed binary search tree rules and optimized the height after by rotating and rebalancing?

  Computationally it would be O(n) to traverse every element in the sorted array
  If we can insert in minimal height our total runtime = O(n)

  If we can make a minimal height tree while only traversing each node once we'd still just be O(2n) = O(n)
  Doesn't seem possible to make a minimal height tree while traversing each node once.

  Going back to the original pattern...

  Each time the parent node is the 2nd element, with the left being the 1st and the right being the 3rd element
  Smells like a recursive call, starting at the middle of the array,
    the left child of 156 is the middle of the subarray(1, 7, 9)
    the right child of 156 is the middle of the subarray(208, 500, 900)

  For node 7
    left child = middle of subarray (1)
    right child = middle of subarray (9)

  For node 500
    left child = middle of subarray(208)
    right child = middle of subarray(900)

 */

 // Implementation

/*
Need a start and end value to determine subarray
*/

var sortedArray = [1, 7, 9, 156, 208, 500, 900];
var root = middleOfArray(sortedArray, 0, 6);

 function middleOfArray(array, start, end) {
   if (start < end) {
    var mid = (start + end) / 2;
    return {
      value: array[mid],
      left: middleOfArray(array, 0, mid - 1),
      right: middleOfArray(array, mid + 1, end )
    };
   } else {
    return null; //Can't be the middle of nothing
   }
 }

 console.log(root);

 // I'm now over the practice time limit of 15 mins per question, but it looks close to the solution.
 // Will debug this in the future..
