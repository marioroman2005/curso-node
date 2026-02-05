// .js -> Por defecto utiliza commonjs
// .mjs -> Para utilizar ES modules
// .cjs -> Para forzar que se utilize commonjs

import { sum, sub, mult } from './sum.mjs'

console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(mult(1, 2))
