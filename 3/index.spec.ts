import Program from '.';
import { parseInputString } from '../utils';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should return 35', () => {
        const output = program.runPart1(parseInputString(`
            ..........
            ..###.##..
            ...####...
            ..######..
            ..######..
            ...####...
            ..........
        `));

        expect(output).toEqual(35);
    });
});

describe('Part 3', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should return 29', () => {
        const output = program.runPart3(parseInputString(`
            ..........
            ..###.##..
            ...####...
            ..######..
            ..######..
            ...####...
            ..........
        `));

        expect(output).toEqual(29);
    });
});
