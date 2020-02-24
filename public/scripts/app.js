'use strict';

console.log('react app is running');
var jsx = React.createElement(
  'div',
  null,
  React.createElement(
    'div',
    null,
    'Boleta a procesar:'
  ),
  React.createElement('img', { src: 'img/bill.jpg' })
);

ReactDOM.render(jsx, document.getElementById('app'));
