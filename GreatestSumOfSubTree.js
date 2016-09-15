// Given a tree (n-ary not binary) of n elements, where nodes can have positive or negative values, find the node with the greatest sum,
// where the sum of the node is it's value + the value of it's subtree.

/*
My approach:
Split the problem into 2 smaller problems.
1. Traverse the tree to find the sum for each node.
2. Determine the greatest sum.
*/

// Define sample data:


var tree = [
  {
    value: 5, children: [
        {value: 7, children: [
          {value: 27, children: []},
          {value: -59, children: []}
        ]}, {value: -10, children: []}
    ]
  }
];

// Pseudocode solution:

/*
  Sum = node's value
  Find the sum of all of node's children (recurse through their children)
  Compare the sum with
*/

// Implementation

function sumSubtree(node) {
  node.sum = node.value;

  for (var i in node.children) {
    node.sum += sumSubtree(node.children[i]);
  }
  if (node.sum > largestNode.sum) {
    largestNode = node;
  }
  return node.sum;
}

var largestNode = {sum: -Number.MAX_VALUE};
sumSubtree(tree[0]);

console.log(tree, largestNode);
