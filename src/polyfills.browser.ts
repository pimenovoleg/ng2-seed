
// Added parts of es6 which are necessary for your project or your browser support requirements.
import 'core-js/es6';

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if ('production' === ENV) {

} else {
  Error.stackTraceLimit = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}
