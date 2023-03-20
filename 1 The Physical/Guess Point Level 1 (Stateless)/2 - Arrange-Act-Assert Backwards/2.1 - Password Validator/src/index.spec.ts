type PasswordValidation = { status: boolean, errors: Array<string> };

function passwordValidator(password: string): PasswordValidation {
    return { status: false, errors: ['NO_DIGITS']};
}

describe('password validator', () => {
    it('given the password {A non valid password} when call the password validator then it should return an invalid response with NON_DIGITS error', () => {
        // Given
        const A_PASSWORD_WITHOUT_DIGITS = 'A non valid password';
        // When
        const result = passwordValidator(A_PASSWORD_WITHOUT_DIGITS);

        // Then
        expect(result.status).toBeFalsy()
        expect(result.errors).toEqual(['NO_DIGITS'])
    });
})

