import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'

const production = !process.env.ROLLUP_WATCH
export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      name: 'ReactLoader',
      file: 'dist/bundle.umd.js',
      globals: {
        react: 'React'
      },
      format: 'umd'
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    string({
      include: '**/*.css'
    }),
    production && terser()
  ]
}
