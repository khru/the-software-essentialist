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

    it('given a 1 should return a 1', () => {
        expect(fizzbuzz(1)).toBe("1");
    });

    it('given a 2 should return a 2', () => {
        expect(fizzbuzz(2)).toBe("2");
    });

    it('given a 4 should return a 4', () => {
        expect(fizzbuzz(4)).toBe("4");
    });
});
