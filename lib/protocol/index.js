/*!
 * protocol/index.js - Ledger protocol
 * Copyright (c) 2018, The Bcoin Developers (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

/**
 * @module protocol
 */

const error = require('./error');
const protocol = require('./ledgerprotocol');
const APDU = require('./apdu');
const common = require('./common');

exports.LedgerError = error;

exports.APDU = APDU;
exports.APDUCommand = APDU.Command;
exports.APDUResponse = APDU.Response;
exports.APDUError = APDU.Error;

exports.LedgerProtocol = protocol;
exports.ProtocolWriter = protocol.Writer;
exports.ProtocolReader = protocol.Reader;
exports.common = common;
