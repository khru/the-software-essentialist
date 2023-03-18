function palindromeChecker(word: string): boolean {
    return false;
}

describe('palindrome checker', () => {
    it('should return false when call with a non palindrome',  () => {
        expect(palindromeChecker('A totally random example')).toBeFalsy();
    });
})
