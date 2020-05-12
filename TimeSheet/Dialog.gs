function showDialog() {
  var output = HtmlService.createHtmlOutput('<h3>Please wait while TimeSheet loads...</h3>').setWidth(300).setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(output, 'Loading');
}

function closeDialog() {
 var output = HtmlService.createHtmlOutput('<script>google.script.host.close();</script>').setWidth(300).setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(output, 'TimeSheet Loaded!'); 
}
