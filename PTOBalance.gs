const PTO_INCREASE = parseFloat(6.666666);

var sheetIndex = new Object();
sheetIndex["Jan1"] = 0;
sheetIndex["Jan16"] = 1;
sheetIndex["Feb1"] = 2;
sheetIndex["Feb16"] = 3;
sheetIndex["Mar1"] = 4;
sheetIndex["Mar16"] = 5;
sheetIndex["Apr1"] = 6;
sheetIndex["Apr16"] = 7;
sheetIndex["May1"] = 8;
sheetIndex["May16"] = 9;
sheetIndex["Jun1"] = 10;
sheetIndex["Jun16"] = 11;
sheetIndex["Jul1"] = 12;
sheetIndex["Jul16"] = 13;
sheetIndex["Aug1"] = 14;
sheetIndex["Aug16"] = 15;
sheetIndex["Sep1"] = 16;
sheetIndex["Sep16"] = 17;
sheetIndex["Oct1"] = 18;
sheetIndex["Oct16"] = 19;
sheetIndex["Nov1"] = 20;
sheetIndex["Nov16"] = 21;
sheetIndex["Dec1"] = 22;
sheetIndex["Dec16"] = 23;

var sheetName = new Array(
  "Jan1",
  "Jan16",
  "Feb1",
  "Feb16",
  "Mar1",
  "Mar16",
  "Apr1",
  "Apr16",
  "May1",
  "May16",
  "Jun1",
  "Jun16",
  "Jul1",
  "Jul16",
  "Aug1",
  "Aug16",
  "Sep1",
  "Sep16",
  "Oct1",
  "Oct16",
  "Nov1",
  "Nov16",
  "Dec1",
  "Dec16"
  );

function calculatePTOBalance() {
  var currentSheetName = activeSheet.getName();
  var currentSheetIndex = parseInt(sheetIndex[currentSheetName]);
  var previousPTOBalance = 0;
  
  var ptoTotalRow = getCellCoordinates(values, "PTO").split(",")[0];
  var ptoTotalColumn = getCellCoordinates(values, "Totals").split(",")[1];
  var ptoTotalHours = parseFloat(getCellValue(values, ptoTotalRow, ptoTotalColumn));
  
  if(currentSheetIndex > 0) {
    try {
      var previousSheet = ss.getSheetByName(sheetName[currentSheetIndex-1]);
      previousPTOBalance = parseFloat(previousSheet.getRange("I10").getValue());
    } catch (e) {
      Logger.log("Could not get previous PTO Balance, setting previousPTOBalance to 0");
      return parseFloat(0 - ptoTotalHours);
    }
  }  
  
  var ptoBalance = (previousPTOBalance + PTO_INCREASE) - ptoTotalHours;
      
  return Math.floor(ptoBalance * 100) / 100;    
}
