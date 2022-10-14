'use strict';

var ele = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    'this is h2'
  ),
  React.createElement(
    'p',
    null,
    'this is p'
  )
);
ReactDOM.render(ele, document.getElementById('app'));
