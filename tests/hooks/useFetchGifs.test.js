import {renderHook, waitFor} from "@testing-library/react"
import {useFetchGifs} from "../../src/hooks/useFetchGifs"

describe('useFetchGifs hook', () => { 
    
    test('Initially, must return initial state', () => { 
        const {result} = renderHook(()=> useFetchGifs("One Punch"))
        const {images, isLoading} = result.current;
        //expect(result.current.images).toStrictEqual([])
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    }) 

    test('Finally, must return an array of images with content and isLoading in false', async () => { 
        const {result} = renderHook(()=> useFetchGifs("One Punch"))
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        )
        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    }) 
})