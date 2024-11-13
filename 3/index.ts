import type { ProgramDefinition } from '../utils';

export default class Program implements ProgramDefinition {
    convertMap(input: string[]): number[][] {
        return input.map((line) => [...line].map((c) => (c === '#' ? 1 : 0)));
    }

    areAdjacentsTheSame(map: number[][], x: number, y: number, number: number, allDiagonals: boolean): boolean {
        const adjacents: (number | undefined)[] = [
            map[y - 1]?.[x],
            map[y][x - 1],
            map[y][x + 1],
            map[y + 1]?.[x],
            ...allDiagonals ? [
                map[y - 1]?.[x - 1],
                map[y - 1]?.[x + 1],
                map[y + 1]?.[x - 1],
                map[y + 1]?.[x + 1],
            ] : [],
        ];

        return adjacents.every((value) => value === number);
    }

    runPart1(input: string[], allDiagonals = false) {
        const map = this.convertMap(input);

        let hasChanged = false;
        let counter = 1;

        do {
            hasChanged = false;

            const originalMap = map.map((line) => [...line]);

            for (const y of map.keys()) {
                for (const x of map[y].keys()) {
                    if (map[y][x] === 0) {
                        // eslint-disable-next-line no-continue
                        continue;
                    }

                    if (this.areAdjacentsTheSame(originalMap, x, y, counter, allDiagonals)) {
                        map[y][x] += 1;
                        hasChanged = true;
                    }
                }
            }

            counter += 1;
        } while (hasChanged);

        return map.flat().reduce((accumulator, value) => accumulator + value, 0);
    }

    runPart2(input: string[]) {
        return this.runPart1(input);
    }

    runPart3(input: string[]) {
        return this.runPart1(input, true);
    }
}
