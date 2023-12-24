class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(element) {
    const node = new Node(element);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  append(element) {
    const node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(element, index) {
    if (index < 0 || index > this.size) {
      return "Invalid Index";
    }
    if (index === 0) {
      this.prepend(element);
    } else {
      const node = new Node(element);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return "Invalid Index Value";
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.element;
  }

  removeValue(element) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.element === element) {
      this.head = this.head.next;
      this.size--;
      return element;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.element !== element) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return element;
      }
      return console.log("Invalid Value");
    }
  }

  searchElem(element) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.element === element) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let curr = this.head;
      let listElems = "";
      while (curr) {
        listElems += `${curr.element} `;
        curr = curr.next;
      }
      console.log(listElems);
    }
  }
}
const list = new LinkedList();
list.prepend(5);
list.prepend(1);
list.prepend(8);
list.prepend(3);
list.prepend(1);
list.prepend(8);
list.print()
list.reverse()
list.print()