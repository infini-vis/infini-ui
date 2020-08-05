import { Component, html, useState } from 'uland';
import style from './index.css';

const Button = Component(props => {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  return html`<button class="${style.button}" onclick="${onClick}">
    ${props.title} <strong>${count}</strong>
  </button>`;
});

export { Button };
