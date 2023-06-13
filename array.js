//Polyfills for map reduce and filter

var map = function (arr, fn) {
  // const newArr =[];
  // for(let i=0;i<arr.length;i++){
  //   newArr[i]= fn(arr[i],i)
  // }
  // return newArr;

  // const newArr = new Array(arr.length)
  // for(const i in arr){
  //   newArr[i]= fn(arr[i],Number(i))
  // }
  // return newArr;

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i))
  }
  return newArr;
}