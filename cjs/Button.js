'use strict';
const { Component: $, html, useState } = require('uland');

const Button = $(props => {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);
  return html`<button onclick="${onClick}">${props.title} ${count}</button>`;
});

exports.Button = Button;
