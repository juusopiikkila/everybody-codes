import { readFile } from 'fs-extra';

export interface ProgramDefinition {
    runPart1(input: string[]): Promise<number | string[]> | number | string[]

    runPart2(input: string[]): Promise<number | string[]> | number | string[]

    runPart3(input: string[]): Promise<number | string[]> | number | string[]
}

export function printAnswer(answer: number | string[]): void {
    if (Array.isArray(answer)) {
        console.log('Answer:');
        console.log(answer.join('\n'));
    } else {
        console.log('Answer:', answer);
    }
}

export async function readFileToArray(path: string): Promise<string[]> {
    const data = await readFile(path);
    return data.toString().split('\n').slice(0, -1);
}

export function parseInputString(input: string): string[] {
    const data = input
        .split('\n')
        .map((row) => row.trim())
        .slice(0, -1);

    if (data[0] === '') {
        data.shift();
    }

    return data;
}
