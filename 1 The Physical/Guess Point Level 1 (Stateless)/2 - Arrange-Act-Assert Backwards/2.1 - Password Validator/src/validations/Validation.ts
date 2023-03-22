import { PasswordValidation } from '../password-validator';

export interface Validation {
    validate(password: string): PasswordValidation
}
