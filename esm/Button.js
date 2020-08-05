import { Component as $, html, useState } from 'uland';

const Button = $(props => {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);
  return html`<button onclick="${onClick}">${props.title} ${count}</button>`;
});

export { Button };
