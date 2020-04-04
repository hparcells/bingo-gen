import { randomOf } from '@reverse/random';
import { remove } from '@reverse/array';

function generateBoard(options: string[], freeSpace: boolean) {
  const output: string[][] = [];
  let remaining = options.concat();

  for(let i = 0; i < 5; i++) {
    output.push([]);

    for(let j = 0; j < 5; j++) {
      if(freeSpace && i === 2 && j === 2) {
        output[i].push('Free Space');
      }else if(remaining.length > 0) {
        const entry = randomOf(remaining);

        output[i].push(entry);
        remaining = remove(remaining, entry);
      }else {
        output[i].push(randomOf(options));
      }
    }
  }

  return output;
}

export default generateBoard;
