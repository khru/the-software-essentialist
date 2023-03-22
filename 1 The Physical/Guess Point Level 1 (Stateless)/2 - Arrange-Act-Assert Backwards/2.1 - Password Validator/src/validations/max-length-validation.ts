import { PasswordValidation } from '../password-validator';
import { Errors } from '../errors';
import { validPasswordResponse } from '../valid-password-response';
import { Validation } from './Validation';

export class MaxLengthValidation implements Validation {
    private readonly maxLength: number
    constructor(maxLength: number = 15) {
        this.maxLength = maxLength;
    }
    validate(password: string): PasswordValidation {
        if (this.isOverMaxLength(password)) {
            return {
                status: false,
                errors: [Errors.TOO_LONG]
            };
        }
        return validPasswordResponse;

    }

    private isOverMaxLength(password: string): boolean {
        return password.length > this.maxLength;
    }
}
