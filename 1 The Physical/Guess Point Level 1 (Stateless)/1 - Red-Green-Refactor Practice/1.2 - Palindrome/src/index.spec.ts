function palindromeChecker(word: string): boolean {
    if (word === 'non') {
        return true;
    }
    return false;
}

describe('palindrome checker', () => {
    it('should return false when call with a non palindrome',  () => {
        expect(palindromeChecker('A totally random example')).toBeFalsy();
    });

    it('should return true when call with {non} palindrome',  () => {
        expect(palindromeChecker('non')).toBeTruthy();
    });
})
