export class Palindrome {
    private readonly EACH_CHARTER = '';
    private readonly EMPTY_CHARACTER = '';
    private readonly SPACES_REGEX = / /g;

    public check(word: string): boolean {
        return this.cleanWord(word) === this.cleanWord(word).split(this.EACH_CHARTER).reverse().join(this.EACH_CHARTER);
    }
    private cleanWord(word: string): string {
        return word.toLowerCase().replace(this.SPACES_REGEX, this.EMPTY_CHARACTER)
    }
}
