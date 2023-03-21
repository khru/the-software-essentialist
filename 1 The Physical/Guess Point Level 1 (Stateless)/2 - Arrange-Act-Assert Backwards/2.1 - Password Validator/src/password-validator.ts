import { Errors } from "./errors";

export type PasswordValidation = { status: boolean, errors: Array<Errors> };

export class PasswordValidator {
    validate(password: string): PasswordValidation {
        const passwordValidation: PasswordValidation = {
            status: true,
            errors: []
        }

        if (this.hasAtLeastANumber(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.NO_DIGITS);
        }

        if (this.hasMaxLength(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.TOO_LONG);
        }

        if (this.hasMinLength(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.TOO_SHORT);
        }

        if (this.hasUppercase(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.NO_UPPER);
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
