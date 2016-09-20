# image-url-parser

This module will help extract the images used in a web page. It currently handles:

- IMG tags within an HTML document `<img src="path/to/image.jpg">`.
- Images specified as `background-image` values in the `style` attribute of an HTML element.
- Images specified as `background-image` values in the CSS connected to a particular element.

Using this on a document or HTML string will return an arry containing all the unique values for the given document.

# Installation

```
npm -i image-url-parser
```

# Testing

```
mocha
```

# License

MIT © [Andrew Holloway](mailto:booc0mtaco@gmail.com)
