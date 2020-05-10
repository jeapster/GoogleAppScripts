function getCellCoordinates(values, searchValue) {
  for (var i = 0; i < values.length; i++) {    
    for (var j = 0; j < values[i].length; j++) {
      if (values[i][j].valueOf() == searchValue) {
        var row = i;
        var col = j;
        return row+","+col;
      }
    }
  }
  return -1;
}

function getCellValue(values1, rowIndex, columnIndex) {
  return values1[rowIndex][columnIndex];  
}
