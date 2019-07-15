// 使用前后栈实现浏览器前进后退
const Stack = require('./stackBasedLinkedList.js')

class SampleBrowser {
    constructor() {
            this.normalStack = new Stack.CreatedStack();
            this.backStack = new Stack.CreatedStack()
        }
        // 正常浏览页面
    pushNormal(name) {
            this.normalStack.push(name);
            this.backStack.clear();

        }
        //后退
    back() {
            const value = this.normalStack.pop()
            if (value !== -1) {
                this.backStack.push(value)
            } else {
                console.log("无法后退")
            }

        }
        //前进
    front() {
            const value = this.backStack.pop()
            if (value !== -1) {
                this.normalStack.push(value)
            } else {
                console.log('无法前进')
            }
        }
        // 打印栈内数据
    displayAllStack() {
        console.log('---后退页面---')
        this.backStack.display()
        console.log('---浏览页面---')
        this.normalStack.display()
    }
}

// Test
const browser = new SampleBrowser()
browser.pushNormal('www.google.com')
browser.pushNormal('www.baidu.com')
browser.pushNormal('www.github.com')
browser.displayAllStack()
    // 后退
browser.back()
browser.displayAllStack()
console.log("------后退------")
browser.back()
browser.displayAllStack()
console.log("------后退------")
browser.front()
browser.displayAllStack()
console.log("------前进------")
browser.pushNormal('www.new.com')
browser.displayAllStack()