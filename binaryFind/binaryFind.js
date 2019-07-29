//二分法查找 数组必须有序且不存在重复

const binaryFind = (arr, target) => {
    if (arr.length === 0) return -1;
    let r = arr.length - 1;
    let l = 0;
    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }
    return -1
}

//二分法查找第一个等于给定值
const binaryFindFirst = (arr, target) => {
    if (arr.length === 0) return -1;
    let r = arr.length - 1;
    let l = 0;
    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (arr[mid] === target) {
            if (arr[mid - 1] < target) return mid;
            r = mid - 1
        } else if (arr[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }
}

//二分法查找最后一个等于给定值
const binaryFindLast = (arr, target) => {
    if (arr.length === 0) return -1;
    let r = arr.length - 1;
    let l = 0;
    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (arr[mid] === target) {
            if (arr[mid + 1] > target) return mid;
            l = mid + 1
        } else if (arr[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }
}

// 查找第一个大于等于给定值的元素
const biaryFindFistBig = (arr, target) => {
    if (arr.length === 0) return -1
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (target <= arr[mid]) {
            if (mid === 0 || arr[mid - 1] < target) return mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return -1
}

// 查找最后一个小于等于给定值的元素
const biaryFindLastSmall = (arr, target) => {
    if (arr.length === 0) return -1
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (target < arr[mid]) {
            r = mid - 1
        } else {
            if (mid === arr.length - 1 || arr[mid + 1] >= target) return mid
            l = mid + 1
        }
    }
    return -1
}

const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(binaryFind(arr, 44))
console.log(binaryFind(arr, 1))
console.log(binaryFind(arr, 102))
console.log(binaryFind(arr, 1111))

const arr1 = [1, 2, 2, 3, 45, 454]
console.log(binaryFindFirst(arr1, 2))
console.log(biaryFindFistBig(arr1, 10))
console.log(biaryFindLastSmall(arr1, 10))