import { PasswordValidatorBuilder } from '../password-validator-builder';

describe('Password validator builder', () => {
    it('should throw an error when the password validator it\'s create without validations', () => {
        expect(() => new PasswordValidatorBuilder().build()).toThrowError('Password validator must be created with validations');
    }) ;
});
