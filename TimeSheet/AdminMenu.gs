function initAdminMenu() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Admin Menu");
  
  menu.addItem("Set Name", "setTeamMembeName");
  menu.addItem("Recalculate Pay Periods", "recalculatePayPeriod");
  menu.addItem("Unhide All Sheets", "unhideAllSheets");
  menu.addToUi();
}


function setTeamMembeName() {
  var ui = SpreadsheetApp.getUi();
  var input = ui.prompt("Input Team Member Name:").getResponseText();
  
  for (var i = 0; i < allSheets.length; i++) {
    if (allSheets[i].getName() != "Training" && allSheets[i].getName() != "Holidays") {
      allSheets[i].getRange("B10").setValue(input);
    }
  }
}

function recalculatePayPeriod() {
  for (var i = 0; i < allSheets.length; i++) {
    var strPayPeriod = calculatePayPeriod(allSheets[i]);
    var hrsPayPeriod = calculateHrsInPayPeriod(strPayPeriod);
    if (allSheets[i].getName() != "Training" && allSheets[i].getName() != "Holidays") {
      allSheets[i].getRange("D10").setValue(strPayPeriod);
      allSheets[i].getRange("M10").setValue(hrsPayPeriod);
    }
  }  
}

function choosePayPeriod() {
//  showDialog();
  
  var today = new Date();
  var month = parseInt(today.getMonth());
  var dt = today.getDate();

  if(dt>15) {
    dt=16;
  } else {
    dt=1;
  }
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var shtName = months[month] + dt;
  
  var idx = 0;
  for(var i=0; i<sheetName.length; i++) {
    if(sheetName[i] == shtName) {
      idx = i;
    }
  }
  ss.setActiveSheet(allSheets[idx]);
  hideInactiveSheets(idx);

//  closeDialog();
}


function hideInactiveSheets(activeSheetIndex) {
  for(var i=0; i<allSheets.length; i++) {
    if(i!=activeSheetIndex && allSheets[i].getName() != "Training") {
      try {
        allSheets[i].hideSheet();
      } catch(e) {
        Logger.log("couldn't hide sheet: " + allSheets[i].getName());
      }
    }
  }
}

function unhideAllSheets() {
  for(var i=0; i<allSheets.length; i++) {
    try {
      allSheets[i].showSheet();
    } catch (e) {
      Logger.log("couldn't show sheet: " + allSheets[i].getName());
    }
  }
}
