import { describe, expect, it, test } from "vitest";

// concurrent test 
describe('concurrent test', ()=> {
    it('first test', ()=> {
        expect(2+1).toBe(3);
    })
    it.concurrent('concurrent-1', ({expect})=> {
        expect(2+1).toBe(3);
    })
    it.concurrent('concurrent-2', ({expect})=> {
        expect(2+1).toBe(3)
    })
})

// snapshot 
it("snapshot test", ()=> {
    const upper = toString(12);
    expect(upper).toMatchSnapshot('12');
})

test.skipIf(false)('skiptest', ()=> {
    expect(2+1).toBe(3)
})

test.runIf(true)("only test", ()=> {
    expect(1+1).toBe(2)
})
