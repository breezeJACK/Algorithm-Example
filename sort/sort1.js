//冒泡排序
const bubbleSort = (arr) => {
    const n = arr.length;
    if (n <= 1) return
    for (let i = 0; i < n; i++) {
        //做优化，若是后面都不改变，则证明已经有序
        let hasChange = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp
                hasChange = true;
            }
        }
        if (!hasChange) break
    }
    console.log("修改后的为：" + arr)
}

//插入排序
const insertionSort = (arr) => {
    const n = arr.length
    if (arr.length <= 1) return
    for (let i = 1; i < n; i++) {
        const temp = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (temp < arr[j]) {
                arr[j + 1] = arr[j]
                arr[j] = temp
            } else { break }
        }
    }
    console.log("修改后的为：" + arr)
}


// 选择排序
const selectionSort = (arr) => {
    if (arr.length <= 1) return
        // 需要注意这里的边界, 因为需要在内层进行 i+1后的循环，所以外层需要 数组长度-1
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j // 找到整个数组的最小值
            }
        }
        const temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.log("修改后的为：" + arr)
}

//希尔算法
const shellSort = (arr) => {
    const n = arr.length;
    if (n <= 1) return;
    for (let gap = Math.floor(n / 2); gap >= 1; gap = Math.floor(gap / 2)) {
        //分成gap个组
        for (let i = 1; i <= gap; i++) {
            console.log(gap)
                //对数组进行处理，采用插入排序y
            for (let j = i + gap; j < n; j += gap) {
                let temp = arr[j];
                for (let k = j - gap; k >= 0; k -= gap) {
                    if (temp < arr[k]) {
                        arr[k + gap] = arr[k];
                        arr[k] = temp
                    } else { break }
                }

            }
        }
    }
    console.log("修改后的为：" + arr)
}

const test = [4, 5, 6, 3, 2, 1]
bubbleSort(test)
const testSort = [4, 1, 6, 3, 2, 1]
insertionSort(testSort)
const testSelect = [4, 8, 6, 3, 2, 1, 0, 12]
selectionSort(testSelect)
const shellArr = [1, 23, 245, 11, 1223, 213, 2321, 1, 3434]
shellSort(shellArr)