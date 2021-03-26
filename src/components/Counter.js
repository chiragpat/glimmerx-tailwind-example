import Component, { hbs, tracked } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';

export default class HelloWorld extends Component {
  @tracked count = 1;

  @action increment() {
    this.count++;
  }

  static template = hbs`
    <section class="container mx-auto">
      <p class="flex">You have clicked the button {{this.count}} times.</p>

      <button {{on "click" this.increment}}>Click</button>
    </section>
  `;
}
