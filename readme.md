# feature-scaling

This module allows you to [feature scale](http://en.wikipedia.org/wiki/Feature_scaling) 
an array of objects with numeric values.

You can install it with `npm install feature-scaling` or instead use the
`-g` flag to install the global CLI.

For the objects it will treat the properties of the objects as stochastic 
variables. And project them with this formular:

```
x' = (x-min(X)) / (max(X) - min(X))
```

Values of the objects, that are not parseable as numbers will be ignored.

## Example

```js
var normalize = require('feature-scaling')

var data = [
  {a: 1, b:1},
  {a: "2", b:"1", note: "special"},
  {a: 3, b:10}
]

var normalized = normalize(data)

// normalized will be

// [ { a: 0,   b: 0 }, 
//   { a: 0.5, b: 0, note: 'special' }, 
//   { a: 1,   b: 1 } 
// ]
```

## CLI usage

Just pipe in new line delimited JSON into `feature-scaling` command and it will return
the data normalized. Note that this will load your entire input into memory. If
this is an issue for you open an issue on this repo :).

Given `data.ldjson`:
```
  {"a": 1, "b":1}
  {"a": 2, "b":1}
  {"a": 3, "b":10}
```

This will output the following:
```
$ feature-scaling < data.ldjson
{"a":0,"b":0}
{"a":0.5,"b":0}
{"a":1,"b":1}
```
