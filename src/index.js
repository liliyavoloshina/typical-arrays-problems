exports.min = function min(array) {
  console.log(array)
  if (array.length > 0 && arguments != undefined) {
    console.log(Math.max(...array) ) 
    return Math.min(...array) 
  } else {
    console.log(0)
    return 0
  }
}

exports.max = function max(array) {
  if (array.length > 0 && arguments != undefined) {
   console.log(Math.max(...array) ) 
    return Math.max(...array) 
  } else {
    console.log(0)
    return 0
  }
}

exports.avg = function avg(array) {
  if (array.length > 0 && arguments != undefined) {
    const sum = array.reduce((sum, current) => sum + current, 0)
    let avg = sum / array.length
    return avg
  } else {
    console.log(0)
    return 0
  }
}
