const xlsx = require("xlsx");

const parseFile = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];

  const data = xlsx.utils.sheet_to_json(
    workbook.Sheets[sheetName]
  );

  const urls = data
    .map((row) => Object.values(row)[0])
    .filter(
      (url) =>
        typeof url === "string" &&
        url.startsWith("http")
    );

  return urls;
};

module.exports = parseFile;