class Node {
    constructor(value) {
        this.value = value;
        this.next = value;
    }
}

class LinkeList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){          
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
}

const list = new LinkeList();
console.log(list.isEmpty())
console.log(list.getSize())