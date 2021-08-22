// import {jest } from 'jest'

function a(){
    return 4
}

describe("testing",()=>{
    it("1",()=>{
        let mockFn = jest.fn(a).mockReturnValue(3)
        mockFn()
        console.log(mockFn.mock)
        expect(mockFn.mock.results[0].value).toBe(3)
        expect(mockFn).toHaveBeenCalledTimes(1)
    }) 
}) 