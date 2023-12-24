const LinkedList = require("./linkedListTail");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
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

const queue = new LinkedListQueue();

queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(1);
queue.dequeue();
console.log(queue.size());
console.log(queue.empty());
console.log(queue.print());
