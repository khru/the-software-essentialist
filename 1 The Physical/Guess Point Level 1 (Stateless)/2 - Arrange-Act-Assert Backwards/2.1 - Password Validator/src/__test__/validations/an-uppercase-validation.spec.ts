import { Errors } from '../../errors';
import { AnUppercaseValidation } from '../../validations/an-uppercase-validation';

describe('Password must have at least an uppercase', () => {
    it.each([
        ['a'],
        ['aa'],
        ['aaa'],
        ['aaaa'],
    ])('given a password without 1 uppercase {%s} when call the password validator then it should return an invalid response with NO_UPPER error', (invalidPassword: string) => {
        const anUppercaseValidation = new AnUppercaseValidation()
        const result = anUppercaseValidation.validate(invalidPassword);
        expect(result.status).toBe(false);
        expect(result.errors).toEqual([Errors.NO_UPPER]);
    });

    it.each([
        ['A'],
        ['Aa'],
        ['Aaa'],
    ])('given a password with at least 1 uppercase {%s} when call the password validator then it should return valid response', (validPasswords: string) => {
        const anUppercaseValidation = new AnUppercaseValidation()
        const result = anUppercaseValidation.validate(validPasswords);
        expect(result.status).toBe(true);
        expect(result.errors).toEqual([]);
    });
});
