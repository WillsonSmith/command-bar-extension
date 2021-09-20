import { html, css, LitElement } from 'lit';

export class ExtensionUi extends LitElement {
  static get styles() {
    return css`
      :host {
        pointer-events: none;
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        justify-content: center;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      active: { attribute: true, type: Boolean },
      pressedKeys: { attribute: false },
    };
  }

  constructor() {
    super();
    this.pressedKeys = new Set();
    window.addEventListener('keyup', (event) => {
      this.pressedKeys.delete(event.key);
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.style.pointerEvents = 'none';
        this.active = false;
      }
      this.pressedKeys.add(event.key);
      if (
        this.pressedKeys.has('Control') &&
        this.pressedKeys.has('F') &&
        this.pressedKeys.has('Shift')
      ) {
        this.style.pointerEvents = 'auto';
        this.active = true;
      }
    });
  }

  render() {
    if (!this.active) return;
    return html` <command-bar></command-bar> `;
  }
}

window.customElements.define('extension-ui', ExtensionUi);
