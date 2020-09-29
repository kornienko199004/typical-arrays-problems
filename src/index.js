const sorter = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  return array.splice(0).sort(sorter)[0];
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  return array.splice(0).sort(sorter).splice(-1)[0];
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  return array.reduce((acc, item) => acc + item, 0) / array.length;
}
