import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from "vitest";

function promiseFun(){
    return new Promise((res)=> res("success"))
}


beforeAll(()=> {
    console.log('before All 1')
})
// async
beforeAll(()=> {
    console.log('before All async function')
    return promiseFun()
})

beforeEach(()=> {
    console.log('before each outer function')
})

describe("test group", ()=> {
    beforeEach(()=>console.log("inner before each"));
    test("testing setups", ()=> {
       
        expect(2+2).toBe(4);
        
    })
    afterEach(()=> console.log("inner after each"));

})




afterEach(()=> {
    console.log("after each outer function")
})


// async
afterAll(()=> {
    console.log('After All Async function')
    return promiseFun()
})

afterAll(()=> {
    console.log('After All')
})