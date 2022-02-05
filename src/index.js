
module.exports = function towelSort (matrix) {
  let newArr = [];

  if (!matrix) return newArr;

  matrix.forEach(arr => {
    if (matrix.indexOf(arr)%2){
        arr.reverse();
        for (let i of arr){
        newArr.push(i)
      } 
    } else {
      for (let i of arr){
        newArr.push(i)
      }
      
    }   
  })
  return newArr;
}
