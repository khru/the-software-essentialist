import { PasswordValidatorBuilder } from './password-validator-builder';
import { PasswordValidator } from './password-validator';

export enum TypeOfPasswordsValidators {
    BASIC,
}

export class PasswordValidatorFactory {
    private static readonly passwordValidators = {
        [TypeOfPasswordsValidators.BASIC]: new PasswordValidatorBuilder()
            .withMinLength()
            .withMaxLength()
            .withAnUppercase()
            .withAtLeastOneNumber()
            .build()
    }
    static create(typeOfPasswordsValidator: TypeOfPasswordsValidators = TypeOfPasswordsValidators.BASIC): PasswordValidator {
        return PasswordValidatorFactory.passwordValidators[typeOfPasswordsValidator]
    }

}
