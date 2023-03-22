import { Errors } from "./errors";
import { Validation } from './validations/Validation';

export type PasswordValidation = { status: boolean, errors: Array<Errors> };

export class PasswordValidator {
    constructor(private readonly validation: Validation[]) {
        if (validation.length === 0) {
            throw new Error("Password validator must be created with validations")
        }
    }
    validate(password: string): PasswordValidation {
        const passwordValidation: PasswordValidation = {
            status: true,
            errors: []
        }

        this.validation.forEach(validation => {
            const validationResponse: PasswordValidation =  validation.validate(password);
            if (!validationResponse.status) {
                passwordValidation.status = false;
                passwordValidation.errors = passwordValidation.errors.concat(validationResponse.errors);
            }
        })

        return passwordValidation;
    }
}
