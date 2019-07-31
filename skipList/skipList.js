//最大层数
const MAX_LEVEL = 16;
//节点信息
class Node {
    constructor(data = -1, maxLevel = 0, refer = new Array(MAX_LEVEL)) {
        this.data = data;
        this.maxLevel = maxLevel;
        this.refer = refer
    }
}

//跳表

class SkipList {
    constructor() {
            this.head = new Node();
            this.levelCount = 1;
        }
        //插入时为平衡设置的随机数
    randomLevel() {
            let level = 1;
            for (let i = 0; i < MAX_LEVEL; i++) {
                if (Math.random() > 0.5) {
                    level++
                }
            }
            return level
        }
        //查找
    find(value) {
            if (!value) return -1;
            let p = this.head;
            for (let i = this.levelCount - 1; i >= 0; i--) {
                while (p.refer[i] !== undefined && p.refer[i].data < value) {
                    p = p.refer[i]
                }
            }
            if (p.refer[0] !== undefined && p.refer[0].data === value) {
                return p.refer[0];
            }
            return -1;
        }
        //插入方法
    insert(value) {
            if (!value) return -1;
            const level = this.randomLevel();
            const newNode = new Node(value, level);
            const update = new Array(level).fill(new Node());
            //从头遍历递归更新位置
            let p = this.head;
            for (let i = level - 1; i >= 0; i--) {
                while (p.refer[i] !== undefined && p.refer[i].data < value) {
                    p = p.refer[i];
                }
                update[i] = p;
            }
            //更新操作
            for (let i = level - 1; i >= 0; i--) {
                newNode.refer[i] = update[i].refer[i];
                update[i].refer[i] = newNode
            }
            if (this.levelCount < level) {
                this.levelCount = level;
            }
        }
        //删除方法
    remove(value) {
            let _node;
            let p = this.head;
            const update = new Array(new Node());
            for (let i = this.levelCount - 1; i >= 0; i--) {
                while (p.refer[i] !== undefined && p.refer[i].data < value) {
                    p = p.refer[i];
                }
                update[i] = p;
            }

            if (p.refer[0] !== undefined && p.refer[0].data === value) {
                _node = p.refer[0];
                for (let i = 0; i <= this.levelCount - 1; i++) {
                    if (update[i].refer[i] !== undefined && update[i].refer[i].data === value) {
                        update[i].refer[i] = update[i].refer[i].refer[i];
                    }
                }
                return _node;
            }
            return -1;
        }
        // 打印跳表里面的所有数据
    printAll() {
        let p = this.head;
        while (p.refer[5] !== undefined) {
            console.log(p.refer[5])
            p = p.refer[5];
        }
    }
}

test();

function test() {
    let list = new SkipList();
    let length = 20000;
    //顺序插入
    for (let i = 1; i <= 10; i++) {
        list.insert(i);
    }
    //输出一次
    list.printAll();
    // console.time('create length-10')
    //     //插入剩下的
    // for (let i = 11; i <= length - 10; i++) {
    //     list.insert(i);
    // }
    // console.timeEnd('create length-10')
    //     //搜索 10次
    // for (let j = 0; j < 10; j++) {
    //     let key = Math.floor(Math.random() * length + 1);
    //     console.log(key, list.find(key))
    // }
    // //搜索不存在的值
    // console.log('null:', list.find(length + 1));
    // //搜索5000次统计时间
    // console.time('search 5000');
    // for (let j = 0; j < 5000; j++) {
    //     let key = Math.floor(Math.random() * length + 1);
    // }
    // console.timeEnd('search 5000');
    // console.log("------------------------------")
}