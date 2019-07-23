//合并排序
const mergeSort = (arr) => {
    const n = arr.length;
    if (n <= 1) return arr;
    const q = Math.floor(n / 2)
    const leftArr = arr.slice(0, q);
    const rightArr = arr.slice(q)
    return mergeArr(mergeSort(leftArr), mergeSort(rightArr))
}

//合并2个有序数组
const mergeArr = (left, right) => {
    let temp = []
    let leftIndex = 0
    let rightIndex = 0
        // 判断2个数组中元素大小，依次插入数组
    while (left.length > leftIndex && right.length > rightIndex) {
        if (left[leftIndex] <= right[rightIndex]) {
            temp.push(left[leftIndex])
            leftIndex++
        } else {
            temp.push(right[rightIndex])
            rightIndex++
        }
    }
    // 合并 多余数组
    return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

const res = mergeSort(testArr)
console.log(res)