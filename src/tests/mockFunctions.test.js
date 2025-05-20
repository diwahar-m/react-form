import {  expect, test, vitest } from "vitest"

function testFunction(arr, fun){
    for(let i of arr){
        fun(i)
    }
}

const mockFunction = vitest.fn(x => x+ 2);

test("testing mock functions", ()=> {

    testFunction([1,4], mockFunction);

    expect(mockFunction.mock.calls).toHaveLength(2);

    expect(mockFunction.mock.calls[0][0]).toBe(1);

    expect(mockFunction.mock.calls[1][0]).toBe(4);
    // result 
    expect(mockFunction.mock.results[1].value).toBe(6);
})