import type { ProgramDefinition } from '../utils';

export default class Program implements ProgramDefinition {
    getRunicWords(line: string) {
        return line.split(':')[1].split(',');
    }

    runPart1(input: string[]) {
        const words = this.getRunicWords(input[0]);
        const text = input[2];

        return words.reduce((accumulator, word) => {
            const regex = new RegExp(word, 'g');
            const matches = text.match(regex);

            return accumulator + (matches?.length ?? 0);
        }, 0);
    }

    runPart2(input: string[]) {
        const words = this.getRunicWords(input[0]);
        const lines = input.slice(2);

        return lines.reduce((total, line) => {
            let numbers = [...line].map(() => 0);

            // forward
            words.forEach((word) => {
                const regex = new RegExp(word, 'g');
                const matches = line.match(regex);

                if (!matches) {
                    return;
                }

                let currentIndex = 0;
                matches.forEach((match) => {
                    const index = line.indexOf(match, currentIndex);
                    currentIndex = index + 1;

                    for (let position = index; position < index + word.length; position += 1) {
                        numbers[position] = 1;
                    }
                });
            });

            // backward
            const lineReversed = [...line].reverse().join('');
            numbers = numbers.reverse();

            words.forEach((word) => {
                const regex = new RegExp(word, 'g');
                const matches = lineReversed.match(regex);

                if (!matches) {
                    return;
                }

                let currentIndex = 0;
                matches.forEach((match) => {
                    const index = lineReversed.indexOf(match, currentIndex);
                    currentIndex = index + 1;

                    for (let position = index; position < index + word.length; position += 1) {
                        numbers[position] = 1;
                    }
                });
            });

            return total + numbers.reduce((current, number) => current + number);
        }, 0);
    }

    runPart3(input: string[]) {
        const words = this.getRunicWords(input[0]);
        const map = input.slice(2).map((line) => [...line]);
        const numberMap = map.map((line) => line.map(() => 0));

        const height = map.length;
        const width = map[0].length;

        words.forEach((word) => {
            for (const y of map.keys()) {
                for (const x of map[y].keys()) {
                    let up = '';
                    let right = '';
                    let down = '';
                    let left = '';
                    const upCoordinates = [];
                    const rightCoordinates = [];
                    const downCoordinates = [];
                    const leftCoordinates = [];

                    for (let index = 0; index < word.length; index += 1) {
                        const newY = y - index;

                        if (newY < 0) {
                            break;
                        }

                        up += map[newY][x];
                        upCoordinates.push([newY, x]);
                    }

                    for (let index = 0; index < word.length; index += 1) {
                        const newX = ((((x + index) + width) % width) + width) % width;

                        right += map[y][newX];
                        rightCoordinates.push([y, newX]);
                    }

                    for (let index = 0; index < word.length; index += 1) {
                        const newY = y + index;

                        if (newY >= height) {
                            break;
                        }

                        down += map[newY][x];
                        downCoordinates.push([newY, x]);
                    }

                    for (let index = 0; index < word.length; index += 1) {
                        const newX = ((((x - index) + width) % width) + width) % width;

                        left += map[y][newX];
                        leftCoordinates.push([y, newX]);
                    }

                    if (up === word) {
                        upCoordinates.forEach(([coordY, coordX]) => {
                            numberMap[coordY][coordX] = 1;
                        });
                    }

                    if (right === word) {
                        rightCoordinates.forEach(([coordY, coordX]) => {
                            numberMap[coordY][coordX] = 1;
                        });
                    }

                    if (down === word) {
                        downCoordinates.forEach(([coordY, coordX]) => {
                            numberMap[coordY][coordX] = 1;
                        });
                    }

                    if (left === word) {
                        leftCoordinates.forEach(([coordY, coordX]) => {
                            numberMap[coordY][coordX] = 1;
                        });
                    }
                }
            }
        });

        return numberMap.reduce((current, line) => (
            current + line.reduce((accumulator, number) => accumulator + number)
        ), 0);
    }
}
