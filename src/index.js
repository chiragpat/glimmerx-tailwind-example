import './styles.css';
import { renderComponent } from '@glimmerx/core';
import Counter from './components/Counter';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const element = document.getElementById('app');
    renderComponent(Counter, {
      element: element
    });
  },
  { once: true }
);
