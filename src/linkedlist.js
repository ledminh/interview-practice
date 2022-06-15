/** Class representing a Linked List */

class LinkedList {
  constructor(value) {
    this._head = { value: value, next: null };
    this._tail = this._head;
  }
  /*
   * Inserts a new value to the end of the linked list
   * @param {*} value - the value to insert
   */
  insert(value) {
    const tail = this._tail;
    tail.next = { value: value, next: null };
    this._tail = tail.next;
  }
  /*
   * Deletes a node
   * @param {*} node - the node to remove
   * @return {*} value - the deleted node's value
   */
  remove(node) {
    if (node === this._tail) return this._removeTail();

    let prevNode = this._head,
      currNode = prevNode.next;

    while (currNode !== node && currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === node) {
      prevNode.next = currNode.next;

      return node.value;
    }

    return null;
  }
  /*
   * Removes the value at the end of the linked list
   * @return {*} - the removed value
   */
  // {
  //   head: {value: 1, next: {value: 2, next: null}}
  //   tail: {value: 2, next: null}
  // }
  removeTail() {
    if (this._head === null) return;

    if (this._head.next === null) {
      const val = this._head.value;

      this._head = null;
      this._tail = null;

      return val;
    }

    let prevNode = this._head,
      currNode = prevNode.next;

    while (currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = null;

    this._tail = prevNode;

    return currNode.value;
  }
  /*
   * Searches the linked list and returns true if it contains the value passed
   * @param {*} value - the value to search for
   * @return {boolean} - true if value is found, otherwise false
   */
  contains(value) {
    let currNode = this._head;

    while (currNode !== null) {
      if (currNode.value === value) return true;

      currNode = currNode.next;
    }

    return false;
  }
  /*
   * Checks if a node is the head of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the head, otherwise false
   */
  isHead(node) {
    return node === this._head;
  }
  /*
   * Checks if a node is the tail of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the tail, otherwise false
   */
  isTail(node) {
    return node === this._tail;
  }
}

export default LinkedList;
