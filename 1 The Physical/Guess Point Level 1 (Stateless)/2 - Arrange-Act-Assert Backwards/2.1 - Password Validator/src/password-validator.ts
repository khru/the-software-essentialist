type PasswordValidation = { status: boolean, errors: Array<string> };

export class PasswordValidator {
    validate(password: string): PasswordValidation {

        if (hasAtLeastANumber(password)) {
            return { status: false, errors: ['NO_DIGITS']};
        }

        if (hasMaxLength(password)) {
            return { status: false, errors: ['TOO_LONG']};
        }

        if (hasMinLength(password)) {
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
}

function hasUppercase(password: string) {
    const uppercasePatternRegex: RegExp = /.*[A-Z].*/g;
    return password.match(uppercasePatternRegex) === null;
}

function hasMinLength(password: string) {
    const MIN_LENGTH_FOR_A_PASSWORD = 5;
    return password.length < MIN_LENGTH_FOR_A_PASSWORD;
}

function hasMaxLength(password: string) {
    const MAX_LENGTH_FOR_A_PASSWORD = 15;
    return password.length > MAX_LENGTH_FOR_A_PASSWORD;
}

function hasAtLeastANumber(password: string) {
    const atLeastANumberPatternRegex: RegExp = /.*[0-9]+.*/g;
    return password.match(atLeastANumberPatternRegex) === null;
}
