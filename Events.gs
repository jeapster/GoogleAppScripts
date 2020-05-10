var ss = SpreadsheetApp.getActiveSpreadsheet();
var allSheets = ss.getSheets();
var activeSheet = ss.getActiveSheet();
var values = activeSheet.getDataRange().getValues();

function onEdit(e) {
  // (Re)calculate overtime on all edits
  var coordinatesHrsPayPeriod = getCellCoordinates(values, "Hrs. in pay period");
  var rowHrsPayPeriod = parseInt(coordinatesHrsPayPeriod.split(",")[0]);
  var colHrsPayPeriod = parseInt(coordinatesHrsPayPeriod.split(",")[1]);
  var hrsPayPeriod = parseInt(getCellValue(values, rowHrsPayPeriod + 1, colHrsPayPeriod));   

  activeSheet.getRange("G10").setValue(calculateOvertime(hrsPayPeriod));
  
  var ptoRow = parseInt(getCellCoordinates(values, "PTO").split(",")[0]);
  var holidayRow = parseInt(getCellCoordinates(values, "Holiday").split(",")[0]); 

  // (Re)calculate PTO if row is edited
  if(e.range.getRow() == ++ptoRow) {
    activeSheet.getRange("I10").setValue(calculatePTOBalance());
  } 
  // (Re)calculate Holiday if row is edited
  else if (e.range.getRow() == ++holidayRow) {
    activeSheet.getRange("K10").setValue(calculateHolidayBalance());
  }

}


function onOpen(e) {
  // Calculate pay period hours only on opening spreadsheet  
  for (var i = 0; i < allSheets.length; i++) {
    var strPayPeriod = calculatePayPeriod(allSheets[i]);
    var hrsPayPeriod = calculateHrsInPayPeriod(strPayPeriod);
    
    allSheets[i].getRange("D10").setValue(strPayPeriod);
    allSheets[i].getRange("M10").setValue(hrsPayPeriod);
  }  
}
