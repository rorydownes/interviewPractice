/* Implement BFS and DFS algorithms */

// Depth First Search (Traverse all of a node's children before proceeding onto it's siblings)

// Sample Data

var tree = {
  data: 'K',
  children: [
    {data: 'A', children: [
      {data: 'D', children: []}
    ]},
    {data: 'R', children: [
      {data: 'Z', children: []},
      {data: 'Y', children: []}
    ]}
  ]
}

/* Approach:
  - Visit the current node
   - If the current node has children visit all of it's children
   - If it has no children end this recursive line.
*/

function depthFirstTraversal(tree) {
  var visitedNodes = [];
  search(tree);

  function search(node) {
    if (node == null) return;
    visitedNodes.push(node.data);
    node.visited = true;
    let i;
    for (i in tree.children) {
      if (!node.visited) {
        search(tree.children[i]);
      }
    }
  }

  return visitedNodes;
}

depthFirstTraversal(tree);


// Breath First - Remember to queue node's children,
    then traverse by dequeueing whenever finished


/* Approach:
  - Visit the current node
  - If node has children, queue each child then end recursive call
  - Visit next node in the queue */

  function breadthFirstTraversal(tree) {
    let visitedNodes = [];
    let nodeQueue = [];
    search(tree);

    function search(node) {
      if (node == null || node.visited) return;
      visitedNodes.push(node.data);
      node.visited = true;
      let i;
      for (i in node.children) {
        nodeQueue.push(node.children[i]);
      }
      search(nodeQueue.shift());
    }
  }
