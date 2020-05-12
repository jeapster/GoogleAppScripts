function sendEmailTimesheetToPdf(){ // this is the function to call
  var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var shName = sh.getName();
  var memberName = sh.getRange("B10").getValue();
  var payPeriod = sh.getRange("D10").getValue();

  sendSpreadsheetToPdf(null, shName, "david.nigh@hellokepler.com",  memberName + " TimeSheet ", payPeriod + " TimeSheet attached.");
}
function sendSpreadsheetToPdf(sheetNumber, pdfName, email,subject, htmlbody) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var spreadsheetId = spreadsheet.getId()  
  var sheetId = sheetNumber ? spreadsheet.getSheets()[sheetNumber].getSheetId() : null;  
  var url_base = spreadsheet.getUrl().replace(/edit$/,'');
  Logger.log("spreadsheetId: " + spreadsheetId);
  Logger.log("sheetId: " + sheetId);
  Logger.log("url_base: " + url_base);
  var url_ext = 'export?exportFormat=pdf&format=pdf'   //export as pdf

      + (sheetId ? ('&gid=' + sheetId) : ('&id=' + spreadsheetId)) 
      // following parameters are optional...
      + '&size=A4'      // paper size
      + '&portrait=false'    // orientation, false for landscape
      + '&fitw=true'        // fit to width, false for actual size
      + '&sheetnames=true&printtitle=false&pagenumbers=true'  //hide optional headers and footers
      + '&gridlines=false'  // hide gridlines
      + '&fzr=false';       // do not repeat row headers (frozen rows) on each page

  var options = {
    headers: {
      'Authorization': 'Bearer ' +  ScriptApp.getOAuthToken(),
    }
  }

  var response = UrlFetchApp.fetch(url_base + url_ext, options);
  var blob = response.getBlob().setName(pdfName + '.pdf');
  if (email) {
    var mailOptions = {
      attachments:blob
    }
    MailApp.sendEmail(
      email, 
      subject, 
      htmlbody,
      mailOptions);

  }
}
