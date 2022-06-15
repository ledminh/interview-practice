/** Class representing a Hash Table */

class HashTable {
  constructor() {
    this._storage = [];
    this._storageCapacity = 3;
    this._size = 0;
  }
  /*
   * Inserts a new key-value pair
   * @param {string} key - the key associated with the value
   * @param {*} value - the value to insert
   */
  insert(key, value) {
    let pos = this._hash(key, this._storageCapacity);

    if (this._storage[pos] === undefined) {
      this._storage[pos] = [];
    }

    let index = -1;

    for (let i = 0; i < this._storage[pos].length; i++) {
      if (this._storage[pos][i][0] === key) {
        index = i;
      }
    }

    if (index === -1) this._storage[pos].push([key, value]);
    else {
      this._storage[pos][index][1] = value;
    }

    this._size++;

    if (this._size > this._storageCapacity) {
      this._rehash();
    }
  }

  _rehash() {
    const flattenStorage = this._flattenStorage();

    this._storage = [];

    this._storageCapacity *= 2;

    for (let i = 0; i < flattenStorage.length; i++) {
      this.insert(flattenStorage[i][0], flattenStorage[i][1]);
    }
  }

  _flattenStorage() {
    const arr = [];

    for (let i = 0; i < this._storage.length; i++) {
      if (this._storage[i]) {
        for (let j = 0; j < this._storage[i].length; j++) {
          arr.push(this._storage[i][j]);
        }
      }
    }

    return arr;
  }

  /*
   * Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   */
  remove(key) {
    let pos = this._hash(key, this._storageCapacity);

    if (this._storage[pos] === undefined) return null;

    let index = -1;
    for (let i = 0; i < this._storage[pos].length; i++) {
      if (this._storage[pos][i][0] === key) index = i;
    }

    if (index !== -1) {
      const val = this._storage[pos][index][1];
      this._storage[pos].splice(index, 1);

      this._size--;
      return val;
    }

    return undefined;
  }
  /*
   * Returns the value associated with a key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   */
  retrieve(key) {
    let pos = this._hash(key, this._storageCapacity);

    if (this._storage[pos] === undefined) return undefined;

    let index = -1;
    for (let i = 0; i < this._storage[pos].length; i++) {
      if (this._storage[pos][i][0] === key) index = i;
    }

    if (index !== -1) {
      return this._storage[pos][index][1];
    }

    return undefined;
  }
  /*
   * Hashes string value into an integer that can be mapped to an array index
   * @param {string} str - the string to be hashed
   * @param {number} n - the size of the storage array
   * @return {number} - an integer between 0 and n
   */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

export default HashTable;
