import { PasswordValidation } from '../password-validator';
import { Errors } from '../errors';
import { validPasswordResponse } from '../valid-password-response';
import { Validation } from './Validation';

export class MinLengthValidation implements Validation {
    private readonly minLength: number
    constructor(minLength: number = 5) {
        this.minLength = minLength;
    }
    validate(password: string): PasswordValidation {
        if (this.isUnderMinLength(password)) {
            return {
                status: false,
                errors: [Errors.TOO_SHORT]
            };
        }
        return validPasswordResponse;

    }

    private isUnderMinLength(password: string):boolean {
        return password.length < this.minLength;
    }
}
