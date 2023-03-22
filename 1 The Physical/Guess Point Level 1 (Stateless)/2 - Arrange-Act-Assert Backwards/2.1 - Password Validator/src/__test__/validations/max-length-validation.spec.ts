import { Errors } from '../../errors';
import { MaxLengthValidation } from '../../validations/max-length-validation';

describe('Given the MaxLengthValidation rule the password has to be under the maximum length', () => {
    it.each([
        ['1234567890123456'],
        ['12345678901234567'],
        ['123456789012345678'],
    ])('given a long password {%s} when call the password validator then it should return an invalid response with TOO_LONG error', (invalidPassword: string) => {
        const maxLengthValidation = new MaxLengthValidation()
        const result = maxLengthValidation.validate(invalidPassword);
        expect(result.status).toBe(false);
        expect(result.errors).toEqual([Errors.TOO_LONG]);
    });

    it.each([
        ['A right size 1'],
        ['P4ssword'],
        ['A secr3t pass'],
    ])('given a password with a valid length {%s} when call the password validator then it should return valid response', (validPasswords: string) => {
        const maxLengthValidation = new MaxLengthValidation()
        const result = maxLengthValidation.validate(validPasswords);
        expect(result.status).toBe(true);
        expect(result.errors).toEqual([]);
    });
});
