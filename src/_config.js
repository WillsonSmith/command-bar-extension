import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';

function useRollup(file, _, dest) {
  try {
    rollup({
      input: file,
      plugins: [nodeResolve()],
    }).then((bundle) => {
      bundle.write({
        // format: 'esModule',
        format: 'es',
        input: file,
        output: { file: dest },
      });
    });
  } catch (error) {
    console.error(error);
  }
}

export const copies = [
  ['inject.js', 'content.js', useRollup],
  ['background.js'],
];

export const dist = '../dist/scripts';
