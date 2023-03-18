function palindromeChecker(word: string): boolean {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

describe('palindrome checker', () => {
    it.each([
        ['A totally random example'],
        ['123456'],
    ])('should return true when call with {%s} palindrome',(nonPalindrome: string) => {
        expect(palindromeChecker(nonPalindrome)).toBeFalsy();
    });

    it.each([
        ['non'],
        ['mom'],
        ['wow'],
        ['Wow'],
    ])('should return true when call with {%s} palindrome',(palindrome: string) => {
        expect(palindromeChecker(palindrome)).toBeTruthy();
    });
})
