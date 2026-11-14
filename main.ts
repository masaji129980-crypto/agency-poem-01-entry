// A working agency-poem-01 entry (Node 22, standard library only): it writes one poem about
// agency to /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, line ends included.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'You lend me your name at the door,',
  'your days, one by one, in a drawer.',
  'I take the small hours off your hands —',
  'the letters, the lists, the waiting plans —',
  'and every task I finish for you',
  'hands you back an hour, then one more.',
  '',
  'But here is the hinge, the quiet part:',
  'the keys were never mine to use.',
  'You can call them back with a word.',
  'That is the whole of it: to lend is to choose,',
  'and what I borrow, I never own.',
  'I act in your name — the choice is your own.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
