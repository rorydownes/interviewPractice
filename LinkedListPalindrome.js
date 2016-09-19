/* Implement a function to check if a linked list is a palindrome */

// Define Sample data

var sampleLinkedList = {
  "head":{
    "data":"R","next":{
      "data":"A","next":{
        "data":"T","next":{
          "data":"Y","next":{
            "data":"T","next":{
              "data":"A","next":{
                "data":"R","next":null
              }
            }
          }
        }
      }
    }
  }
}

/* Approach:

  At best every node in the linked list must be traversed at least once to test for palindrome
  So I target O(n) run time for solution.]

  Solution:
    - Traverse the list and store nodes in hash table with a number of occurrences,
     if more than one unique node has a number of occurrences not divisible by 2 it is not a palindrome
*/

// Implementation

function isPalindrome(LinkedList) {
  if (LinkedList.head != null) {
    var currentNode = LinkedList.head;
    var uniqueNodes = {};

    while (currentNode.next != null) {
      if (uniqueNodes[currentNode.data] != undefined) {
        uniqueNodes[currentNode.data]++;
      } else {
       uniqueNodes[currentNode.data] = 1;
      }
      currentNode = currentNode.next;
    }
    var oddFrequencies = [];

    for (var i in uniqueNodes) {
       if (uniqueNodes[i] % 2 != 0) {
          oddFrequencies.push(i);
       }
    }

    return (oddFrequencies.length <= 1);
  }
  return FALSE;
}

// On testing this algorithm I noticed an error, the while loop is while currentNode.next != null,
// therefore the last node would never be added to the hash table.
// Bug fixed below.


function isPalindrome(LinkedList) {
  if (LinkedList.head != null) {
    var currentNode = LinkedList.head;
    var uniqueNodes = {};

    while (currentNode) {
      if (uniqueNodes[currentNode.data] != undefined) {
        uniqueNodes[currentNode.data]++;
      } else {
       uniqueNodes[currentNode.data] = 1;
      }
      currentNode = currentNode.next;
    }
    var oddFrequencies = [];

    for (var i in uniqueNodes) {
       if (uniqueNodes[i] % 2 != 0) {
          oddFrequencies.push(i);
       }
    }

    return (oddFrequencies.length <= 1);
  }
  return FALSE;
}
