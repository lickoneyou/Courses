const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {

    let node = new ListNode(value);

    if (this.head === null) {
      this.head = node;
    } else {

      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;

    }
  }

  dequeue() {

    let currentHead = this.head;
    let newHead = currentHead.next;
    currentHead.next = null;

    this.head = newHead;

    return currentHead.value;
  }
}

module.exports = {
  Queue
};