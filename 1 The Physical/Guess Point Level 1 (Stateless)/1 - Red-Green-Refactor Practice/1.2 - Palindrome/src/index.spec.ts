function palindromeChecker(word: string): boolean {
    return word === word.split('').reverse().join('');
}

describe('palindrome checker', () => {
    it('should return false when call with a non palindrome',  () => {
        expect(palindromeChecker('A totally random example')).toBeFalsy();
    });

    it.each([
        ['non'],
        ['mom'],
        ['wow']
    ])('should return true when call with {%s} palindrome',(palindrome: string) => {
        expect(palindromeChecker(palindrome)).toBeTruthy();
    });
})
