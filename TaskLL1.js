class Node {
    constructor (element) {
        this.element = element; //Value 
        this.next = element // pointer
    }
}

class Linkedlist { //linkedlist class
    constructor() { //linkedlist constructer
        this.head = null; // linkedlist first value or stored value
        this.size = 0; //linkedlist size
    }

    //add function to add element to linkedlist
    add(element) { 
        var node = new Node(element);//creating new instance of node
        var current
    
        if (this.head == null){ //check the condition if linkedlist empty or not
            this.head = head
        }else {
            current = this.head
    
            while(current.next) {
                current = current.next
            }
        
            current.next = node
        }
    
    
        this.size++;
    }
}       

