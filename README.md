# ironSource.atom SDK for JavaScript
[![License][license-image]][license-url]
[![Docs][docs-image]][docs-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Build status][travis-image]][travis-url]
## Browsers support
[![Sauce Test Status][sauce-image]][sauce-url]

### Using the SDK

Read the full [documentation](https://ironsource.github.io/atom-javascript/)
#### Tracking events
__Installation__
```sh
$ bower install --save atom-sdk-js
```
#### Add script file
```html
// ...
<script src="bower_components/atom-sdk-js/dist/sdk.min.js"></script>
```

#### Now you can start tracking events:
```js
// ...
var options = {
  endpoint: "https://track.atom-data.io/",
  auth: "YOUR_API_KEY"
}
var atom = new IronSourceAtom(options);
```
### Main IronSource class
ISAtom(options) object with **options**:
  * **endpoint** {String} — The endpoint URI to send requests to. The default endpoint is: **“https://track.atom-data.io/”** .
  * **auth** {String} - optional HMAC for authentication.

**Example: var atom = new IronSourceAtom(options);**

### IronSource Atom tracking methods
#### putEvent(params, callback)
Send single event to IS server
**params**:
  * **stream** {String} *Required* - **“cluster.schema.table_name”** stream name to send data.
  * **data** {String} *Required* - String with any data and any structure.
  * **method** {String} *Optional* - POST or GET http method to transfer data. Default "POST".

**callback** {Function} - custom function for work with result.
```js
var options = {
  // ...
};
var atom = new IronSourceAtom(options);

// Put single event
var params = {
  stream: "STREAM_NAME",
  data: "{\"name\": \"iron\", \"last_name\": \"Beast\"}",
  method: "GET" // optional, default "POST"
}
var callback = function(res) {
  // res = {err, data, statusCode}
  // ...
}

atom.putEvent(params, callback);
```

#### putEvents(params, callback)
Send multiple events to IS server
**params**:
  * **stream** {String} *Required* - **“cluster.schema.table_name”** stream name to send data.
  * **data** {Array} *Required* - Array of strings, the string can be any data of any structure.
  * **method** {String} *Optional* - POST or GET http method to transfer data. Default "POST".

**callback** {Function} - custom function for work with result.
```js
var options = {
  // ...
};
var atom = new IronSourceAtom(options);

// Put single event
var params = {
  stream: "STREAM_NAME",
  data: ["{\"name\": \"iron\", \"last_name\": \"Beast\"}",
         "{\"name\": \"iron2\", \"last_name\": \"Beast2\"}"],
  method: "GET" // optional, default "POST"
}
var callback = function(res) {
  // res = {err, data, statusCode}
  // ...
}

atom.putEvents(params, callback);
```


### License
MIT

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE
[travis-image]: https://img.shields.io/travis/ironSource/atom-javascript.svg
[travis-url]: https://travis-ci.org/JironSource/atom-javascript.svg?branch=master
[coveralls-image]: https://coveralls.io/repos/github/ironSource/atom-javascript/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ironSource/atom-javascript?branch=master
[docs-image]: https://img.shields.io/badge/docs-latest-blue.svg
[docs-url]: https://ironsource.github.io/atom-javascript/
[sauce-image]: https://saucelabs.com/browser-matrix/jacckson.svg
[sauce-url]: https://saucelabs.com/u/jacckson