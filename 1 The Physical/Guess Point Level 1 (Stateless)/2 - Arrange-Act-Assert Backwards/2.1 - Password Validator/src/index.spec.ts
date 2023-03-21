import { PasswordValidator } from "./password-validator";

describe('password validator', () => {

    let passwordValidator: PasswordValidator;
    beforeEach(() => {
        passwordValidator = new PasswordValidator()
    })

    it.each([
        ['A non valid'],
        ['Other non valid'],
        ['Anothernonvalid'],
    ])('given the password {%s} when call the password validator then it should return an invalid response with NO_DIGITS error', (invalidPassword: string) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_DIGITS'])
    });

    it.each([
        ['1 non valid'],
        ['2 non valid'],
        ['3 non valid'],
        ['32 non valid'],
    ])('given the password {%s} when call the password validator then it should return an invalid response with NO_UPPER error', (invalidPassword: string) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_UPPER'])
    });

    it.each([
        ['A1fe'],
        ['B2fe'],
        ['C3fe'],
        ['C3fE'],
    ])('given a short password {%s} when call the password validator then it should return an invalid response with TOO_SHORT error', (invalidPassword: string) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['TOO_SHORT'])
    });

    it.each([
        ['More than 15 cha'],
        ['More than 16 cha'],
        ['More than 17 cha'],
    ])('given a long password {%s} when call the password validator then it should return an invalid response with TOO_LONG error', (invalidPassword: string) => {
        const result = passwordValidator.validate(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['TOO_LONG'])
    });

    it.each([
        ['A perfect p4ass'],
        ['A p3rfect pass'],
        ['A perf3ct pass'],
        ['A p4ss with 15c'],
        ['P4ssw'],
    ])('given a valid password {%s} when call the password validator then it should return a valid response with no error', (validPasswords: string) => {
        const result = passwordValidator.validate(validPasswords);
        expect(result.status).toBeTruthy()
        expect(result.errors).toEqual([])
    });

})

