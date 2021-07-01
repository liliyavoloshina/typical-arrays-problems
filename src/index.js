exports.min = function min(array) {
  if (min.arguments.length > 0) {
    if (array.length > 0) {
      return Math.min(...array)
    } else {
      return 0
    }
  } else {
    return 0
  }
}

exports.max = function max(array) {
  if (max.arguments.length > 0) {
    if (array.length > 0) {
      return Math.max(...array)
    } else {
      return 0
    }
  } else {
    return 0
  }
}

exports.avg = function avg(array) {
  if (avg.arguments.length > 0) {
    if (array.length > 0) {
      const sum = array.reduce((sum, current) => sum + current, 0)
      let avg = sum / array.length
      return avg
    } else {
      return 0
    }
  } else {
    return 0
  }
}
