//快速排序
const quickSort = (arr) => {
        const n = arr.length;
        if (n <= 1) return arr;
        const middle = sliceArr(arr);
        let leftArr = quickSort(arr.slice(0, middle));
        let rightArr = quickSort(arr.slice(middle + 1));
        return leftArr.concat([arr[middle]]).concat(rightArr)
    }
    //随机选取一个元素将数组分成左右两个区间，一边都小于pivot，一边都大于pivot
const sliceArr = (arr) => {
        const n = arr.length;
        const target = Math.floor(Math.random() * n);
        const pivot = arr[target]
        let m = 0;
        swap(arr, target, n - 1)
        for (let i = 0; i < n; i++) {
            if (arr[i] < pivot) {
                swap(arr, m, i);
                m++;
            }
        }
        swap(arr, m, n - 1)
        return m
    }
    //元素交换
const swap = (arr, i, j) => {
    if (i === j) return;
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const arr = [1, 3, 12, 5, 3, 268, 43, 21]

console.log(quickSort(arr))