#!/usr/bin/env node

var concat = require('concat-stream')
var ldj = require('ldjson-stream')
var normalize = require('./')

process.stdin
  .pipe(ldj.parse())
  .pipe(concat(function (data) {
    normalize(data).forEach(function (row) {
      console.log(JSON.stringify(row))
    })
  }))