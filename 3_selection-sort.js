const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32]
let count = 0;

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            count++
        }
        const tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp;
    }
    return arr;
}

console.log(selectionSort(arr))
console.log('count = ', count)