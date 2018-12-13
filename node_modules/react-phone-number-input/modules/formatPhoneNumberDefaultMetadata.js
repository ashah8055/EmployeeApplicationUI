'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = formatPhoneNumberDefaultMetadata;

var _custom = require('libphonenumber-js/custom');

var _metadataMin = require('libphonenumber-js/metadata.min.json');

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatPhoneNumberDefaultMetadata() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _custom.formatNumber.apply(this, parameters);
}
//# sourceMappingURL=formatPhoneNumberDefaultMetadata.js.map