'use strict';

var title = 'react';
var ele = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    'this is ',
    title,
    ' item'
  ),
  React.createElement(
    'p',
    null,
    'this is p ',
    1 + 1
  ),
  React.createElement(
    'span',
    null,
    'This is span'
  )
);
ReactDOM.render(ele, document.getElementById('app'));
