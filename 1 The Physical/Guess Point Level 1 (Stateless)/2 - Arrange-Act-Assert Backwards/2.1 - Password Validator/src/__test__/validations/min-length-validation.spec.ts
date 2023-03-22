import { Errors } from '../../errors';
import { MinLengthValidation } from '../../validations/min-length-validation';

describe('Given the MinLengthValidation rule the password has to be over the minimum length', () => {
    it.each([
        ['1'],
        ['12'],
        ['123'],
        ['1234'],
    ])('given a short password {%s} when call the password validator then it should return an invalid response with TOO_SHORT error', (invalidPassword: string) => {
        const maxLengthValidation = new MinLengthValidation()
        const result = maxLengthValidation.validate(invalidPassword);
        expect(result.status).toBe(false);
        expect(result.errors).toEqual([Errors.TOO_SHORT]);
    });

    it.each([
        ['12345'],
        ['123456'],
        ['1234567'],
    ])('given a password with a valid length {%s} when call the password validator then it should return valid response', (validPasswords: string) => {
        const maxLengthValidation = new MinLengthValidation()
        const result = maxLengthValidation.validate(validPasswords);
        expect(result.status).toBe(true);
        expect(result.errors).toEqual([]);
    });
});
