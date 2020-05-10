function calculateOvertime(hrsPayPeriod) {

  var totalHrsRow = getCellCoordinates(values, "Total hrs").split(",")[0];
  var totalHrsColumn = getCellCoordinates(values, "Totals").split(",")[1];
  var ptoTotalRow = getCellCoordinates(values, "PTO").split(",")[0];
  var ptoTotalColumn = getCellCoordinates(values, "Totals").split(",")[1];
  
  var totalHours = parseInt(getCellValue(values, totalHrsRow, totalHrsColumn));
  var ptoTotalHours = parseInt(getCellValue(values, ptoTotalRow, ptoTotalColumn));
  
  if((totalHours-ptoTotalHours) > hrsPayPeriod) {
    return totalHours-ptoTotalHours - hrsPayPeriod
  } else {
    return 0; 
  }
}
