import {test, expect} from "vitest"
// Matchers
test("sample", ()=>{
    expect(2+3).toBe(5)
})

test('object ', ()=> {
    const data = {a:1};
    data['b']=2;
    expect(data).toEqual({a:1, b: 2})
})
//Numbers

//Strings

//Arrays

//Exceptions

// Asynchronous code 
//done()
//resolves()
//rejects()