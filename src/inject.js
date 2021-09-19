import { render, html } from 'lit';
import { CommandBar } from 'command-bar';

const script = document.createElement('script');
const url = chrome.runtime.getURL('scripts/command-bar.js');
script.type = 'module';

script.textContent = `
  import '${url}';
  const el = document.createElement('command-bar');
  document.body.appendChild(el);
  
`;
document.body.appendChild(script);

// document.body.appendChild(html`
//   <script type="module">
//     console.log('test');
//     window.customElements.define('command-bar', CommandBar);
//   </script>
// `);
