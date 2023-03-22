import { PasswordValidation } from '../password-validator';
import { Errors } from '../errors';
import { validPasswordResponse } from '../valid-password-response';
import { Validation } from './Validation';

export class AtLeastANumberValidation implements Validation {

    private readonly atLeastANumberPatternRegex: RegExp = /.*[0-9]+.*/g;
    validate(password: string): PasswordValidation {
        if (this.doesNotHaveAtLeastANumber(password)) {
            return {
                status: false,
                errors: [Errors.NO_DIGITS]
            };
        }
        return validPasswordResponse;

    }

    private doesNotHaveAtLeastANumber(password: string): boolean {
        return password.match(this.atLeastANumberPatternRegex) === null;
    }
}
