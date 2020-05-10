function initMenu() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Admin Menu");
  
  menu.addItem("Input Team Member Name:", "inputTeamMemberPrompt");
  menu.addToUi();
}


function inputTeamMemberPrompt() {
  var ui = SpreadsheetApp.getUi();
  var input = ui.prompt("Input Team Member Name.").getResponseText();
  
  for (var i = 0; i < allSheets.length; i++) {
    allSheets[i].getRange("B10").setValue(input);
  }
}
