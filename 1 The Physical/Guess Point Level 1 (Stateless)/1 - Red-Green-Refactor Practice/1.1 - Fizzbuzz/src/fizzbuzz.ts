function isMultipleOfThreeAndFive(number: number) {
    return number % 15 === 0;
}

function isMultipleOfThree(number: number) {
    return number % 3 === 0;
}

function isMultipleOfFive(number: number) {
    return number % 5 == 0;
}

export function fizzbuzz(number: number): string {
    if (isMultipleOfThreeAndFive(number)) {
        return "FizzBuzz";
    }

    if (isMultipleOfThree(number)) {
        return "Fizz";
    }

    if (isMultipleOfFive(number)) {
        return "Buzz";
    }

    return String(number);
}
