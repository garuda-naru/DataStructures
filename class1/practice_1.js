class Node {
    constructor (value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor (){
        this.head = null
        this.size = 0
    }

    addElement(ele) {
        var node = new Node(ele)
        var curr;
        if(this.head == null){
            this.head = node
        }else{
            curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++;
    }

    insertElement(index,ele){
        if (index < 0 || index > this.size){
            console.log("Enter Valid Index");
        }else {
            var node = new Node(ele)
            var curr,prev
            if(index == 0 ){
                node.next = this.head
                this.head = node
            }else {
                i = 0
                curr = this.head
                while (i < index){
                    i++
                    prev  = curr
                    curr = curr.next
                }
                node.next = curr
                prev.next = node
            }
        }
    }
}