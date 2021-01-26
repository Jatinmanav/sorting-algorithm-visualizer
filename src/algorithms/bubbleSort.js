const bubbleSort = (array) => {
  let count = 0;
  const tempArray = array.slice();
  const result = [];
  for (let i = 0; i < tempArray.length; i += 1) {
    for (let j = 0; j < tempArray.length - 1; j += 1) {
      if (tempArray[j] > tempArray[j + 1]) {
        result.push([j, j + 1, count]);
        count += 1;
        const tempValue = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = tempValue;
      }
    }
  }
  return result;
};

export default bubbleSort;
