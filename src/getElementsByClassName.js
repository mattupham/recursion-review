// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //inputs: string className
  //output: array of Nodes

  //node can have multiple classes, so we need to see if node includes classnames
  var results = [];

  var traverseChildNodes = function(node) {
    //does array classList contains classname
    if (node.classList) {
      //if so, add to results
      if (node.classList.contains(className)) {
        results.push(node);
      }
    }
    //does node have children
    //if so, for each node, traverse childNode
    if (node.hasChildNodes()) {
      node.childNodes.forEach(function(childNode) {
        traverseChildNodes(childNode);
      });
    }
  };
  traverseChildNodes(document.body);
  return results;
};

