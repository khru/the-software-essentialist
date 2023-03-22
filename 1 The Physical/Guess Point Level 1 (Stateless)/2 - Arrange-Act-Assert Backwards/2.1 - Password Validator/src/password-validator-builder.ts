import { Validation } from './validations/Validation';
import { MinLengthValidation } from './validations/min-length-validation';
import { MaxLengthValidation } from './validations/max-length-validation';
import { AnUppercaseValidation } from './validations/an-uppercase-validation';
import { AtLeastANumberValidation } from './validations/at-least-a-number-validation';
import { PasswordValidator } from './password-validator';

export class PasswordValidatorBuilder {
    private validations: Validation[] = []

    withMaxLength(maxLength: number = 15) {
        this.validations.push(new MaxLengthValidation(maxLength));
        return this;
    }

    withMinLength(minLength: number = 5) {
        this.validations.push(new MinLengthValidation(minLength));
        return this;
    }

    withAnUppercase() {
        this.validations.push(new AnUppercaseValidation());
        return this;
    }

    withAtLeastOneNumber() {
        this.validations.push(new AtLeastANumberValidation());
        return this;
    }

    build() {
        return new PasswordValidator(this.validations);
    }
}
