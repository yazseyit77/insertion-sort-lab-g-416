function findMinAndRemove(array){
  let minArr = array[0];
  let minIndex = 0;
  for(let i = 0; i < array.length; i++){
    if(minArr > array[i]){
      minArr = array[i];
      minIndex = i;
    }
    return minArr;
  }
}

function insertionSort(array){

}
