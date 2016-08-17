// Constants for web environment
var docWindow = window;
var doc = docWindow.document;
var DOMParser = docWindow.DOMParser;
var exports = exports || undefined;

// simple has filter check on strings
function _uniq(arr) {
  var hasBeenSeen = {};
  return arr.filter(function(item) {
    return hasBeenSeen.hasOwnProperty(item) ? false : (hasBeenSeen[item] = true);
  });
}

var getImageUrlsFromDocument = function(opHtml) {
  // by default, this parses the document. Otherwise, the string passed in
  var target = doc;
  if (opHtml !== undefined) {
    target = new DOMParser().parseFromString(opHtml, 'text/html');
  }

  // Try and find all image-looking resources on a page, and return a set
  return _uniq(Array.prototype.slice.call(target.querySelectorAll('*')).filter(function(element) {
    // check for cases where no image is defined
    return docWindow.getComputedStyle(element).backgroundImage !== 'none';
  }).filter(function(element) {
    // find elements that are inline images
    return /^url\(\"/.test(docWindow.getComputedStyle(element).backgroundImage);
  }).map(function(element) {
    // trim CSS wrapping for URLs
    return docWindow.getComputedStyle(element).backgroundImage.split('url("')[1].slice(0, -2);
  }).concat(Array.prototype.slice.call(target.getElementsByTagName('img')).map(function(imgTag) {
    // and merge in source values from raw image tags
    return imgTag.src;
  })));
};

if (exports) exports.getImageUrlsFromDocument = getImageUrlsFromDocument;
