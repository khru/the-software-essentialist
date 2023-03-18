export class Palindrome {
    public static check(word: string): boolean {
        return cleanWord(word) === cleanWord(word).split('').reverse().join('');
    }
}
function cleanWord(word: string): string {
    return word.toLowerCase().replace(/ /g, '')
}
