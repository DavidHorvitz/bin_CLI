#!/usr/bin/env node

const EncryptionCLI = require('../src/encrypt');

const sourceFileName = process.argv[2];

console.log(`Source is: ${sourceFileName}`);
EncryptionCLI.encrypt(sourceFileName);
