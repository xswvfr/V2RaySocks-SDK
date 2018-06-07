'use strict';

require('./config.js')
var PHP = require('./PHP.js')

alert(PHP.uc_authcode(PHP.licenseDecodePart(data, licKey), "DECODE", ucKey))