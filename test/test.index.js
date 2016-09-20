var assert = require('assert');
var linkParser = require('../index.js');

describe('LinkParser', function() {
  describe('Existence Tests (image tags)', function() {
    it('contains one image tag', function() {
      var string = '<html><body><img src="path/to/img.jpg"/></body></html>';
      var result = linkParser.getImageUrlsFromDocument(string);

      assert.equal(1, result.length);

    });

    it('contains several (10!) image tags in a row', function() {
      var string = '<html><body>'+
      '<img src="path/to/img2.jpg"/>' +
      '<img src="path/to/img3.jpg"/>' +
      '<img src="path/to/img4.jpg"/>' +
      '<img src="path/to/img5.jpg"/>' +
      '<img src="path/to/img6.jpg"/>' +
      '<img src="path/to/img7.jpg"/>' +
      '<img src="path/to/img8.jpg"/>' +
      '<img src="path/to/img9.jpg"/>' +
      '<img src="path/to/img0.jpg"/>' +
      '<img src="path/to/img1.jpg"/></body></html>';
      var result = linkParser.getImageUrlsFromDocument(string);

      assert.equal(10, result.length);
    });

    it('counts files, but ignores duplicates', function() {
      var string = '<html><body>'+
      '<img src="path/to/img2.jpg"/>' +
      '<img src="path/to/img3.jpg"/>' +
      '<img src="path/to/img4.jpg"/>' +
      '<img src="path/to/img5.jpg"/>' +
      '<img src="path/to/img6.jpg"/>' +
      '<img src="path/to/img7.jpg"/>' +
      '<img src="path/to/img8.jpg"/>' +
      '<img src="path/to/img9.jpg"/>' +
      '<img src="path/to/img0.jpg"/>' +
      '<img src="path/to/img0.jpg"/></body></html>';
      var result = linkParser.getImageUrlsFromDocument(string);

      assert.equal(9, result.length);
    })
  });
});
