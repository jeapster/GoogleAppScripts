function calculatePayPeriod(sheet) {
  var startDate = new Date(sheet.getRange("C14").getValue());  
  var payPeriod = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear() + " - ";
  
  if(startDate.getDate() > 1) {    
    payPeriod += (startDate.getMonth() + 1) + 
      "/" + 
      lastDayOfMonth(startDate.getFullYear(), startDate.getMonth() + 1).getDate() + 
      "/" + startDate.getFullYear();    
  } else {    
    payPeriod += (startDate.getMonth() + 1) + 
      "/" + 
      (startDate.getDate() + 14) + 
      "/" + startDate.getFullYear();    
  }
  
  return payPeriod;
}

function lastDayOfMonth(Year, Month) {
  return new Date((new Date(Year, Month, 1)) - 1);
}
