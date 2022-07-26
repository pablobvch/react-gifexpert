import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AddCategory } from "../../src/components"
//import { act } from 'react-test-renderer';

describe('Testing AddCategory component', () => { 
    
    test('must change the input value', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole("textbox")
        fireEvent.input(input, {target: {value: "Valorant"}})
        expect(input.value).toBe("Valorant")
    }) 

    test('must call onNewCategory if the input has a value', async () => { 
        const inputValue = "Saitama"
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")//if it is not found, use aria-label in the control definition  <form onSubmit={onSubmit} aria-label="form">
        fireEvent.input(input, {target: {value: inputValue}})
        await waitFor(()=>form.submit(form))
        expect(input.value).toBe("")
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    }) 

    test('cannot call onNewCategory if inputValue is empty', async () => { 
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole("form")

        await waitFor(()=>form.submit(form))
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled()
     })
})