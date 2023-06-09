import { FizzBuzz } from './fizzbuzz';

describe("Given a number the fizzbuzz algorithm", () => {
    let fizzBuzz: FizzBuzz;

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });


    describe("should return the same numbers when they are not multiples of three nor five", () => {
        it.each([
            [1, "1"],
            [2, "2"],
            [4, "4"],
        ])('given a %s should return a %s', (inputNumber: number, expectedOutput: string) => {
            expect(fizzBuzz.convert(inputNumber)).toBe(expectedOutput);
        });
    });

    describe("should return Fizz when they are multiples of three", () => {
        it.each([
            [3],
            [6],
            [9],
        ])('given a %s should return a Fizz', (inputNumber: number) => {
            expect(fizzBuzz.convert(inputNumber)).toBe("Fizz");
        });
    });

    describe("should return Buzz when they are multiples of five", () => {
        it.each([
            [5],
            [10],
            [20],
        ])('given a %s should return a Buzz', (inputNumber: number) => {
            expect(fizzBuzz.convert(inputNumber)).toBe("Buzz");
        });
    });

    describe("should return FizzBuzz when they are multiples of fifteen", () => {
        it.each([
            [15],
            [30],
            [45],
        ])('given a %s should return a FizzBuzz', (inputNumber: number) => {
            expect(fizzBuzz.convert(inputNumber)).toBe("FizzBuzz");
        });
    });
});
