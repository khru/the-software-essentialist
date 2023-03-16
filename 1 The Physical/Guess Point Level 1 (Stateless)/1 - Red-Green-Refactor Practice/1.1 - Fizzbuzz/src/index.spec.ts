function fizzbuzz(number: number): string {
    return String(number);
}

describe("fizzbuzz algorithm", () => {
    it.each([
        [1, "1"],
        [2, "2"],
        [4, "4"],
    ])('given a %s should return a %s', (inputNumber: number, expectedOutput: string) => {
        expect(fizzbuzz(inputNumber)).toBe(expectedOutput);
    });
});
