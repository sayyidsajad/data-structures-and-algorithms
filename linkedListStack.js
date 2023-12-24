const LinkedList = require("./linkedListTail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  size() {
    return this.list.getSize();
  }

  empty() {
    return this.list.isEmpty();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();

stack.push(5);
stack.push(7);
stack.push(1);

console.log(stack.size());
console.log(stack.empty());
console.log(stack.print());
