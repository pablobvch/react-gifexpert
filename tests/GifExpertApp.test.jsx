import {render, screen, fireEvent, waitFor } from "@testing-library/react"
import {GifExpertApp} from "../src/GifExpertApp"

describe('GifExpertApp testing', () => { 
    test('shouldnt insert the same category One Punch twice', async () => { 
        const inputValue = "One Punch"
        const { container } = render(<GifExpertApp/>) 
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")
        fireEvent.input(input, {target: {value: inputValue}})
        await waitFor(()=>form.submit(form))
        const h3s = container.querySelectorAll('h3')
        expect(h3s.length).toBe(1)
    }) 
    test('should insert a new category called Valorant at the begining', async () => { 
        const inputValue = "Valorant"
        const { container } = render(<GifExpertApp/>) 
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")
        fireEvent.input(input, {target: {value: inputValue}})
        await waitFor(()=>form.submit(form))
        const h3s = container.querySelectorAll('h3')
        expect(h3s.length).toBe(2)
        expect(h3s[0].innerHTML).toBe(inputValue)
    }) 
})