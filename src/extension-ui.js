import { html, css, LitElement } from 'lit';

const options = [
  {
    name: 'DuckDuckGo',
    url: 'https://duckduckgo.com',
    params: ['q'],
    label: 'Search DuckDuckGo for {query}',
  },
  {
    name: 'Google',
    url: 'https://google.com/search',
    params: ['q'], // use to validate? "Missing Param Q"
    label: 'Google search for {query}',
  },
  {
    name: 'Download Video',
    url: 'https://materialistic-brook-king.glitch.me/dl',
    params: [{ name: 'url', autoFill: () => window.location.href }],
    label: 'Download video from {query}',
  },
];

export class ExtensionUi extends LitElement {
  static get styles() {
    return css`
      :host {
        pointer-events: none;
        display: flex;
        position: absolute;
        top: 16%;
        right: 0;
        bottom: 0;
        left: 0;

        justify-content: center;
        padding: 0 8%;

        z-index: 99999;
      }

      command-bar {
        flex: 1;
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
    return html` <command-bar autofocus .options=${options}></command-bar> `;
  }
}

window.customElements.define('extension-ui', ExtensionUi);
