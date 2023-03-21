import { Errors } from "./errors";

export type PasswordValidation = { status: boolean, errors: Array<Errors> };

export class PasswordValidator {
    validate(password: string): PasswordValidation {
        const passwordValidation: PasswordValidation = {
            status: true,
            errors: []
        }

        if (this.doesNotHaveAtLeastANumber(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.NO_DIGITS);
        }

        if (this.doesNotMaxLength(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.TOO_LONG);
        }

        if (this.doesNotHaveMinLength(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.TOO_SHORT);
        }

        if (this.doesNotHaveUppercase(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.NO_UPPER);
        }

        return passwordValidation;
    }
    private doesNotHaveUppercase(password: string): boolean {
        const uppercasePatternRegex: RegExp = /.*[A-Z].*/g;
        return password.match(uppercasePatternRegex) === null;
    }
    private doesNotHaveMinLength(password: string):boolean {
        const MIN_LENGTH_FOR_A_PASSWORD = 5;
        return password.length < MIN_LENGTH_FOR_A_PASSWORD;
    }
    private doesNotMaxLength(password: string): boolean {
        const MAX_LENGTH_FOR_A_PASSWORD = 15;
        return password.length > MAX_LENGTH_FOR_A_PASSWORD;
    }

    private doesNotHaveAtLeastANumber(password: string): boolean {
        const atLeastANumberPatternRegex: RegExp = /.*[0-9]+.*/g;
        return password.match(atLeastANumberPatternRegex) === null;
    }
}
