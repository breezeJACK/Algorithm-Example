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
            let currentNode = this.head.next;
            while (currentNode !== null && currentNode.element !== value) {
                currentNode = currentNode.next
            }
            return currentNode === null ? -1 : currentNode
        }
        //通过下标查询
    findByIndex(index) {
            let currentNode = this.head.next;
            for (let i = 0; i < index; i++) {
                if (currentNode.next === null) {
                    return -1
                } else {
                    currentNode = currentNode.next
                }
            }
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
            } else {
                const insertNode = new Node(newElement);
                insertNode.next = currentNode.next;
                currentNode.next = insertNode;
            }

        }
        //查找前一个
    findPrev(item) {
        let currentNode = this.head;
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        if (currentNode === null) {
            console.log("未找到元素")
        } else {
            return currentNode
        }
    }

    // 根据值删除
    remove(item) {
        const prevNode = this.findPrev(item)
        if (prevNode === -1) {
            console.log('未找到元素')
            return
        }
        prevNode.next = prevNode.next.next
    }

    // 遍历显示所有节点
    display() {
        let currentNode = this.head.next // 忽略头指针的值
        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}

// Test
const LList = new LinkedList()
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao') // chen -> curry -> sang -> zhao
console.log('-------------insert item------------')
LList.insert('qian', 'chen') // 首元素后插入
LList.insert('zhou', 'zhao') // 尾元素后插入
LList.display() // chen -> qian -> curry -> sang -> zhao -> zhou
console.log('-------------remove item------------')
LList.remove('curry')
LList.display() // chen -> qian -> sang -> zhao -> zhou
console.log('-------------find by item------------')
LList.findByValue('chen')
console.log('-------------find by index------------')
LList.findByIndex(2)
console.log('-------------与头结点同值元素测试------------')
LList.insert('head', 'sang')
LList.display() // chen -> qian -> sang -> head -> zhao -> zhou
LList.findPrev('head') // sang
LList.remove('head')
LList.display() // chen -> qian -> sang -> zhao -> zhou