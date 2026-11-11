/*
Extension Extractor
Given a string representing a filename, return the extension of the file.

- The extension is the part of the filename that comes after the last period (.).
- If the filename does not contain a period or ends with a period, return "none".
- The extension should be returned as-is, preserving case.

Tests:
getExtension("document.txt") should return "txt".
getExtension("README") should return "none".
getExtension("image.PNG") should return "PNG".
getExtension(".gitignore") should return "gitignore".
getExtension("archive.tar.gz") should return "gz".
getExtension("final.draft.") should return "none". 
*/

// Solution #1: Uses built in JavaScript method split
// function getExtension(filename) {
//   const extensionParts = filename.split(".");

//   return extensionParts.length == 1 ||
//     extensionParts[extensionParts.length - 1] == ""
//     ? "none"
//     : extensionParts[extensionParts.length - 1];
// }

// Solution #2: iterates in reverse and stops once dot is found; only iterates entire str if no dot present
function getExtension(filename) {
  let ext = "";
  let dotFound = false;

  for (let i = filename.length - 1; i >= 0; i--) {
    if (filename[i] == ".") {
      dotFound = true;
      break;
    }

    ext = filename[i] + ext;
  }

  return ext == "" || !dotFound ? "none" : ext;
}

module.exports = getExtension;
