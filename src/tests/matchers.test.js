import {test, expect} from "vitest"

// Exact equality
test("sample", ()=>{
    expect(2+3).toBe(5)
})

// object match
test('object matching', ()=> {
    const obj = {a: 1};
    obj['b'] = 2;
    expect(obj).toEqual({a:1, b:2 })
})

// testing opposite matcher 
test('using not matcher', ()=> {
    for(let i=0; i< 5; i++){
        expect(i+1).not.toBe(0)
    }
})


// truthiness 
test("checking truthiness", ()=> {
    const num=0;
    const truthy = true;
    const falsy = false
    var undefinedValue;

    expect(undefinedValue).toBeUndefined();
    expect(num).toBeDefined();
    expect(truthy).toBeTruthy();
    expect(falsy).toBeFalsy();
})

// Numbers & floats 
test("testing numbers and floats", ()=> {
    const num = 4;
    expect(num).toEqual(4);
    expect(num).toBeGreaterThan(3);
    expect(num).toBeLessThanOrEqual(5);
    // float
    const floatNum = 2.4+ 3.4;
    expect(floatNum).toBeCloseTo(5.8)
})

// strings
test("checking with strings", ()=> {
    const str = "The cat on the wall";
    expect(str).toMatch(/cat/)
})

// Arrays 
test("checking with arrays", ()=> {
    const arrOne = ['one', 'two', 'three'];
    expect(arrOne).toContain('two')
})

// Exceptions
test('checking functions', ()=> {
    function getErr(){
        throw new Error("Returns the error")
    };

    expect(()=> getErr()).toThrow("Returns the error");
})


