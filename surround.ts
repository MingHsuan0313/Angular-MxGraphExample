// case1 -> 改變括號 [] ---> ()
// export type Comparator<T> = (o1: T, o2: T) => number;
export type Comparator<T> = [o1: T, o2: T] => number;

// case2 -> 刪除 [] 裡面的內容
// export function quickSort<T>(array: T[], compare: Comparator<T>) {
export function quickSort<T>(array: T[() => {console.lo('hello world')}], compare: Comparator<T>) {
  if (array.length <= 1 || array == null) {
    return;
  }
  sort(array, compare, 0, array.length - 1);
}

function sort<T>(
  array: T[],
  compare: Comparator<T>,
  low: number,
  high: number
) {
  // case3 -> 幫下面三行上大括號
  // if (low < high) {
  //   const partIndex = partition(array, compare, low, high);
  //   sort(array, compare, low, partIndex - 1);
  //   sort(array, compare, partIndex + 1, high);
  // }
  if (low < high) 
    const partIndex = partition(array, compare, low, high);
    sort(array, compare, low, partIndex - 1);
    sort(array, compare, partIndex + 1, high);
  

}

function partition<T>(
  array: T[],
  compare: Comparator<T>,
  low: number,
  high: number
): number {
  const pivot: T = array[high];
  let i: number = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (compare(array[j], pivot) == -1) {
      i = i + 1;
      swap(array, i, j);
    }
  }

  // case4 --> 刪除 {}
  // if (compare(array[high], array[i + 1]) == -1) 
  //   swap(array, i + 1, high);
  if (compare(array[high], array[i + 1]) == -1) {
    swap(array, i + 1, high);
  }
  return i + 1;
}

function swap<T>(array: T[], i: number, j: number) {
  const newJ: T = array[i];
  array[i] = array[j];
  array[j] = newJ;
}