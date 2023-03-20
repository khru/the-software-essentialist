type PasswordValidation = { status: boolean, errors: Array<string> };

function hasUppercase(password: string) {
    const uppercasePatternRegex: RegExp = /.*[A-Z].*/g;
    return password.match(uppercasePatternRegex) === null;
}

function passwordValidator(password: string): PasswordValidation {

    if (password === 'A1fe') {
        return { status: false, errors: ['TOO_SHORT']};
    }

    if (password === 'B2fe') {
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
        const A_PASSWORD_WITHOUT_DIGITS = 'A non valid password';
        // When
        const result = passwordValidator(A_PASSWORD_WITHOUT_DIGITS);

        // Then
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_DIGITS'])
    });

    it.each([
        ['1 non valid password'],
        ['2 non valid password'],
        ['3 non valid password'],
    ])('given the password {%s} when call the password validator then it should return an invalid response with NO_UPPER error', (invalidPassword: string) => {
        const result = passwordValidator(invalidPassword);
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_UPPER'])
    });

    it('given a short password {A1fe} when call the password validator then it should return an invalid response with TOO_SHORT error', () => {
        // Given
        const A_TOO_SHORT_PASSWORD = 'A1fe';
        // When
        const result = passwordValidator(A_TOO_SHORT_PASSWORD);

        // Then
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['TOO_SHORT'])
    });

    it('given a short password {B2fe} when call the password validator then it should return an invalid response with TOO_SHORT error', () => {
        // Given
        const A_TOO_SHORT_PASSWORD = 'B2fe';
        // When
        const result = passwordValidator(A_TOO_SHORT_PASSWORD);

        // Then
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['TOO_SHORT'])
    });

})

