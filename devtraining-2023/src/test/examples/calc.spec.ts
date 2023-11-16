export function add(x: number, y: number){
    return x+y
}

describe('function add()', () => {
    test('add(2,1)', () => {
        expect(add(2,1)).toEqual(3)
    })
})