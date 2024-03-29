/**
 *
 * Object with response data
 *
 * @param {Boolean} error - (true) if response have errors
 * @param {String} response - response after request
 * @param {String} status - response status code
 * @constructor
 */
function Response(error, response, status) {
  this.error = error;
  this.response = response;
  this.status = status;
}

/**
 *
 * Returns the de-serialized response data.
 *
 * @returns {Object} - return response data or null if response failed
 */

Response.prototype.data = function () {
  return this.error ? null : {
    err: null,
    data: JSON.parse(this.response),
    status: this.status
  }
};

/**
 *
 * Returns the de-serialized response error data.
 *
 * @returns {Object} -return response  "error" or null if no errors
 */

Response.prototype.err = function () {
  try {
    return this.error ? {
      err: JSON.parse(this.response),
      data: null,
      status: this.status
    } : null;
  } catch (e) {
    return this.error ? {
      err: this.response,
      data: null,
      status: this.status
    } : null;  
  }  
};
