
class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}
class Tree{
    constructor(){
        this.root=null
    }

    insert(val){
        let node=new Node(val)
        if(!this.root){
            this.root=node
            return this
        }
        let current=this.root
        while(true){
            if(val<current.val){
                if(!current.left){
                    current.left=node
                    return this
                }
                current=current.left
            }else{
                if(!current.right){
                    current.right=node
                    return this
                }
                current=current.right
            }
        }
    }

    inorder(node = this.root, result = []) {
        if (node !== null) {
            this.inorder(node.left, result);
            result.push(node.val);
            this.inorder(node.right, result);
        }
        return result;
    }
}

class List_Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.length=0;
    }
    add(val){
        let node=new List_Node(val);
        if(this.head===null){
            this.head=node
        }else{
            let temp=this.head
            while(temp.next!=null){
                temp=temp.next
            }
            temp.next=node
        }
        this.length++
    }
    printInOrder() {
        let temp = this.head;
        let output = "";
        while (temp !== null) {
            output += temp.val;
            if (temp.next !== null) {
                output += " > ";
            }
            temp = temp.next;
        }
        console.log(output);
    }
   

}


function convertBstToLinkedList(bst){
    let tree=bst.inorder()
    const list=new LinkedList();
    tree.forEach(ele => {
        list.add(ele)
    });
    list.printInOrder()  
}


let bst=new Tree();
bst.insert(6)
bst.insert(2)
bst.insert(8)
bst.insert(1)
bst.insert(4)
bst.insert(7)
bst.insert(9)
bst.insert(3)
bst.insert(5)
convertBstToLinkedList(bst)
