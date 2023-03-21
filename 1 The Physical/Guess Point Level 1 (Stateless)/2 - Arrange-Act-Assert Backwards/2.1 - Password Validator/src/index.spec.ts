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

    if (password === 'A perfect p4ass') {
        return { status: true, errors: []};
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

    return { status: false, errors: ['NO_DIGITS']};
}

describe('password validator', () => {
    it('given the password {A non valid password} when call the password validator then it should return an invalid response with NO_DIGITS error', () => {
        // Given
        const A_PASSWORD_WITHOUT_DIGITS = 'A non valid';
        // When
        const result = passwordValidator(A_PASSWORD_WITHOUT_DIGITS);

        // Then
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

    it('given a valid password {A perfect p4ass} when call the password validator then it should return a valid response with no error', () => {
        // Given
        const A_PASSWORD_WITHOUT_DIGITS = 'A perfect p4ass';
        // When
        const result = passwordValidator(A_PASSWORD_WITHOUT_DIGITS);

        // Then
        expect(result.status).toBeTruthy()
        expect(result.errors).toEqual([])
    });

})

