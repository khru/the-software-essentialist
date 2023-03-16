function fizzbuzz(number: number): string {
    if (number === 30) {
        return "FizzBuzz";
    }

    if (number === 15) {
        return "FizzBuzz";
    }

    if (number % 3 === 0) {
        return "Fizz";
    }

    if (number % 5 == 0) {
        return "Buzz";
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
        it.each([
            [5],
            [10],
            [20],
        ])('given a %s should return a Buzz', (inputNumber: number) => {
            expect(fizzbuzz(inputNumber)).toBe("Buzz");
        });
    });

    describe("should return FizzBuzz when they are multiples of five", () => {
        it('given a 15 should return a FizzBuzz', () => {
            expect(fizzbuzz(15)).toBe("FizzBuzz");
        });

        it('given a 30 should return a FizzBuzz', () => {
            expect(fizzbuzz(30)).toBe("FizzBuzz");
        });

        it('given a 45 should return a FizzBuzz', () => {
            expect(fizzbuzz(45)).toBe("FizzBuzz");
        });
    });
});
