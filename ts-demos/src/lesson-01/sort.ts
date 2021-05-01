function selectSort(array: number[]): number[] {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
}

console.log(selectSort([5, 4, 2, 1, 3]));
