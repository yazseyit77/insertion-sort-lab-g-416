function findMinAndRemove(array){
  let minArr = array[0];
  let minIndex = 0;
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(minArr > array[i]){
      minArr = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1)
  return minArr;
}




function insertionSort(array){
  let newArr;
  let sortedArr = [];
  for(let i = 0; i < array.length; i++){
    newArr = findMinAndRemove(array);
    sortedArr.push(newArr);
  }
  return sortedArr;
}
