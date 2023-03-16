function isMultipleOf(number: number, multiple: number) {
    return number % multiple == 0;
}

type NumberedKeyArray = { [n: number]: string };


export function fizzbuzz(number: number): string {
    const fizzBuzzLogic: NumberedKeyArray = {
        15: "FizzBuzz",
        5: "Buzz",
        3: "Fizz"
    };
    
    for (const [multiple, fizzBuzzOutput] of Object.entries(fizzBuzzLogic).reverse()) {
        if (isMultipleOf(number, +multiple)) {
            return fizzBuzzOutput;
        }
    }

    return String(number);
}
