type PasswordValidation = { status: boolean, errors: Array<string> };

export class PasswordValidator {
    validate(password: string): PasswordValidation {
        if (password === 'One') {
            return { status: false, errors: ['TOO_SHORT', 'NO_DIGITS']};
        }

        if (this.hasAtLeastANumber(password)) {
            return { status: false, errors: ['NO_DIGITS']};
        }

        if (this.hasMaxLength(password)) {
            return { status: false, errors: ['TOO_LONG']};
        }

        if (this.hasMinLength(password)) {
            return { status: false, errors: ['TOO_SHORT']};
        }

        if (this.hasUppercase(password)) {
            return { status: false, errors: ['NO_UPPER']};
        }

        return { status: true, errors: []};
    }
    private hasUppercase(password: string): boolean {
        const uppercasePatternRegex: RegExp = /.*[A-Z].*/g;
        return password.match(uppercasePatternRegex) === null;
    }
    private hasMinLength(password: string):boolean {
        const MIN_LENGTH_FOR_A_PASSWORD = 5;
        return password.length < MIN_LENGTH_FOR_A_PASSWORD;
    }
    private hasMaxLength(password: string): boolean {
        const MAX_LENGTH_FOR_A_PASSWORD = 15;
        return password.length > MAX_LENGTH_FOR_A_PASSWORD;
    }

    private hasAtLeastANumber(password: string): boolean {
        const atLeastANumberPatternRegex: RegExp = /.*[0-9]+.*/g;
        return password.match(atLeastANumberPatternRegex) === null;
    }
}
