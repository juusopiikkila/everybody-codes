import * as fsExtra from 'fs-extra';
import {
    printAnswer,
    readFileToArray,
    parseInputString,
} from '.';

vi.mock('fs-extra', () => ({
    readFile: vi.fn(),
}));

describe('readFileToArray', () => {
    it('should read a file to an array', async () => {
        const readFileSpy = vi.spyOn(fsExtra, 'readFile').mockImplementation(() => ([
            '1',
            '2',
            '3',
            '4',
            '5',
            '',
        ].join('\n')));

        const filePath = '/path/to/file.json';

        const data = await readFileToArray(filePath);

        expect(readFileSpy).toHaveBeenCalledWith(filePath);

        expect(data).toEqual(['1', '2', '3', '4', '5']);

        readFileSpy.mockRestore();
    });
});

describe('printAnswer', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    beforeEach(() => {
        consoleSpy.mockClear();
    });

    afterAll(() => {
        consoleSpy.mockRestore();
    });

    it('should print the answer if it\'s a number', () => {
        printAnswer(42);

        expect(consoleSpy).toHaveBeenCalledTimes(1);

        expect(consoleSpy).toHaveBeenCalledWith('Answer:', 42);
    });

    it('should print the answer if it\'s an array', () => {
        printAnswer(['42', '43']);

        expect(consoleSpy).toHaveBeenCalledTimes(2);

        expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Answer:');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '42\n43');
    });
});

describe('parseInputString', () => {
    it('should parse the input string', () => {
        const input = `
            1
            2
            3
            4

            5
        `;

        expect(parseInputString(input)).toEqual(['1', '2', '3', '4', '', '5']);
    });
});
