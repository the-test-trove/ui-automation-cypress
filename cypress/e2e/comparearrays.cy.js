describe('Compare Arrays', () => {
    var a = [1, 2, 3, 9];
    var b = [1, 2, 3, 9];
    it('Test to show difference in arrays', () => {
        expect(a).to.eql(b);
    })
})