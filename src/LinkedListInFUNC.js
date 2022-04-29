import "./styles.css";

function LinkedList() {
  this.head = null;
  this.tail = null;

  this.append = function (value) {
    const newNode = { value: value, next: null };

    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  this.toArray = function () {
    let elements = [];

    let curNode = this.head;

    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  };
}

let LinkedList1 = new LinkedList();

LinkedList1.append(1);
LinkedList1.append(2);
LinkedList1.append(3);
console.log(LinkedList1.toArray());
