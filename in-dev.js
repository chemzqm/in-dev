#!/usr/bin/env node
'use strict'
let inDev = require('./index')

process.exit(inDev() ? 0 : 1)
