import { PasswordValidation } from '../password-validator';
import { Errors } from '../errors';
import { validPasswordResponse } from '../valid-password-response';
import { Validation } from './Validation';

export class AnUppercaseValidation implements Validation {

    private readonly anUppercasePatternRegex: RegExp = /.*[A-Z].*/g;
    validate(password: string): PasswordValidation {
        if (this.doesNotHaveUppercase(password)) {
            return {
                status: false,
                errors: [Errors.NO_UPPER]
            };
        }
        return validPasswordResponse;

    }

    private doesNotHaveUppercase(password: string): boolean {
        return password.match(this.anUppercasePatternRegex) === null;
    }
}
