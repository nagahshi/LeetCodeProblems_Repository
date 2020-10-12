class Node {
    constructor (element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    add (element) {
        var node = new Node(element);
        var current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size ++;
    }
}

var ll = new LinkedList();

var mergeTwoLists = function (l1, l2) {
    [...l1, ...l2]
        .map(el => (Number.isInteger(el) ? el : null))
        .filter(el => el !== null)
        .sort()
        .forEach(el => ll.add(el))

    return ll
};
