/*
Imagine when the node is instantiated, it will contain the value and the instance of the next node in the linked list:

const linkedList = { 
    head: {
        value: 5, 
        next: { 
            value: 0, 
            next: { 
                value: 1, 
                next:null 
            } 
        } 
    }   
}   

First part of this challenge is:
1. Create a Node and LinkedList class
2. Create 2 methods, prepend and append
3. Write a printlist method that doesn't use to toString method
4. Stretch goal - create a method that deletes a node with a specific value
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  append(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  printlist() {
    let output = `${this.head.value}`;
    let currNext = this.head.next;
    while (currNext !== null) {
      output += currNext.value;
      currNext = currNext.next;
    }
    console.log(output);
  }

  transformInt() {
    let output = `${this.head.value}`;
    let currNext = this.head.next;
    while (currNext !== null) {
      output += currNext.value;
      currNext = currNext.next;
    }
    return output;
  }

  delete(val) {
    let current = this.head;
    let prev = null;

    while (val != current.value) {
      prev = current;
      current = current.next;
    }
    if (prev === null) {
      this.head = current.next;
    } else {
      prev.next = current.next;
    }
    this.size--;
  }
}

const l0 = new LinkedList();
l0.append(7);
l0.append(4);
l0.append(5);
l0.delete(7); // delete the head, the hardest case
l0.printlist(); // 4 -> 5

const l1 = new LinkedList();

l1.prepend(3);
l1.prepend(4);
l1.prepend(2);

// l1.printlist();

const l2 = new LinkedList();

l2.append(5);
l2.append(6);
l2.append(7);

//l2.printlist();

const l3 = new LinkedList();

l3.prepend(1);
l3.prepend(0);
l3.prepend(5);

// l1.printlist();

const l4 = new LinkedList();

l4.append(7);
l4.append(8);
l4.append(5);

/*
You are given two linked-lists representing two non-negative integers in reverse order.
Each node contains a single digit. 
Return the sum of the integers as a linked list. 
*/

// initial approach

var addTwoNumbers = function (l1, l2) {
  function reverseNum(str) {
    return Number(str.split("").reverse().join(""));
  }
  let rawNum1 = reverseNum(l1.transformInt());
  let rawNum2 = reverseNum(l2.transformInt());
  let output = rawNum1 + rawNum2;

  const l3 = new LinkedList();
  output
    .toString()
    .split("")
    .forEach((num) => {
      l3.append(num);
    });

  return l3;
};

console.log(addTwoNumbers(l1, l2)); // 342 + 765 = 1107
console.log(addTwoNumbers(l3, l4)); // 105 + 587 = 692

// second solution

var addTwoNumbers2 = function (l1, l2) {
  let sum = 0;
  const l3 = new LinkedList();
  l1 = l1.head;
  l2 = l2.head;

  while (l1 || l2) {
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }

    result = sum % 10; // get last digit if double digit
    sum = sum > 9 ? 1 : 0; // handle carry over
    l3.append(result); // set the result
  }

  if (sum > 0) {
    l3.append(sum);
  }
  l3.printlist();
  return l3;
};

console.log(addTwoNumbers2(l1, l2)); // 342 + 765 = 1107
console.log(addTwoNumbers2(l3, l4)); // 105 + 587 = 692
