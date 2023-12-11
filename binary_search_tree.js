class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //   INSERTING A NODE IN BST
  // # start on the root node, check is the value > than root
  //         if val > root node .val
  //   Go to the right, check if there if value, if there is no node,
  //   that is the new home, other wise repeat the process
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        // move to the left
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        // Move to the right
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else {
        return undefined;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // --------------------------------
  // TREE TRAVERSAL
  // --------------------------------
  // 1. Breath First
  // 2. Depth First
  //     - Pre-order
  //     - Post-order
  //     - In-order

  breathFirstSearch() {
    //             10
    //       5             13
    //  2        7     11       16
    const queue = [];
    const data = [];

    queue.push(this.root);

    while (queue.length !== 0) {
      const node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    // VISIT THE NODE AFTER VISITING ALL ITS CHILDREN
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

const BST = new BinarySearchTree();
//             10
//       5             13
//  2        7     11       16

BST.insert(10);
BST.insert(5);
BST.insert(2);
BST.insert(7);
BST.insert(13);
BST.insert(11);
BST.insert(16);

BST.insert(6);

console.log(BST.breathFirstSearch());
console.log(BST.DFSPreOrder());
console.log(BST.DFSPostOrder());
console.log(BST.DFSInOrder());

console.log(BST.find(1));
