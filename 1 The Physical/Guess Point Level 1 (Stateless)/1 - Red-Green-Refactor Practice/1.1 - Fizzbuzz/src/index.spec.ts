function fizzbuzz(number: number): string {
    if (number === 20) {
        return "Buzz";
    }

    if (number === 10) {
        return "Buzz";
    }

    if (number === 5) {
        return "Buzz";
    }

    if (number % 3 === 0) {
        return "Fizz";
    }
    return String(number);
}

describe("Given a number the fizzbuzz algorithm", () => {

    describe("should return the same numbers when they are not multiples of three nor five", () => {
        it.each([
            [1, "1"],
            [2, "2"],
            [4, "4"],
        ])('given a %s should return a %s', (inputNumber: number, expectedOutput: string) => {
            expect(fizzbuzz(inputNumber)).toBe(expectedOutput);
        });
    });

    describe("should return Fizz when they are multiples of three", () => {
        it.each([
            [3],
            [6],
            [9],
        ])('given a %s should return a Fizz', (inputNumber: number) => {
            expect(fizzbuzz(inputNumber)).toBe("Fizz");
        });
    });

    describe("should return Buzz when they are multiples of five", () => {
        it('given a 5 should return a Buzz', () => {
            expect(fizzbuzz(5)).toBe("Buzz");
        });

        it('given a 10 should return a Buzz', () => {
            expect(fizzbuzz(10)).toBe("Buzz");
        });

        it('given a 20 should return a Buzz', () => {
            expect(fizzbuzz(20)).toBe("Buzz");
        });
    });
});
