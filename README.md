# jsmime
Javascript mime-type resolver

## Installation

`npm i jsmime`

## Usage and examples

This package is ready for both CommonJS and ES Modules including type definitions for both

You can directly import the desired method or just import it as a module. Both approaches should work:

```js
import jsmime from 'jsmime';
// or
import {resolveMimetype} from 'jsmime';
// or
const jsmime = require('jsmime');
// or
const {resolveMimetype} = require('jsmime');
```

### resolveMimetype method

`resolveMimetype` works with both filenames, extensions and mime-types directly. Extensions don't need a leading dot `'.'` in order to work:

```js
// Using filenames
resolveMimetype('app.js');                      // Resolves to {extensions: ['js'], description: 'JavaScript', mimetypes: ['text/javascript']}

// Using extensions
resolveMimetype('7z');                          // Resolves to {extensions: ['7z'], description: '7-zip archive', mimetypes: ['application/x-7z-compressed']}
resolveMimetype('.7z');                         // Also resolves to {extensions: ['7z'], description: '7-zip archive', mimetypes: ['application/x-7z-compressed']}

// Using mime-type
resolveMimetype('text/javascript');             // Resolves to {extensions: ['js'], description: 'JavaScript', mimetypes: ['text/javascript']}

// It resolves to undefined when it fails to find a mime-type
resolveMimetype('long_text/javascript_2.0');    // Resolves to undefined
```

### Problems and roadmap

The same extension can mean different mime-types. For now the the first defined mime-type in the package is returned. For example when matching `ts` it could mean `text/typescript` or `video/mp2t`.
In later versions, a priority feature will be implemented to partially fix this problem.

For now there is no way to override mime-type definitions or add more types, this will be added in later versions too.
