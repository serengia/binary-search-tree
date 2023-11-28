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
        // Move right
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

console.log(JSON.stringify(BST));
