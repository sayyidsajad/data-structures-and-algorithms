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
    let node = new Node(element);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  append(element) {
    let node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return "Invalid Index";
    }
    const node = new Node(element);
    if (index === 0) {
      this.prepend(element);
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
    }
  }

  removeValue(element) {
    if (this.isEmpty()) {
      return -1;
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
    }
    return "Invalid Value";
  }

  searchElem(element) {
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (curr.element === element) {
        return i;
      }
      i++;
      curr = curr.next;
    }
    return -1;
  }

  display() {
    if (!this.isEmpty()) {
      let listValues = "";
      let curr = this.head;
      while (curr) {
        listValues += `${curr.element} `;
        curr = curr.next;
      }
      return listValues;
    }
  }
}

const linked = new LinkedList();
linked.prepend(1);
linked.prepend(2);
linked.prepend(3);
linked.prepend(4);
linked.prepend(5);
linked.removeValue(3);
console.log(linked.display());
