class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
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

  prepend(value) {
    let node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  swap() {
    if (!this.isEmpty()) {
      let curr = this.head;
      while (curr.next !== null) {
        let value = curr.value;
        curr.value = curr.next.value;
        curr.next.value = value;
        curr = curr.next.next;
      }
    }
  }

  palindrome() {
    if (!this.isEmpty()) {
      let curr = this.head;
      let mid = Math.floor(this.size / 2);
      let arr = [];
      for (let i = 0; i < mid; i++) {
        arr.push(curr.value);
        curr = curr.next;
      }
      if (this.size % 2 !== 0) {
        curr = curr.next;
      }
      for (let i = arr.length - 1; i >= 0; i--) {
        if (curr.value !== arr[i]) {
          return false;
        }
        curr = curr.next;
      }
      return true;
    }
  }

  display() {
    if (this.isEmpty()) {
      return this.isEmpty();
    }
    let curr = this.head;
    let listValues = "";
    while (curr !== null) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    return listValues;
  }
}

let link = new linkedList();
link.prepend(1);
link.prepend(2);
link.prepend(1);
console.log(link.display());
console.log(link.palindrome());
console.log(link.display());
