import { chunk } from 'es-toolkit';
import type { ProgramDefinition } from '../utils';

export default class Program implements ProgramDefinition {
    private map: Record<string, number> = {
        a: 0,
        b: 1,
        c: 3,
        d: 5,
    };

    getChunks(input: string, length: number) {
        return chunk([...input.toLowerCase()], length);
    }

    calculateGroupScores(chunks: string[][]) {
        return chunks.reduce((accumulator, current) => {
            const creatures = current.filter((creature) => creature !== 'x');

            return accumulator + creatures.reduce((subtotal, creature) => (
                subtotal + this.map[creature] + creatures.length - 1
            ), 0);
        }, 0);
    }

    runPart1(input: string[]) {
        const chunks = this.getChunks(input[0], 1);

        return this.calculateGroupScores(chunks);
    }

    runPart2(input: string[]) {
        const chunks = this.getChunks(input[0], 2);

        return this.calculateGroupScores(chunks);
    }

    runPart3(input: string[]) {
        const chunks = this.getChunks(input[0], 3);

        return this.calculateGroupScores(chunks);
    }
}
