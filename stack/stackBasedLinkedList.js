//基于链表实现的栈

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class StackBasedLinkedList {
    constructor() {
        this.top = null
    }
    push(value) {
        const node = new Node(value);
        if (this.top === null) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node;
        }
    }
    pop() {
        if (this.top == null) {
            return -1
        }
        const value = this.top.element;
        this.top = this.top.next;
        return value
    }
    clear() {
        this.top = null
    }

    display() {
        let currentNode = this.top
        if (currentNode === null) {
            return -1
        }
        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}


// const newStack = new StackBasedLinkedList()
// newStack.push(1)
// newStack.push(2)
// newStack.push(3)
//     // 获取元素
// let res = 0
// console.log('-------获取pop元素------')
// while (res !== -1) {
//     res = newStack.pop()
//     console.log(res)
// }

exports.CreatedStack = StackBasedLinkedList