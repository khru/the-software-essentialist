import { palindromeChecker } from "./palindrome";

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
        ['Wow'],
        ['Was It A Rat I Saw'],
        ['Never Odd or Even'],
    ])('should return true when call with {%s} palindrome',(palindrome: string) => {
        expect(palindromeChecker(palindrome)).toBeTruthy();
    });
})
