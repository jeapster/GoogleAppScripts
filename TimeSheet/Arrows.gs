function forwardPayPeriod() {  
  var activeSheetIndex = activeSheet.getIndex();  
  ss.setActiveSheet(allSheets[activeSheetIndex]);
  hideInactiveSheets(activeSheetIndex);
  activeSheet = ss.getActiveSheet();
}

function backwardPayPeriod() {  
  var activeSheetIndex = activeSheet.getIndex();  
  ss.setActiveSheet(allSheets[activeSheetIndex - 2]);
  hideInactiveSheets(activeSheetIndex - 2);
  activeSheet = ss.getActiveSheet();
}
