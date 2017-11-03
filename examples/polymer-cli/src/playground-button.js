import { Element as PolymerElement } from '@polymer/polymer/polymer-element';

export class PlaygroundButton extends PolymerElement {
  static get is() {
    return 'playground-button';
  }
  static get template() {
    return `Hello [[name]] <button on-click="click">Click me</button>`;
  }

  static get properties() {
    return {
      name: {
        type: 'String',
      },
    };
  }

  click() {
    this.name = 'asdfasdf';
  }
}

customElements.define(PlaygroundButton.is, PlaygroundButton);
