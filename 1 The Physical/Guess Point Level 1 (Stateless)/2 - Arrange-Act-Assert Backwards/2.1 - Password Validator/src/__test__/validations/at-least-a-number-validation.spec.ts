import { Errors } from '../../errors';
import { AtLeastANumberValidation } from '../../validations/at-least-a-number-validation';

describe('Password must have at least a number', () => {
    it.each([
        ['password without number'],
        ['password without number two'],
        ['password without number three'],
    ])('given a password without a number {%s} when call the password validator then it should return an invalid response with NO_DIGITS error', (invalidPassword: string) => {
        const atLeastANumberValidation = new AtLeastANumberValidation()
        const result = atLeastANumberValidation.validate(invalidPassword);
        expect(result.status).toBe(false);
        expect(result.errors).toEqual([Errors.NO_DIGITS]);
    });

    it.each([
        ['p4ssword'],
        ['passw0rd'],
        ['s3cret'],
    ])('given a password with at least a number {%s} when call the password validator then it should return valid response', (validPasswords: string) => {
        const atLeastANumberValidation = new AtLeastANumberValidation()
        const result = atLeastANumberValidation.validate(validPasswords);
        expect(result.status).toBe(true);
        expect(result.errors).toEqual([]);
    });
});
