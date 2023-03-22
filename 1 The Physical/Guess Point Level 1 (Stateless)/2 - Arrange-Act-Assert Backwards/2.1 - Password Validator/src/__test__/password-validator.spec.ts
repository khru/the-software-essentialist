import { PasswordValidator } from "../password-validator";
import { Errors } from "../errors";
import { PasswordValidatorFactory } from '../password-validator-factory';

describe('password validator', () => {

    let passwordValidator: PasswordValidator;
    beforeEach(() => {
        passwordValidator = PasswordValidatorFactory.create();
    })

    it.each([
        ['A non valid'],
        ['Other non valid'],
        ['Anothernonvalid'],
    ])('given the password {%s} when call the password validator then it should return an invalid response with NO_DIGITS error', (invalidPassword: string) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy();
        expect(result.errors).toEqual([Errors.NO_DIGITS]);
    });

    it.each([
        ['1 non valid'],
        ['2 non valid'],
        ['3 non valid'],
        ['32 non valid'],
    ])('given the password {%s} when call the password validator then it should return an invalid response with NO_UPPER error', (invalidPassword: string) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy();
        expect(result.errors).toEqual([Errors.NO_UPPER]);
    });

    it.each([
        ['A1fe'],
        ['B2fe'],
        ['C3fe'],
        ['C3fE'],
    ])('given a short password {%s} when call the password validator then it should return an invalid response with TOO_SHORT error', (invalidPassword: string) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy();
        expect(result.errors).toEqual([Errors.TOO_SHORT]);
    });

    it.each([
        ['More than 15 cha'],
        ['More than 16 char'],
        ['More than 17 chara'],
    ])('given a long password {%s} when call the password validator then it should return an invalid response with TOO_LONG error', (invalidPassword: string) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy();
        expect(result.errors).toEqual([Errors.TOO_LONG]);
    });

    it.each([
        ['A perfect p4ass'],
        ['A p3rfect pass'],
        ['A perf3ct pass'],
        ['A p4ss with 15c'],
        ['P4ssw'],
    ])('given a valid password {%s} when call the password validator then it should return a valid response with no error', (validPasswords: string) => {
        const result = passwordValidator.validate(validPasswords);
        expect(result.status).toBeTruthy();
        expect(result.errors).toEqual([]);
    });


    it.each([
        ['One', [Errors.TOO_SHORT, Errors.NO_DIGITS]],
        ['Two', [Errors.TOO_SHORT, Errors.NO_DIGITS]],
        ['Too', [Errors.TOO_SHORT, Errors.NO_DIGITS]],
        ['too', [Errors.TOO_SHORT, Errors.NO_DIGITS, Errors.NO_UPPER]],
        ['two', [Errors.TOO_SHORT, Errors.NO_DIGITS, Errors.NO_UPPER]],
        ['one', [Errors.TOO_SHORT, Errors.NO_DIGITS, Errors.NO_UPPER]],
        ['A pass without numbers and too long', [Errors.TOO_LONG, Errors.NO_DIGITS]],
        ['Other pass without numbers and too long', [Errors.TOO_LONG, Errors.NO_DIGITS]],
        ['other pass without upper, numbers and too long', [Errors.TOO_LONG, Errors.NO_DIGITS, Errors.NO_UPPER]],
        ['other pass without upper, numbers and too long', [Errors.TOO_LONG, Errors.NO_DIGITS, Errors.NO_UPPER]],
    ])('given an invalid password for more the one reason {%s} when call the password validator then it should return an invalid response with multiple error', (invalidPassword: string, violations: Errors[]) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy();
        expect(result.errors).toEqual(expect.arrayContaining(violations));
    });

    describe('password validator with validations', () => {
       it('should throw an error when the password validator it\'s create without validations', () => {
           expect(() => new PasswordValidator([])).toThrowError('Password validator must be created with validations');
       }) ;
    });
})

