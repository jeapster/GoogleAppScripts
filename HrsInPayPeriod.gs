function calculateHrsInPayPeriod(strPayPeriod) {
  var hrsInPayPeriod = 0;
  var startDate = new Date(strPayPeriod.split(" - ")[0]);
  var endDate = new Date(strPayPeriod.split(" - ")[1]);
  
  var intStartDate = parseInt(startDate.getDate());
  var intEndDate = parseInt(endDate.getDate());

  for(var i=intStartDate; i<=intEndDate; i++) {
    //getDay() returns 0 for Sunday on down to 6 for Saturday
    if(startDate.getDay()!=0 && startDate.getDay()!=6) {
      hrsInPayPeriod += 8;
    }
    startDate.setDate(startDate.getDate() + 1);
    
  }
  return hrsInPayPeriod;
}
