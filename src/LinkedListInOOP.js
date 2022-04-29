class LinkedList {
  consturctor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  toArray() {
    const elements = [];

    let curNode = this.head;

    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }

  find(value) {
    if (!this.head) {
      return;
    }

    let curNode = this.head;

    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
  }

  inserAfter(value) {
    let curNode = this.head;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(2);
LinkedList1.append(3);
LinkedList1.append(4);
LinkedList1.append(5);
LinkedList1.prepend(1);
console.log(LinkedList1.toArray());
console.log(LinkedList1.find(4));

LinkedList1.delete(4);

console.log(LinkedList1.toArray());
