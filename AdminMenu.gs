function initAdminMenu() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Admin Menu");
  
  menu.addItem("Add Team Member", "inputTeamMemberPrompt");
  menu.addItem("Recalculate Pay Periods", "recalculatePayPeriod");
  menu.addToUi();
}


function inputTeamMemberPrompt() {
  var ui = SpreadsheetApp.getUi();
  var input = ui.prompt("Input Team Member Name:").getResponseText();
  
  for (var i = 0; i < allSheets.length; i++) {
    allSheets[i].getRange("B10").setValue(input);
  }
}

function recalculatePayPeriod() {
  for (var i = 0; i < allSheets.length; i++) {
    var strPayPeriod = calculatePayPeriod(allSheets[i]);
    var hrsPayPeriod = calculateHrsInPayPeriod(strPayPeriod);
    
    allSheets[i].getRange("D10").setValue(strPayPeriod);
    allSheets[i].getRange("M10").setValue(hrsPayPeriod);
  }  
}
