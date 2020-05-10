function calculateHolidayBalance() {
  var holidaySheet = ss.getSheetByName("Holidays");
  var holidays = holidaySheet.getRange(1,1,10).getValues();

  var payPeriodCoord = getCellCoordinates(values, "Pay period");
  var rowPP = parseInt(payPeriodCoord.split(",")[0])+1;
  var colPP = parseInt(payPeriodCoord.split(",")[1]);

  var payPeriod = getCellValue(values, rowPP, colPP);
  var startDate = new Date(payPeriod.split(" - ")[0]);
  var endDate = new Date(payPeriod.split(" - ")[1]);
  var holidayHrs = 0;

  for (var j = 0; j < holidays.length; j++) {    
    var holiday = new Date(holidays[j].valueOf());    
    if(holiday >= startDate && holiday <= endDate) {
      holidayHrs += 8;
    }
  }
  
  var holidayTotalRow = getCellCoordinates(values, "Holiday").split(",")[0];
  var holidayTotalColumn = getCellCoordinates(values, "Totals").split(",")[1];
  var holidayTotalHours = parseInt(getCellValue(values, holidayTotalRow, holidayTotalColumn));  
  
  return parseInt(holidayHrs) - holidayTotalHours;
}
