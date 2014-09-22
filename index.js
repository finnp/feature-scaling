function minmax(data) {
  var min = {}
  var max = {}
  data.forEach(function (row) {
    for(col in row) {
      if(row[col] > max[col] || !(col in max)) max[col] = row[col]
      if(row[col] < min[col] || !(col in min)) min[col] = row[col]
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
      var div = m.max[col] - m.min[col] || 1 // can not be 0
      row[col] = (row[col] - m.min[col]) / div
    }
  })
  return data
}

module.exports = normalize