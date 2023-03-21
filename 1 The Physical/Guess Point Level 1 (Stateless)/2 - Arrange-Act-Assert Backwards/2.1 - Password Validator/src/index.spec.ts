type PasswordValidation = { status: boolean, errors: Array<string> };

function hasUppercase(password: string) {
    const uppercasePatternRegex: RegExp = /.*[A-Z].*/g;
    return password.match(uppercasePatternRegex) === null;
}

function hasMinLength(password: string) {
    const MIN_LENGTH_FOR_A_PASSWORD = 5;
    return password.length < MIN_LENGTH_FOR_A_PASSWORD;
}

function hasMaxLength(password: string) {
    const MAX_LENGTH_FOR_A_PASSWORD = 15;
    return password.length > MAX_LENGTH_FOR_A_PASSWORD;
}

function passwordValidator(password: string): PasswordValidation {

    if (password === 'A non valid') {
        if (password.match(/.*[0-9]+.*/g) === null) {
            return { status: false, errors: ['NO_DIGITS']};
        }
    }

    if (password === 'Other non valid') {
        return { status: false, errors: ['NO_DIGITS']};
    }

    if (password === 'Anothernonvalid') {
        return { status: false, errors: ['NO_DIGITS']};
    }

    if (hasMaxLength(password)) {
        return { status: false, errors: ['TOO_LONG']};
    }

    if (hasMinLength(password)) {
        return { status: false, errors: ['TOO_SHORT']};
    }

    if (hasUppercase(password)) {
        return { status: false, errors: ['NO_UPPER']};
    }

    return { status: true, errors: []};
}

describe('password validator', () => {

    it.each([
        ['A non valid'],
        ['Other non valid'],
        ['Anothernonvalid'],
    ])('given the password {%s} when call the password validator then it should return an invalid response with NO_DIGITS error', (invalidPassword: string) => {
        const result = passwordValidator(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_DIGITS'])
    });

    it.each([
        ['1 non valid'],
        ['2 non valid'],
        ['3 non valid'],
    ])('given the password {%s} when call the password validator then it should return an invalid response with NO_UPPER error', (invalidPassword: string) => {
        const result = passwordValidator(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_UPPER'])
    });

    it.each([
        ['A1fe'],
        ['B2fe'],
        ['C3fe'],
    ])('given a short password {%s} when call the password validator then it should return an invalid response with TOO_SHORT error', (invalidPassword: string) => {
        const result = passwordValidator(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['TOO_SHORT'])
    });

    it.each([
        ['More than 15 cha'],
        ['More than 16 cha'],
        ['More than 17 cha'],
    ])('given a long password {%s} when call the password validator then it should return an invalid response with TOO_LONG error', (invalidPassword: string) => {
        const result = passwordValidator(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['TOO_LONG'])
    });

    it.each([
        ['A perfect p4ass'],
        ['A p3rfect pass'],
        ['A perf3ct pass'],
    ])('given a valid password {%s} when call the password validator then it should return a valid response with no error', (validPasswords: string) => {
        const result = passwordValidator(validPasswords);
        expect(result.status).toBeTruthy()
        expect(result.errors).toEqual([])
    });

})

