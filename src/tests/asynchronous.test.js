import { expect, test } from "vitest";

// testing async function
test("testing promise function", ()=> {
    function promiseFun(){
        return new Promise((res, rej)=> {
            return res("success")
        })
    }

    return promiseFun().then(data => expect(data).toBe('success')).catch(err => console.log(err))
})

// testing async/await function 
test("testing async await function", async ()=> {

    function promiseFun(){
        return new Promise((res, rej)=> {
            return rej("error")
        })
    }
    try{
        await promiseFun()

    } catch{ err => expect(err).toBe("error")

    }
})