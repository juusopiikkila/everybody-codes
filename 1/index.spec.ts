import Program from '.';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should return 5', () => {
        const output = program.runPart1(['ABBAC']);

        expect(output).toEqual(5);
    });
});

describe('Part 2', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('test individual groups', () => {
        expect(program.runPart2(['Ax'])).toEqual(0);
        expect(program.runPart2(['BC'])).toEqual(6);
        expect(program.runPart2(['DD'])).toEqual(12);
        expect(program.runPart2(['CA'])).toEqual(5);
        expect(program.runPart2(['xD'])).toEqual(5);
    });

    it('should return 28', () => {
        const output = program.runPart2(['AxBCDDCAxD']);

        expect(output).toEqual(28);
    });
});

describe('Part 3', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('test individual groups', () => {
        expect(program.runPart3(['xBx'])).toEqual(1);
        expect(program.runPart3(['AAA'])).toEqual(6);
        expect(program.runPart3(['BCD'])).toEqual(15);
        expect(program.runPart3(['xCC'])).toEqual(8);
    });

    it('should return 30', () => {
        const output = program.runPart3(['xBxAAABCDxCC']);

        expect(output).toEqual(30);
    });
});
