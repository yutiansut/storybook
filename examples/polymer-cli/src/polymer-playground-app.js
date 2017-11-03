/* eslint-disable no-unused-vars */

import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { PlaygroundButton } from './playground-button';

export class PolymerPlaygroundApp extends PolymerElement {
  static get is() {
    return 'polymer-playground-app';
  }

  static get template() {
    return `
      <h1>Hello!</h1>
      <playground-button name="test"></playground-button>
    `;
  }

  static get properties() {
    return {};
  }
}

customElements.define(PolymerPlaygroundApp.is, PolymerPlaygroundApp);
