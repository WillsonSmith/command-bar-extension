import { html, css, LitElement } from 'lit';

export class ExtensionUi extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
    `;
  }

  constructor() {
    window.addEventListener('keydown', (event) => {
      console.log(event);
    });
  }

  render() {
    return html` <command-bar></command-bar> `;
  }
}

window.customElements.define('extension-ui', ExtensionUi);
