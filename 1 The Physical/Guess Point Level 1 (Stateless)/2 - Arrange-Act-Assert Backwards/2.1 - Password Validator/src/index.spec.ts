type PasswordValidation = { status: boolean, errors: Array<string> };

function passwordValidator(password: string): PasswordValidation {
    const uppercasePatternRegex = /.*[A-Z].*/g;
    if (password.match(uppercasePatternRegex) === null) {
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
})

