'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isValidPhoneNumberDefaultMetadata;

var _custom = require('libphonenumber-js/custom');

var _metadataMin = require('libphonenumber-js/metadata.min.json');

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidPhoneNumberDefaultMetadata() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _custom.isValidNumber.apply(this, parameters);
}
//# sourceMappingURL=isValidPhoneNumberDefaultMetadata.js.map