class Node {
    constructor(ele) {
        this.value = ele
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;

    }

    // add(element) – It adds an element at the end of the list.

    addElement(ele) {
        var node = new Node(ele);
        var current
        if (this.head == null) {
            thiss.head = node
        }
        else{
            
            current = this.head
            while (current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    // insertAt(element, index) – It inserts an element at the given index in a list. 
    insertAtIndex(ele,index){
        if(index < 0 || this.size < index) {
            console.log("Enter Valid Index");
        }
        else{
            var node = new Node(ele)
            var cur,prev
            if(index == 0 ){
                node.next = this.head
                this.head = node
            }else {
                cur = this.head
                it = 0
                while(it < index){
                    it++
                    prev = cur;
                    cur = cur.next
                }
                node.next = cur
                prev.next = node
            }
        }
        this.size++
    }
}

