//查找第k个大小的数
function kthNum(arr, k) {
    const len = arr.length;
    if (k > len) {
        return -1;
    }
    let p = partition(arr, 0, len - 1);
    while (p + 1 !== k) {
        if (p + 1 > k) {
            p = partition(arr, 0, p - 1);
        } else {
            p = partition(arr, p + 1, len - 1);
        }
    }
    return arr[p];
}

function partition(arr, start, end) {
    let i = start;
    let pivot = arr[end];
    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, end);
    return i;
}

function swap(arr, i, j) {
    if (i === j) return;
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


const arr = [1, 3, 534, 211, 11, 223, 12, 32];
console.log(kthNum(arr, 3))