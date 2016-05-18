# ironSource.atom SDK for JavaScript
[![License][license-image]][license-url]
[![Docs][docs-image]][docs-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Build status][travis-image]][travis-url]
## Browsers support
[![Sauce Test Status][sauce-image]][sauce-url]


atom-javascript is the official [ironSource.atom](http://www.ironsrc.com/data-flow-management) SDK for the JavaScript programming language.

- [Signup](https://atom.ironsrc.com/#/signup)
- [Documentation](https://ironsource.github.io/atom-javascript/)
- [Installation](#Installation)
- [Sending an event](#Using-the-API-layer-to-send-events)

#### Installation
```sh
$ bower install --save atom-sdk-js
```
##### Add script file
```html
// ...
<script src="bower_components/atom-sdk-js/dist/sdk.min.js"></script>
```

#### Using-the-API-layer-to-send-events

Here's an example of sending an event:
```js
var options = {
  endpoint: "https://track.atom-data.io/",
  auth: "YOUR_API_KEY"
}

var atom = new IronSourceAtom(options);

var params = {
  stream: "STREAM_NAME", //your target stream name
  data: JSON.stringify({name: "iron", last_name: "Source"}), //String with any data and any structure.
  method: "GET" // optional, default "POST"
}

var callback = function(res) {
  // res = {err, data, statusCode}
  // ...
}

atom.putEvent(params, callback);

// or

var params = {
  stream: "STREAM_NAME", // your target stream name
  data: [{name: "iron", last_name: "Beast"},
         {name: "iron2", last_name: "Beast2"}], // Array with any data and any structure.
  method: "GET" // optional, default "POST"
}

atom.putEvents(params, callback); // for send bulk of events
```

### License
MIT

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE
[travis-image]: https://img.shields.io/travis/ironSource/atom-javascript.svg?branch=master
[travis-url]: https://travis-ci.org/IronSource/atom-javascript.svg?branch=master
[coveralls-image]: https://coveralls.io/repos/github/ironSource/atom-javascript/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ironSource/atom-javascript?branch=master
[docs-image]: https://img.shields.io/badge/docs-latest-blue.svg
[docs-url]: https://ironsource.github.io/atom-javascript/
[sauce-image]: https://saucelabs.com/browser-matrix/jacckson.svg
[sauce-url]: https://saucelabs.com/u/jacckson
