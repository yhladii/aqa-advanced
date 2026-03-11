import { getInvalidRequest } from "./api";
import { describe, test, expect } from "@jest/globals";
import { getPostWithHeadersAndParams } from "./api";


//task1

describe('Test invalid URL request',() => {
    test('Correct error message should be returnes', async() => {
    const result = await getInvalidRequest()

    expect(result).toBe('Request failed with response status code 404') })
})

//task2
describe('Test Headers and Params',() => {
    test('Correst headers and params are sent', async() => {
        const config = await getPostWithHeadersAndParams()

        expect(config.headers.Authorization).toBe('Bearer token')
        expect(config.headers.CustomHeader).toBe('Test')
        expect(config.params.userId).toBe(1)
    })
})

