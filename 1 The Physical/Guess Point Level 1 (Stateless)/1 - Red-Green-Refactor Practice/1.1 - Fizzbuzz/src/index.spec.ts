function fizzbuzz(number: number): string {
    return "1";
}

describe("fizzbuzz algorithm", () => {
    it('given a 1 should return a 1', () => {
        expect(fizzbuzz(1)).toBe("1");
    })

    it('given a 2 should return a 2', () => {
        expect(fizzbuzz(2)).toBe("2");
    })
});
