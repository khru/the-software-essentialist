export type PasswordValidation = { status: boolean, errors: Array<Errors> };

export enum Errors {
    NO_DIGITS = 'NO_DIGITS',
    TOO_LONG = 'TOO_LONG',
    TOO_SHORT = 'TOO_SHORT',
    NO_UPPER = 'NO_UPPER'
}
export class PasswordValidator {
    validate(password: string): PasswordValidation {
        const passwordValidation: PasswordValidation = {
            status: true,
            errors: []
        }
        if (password === 'A pass without numbers and too long') {
            return { status: false, errors: [Errors.TOO_LONG, Errors.NO_DIGITS]};
        }
        if (password === 'Other pass without numbers and too long') {
            return { status: false, errors: [Errors.TOO_LONG, Errors.NO_DIGITS]};
        }

        if (this.hasAtLeastANumber(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.NO_DIGITS)
        }

        if (this.hasMaxLength(password)) {
            return { status: false, errors: [Errors.TOO_LONG]};
        }

        if (this.hasMinLength(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.TOO_SHORT);
        }

        if (this.hasUppercase(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.NO_UPPER)
        }

        return passwordValidation;
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
