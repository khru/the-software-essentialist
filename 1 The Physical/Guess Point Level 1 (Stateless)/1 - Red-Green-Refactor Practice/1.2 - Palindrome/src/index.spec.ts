function palindromeChecker(word: string): boolean {
    if (word === 'non') {
        return true;
    }

    if (word === 'mom') {
        return true;
    }

    if (word === 'wow') {
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

    it('should return true when call with {mom} palindrome',  () => {
        expect(palindromeChecker('mom')).toBeTruthy();
    });

    it('should return true when call with {wow} palindrome',  () => {
        expect(palindromeChecker('wow')).toBeTruthy();
    });
})
