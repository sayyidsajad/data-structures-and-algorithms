class Stack {
  constructor() {
    this.items = [];
    this.anotherArr = [];
    this.thirdArr = [];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(value) {
    this.items.push(value);
  }

  middle() {
    return Math.floor(this.items.length / 2);
  }
  middleEven() {
    if (this.items[this.items.length - 1] % 2 === 0) {
      this.anotherArr.push(this.items.pop());
    } else {
      this.thirdArr.push(this.items.pop());
    }
    if (this.isEmpty()) {
      this.items.push(this.thirdArr);
      return this.anotherArr;
    }
    return this.middleEven();
  }

  display() {
    console.log(this.items);
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.display();
console.log(stack.middleEven());
stack.display();
