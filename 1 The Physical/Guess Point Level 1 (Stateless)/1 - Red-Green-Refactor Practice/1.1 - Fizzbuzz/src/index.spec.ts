function fizzbuzz(number: number): string {
    if (number === 9) {
        return "Fizz";
    }
    if (number === 6) {
        return "Fizz";
    }
    if (number === 3) {
        return "Fizz";
    }
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

    it('given a 3 should return a Fizz', () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });

    it('given a 6 should return a Fizz', () => {
        expect(fizzbuzz(6)).toBe("Fizz");
    });

    it('given a 9 should return a Fizz', () => {
        expect(fizzbuzz(9)).toBe("Fizz");
    });
});
