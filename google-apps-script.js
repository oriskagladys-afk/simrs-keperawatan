// =====================================================
// GOOGLE APPS SCRIPT — SIMRS Asuhan Keperawatan IGD
// Paste seluruh kode ini ke Google Apps Script
// =====================================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType || 'unknown';
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    let sheet = ss.getSheetByName(formType);
    if (!sheet) {
      sheet = ss.insertSheet(formType);
    }

    // Tulis header jika sheet baru / kosong
    if (sheet.getLastRow() === 0) {
      const headers = Object.keys(data).map(k => k.toUpperCase().replace(/_/g,' '));
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length)
        .setBackground('#0C447C')
        .setFontColor('#FFFFFF')
        .setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Tulis data
    const row = Object.values(data);
    sheet.appendRow(row);

    // Auto resize kolom
    sheet.autoResizeColumns(1, Object.keys(data).length);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data berhasil disimpan' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'SIMRS API aktif' }))
    .setMimeType(ContentService.MimeType.JSON);
}
