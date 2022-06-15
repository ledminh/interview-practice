// import LinkedList from "./linkedlist";

// const myList = new LinkedList(1); //initiate?

// myList.insert(2);
// myList.insert(3);
// myList.insert(4);
// myList.insert(5);
// myList.removeTail();

// console.log("------------");
// console.log(myList);
// console.log(myList.contains(3));
// console.log(myList.contains(11));
// console.log(myList.contains(4));
// console.log(myList.contains(22));
// console.log(myList.contains(2));
// console.log(myList.contains(19));
// console.log(myList.contains(1));

import HashTable from "./hashtable";

console.log("====== START ============");
const hTable = new HashTable();

hTable.insert("one", "1");
hTable.insert("two", "2");
hTable.insert("three", "3");
hTable.insert("four", "4");
hTable.insert("five", "5");
hTable.insert("six", "6");
hTable.insert("seven", "7");
hTable.insert("eight", "8");
hTable.insert("nine", "9");
hTable.insert("two", "two");
hTable.insert("three", "three");

console.log(hTable);

console.log(hTable.retrieve("one"));
console.log(hTable.retrieve("two"));
console.log(hTable.retrieve("three"));
console.log(hTable.retrieve("nine"));
console.log(hTable.remove("eleven"));

console.log(hTable.remove("twelve"));
console.log(hTable.remove("nine"));
console.log(hTable.remove("nine"));
console.log(hTable.retrieve("nine"));
