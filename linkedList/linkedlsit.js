class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
            this.head = new Node("head")
        }
        //根据值查找位置
    findByValue(value) {
            let currentNode = this.head;
            while (currentNode !== null && currentNode.element !== value) {
                currentNode = currentNode.next
            }
            if(currentNode!==null){
                console.log("位置是:"+currentNode.element)
            }
            return currentNode === null ? -1 : currentNode
        }
        //通过下标查询
    findByIndex(index) {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                if (currentNode.next === null) {
                    return -1
                } else {
                    currentNode = currentNode.next
                }
            }
            // if(currentNode!==null){
            //     console.log(currentNode.element)
            // }
            return currentNode
        }
        // 向链表末尾追加节点
    append(newElement) {
            const newNode = new Node(newElement)
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        //插入到元素后面
    insert(newElement, element) {
            const currentNode = this.findByValue(element);
            if (currentNode === -1) {
                console.log("未找到对象")
                return
            }
            const newNode = new Node(newElement);
            newNode.next = currentNode.next;
            currentNode.next = newNode

        }
        //查找前一个
    findPrev(item) {
        let currentNode = this.head;
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        if (currentNode.next === null) {
            console.log("未找到元素")
        } else {
            console.log("前一个元素:"+currentNode.element)
            return currentNode
        }
    }

    // 根据值删除
    remove(item) {
        const currentNode = this.findByValue(item)
        if (currentNode === -1) {
            console.log('未找到元素')
            return
        }
        const prevNode = this.findPrev(item)
        prevNode.next = currentNode.next
        console.log("删除后一个是:"+currentNode.next.element)
    }

    // 遍历显示所有节点
    display() {
        if(this.checkCircle()){
            return false
        }   
        let currentNode = this.head
        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
    //翻转
    reverseList(){
        const root = new Node("head");
        let currentNode = this.head.next;
        while(currentNode!==null){
            const next = currentNode.next
            currentNode.next = root.next;
            root.next = currentNode
            currentNode = next;
        }
        this.head = root
    }
    //快慢指针法判断链表的环
    checkCircle(){
       let slow = this.head;
       let fast = this.head;
       while(fast!==null&&fast.next!==null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow===fast){
            return true
        }
       }
       return false
    }
//求中间节点
    findMiddleNote(){
       let slow = this.head;
       let fast = this.head;
       while(fast!==null&&fast.next!==null){
           fast = fast.next.next;
           slow = slow.next
       }
       return slow
    }
    //删除倒数第k个节点
    rmKFromEnd(k){
        if(this.checkCircle()) return false;
        this.reverseList();
        const deleteNode = this.findByIndex(k);
        this.remove(deleteNode.element);
        this.reverseList();
    }
}


//合并两个有序链表

const mergeSortedLists = (listA,listB)=>{
   if(!listA){
    return listB
   }
   if(!listB){
       return listA
   }
   let a = listA;
   let b = listB;
   let resultList = undefined;
   if(a.element<b.element){
    resultList = a;
    a = a.next;
   }else{
    resultList = b;
    b = b.next;
   }
   let currentNode = resultList
   while(a!==null&&b!==null){   
    if(a.element<b.element){
        currentNode.next = a;
        a = a.next
    }else{
        currentNode.next =b;
        b = b.next
    }
    currentNode = currentNode.next
   }
   if(a==null){
       currentNode.next =b
   }else{
       currentNode.next =a
   }
   return resultList
}


// Test
// const LList = new LinkedList()
// LList.append('chen')
// LList.append('curry')
// LList.append('sang')
// LList.append('zhao') // chen -> curry -> sang -> zhao
// LList.display()
// console.log('-------------insert item------------')
// LList.insert('qian', 'chen') // 首元素后插入
// LList.insert('zhou', 'zhao') // 尾元素后插入
// LList.display() // chen -> qian -> curry -> sang -> zhao -> zhou
// console.log('-------------remove item------------')
// LList.remove('curry')
// LList.display() // chen -> qian -> sang -> zhao -> zhou
// console.log('-------------find by item------------')
// LList.findByValue('chen')
// console.log('-------------find by index------------')
// LList.findByIndex(2)
// console.log('-------------与头结点同值元素测试------------')
// LList.insert('head', 'sang')
// LList.display() // chen -> qian -> sang -> head -> zhao -> zhou
// LList.findPrev('head') // sang

//test2
const LList = new LinkedList()
LList.insert('chen', 'head')
LList.insert('curry', 'chen')
LList.insert('sang', 'head')
LList.insert('zhao', 'head')
LList.display()
console.log('-------------start reverse------------')
LList.reverseList()
LList.display()
console.log('-------------check circle------------')
console.log(LList.checkCircle())
console.log('-------------remove the one before last ------------')
LList.rmKFromEnd(2)
LList.display()

const sortedList1 = new LinkedList()
sortedList1.insert(9, 'head')
sortedList1.insert(8, 'head')
sortedList1.insert(7, 'head')
sortedList1.insert(6, 'head')
const sortedList2 = new LinkedList()
sortedList2.insert(21, 'head')
sortedList2.insert(20, 'head')
sortedList2.insert(19, 'head')
sortedList2.insert(18, 'head')
console.log('-------------sort two list ------------')
let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next)
while (sortedList !== null) {
    console.log(sortedList.element)
    sortedList = sortedList.next
}
