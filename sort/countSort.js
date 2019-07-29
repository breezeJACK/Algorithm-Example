//计数算法 特殊的算法
const countSort = (arr) => {
    if (arr.length <= 1) return;
    let countArr = [];
    let newArr = [];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = max < arr[i] ? arr[i] : max
    }
    //初始化数组
    for (let i = 0; i < max + 1; i++) {
        countArr[i] = 0
    }
    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]] += 1
    }
    for (let i = 1; i < max + 1; i++) {
        countArr[i] += countArr[i - 1]
    }
    //核心代码
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[countArr[arr[i]] - 1] = arr[i];
        // console.log(newArr, countArr)
        countArr[arr[i]] -= 1;
    }
    // console.log(countArr, newArr)
    return newArr
}

//查找数组中某个数的个数
const arr = [1, 10, 4, 2, 4, 5, 7, 8, 3, 2, 6, 9, 9]

console.log(countSort(arr))