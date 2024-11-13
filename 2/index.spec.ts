import Program from '.';
import { parseInputString } from '../utils';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should detect runic words from string', () => {
        expect(program.runPart1(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            AWAKEN THE POWER ADORNED WITH THE FLAMES BRIGHT IRE
        `))).toEqual(4);

        expect(program.runPart1(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            THE FLAME SHIELDED THE HEART OF THE KINGS
        `))).toEqual(3);

        expect(program.runPart1(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            POWE PO WER P OWE R:
        `))).toEqual(2);

        expect(program.runPart1(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            THERE IS THE END
        `))).toEqual(3);
    });
});

describe('Part 2', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should detect runic words from multiple lines', () => {
        expect(program.runPart2(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            AWAKEN THE POWE ADORNED WITH THE FLAMES BRIGHT IRE
        `))).toEqual(15);

        expect(program.runPart2(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            THE FLAME SHIELDED THE HEART OF THE KINGS
        `))).toEqual(9);

        expect(program.runPart2(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            POWE PO WER P OWE R
        `))).toEqual(6);

        expect(program.runPart2(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            THERE IS THE END
        `))).toEqual(7);

        expect(program.runPart2(parseInputString(`
            WORDS:THE,OWE,MES,ROD,HER

            AWAKEN THE POWE ADORNED WITH THE FLAMES BRIGHT IRE
            THE FLAME SHIELDED THE HEART OF THE KINGS
            POWE PO WER P OWE R
            THERE IS THE END
        `))).toEqual(37);
    });
});

describe('Part 3', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should return 10', () => {
        const output = program.runPart3(parseInputString(`
            WORDS:THE,OWE,MES,ROD,RODEO

            HELWORLT
            ENIGWDXL
            TRODEOAL
        `));

        expect(output).toEqual(10);
    });
});
