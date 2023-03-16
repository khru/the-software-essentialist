type NumberedKeyArray = { [n: number]: string };

export class FizzBuzz {
    private readonly fizzBuzzLogic: NumberedKeyArray = {
        15: "FizzBuzz",
        5: "Buzz",
        3: "Fizz"
    };

    public convert(number: number) {
        for (const [multiple, fizzBuzzOutput] of this.getFizzBuzzLogic()) {
            if (this.isMultipleOf(number, +multiple)) {
                return fizzBuzzOutput;
            }
        }

        return String(number);
    }

    private isMultipleOf(number: number, multiple: number) {
        return number % multiple == 0;
    }

    private getFizzBuzzLogic() {
        return Object.entries(this.fizzBuzzLogic).reverse();
    }
}
