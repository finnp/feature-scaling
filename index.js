function minmax(data) {
  var min = {}
  var max = {}
  data.forEach(function (row) {
    for(col in row) {
      var number = Number(row[col])
      if(isNaN(number)) continue
      if(number > max[col] || !(col in max)) max[col] = number
      if(number < min[col] || !(col in min)) min[col] = number
    }
  })
  return {
    min: min,
    max: max
  }
}

// takes data array
function normalize(data) {
  var m = minmax(data)
  data.forEach(function (row) {
    for(col in row) {
      var number = Number(row[col])
      if(isNaN(number)) continue
      var div = m.max[col] - m.min[col] || 1 // can not be 0
      row[col] = (row[col] - m.min[col]) / div
    }
  })
  return data
}

module.exports = normalize