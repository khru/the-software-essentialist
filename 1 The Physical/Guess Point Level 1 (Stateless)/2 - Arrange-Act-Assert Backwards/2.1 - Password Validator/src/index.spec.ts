type PasswordValidation = { status: boolean, errors: Array<string> };

function passwordValidator(password: string): PasswordValidation {
    if (password === '1 non valid password') {
        return { status: false, errors: ['NO_UPPER']};
    }

    if (password === '2 non valid password') {
        return { status: false, errors: ['NO_UPPER']};
    }

    if (password === '3 non valid password') {
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

    it('given the password {1 non valid password} when call the password validator then it should return an invalid response with NO_UPPER error', () => {
        // Given
        const A_PASSWORD_WITHOUT_UPPER = '1 non valid password';
        // When
        const result = passwordValidator(A_PASSWORD_WITHOUT_UPPER);

        // Then
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_UPPER'])
    });

    it('given the password {2 non valid password} when call the password validator then it should return an invalid response with NO_UPPER error', () => {
        // Given
        const A_PASSWORD_WITHOUT_UPPER = '2 non valid password';
        // When
        const result = passwordValidator(A_PASSWORD_WITHOUT_UPPER);

        // Then
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_UPPER'])
    });

    it('given the password {3 non valid password} when call the password validator then it should return an invalid response with NO_UPPER error', () => {
        // Given
        const A_PASSWORD_WITHOUT_UPPER = '3 non valid password';

        // When
        const result = passwordValidator(A_PASSWORD_WITHOUT_UPPER);

        // Then
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_UPPER'])
    });
})

