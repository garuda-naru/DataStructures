class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size == 0;
    }

    addElement(element) {
        var node = new Node(element);
        var current;

        if(this.head == null){
            this.head = node
        }else {
            current = this.head

            while (current.next) {
                current = current.next
            }
            current.next=node
        }
        this.size++
    }

    insertAT(ele,index){
        if(index < 0 || index > this.size) {
            return console.log("Invalid Index");
        }
        else {
            var node = new Node(ele)
            var curr , prev;

            curr = this.head

            if(index == 0){
                node.next = this.head;
                this.head=node
            }else {
                curr = this.head
                var it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
}