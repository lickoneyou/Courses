const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.iroot = null;
  }

  root(data) {
    return this.iroot
  }

  add(data) {
    let newNode = new Node(data)
   if(!this.iroot){
    this.iroot = newNode
    return;
   }
   let node = this.iroot
   while(node){
    if(newNode.data < node.data){
      if(!node.left){
        node.left = newNode;
        return
      }

      node = node.left;
    }
    else {
        if(!node.right){
          node.right = newNode;
          return
        }
  
        node = node.right;
    }
   }
   }
  
   

  has(data) {

   return a(this.iroot, data)

   function a(node, data){
    if(!node){
      return false
    }

    if(node.data === data) {
      return true
    }

    return data < node.data ? a(node.left, data) :
    a(node.right, data);
   }
  }

  find(data) {
    let node = this.iroot;
    while(node != null){
      if(node.data === data){
        return node
      }
      if(data < node.data){
        node = node.left
      }
      else{
        node = node.right
      }
    }
    return null
  }

  remove(data) {
      let rnode = function(node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
          if (node.left == null && node.right == null) {
            return null;
          }
          if (node.left == null) {
            return node.right;
          }
          if (node.right == null) {
            return node.left;
          }
          let riNode = node.right;
          while (riNode.left !== null) {
            riNode = riNode.left;
          }
          node.data = riNode.data;
          node.right = rnode(node.right, riNode.data);
          return node;
        } else if (data < node.data) {
          node.left = rnode(node.left, data);
          return node;
        } else {
          node.right = rnode(node.right, data);
          return node;
        }
      }
      this.iroot = rnode(this.iroot, data);
    }

  min() {
  let node = this.iroot

  while (node.left) {
    node = node.left
  }
  return node.data
}

  max() {
  let node = this.iroot

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};