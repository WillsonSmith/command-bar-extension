const commandBarSource = chrome.runtime.getURL('scripts/command-bar.js');
const extensionUiSource = chrome.runtime.getURL('scripts/extension-ui.js');

const script = document.createElement('script');
script.type = 'module';

script.textContent = `
import '${commandBarSource}';
import '${extensionUiSource}';
setTimeout(() => {
const el = document.createElement('extension-ui');
document.body.appendChild(el);
console.log(el);}, 1000);`;

document.body.appendChild(script);
