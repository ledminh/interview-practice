/** Class representing a Queue.
 * @constructor
 */

class Queue {
  constructor() {
    this._storage = {};
    this._lastIndex = -1;
    this._firstIndex = -1;
  }
  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    if (value !== undefined);

    this._lastIndex++;
    this._storage[this._lastIndex] = value;

    if (this._firstIndex === -1) this._firstIndex = 0;
  }

  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    if (
      this._firstIndex > this._lastIndex ||
      (this._firstIndex === -1 && this._lastIndex === -1)
    )
      return;

    const value = this._storage[this._firstIndex];

    this._storage[this._firstIndex] = undefined;

    this._firstIndex++;

    return value;
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    return this._storage[this._firstIndex];
  }
}

export default Queue;
