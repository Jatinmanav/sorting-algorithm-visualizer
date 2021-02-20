/* eslint-disable no-param-reassign */
const swapValues = (array, i, j) => {
  const tempVal = array[i];
  array[i] = array[j];
  array[j] = tempVal;
};

/* eslint-disable no-param-reassign */
const partition = (array, low, high, result, count) => {
  const pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j += 1) {
    if (array[j] < pivot) {
      i += 1;
      swapValues(array, i, j);
      if (i !== j) result.push([i, j, count.value]);
      if (i !== j) count.value += 1;
    }
  }
  swapValues(array, i + 1, high);
  if (i + 1 !== high) result.push([i + 1, high, count.value]);
  if (i + 1 !== high) count.value += 1;
  return i + 1;
};

const quickSortHelper = (array, low, high, result, count) => {
  if (low < high) {
    const mid = partition(array, low, high, result, count);
    quickSortHelper(array, low, mid - 1, result, count);
    quickSortHelper(array, mid + 1, high, result, count);
  }
};

const quickSort = (array) => {
  const tempArray = array.slice();
  const result = [];
  const count = { value: 0 };
  quickSortHelper(tempArray, 0, array.length - 1, result, count);
  console.log(result);
  return result;
};

export default quickSort;
