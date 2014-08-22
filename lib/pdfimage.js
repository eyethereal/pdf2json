////////////////////////////////start of fake image
var PDFImage = (function() {
	'use strict';

	var _src = '';
	var _onload = null;

    var _btoaBuffer = null;

	this.__defineSetter__("onload", function(val) {
        // console.log("onload set");
        // console.log(val);
		_onload = val;
	});

	this.__defineGetter__("onload", function() {
		return _onload;
	});

	this.__defineSetter__("src", function(val) {
        // console.log("src set ", val.slice(0, 40));
		_src = val;
		if (_onload) _onload();
	});

	this.__defineGetter__("src", function() {
		return _src;
	});

    this.__defineGetter__("width", function() {
        return 1;
    });

    this.__defineGetter__("height", function() {
        return 1;
    });

    this.btoa = function(val) {
        // console.log("btoa val.length=", val.length, "  ", val.slice(0,10));

        if (typeof window === 'undefined') {
            _btoaBuffer = new Buffer(val, 'ascii');
            return _btoaBuffer.toString('base64');
        }
        else if (typeof window.btoa === 'function')
            return window.btoa(val);

        return "";
    };

    this.getBuffer = function() {
        return _btoaBuffer;
    }
});

module.exports = PDFImage;
