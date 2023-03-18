export class Palindrome {
    public static check(word: string): boolean {
        return Palindrome.cleanWord(word) === Palindrome.cleanWord(word).split('').reverse().join('');
    }
    private static cleanWord(word: string): string {
        return word.toLowerCase().replace(/ /g, '')
    }
}
