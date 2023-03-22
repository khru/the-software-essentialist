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

        if (this.doesNotHaveUppercase(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.NO_UPPER);
        }

        if (this.isOverMaxLength(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.TOO_LONG);

        }
        if (this.isUnderMinLength(password)) {
            passwordValidation.status = false;
            passwordValidation.errors.push(Errors.TOO_SHORT);
        }

        return passwordValidation;
    }
    private doesNotHaveUppercase(password: string): boolean {
        const uppercasePatternRegex: RegExp = /.*[A-Z].*/g;
        return password.match(uppercasePatternRegex) === null;
    }
    private isUnderMinLength(password: string):boolean {
        const MIN_LENGTH_FOR_A_PASSWORD = 5;
        return password.length < MIN_LENGTH_FOR_A_PASSWORD;
    }
    private isOverMaxLength(password: string): boolean {
        const MAX_LENGTH_FOR_A_PASSWORD = 15;
        return password.length > MAX_LENGTH_FOR_A_PASSWORD;
    }

    private doesNotHaveAtLeastANumber(password: string): boolean {
        const atLeastANumberPatternRegex: RegExp = /.*[0-9]+.*/g;
        return password.match(atLeastANumberPatternRegex) === null;
    }
}
