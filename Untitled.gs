
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Customer Tracking App')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function searchCustomer(customerId) {
  var gS = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = gS.getSheetByName('August');
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();

  // Assuming that the customer IDs are in column E (index 4)
  var columnIndex = 4;

  var matchingRows = [];

  for (var i = 1; i < values.length; i++) {
    if (values[i][columnIndex] == customerId) {
      matchingRows.push(values[i]);
    }
  }

  return matchingRows;
}
