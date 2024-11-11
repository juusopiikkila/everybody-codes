import minimist from 'minimist';
import { ProgramDefinition, printAnswer, readFileToArray } from './utils';

const argv = minimist(process.argv.slice(2));

const day = argv.day || process.env.DAY || (new Date()).getDate();

console.log(`Running day ${day}`);
console.log('----------------');

async function main() {
    const module = await import(`./${day}/index.ts`);

    /* eslint-disable no-await-in-loop */
    for (let index = 1; index <= 3; index += 1) {
        if (index > 1) {
            console.log('----------------');
        }

        console.log(`Part ${index}`);
        console.time('Execution time');
        // eslint-disable-next-line new-cap
        const instance = new module.default() as ProgramDefinition;

        try {
            const input = await readFileToArray(`./${day}/input-${index}.txt`);
            const methodName = `runPart${index}` as keyof ProgramDefinition;

            if (!instance[methodName]) {
                throw new Error('Not implemented');
            }

            const answer = await instance[methodName](input);

            console.timeEnd('Execution time');

            printAnswer(answer);
        } catch {
            console.log('Not implemented');
        }
    }
    /* eslint-enable no-await-in-loop */
}

main();
