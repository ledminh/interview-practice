/** Class representing a Stack. */

class Stack {
  constructor() {
    this._storage = {};
    this._lastIndex = -1;
  }
  /*
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    if (value === undefined) return;

    this._lastIndex++;
    this._storage[this._lastIndex] = value;
  }

  /*
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    if (this._lastIndex === -1) return;
    const val = this._storage[this._lastIndex];
    delete this._storage[this._lastIndex];
    this._lastIndex--;
    return val;
  }
  /*
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    return this.storage[this._lastIndex];
  }
}

const myStack = new Stack();

console.log(myStack);
