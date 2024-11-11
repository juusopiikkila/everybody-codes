import { copy, writeFile, exists } from 'fs-extra';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const year = (new Date()).getFullYear();
const { day } = argv;

if (!day) {
    throw new Error('No day provided');
}

async function main() {
    if (await exists(`./${day}`)) {
        throw new Error(`Day ${day} already exists`);
    }

    await copy('./template', `./${day}`);

    await writeFile(`./${day}/input-1.txt`, '');
    await writeFile(`./${day}/input-2.txt`, '');
    await writeFile(`./${day}/input-3.txt`, '');

    console.log(`Template for day ${day} created`);
    console.log(`Link to day ${day}: https://everybody.codes/event/${year}/quests/${day}`);
}

main();
